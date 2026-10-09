// Server requests: every /api/ request counts toward the Cloudflare account's Worker requests
// (shared with the other LSH sites), so an open page must ask sparingly.
// 1. /api/storage/get-many (worker.js, in secure mode): a trainee gets their own and public records
//    only, an Admin gets every one, every key is read under the course's "pd:" prefix, and more than
//    100 keys are refused.
// 2. In a browser (checks sped up with window.EAPA_POLL): a signed-in trainee's page loads every day's
//    add-on content and activities in one request each, reads their record about once per check, the
//    day's task once per check, checks for a new version rarely, and asks nothing while the tab is in
//    the background (catching up when it's back) or on a quick switch to another tab and back.
//    A server that doesn't answer never signs the trainee out; a revoke still does.
//    The Admin's Trainee Audit and Trainee Feedback read every record in two requests (the list, then get-many).
// Usage: node .github/scripts/requests.cjs [baseUrl]   (with .github/scripts/server.mjs running; needs Playwright)
const { chromium } = require('playwright');
const signIn = require('./sign-in.cjs');   // the name + batch form is gone: trainees arrive from the Portal
const path = require('path'); const { pathToFileURL } = require('url');
const BASE = process.argv[2] || 'http://localhost:8787/';
const failures = []; const fail = (m) => failures.push(m);

async function workerChecks() {
    const worker = (await import(pathToFileURL(path.join(process.cwd(), 'worker.js')).href)).default;
    // The shared KV namespace: this course's records sit under "pd:"; an unprefixed key is another course's.
    const store = new Map([
        ['pd:trainee:ana-cruz--b1', JSON.stringify({ id: 'ana-cruz--b1', name: 'Ana Cruz', batch: 'B1', approved: true })],
        ['pd:trainee:ben-diaz--b1', JSON.stringify({ id: 'ben-diaz--b1', name: 'Ben Diaz', batch: 'B1', approved: true })],
        ['pd:surprise-task-day1', JSON.stringify({ title: 'A task' })],
        ['surprise-task-day2', JSON.stringify({ title: 'Another course\'s task' })]
    ]);
    const env = {
        // PORTAL_ONLY=off so this test can mint a trainee token by name + batch; trainees really come in
        // from the LSH Training Portal (sso.cjs). What's checked here isn't the sign-in.
        MASTER_ADMIN_PASSWORD: 'ci-pass', SESSION_SECRET: 'ci-secret', PORTAL_ONLY: 'off',
        LSH_KV: { get: async (k) => store.has(k) ? store.get(k) : null, put: async (k, v) => store.set(k, v), delete: async (k) => store.delete(k), list: async ({ prefix = '' } = {}) => ({ keys: [...store.keys()].filter(k => k.startsWith(prefix)).map(name => ({ name })), list_complete: true }) }
    };
    const call = async (p, body, token) => {
        const res = await worker.fetch(new Request('http://x' + p, { method: 'POST', headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: 'Bearer ' + token } : {}), body: JSON.stringify(body) }), env, { waitUntil() {} });
        return { status: res.status, body: await res.json().catch(() => null) };
    };
    const t = (await call('/api/auth/trainee', { name: 'Ana Cruz', batch: 'B1' })).body.token;
    const a = (await call('/api/auth/admin', { passphrase: 'ci-pass' })).body.token;
    const keys = ['trainee:ana-cruz--b1', 'trainee:ben-diaz--b1', 'surprise-task-day1', 'surprise-task-day2'];
    const asTrainee = await call('/api/storage/get-many', { keys }, t);
    const v = (asTrainee.body && asTrainee.body.values) || {};
    if (asTrainee.status !== 200 || !v['trainee:ana-cruz--b1'] || !v['surprise-task-day1'] || !('surprise-task-day2' in v)) fail(`get-many as a trainee: ${JSON.stringify(asTrainee)}`);
    if ('trainee:ben-diaz--b1' in v) fail('get-many lets a trainee read another trainee\'s record');
    if (v['surprise-task-day2']) fail('get-many read a key outside the "pd:" prefix (another course\'s record)');
    const asAdmin = await call('/api/storage/get-many', { keys }, a);
    if (!asAdmin.body || !asAdmin.body.values || !asAdmin.body.values['trainee:ben-diaz--b1']) fail(`get-many as an Admin: ${JSON.stringify(asAdmin)}`);
    if ((await call('/api/storage/get-many', { keys }, null)).status !== 401) fail('get-many works without signing in');
    if ((await call('/api/storage/get-many', { keys: Array.from({ length: 101 }, (_, i) => 'k' + i) }, a)).status !== 400) fail('get-many takes more than 100 keys');
}

(async () => {
    await workerChecks();

    const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
    const page = await (await browser.newContext({ viewport: { width: 1360, height: 900 } })).newPage();
    page.on('pageerror', e => fail(`page error: ${e.message}`));
    await page.addInitScript(() => { window.EAPA_POLL = { live: 500, approval: 2000, labReset: 2000, feedback: 4000, admin: 2000, update: 3000, updateConfirm: 500 }; });
    const log = [];
    let refuse = false;   // the server stops answering (a Cloudflare limit: 429)
    await page.route('**/*', async (route) => {
        const req = route.request(), u = new URL(req.url());
        if (u.pathname.startsWith('/api/') || u.pathname === '/version') {
            let key = ''; try { const b = JSON.parse(req.postData() || '{}'); key = b.key || (b.keys ? `[${b.keys.length}] ` + b.keys.join(',') : ''); } catch (e) {}
            log.push({ at: Date.now(), path: u.pathname, key });
            if (refuse) return route.fulfill({ status: 429, contentType: 'text/html', body: '<h1>Error 1027</h1>' });
        }
        return route.continue();
    });
    const since = (t, f) => log.filter(x => x.at >= t && (!f || f(x)));
    const show = (list) => JSON.stringify(list.map(x => x.path + ' ' + x.key.slice(0, 40)));
    await page.goto(BASE, { waitUntil: 'load' }); await page.waitForTimeout(800);
    await signIn(page, 'Req', 'Count', 'B100926');
    const setApproved = (on) => page.evaluate(async (on) => {
        const key = 'trainee:' + state.traineeId;
        const r = await fetch('/api/storage/get', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key }) }).then(r => r.json());
        const rec = JSON.parse(r.value || '{}'); rec.approved = on;
        await fetch('/api/storage/set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key, value: JSON.stringify(rec) }) });
    }, on);
    await setApproved(true);
    let t0 = Date.now();
    await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(3500);
    const me = await page.evaluate(() => 'trainee:' + state.traineeId);
    if (!(await page.evaluate(() => !!state.traineeId && state.view !== 'login'))) fail('the trainee didn\'t get signed in');
    // the page load: every day's add-on content (lessonx, extralessons, extraquiz) and activities in one request each
    const perDay = since(t0, x => x.path === '/api/storage/get' && /^(lessonx|extralessons|extraquiz|activities):day/.test(x.key));
    if (perDay.length) fail(`the page load reads day content one record at a time (${perDay.length} requests): ${show(perDay)}`);
    // the day's task is checked on the dashboard
    await page.evaluate(() => goto('dashboard')); await page.waitForTimeout(300);
    if ((await page.evaluate(() => state.view)) !== 'dashboard') fail('couldn\'t open the dashboard');

    // in view: 8 s of checks (sped up: the trainee's check every 2 s, the update check every 3 s)
    t0 = Date.now(); await page.waitForTimeout(8000);
    const all = since(t0), ticks = 4;
    const tasks = all.filter(x => /surprise-task-day/.test(x.key));
    const taskDays = new Set(all.filter(x => x.path === '/api/storage/get' && /^surprise-task-day/.test(x.key)).map(x => x.key));
    const record = all.filter(x => x.path === '/api/storage/get' && x.key === me);
    const version = all.filter(x => x.path === '/version');
    if (!tasks.length || tasks.length > ticks + 1) fail(`the task check ran ${tasks.length} times in 8 s (expected about ${ticks}): ${show(tasks)}`);
    if (taskDays.size > 1) fail(`the task check reads several days one at a time (${[...taskDays].join(', ')}): they should come in one get-many`);
    if (!record.length || record.length > 2 * ticks + 1) fail(`the trainee's record was read ${record.length} times in 8 s (expected about ${ticks})`);
    if (version.length > 4) fail(`the version was checked ${version.length} times in 8 s (expected 3 or so)`);
    const perCheck = all.length / ticks;
    if (perCheck > 5) fail(`${all.length} requests in 8 s (${perCheck.toFixed(1)} per check): ${show(all)}`);

    // in the background: nothing; back in view: it catches up at once
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' }); document.dispatchEvent(new Event('visibilitychange')); });
    await page.waitForTimeout(200);   // leaving the tab may save unsaved progress straight away
    t0 = Date.now(); await page.waitForTimeout(6000);
    const hidden = since(t0);
    if (hidden.length) fail(`${hidden.length} requests while the tab was in the background: ${show(hidden)}`);
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' }); document.dispatchEvent(new Event('visibilitychange')); });
    t0 = Date.now(); await page.waitForTimeout(800);
    if (!since(t0, x => x.key === me).length) fail(`coming back to the tab didn't check the trainee's record: ${show(since(t0 - 1000))}`);
    // a quick look at another tab (Meet) and back asks nothing: a second tab with the real timings,
    // between its scheduled checks (the first round runs as it opens; the next is a minute away)
    const page2 = await page.context().newPage();
    const log2 = [];
    page2.on('request', r => { const u = new URL(r.url()); if (u.pathname.startsWith('/api/') || u.pathname === '/version') log2.push({ at: Date.now(), path: u.pathname }); });
    page2.on('pageerror', e => fail(`page error (second tab): ${e.message}`));
    await page2.goto(BASE, { waitUntil: 'load' }); await page2.waitForTimeout(22000);   // its first check rounds: 15 s (record, feedback), 20 s (version)
    const flip = (v) => page2.evaluate((v) => { Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => v }); document.dispatchEvent(new Event('visibilitychange')); }, v);
    await flip('hidden'); await page2.waitForTimeout(500);
    t0 = Date.now(); await flip('visible'); await page2.waitForTimeout(1500);
    const flick = log2.filter(x => x.at >= t0);
    if (flick.length) fail(`a quick switch to another tab and back sent ${flick.length} requests: ${JSON.stringify(flick.map(x => x.path))}`);
    await page2.close();

    // the server stops answering: the trainee stays signed in (it was signing them out as "revoked")
    refuse = true; await page.waitForTimeout(5000); refuse = false;
    const still = await page.evaluate(() => ({ id: state.traineeId, view: state.view }));
    if (!still.id || still.view === 'login') fail(`a server that didn't answer signed the trainee out: ${JSON.stringify(still)}`);
    // a real revoke still signs them out
    await setApproved(false); await page.waitForTimeout(3500);
    if ((await page.evaluate(() => state.view)) !== 'login') fail('a revoked trainee wasn\'t signed out');

    // the Admin's Trainee Audit and Trainee Feedback: every record in two requests
    await page.evaluate(async () => {
        const set = (key, value) => fetch('/api/storage/set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key, value: JSON.stringify(value) }) });
        for (let i = 0; i < 6; i++) await set('trainee:ci-' + i + '--x', { id: 'ci-' + i + '--x', name: 'Ci ' + i, batch: 'X', approved: true });
        for (let i = 0; i < 3; i++) await set('tfeedback:ci' + i, { at: new Date(Date.now() - i * 1000).toISOString(), text: 'Feedback ' + i });
        state.isAdmin = true;
        // Open the Admin screen before measuring. The sign-in screen is the Portal gate now
        // (js/portal-gate.js), which sends a signed-in admin on to the Admin screen by itself —
        // that navigation, and the loads it brings, would otherwise land in the counts below.
        goto('admin');
    });
    await page.waitForTimeout(1200);
    t0 = Date.now();
    const n = await page.evaluate(async () => { await loadAdminLedgerQuiet(); return state.adminData.length; });
    const ledger = since(t0, x => x.path.startsWith('/api/storage/'));
    if (n < 6) fail(`the Trainee Audit has ${n} trainees (expected at least 6)`);
    if (ledger.length !== 2) fail(`the Trainee Audit took ${ledger.length} requests (expected 2: the list, then get-many): ${JSON.stringify(ledger.map(x => x.path))}`);
    t0 = Date.now();
    await page.evaluate(async () => { await loadAdminLedger(); });
    if (since(t0, x => x.path === '/api/storage/get').length) fail('opening the Trainee Audit still reads the trainees one at a time');
    t0 = Date.now();
    const fb = await page.evaluate(async () => { await loadTraineeFeedbackAdmin(); return (state.tfbAdmin.items || []).length; });
    const fbReqs = since(t0, x => x.path.startsWith('/api/storage/'));
    if (fb < 3) fail(`Trainee Feedback has ${fb} items (expected at least 3)`);
    if (fbReqs.length !== 2) fail(`Trainee Feedback took ${fbReqs.length} requests (expected 2: the list, then get-many): ${JSON.stringify(fbReqs.map(x => x.path))}`);

    await browser.close();
    if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
    console.log(`Server requests test passed (get-many rules and the "pd:" prefix; a trainee's page: ${all.length} requests in 8 s of sped-up checks, none in the background or on a quick tab switch; a dead server doesn't sign anyone out; the Trainee Audit and Trainee Feedback in 2 requests each).`);
})().catch(e => { console.error(e); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); });
