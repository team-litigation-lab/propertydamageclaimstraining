// Single sign-on: the LSH Training Portal is the only way a trainee gets into this program.
//   1. With an admin password set, single sign-on is on whether or not PORTAL_SSO_SECRET is — a name + batch
//      typed at /api/auth/trainee is refused (403 portal-required), so opening this site directly gives a
//      trainee no way in. Only a trainee already signed in on the device can renew their session that way.
//   2. A trainee who opens the program from the Portal is signed in by its signed ticket, with no form.
//   3. With single sign-on on but no PORTAL_SSO_SECRET here, /api/auth/portal says which setting is missing
//      (503 portal-secret-missing) rather than letting it read as an expired link, and /api/auth/status
//      reports portalSecret false so the sign-in screen can tell an administrator.
//   4. PORTAL_ONLY=off is the way back to the old name + batch sign-in (the tests use it).
//   5. An administrator's ticket (an admin signed in on the Portal) signs them in as a trainer, with no second password,
//      and only once: the same ticket again is refused (401 used).
// Usage: node .github/scripts/sso.cjs   (no server, no browser needed)
const path = require('path');
const { pathToFileURL } = require('url');

const failures = [];
const fail = (m) => failures.push(m);
const SECRET = 'portal-secret-shared-with-the-portal';

const b64url = (s) => Buffer.from(s, 'utf8').toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
// A Portal ticket names the program it is for (p, its topic key: the Portal's makeTicket); p: undefined leaves it out.
const PORTAL_TOPIC = 'PROPERTY DAMAGE';
async function ticketFor(payloadObj, secret) {
    const payload = b64url(JSON.stringify(Object.assign({ p: PORTAL_TOPIC }, payloadObj)));
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode('portal-sso:' + secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
    const b = String.fromCharCode(...new Uint8Array(sig));
    return payload + '.' + btoa(b).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

(async () => {
    const worker = (await import(pathToFileURL(path.join(process.cwd(), 'worker.js')).href)).default;
    const makeEnv = (extra) => {
        const store = new Map();
        return Object.assign({
            MASTER_ADMIN_PASSWORD: 'ci-pass', SESSION_SECRET: 'ci-secret',
            LSH_KV: { get: async (k) => store.has(k) ? store.get(k) : null, put: async (k, v) => store.set(k, v), delete: async (k) => store.delete(k), list: async ({ prefix = '' } = {}) => ({ keys: [...store.keys()].filter(k => k.startsWith(prefix)).map(name => ({ name })), list_complete: true }) },
            __store: store
        }, extra);
    };
    const call = async (env, p, body, headers) => {
        const res = await worker.fetch(new Request('http://x' + p, { method: 'POST', headers: Object.assign({ 'Content-Type': 'application/json' }, headers || {}), body: JSON.stringify(body || {}) }), env, { waitUntil() { } });
        return { status: res.status, body: await res.json().catch(() => null) };
    };
    const status = async (env) => (await call(env, '/api/auth/status')).body;

    // 1. single sign-on is on with the admin password alone, and a typed name + batch is refused
    for (const [label, env] of [['without the Portal secret', makeEnv({})], ['with the Portal secret', makeEnv({ PORTAL_SSO_SECRET: SECRET })]]) {
        const st = await status(env);
        if (!st.portalOnly) fail(`${label}: /api/auth/status should report single sign-on on (portalOnly)`);
        const typed = await call(env, '/api/auth/trainee', { name: 'Walk In', batch: 'B100926' });
        if (typed.status !== 403 || !typed.body || typed.body.error !== 'portal-required') {
            fail(`${label}: a name + batch typed on this site should be refused (403 portal-required), got ${JSON.stringify(typed)}`);
        }
    }

    // 2. a trainee opening the program from the Portal is signed in by its ticket
    const env = makeEnv({ PORTAL_SSO_SECRET: SECRET });
    const good = await call(env, '/api/auth/portal', { ticket: await ticketFor({ first: 'Ana', last: 'Cruz', b: 'B100926', exp: Date.now() + 60000 }, SECRET) });
    if (good.status !== 200 || !good.body || !good.body.token) fail(`a Portal ticket should sign the trainee in: ${JSON.stringify(good)}`);
    else {
        if (good.body.id !== 'ana-cruz--b100926') fail(`the Portal ticket should give the Batch ID's record: ${good.body.id}`);
        if (good.body.batch !== 'B100926') fail(`the Batch ID should come back in its one form: ${JSON.stringify(good.body.batch)}`);
    }
    // that trainee can now renew their own session with the name + batch the Portal vouched for
    const renew = await call(env, '/api/auth/trainee', { name: 'Ana Cruz', batch: 'B100926' }, { Authorization: 'Bearer ' + good.body.token });
    if (renew.status !== 200) fail(`a trainee already signed in on the device should be able to renew: ${JSON.stringify(renew)}`);
    // a ticket signed with the wrong secret is refused
    const wrong = await call(env, '/api/auth/portal', { ticket: await ticketFor({ first: 'Ana', last: 'Cruz', b: 'B100926', exp: Date.now() + 60000 }, 'a-different-secret') });
    if (wrong.status !== 401 || !wrong.body || wrong.body.code !== 'signature') fail(`a ticket signed with another secret should be refused: ${JSON.stringify(wrong)}`);
    // an expired ticket is refused
    const old = await call(env, '/api/auth/portal', { ticket: await ticketFor({ first: 'Ana', last: 'Cruz', b: 'B100926', exp: Date.now() - 1000 }, SECRET) });
    if (old.status !== 401) fail(`an expired ticket should be refused: ${JSON.stringify(old)}`);

    // 3. single sign-on on, but this Worker has no Portal secret: say which setting is missing
    const noSecret = makeEnv({});
    const st2 = await status(noSecret);
    if (st2.portalSecret !== false) fail(`/api/auth/status should report portalSecret false when it isn't set: ${JSON.stringify(st2)}`);
    const blocked = await call(noSecret, '/api/auth/portal', { ticket: await ticketFor({ first: 'Ana', last: 'Cruz', b: 'B100926', exp: Date.now() + 60000 }, SECRET) });
    if (blocked.status !== 503 || !blocked.body || blocked.body.code !== 'portal-secret-missing') {
        fail(`without PORTAL_SSO_SECRET the Portal sign-in should name the missing setting (503 portal-secret-missing), got ${JSON.stringify(blocked)}`);
    } else if (!/PORTAL_SSO_SECRET/.test(blocked.body.error || '')) fail('the message should name PORTAL_SSO_SECRET');

    // 4. PORTAL_ONLY=off is the way back
    const off = makeEnv({ PORTAL_ONLY: 'off' });
    if ((await status(off)).portalOnly) fail('PORTAL_ONLY=off should turn single sign-on off');
    const typedOff = await call(off, '/api/auth/trainee', { name: 'Walk In', batch: 'B100926' });
    if (typedOff.status !== 200) fail(`with PORTAL_ONLY=off a name + batch should still sign in: ${JSON.stringify(typedOff)}`);

    // 5. single sign-on for trainers: an administrator's ticket signs them in as a trainer, once
    const aTicket = await ticketFor({ r: 'a', n: 'Coach Ana', exp: Date.now() + 60000 }, SECRET);
    const adminTicket = await call(env, '/api/auth/portal', { ticket: aTicket });
    if (adminTicket.status !== 200 || !adminTicket.body || !adminTicket.body.admin || !adminTicket.body.token) {
        fail(`an administrator's ticket should sign them in as a trainer, got ${JSON.stringify(adminTicket)}`);
    } else {
        // the token is a trainer's: an admin-only call works with it (a trainee's gets 403)
        const asAdmin = await call(env, '/api/storage/delete', { key: 'sso-test-nothing' }, { Authorization: 'Bearer ' + adminTicket.body.token });
        if (asAdmin.status !== 200) fail(`the token from an administrator's ticket isn't a trainer's: ${JSON.stringify(asAdmin)}`);
    }
    const again = await call(env, '/api/auth/portal', { ticket: aTicket });
    if (again.status !== 401 || !again.body || again.body.code !== 'used') fail(`an administrator's ticket should work only once, got ${JSON.stringify(again)}`);

    // 6. 🎯 a Portal ticket names the program it is for (p, this program's topic key) and works once, whoever it is for
    //    (platform QA 2026-11-19, finding 1): a ticket made for another program or a tool is refused, so Program Access on
    //    the Portal stays the one gate (one with no p is still taken: the rollout); and the trainee's full registered name (finding 8) is kept, the ID unchanged.
    {
        const soon = () => Date.now() + 60000;
        const e6 = makeEnv({ PORTAL_SSO_SECRET: SECRET });
        for (const [label, p] of [["another program's", 'SOME OTHER PROGRAM'], ["the Knowledge Base's", 'kb'], ["a course's tool link", 'tool'], ['a blank-audience', '']]) {
            for (const [kind, t] of [['trainee', { first: 'Pat', last: 'Lane', b: 'B100926' }], ['admin', { r: 'a', n: 'Coach Ana' }], ['system', { r: 's' }]]) {
                const res = await call(e6, '/api/auth/portal', { ticket: await ticketFor(Object.assign({}, t, { p, exp: soon() }), SECRET) });
                if (res.status !== 401 || !res.body || res.body.code !== 'audience' || res.body.token) fail(`${label} ${kind} ticket must be refused (401 audience), got ${JSON.stringify(res)}`);
            }
        }
        if ([...e6.__store.keys()].some((k) => /pat-lane/.test(k) && !/^(\w+:)?sso-used:/.test(k))) fail('a refused ticket must not create or approve a trainee record');
        // a ticket with no p (made before the Portal named the program) is still taken, so nobody is locked out mid-rollout
        const np = await call(e6, '/api/auth/portal', { ticket: await ticketFor({ first: 'Pat', last: 'Lane', b: 'B100926', p: undefined, exp: soon() }, SECRET) });
        if (np.status !== 200 || !np.body || !np.body.token) fail(`a ticket with no p should still sign in: ${JSON.stringify(np)}`);
        const ap = await call(e6, '/api/auth/portal', { ticket: await ticketFor({ r: 'a', n: 'Coach Ana', p: undefined, exp: soon() }, SECRET) });
        if (ap.status !== 200 || !ap.body || !ap.body.admin) fail(`a trainer's ticket with no p should still sign in: ${JSON.stringify(ap)}`);
        // SSO_REQUIRE_AUDIENCE=1 (once everything is deployed): a ticket with no p is refused too; this program's own still opens
        {
            const eR = makeEnv({ PORTAL_SSO_SECRET: SECRET, SSO_REQUIRE_AUDIENCE: '1' });
            const noP = await call(eR, '/api/auth/portal', { ticket: await ticketFor({ first: 'Pat', last: 'Lane', b: 'B100926', p: undefined, exp: soon() }, SECRET) });
            if (noP.status !== 401 || !noP.body || noP.body.code !== 'audience' || noP.body.token) fail(`with SSO_REQUIRE_AUDIENCE=1 a ticket with no p is refused: ${JSON.stringify(noP)}`);
            const own = await call(eR, '/api/auth/portal', { ticket: await ticketFor({ first: 'Pat', last: 'Lane', b: 'B100926', exp: soon() }, SECRET) });
            if (own.status !== 200 || !own.body || !own.body.token) fail(`with SSO_REQUIRE_AUDIENCE=1 this program's own ticket still opens: ${JSON.stringify(own)}`);
        }
        // a trainee's own ticket works once, like a trainer's
        const tt = await ticketFor({ first: 'Pat', last: 'Lane', b: 'B100926', p: PORTAL_TOPIC, exp: soon() }, SECRET);
        const first = await call(e6, '/api/auth/portal', { ticket: tt });
        if (first.status !== 200 || !first.body || !first.body.token) fail(`this program's own trainee ticket should sign in: ${JSON.stringify(first)}`);
        const second = await call(e6, '/api/auth/portal', { ticket: tt });
        if (second.status !== 401 || !second.body || second.body.code !== 'used' || second.body.token) fail(`a trainee's ticket should work only once, got ${JSON.stringify(second)}`);
        // the Sign-in check's system ticket works once too
        const st = await ticketFor({ r: 's', exp: soon() }, SECRET);
        const s1 = await call(e6, '/api/auth/portal', { ticket: st }), s2 = await call(e6, '/api/auth/portal', { ticket: st });
        if (s1.status !== 200 || s2.status !== 401) fail(`the Sign-in check's ticket should work once: ${s1.status} then ${s2.status}`);
        // the full registered name is kept as fullName, the ID stays first + last + batch
        const fm = await call(e6, '/api/auth/portal', { ticket: await ticketFor({ first: 'Maria', last: 'Santos', b: 'B100926', full: 'Maria L. Santos', exp: soon() }, SECRET) });
        const fullName = fm.body && (fm.body.fullName || (fm.body.existing && fm.body.existing.fullName));
        if (fm.status !== 200 || fm.body.id !== 'maria-santos--b100926' || fullName !== 'Maria L. Santos') fail(`a ticket's full name should be kept as fullName with the same ID: ${JSON.stringify(fm.body && { id: fm.body.id, fullName })}`);
    }

    // 7. 🔁 a Batch ID changed on the Portal: the trainee keeps their record (platform QA 2026-11-19, PD finding 3)
    {
        const e8 = makeEnv({ PORTAL_SSO_SECRET: SECRET }), soon = () => Date.now() + 60000;
        const first = await call(e8, '/api/auth/portal', { ticket: await ticketFor({ first: 'Mark', last: 'Lee', b: 'B100126', u: 'ML1', exp: soon() }, SECRET) });
        const rec = JSON.parse(e8.__store.get('pd:trainee:mark-lee--b100126'));
        rec.dayProgress = { 1: { done: true, score: 100 } };
        e8.__store.set('pd:trainee:mark-lee--b100126', JSON.stringify(rec));
        const moved = await call(e8, '/api/auth/portal', { ticket: await ticketFor({ first: 'Mark', last: 'Lee', b: 'B110226', u: 'ML1', exp: soon() }, SECRET) });
        const kept = JSON.parse(e8.__store.get('pd:trainee:mark-lee--b100126') || 'null');
        if (first.status !== 200 || moved.status !== 200 || moved.body.id !== 'mark-lee--b100126') fail(`a Batch ID change should keep the trainee's record: ${JSON.stringify(moved.body && moved.body.id)}`);
        if (!kept || kept.batch !== 'B110226' || kept.batchFrom !== 'B100126' || !kept.dayProgress[1].done) fail(`the kept record should carry the new batch and its progress: ${JSON.stringify(kept)}`);
        if (e8.__store.has('pd:trainee:mark-lee--b110226')) fail('no empty record is made under the new batch');
        if (e8.__store.get('pd:trainee-alias:mark-lee--b110226') !== 'mark-lee--b100126') fail('the alias for the new id is kept (the Portal follows it)');
        const renew = await call(e8, '/api/auth/trainee', { name: 'Mark Lee', batch: 'B110226', id: 'mark-lee--b100126' }, { Authorization: 'Bearer ' + moved.body.token });
        if (renew.status !== 200 || renew.body.id !== 'mark-lee--b100126') fail(`the session renews on the kept record: ${JSON.stringify(renew)}`);
        // two other records with the name (two people): nothing moves
        const e9 = makeEnv({ PORTAL_SSO_SECRET: SECRET });
        for (const b of ['B010126', 'B020126']) e9.__store.set(`pd:trainee:sam-ray--${b.toLowerCase()}`, JSON.stringify({ id: `sam-ray--${b.toLowerCase()}`, name: 'Sam Ray', batch: b, approved: true }));
        const two = await call(e9, '/api/auth/portal', { ticket: await ticketFor({ first: 'Sam', last: 'Ray', b: 'B030126', exp: soon() }, SECRET) });
        if (two.status !== 200 || two.body.id !== 'sam-ray--b030126') fail(`with two other same-named records nothing moves: ${JSON.stringify(two.body && two.body.id)}`);
        // (data-safety review 2026-11-19) another person with the same name (another Portal account) never takes the record
        const e10 = makeEnv({ PORTAL_SSO_SECRET: SECRET });
        await call(e10, '/api/auth/portal', { ticket: await ticketFor({ first: 'Maria', last: 'Santos', b: 'B100126', u: 'M1', exp: soon() }, SECRET) });
        const m2 = await call(e10, '/api/auth/portal', { ticket: await ticketFor({ first: 'Maria', last: 'Santos', b: 'B110226', u: 'M2', exp: soon() }, SECRET) });
        if (m2.body.id !== 'maria-santos--b110226' || JSON.parse(e10.__store.get('pd:trainee:maria-santos--b100126')).batch !== 'B100126' || e10.__store.has('pd:trainee-alias:maria-santos--b110226')) fail(`a namesake gets her own record: ${m2.body.id}`);
        // a trainee can't rewrite who their record is
        const recM = JSON.parse(e10.__store.get('pd:trainee:maria-santos--b110226'));
        if (recM.portalUid !== 'M2') fail(`the Portal account id is kept on the record: ${recM.portalUid}`);
        await call(e10, '/api/storage/set', { key: 'trainee:maria-santos--b110226', value: JSON.stringify(Object.assign({}, recM, { name: 'Bob Victim', batch: 'B200000', portalUid: 'X' })) }, { Authorization: 'Bearer ' + m2.body.token });
        const afterM = JSON.parse(e10.__store.get('pd:trainee:maria-santos--b110226'));
        if (afterM.name !== 'Maria Santos' || afterM.batch !== 'B110226' || afterM.portalUid !== 'M2') fail(`who the record is can't be rewritten by the trainee: ${JSON.stringify(afterM)}`);
    }

    // 🔓 signed in until 8 hours with no activity (worker.js SESSION_IDLE_HOURS, js/lsh-session.js): a trainee's and a
    // trainer's sign-in lasts 8 hours and a page in use renews it, so 7 hours away is still signed in and 9 hours away isn't
    // (a trainee's name + batch can't bring it back either). It was 12 hours for a trainer, however busy, and 30 days for a trainee.
    {
        const eI = makeEnv({ PORTAL_SSO_SECRET: SECRET }), realNow = Date.now, later = (h) => { Date.now = () => realNow() + h * 3600e3; };
        const tIn = await call(eI, '/api/auth/portal', { ticket: await ticketFor({ first: 'Ida', last: 'Idle', b: 'B100926', exp: realNow() + 60000 }, SECRET) });
        const aIn = await call(eI, '/api/auth/admin', { passphrase: 'ci-pass' });
        try {
            for (const [who, t0, renewBy] of [['a trainee', tIn.body && tIn.body.token, true], ['a trainer', aIn.body && aIn.body.token, false]]) {
                if (!t0) { fail(`${who} wasn't signed in: ${JSON.stringify(who === 'a trainee' ? tIn : aIn)}`); continue; }
                const left = Number(t0.split('.')[2]) - realNow();
                if (Math.abs(left - 8 * 3600e3) > 60e3) fail(`${who}'s sign-in should last 8 hours from the last activity (it lasts ${(left / 3600e3).toFixed(1)} h)`);
                later(7);
                const r7 = await call(eI, '/api/auth/refresh', {}, { Authorization: 'Bearer ' + t0 });
                if (r7.status !== 200 || !r7.body.token) fail(`${who} 7 hours idle should still be signed in (and renewed): ${JSON.stringify(r7)}`);
                if (renewBy && (await call(eI, '/api/auth/trainee', { name: 'Ida Idle', batch: 'B100926' }, { Authorization: 'Bearer ' + t0 })).status !== 200) fail(`${who} 7 hours idle should still renew by name + batch`);
                const t1 = r7.body && r7.body.token;
                later(7 + 7);
                if (t1 && (await call(eI, '/api/auth/refresh', {}, { Authorization: 'Bearer ' + t1 })).status !== 200) fail(`${who}'s renewed sign-in should last 8 hours from the renewal`);
                later(9);
                const r9 = await call(eI, '/api/auth/refresh', {}, { Authorization: 'Bearer ' + t0 });
                if (r9.status !== 401) fail(`${who} 9 hours idle should be signed out (401): ${JSON.stringify(r9)}`);
                const s9 = await call(eI, '/api/storage/get', { key: 'trainee:ida-idle--b100926' }, { Authorization: 'Bearer ' + t0 });
                if (s9.status !== 401) fail(`${who} 9 hours idle should get nothing (401): ${JSON.stringify(s9)}`);
                if (renewBy) {
                    const n9 = await call(eI, '/api/auth/trainee', { name: 'Ida Idle', batch: 'B100926' }, { Authorization: 'Bearer ' + t0 });
                    if (n9.status !== 403 || n9.body.error !== 'portal-required') fail(`${who} 9 hours idle can't renew by name + batch (back in from the Portal): ${JSON.stringify(n9)}`);
                }
                Date.now = realNow;
            }
        } finally { Date.now = realNow; }
    }

    // 🔓 the page's side (js/lsh-session.js, in <head>): a stored sign-in that has run out (9 hours idle) is dropped before
    // the page reads it, one 7 hours idle is kept and renewed, and a hidden tab asks nothing
    {
      const vm = require('node:vm'), fs = require('node:fs');
      const mkStore = (o) => { const m = new Map(Object.entries(o)); return { get length() { return m.size; }, key: (i) => [...m.keys()][i], getItem: (k) => m.has(k) ? m.get(k) : null, setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k), m }; };
      const tok = (role, h) => `${role}.someone.${Date.now() + h * 3600e3}.${'s'.repeat(43)}`;
      const t7 = tok('t', 1), a9 = tok('a', -1);
      const ls = mkStore({ t: t7, a: a9, other: 'kept' }), ss = mkStore({ old: tok('a', -0.5) });
      const asked = [], set = []; let vis = 'visible', interval = null;
      const sb = { localStorage: ls, sessionStorage: ss, document: { get visibilityState() { return vis; }, addEventListener() {} }, setInterval: (f) => { interval = f; }, setTimeout() {},
        fetch: async (u, o) => { asked.push([u, o.headers.Authorization]); return { ok: true, json: async () => ({ token: 'renewed' }) }; } };
      sb.window = sb; vm.createContext(sb);
      vm.runInContext(fs.readFileSync(path.join(process.cwd(), 'js/lsh-session.js'), 'utf8'), sb);
      const f = fail;
      if (ls.getItem('a') !== null || ss.getItem('old') !== null) f('a stored sign-in that has run out (9 hours idle) should be dropped when the page opens');
      if (ls.getItem('t') !== t7 || ls.getItem('other') !== 'kept') f('a stored sign-in 7 hours idle (and anything else stored) should be kept');
      sb.state = { authToken: t7, adminToken: '' }; sb.setTraineeToken = (t) => { set.push(t); sb.state.authToken = t; }; sb.setAdminToken = () => {};
      vis = 'hidden'; await sb.lshSessionRenew();
      if (asked.length) f('a tab in the background should ask nothing');
      vis = 'visible'; await sb.lshSessionRenew();
      if (asked.length !== 1 || asked[0][0] !== '/api/auth/refresh' || asked[0][1] !== 'Bearer ' + t7 || set[0] !== 'renewed') f(`a sign-in in use should be renewed: ${JSON.stringify({ asked, set })}`);
      sb.state.authToken = tok('t', 8); await sb.lshSessionRenew();
      if (asked.length !== 1) f('a sign-in renewed in the last 10 minutes should not be renewed again');
      if (typeof interval !== 'function') f('the renewal should run on a timer');
    }

    if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
    console.log('Single sign-on: the Portal is the only way a trainee gets in, a typed name + batch is refused, a missing PORTAL_SSO_SECRET says so, and a trainer signed in on the Portal gets in with no second password, once per ticket.');
})().catch(e => { console.error(e); process.exit(1); });
