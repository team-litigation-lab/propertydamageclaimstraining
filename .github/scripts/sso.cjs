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
        const first = await call(e8, '/api/auth/portal', { ticket: await ticketFor({ first: 'Mark', last: 'Lee', b: 'B100126', exp: soon() }, SECRET) });
        const rec = JSON.parse(e8.__store.get('pd:trainee:mark-lee--b100126'));
        rec.dayProgress = { 1: { done: true, score: 100 } };
        e8.__store.set('pd:trainee:mark-lee--b100126', JSON.stringify(rec));
        const moved = await call(e8, '/api/auth/portal', { ticket: await ticketFor({ first: 'Mark', last: 'Lee', b: 'B110226', exp: soon() }, SECRET) });
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
    }

    if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
    console.log('Single sign-on: the Portal is the only way a trainee gets in, a typed name + batch is refused, a missing PORTAL_SSO_SECRET says so, and a trainer signed in on the Portal gets in with no second password, once per ticket.');
})().catch(e => { console.error(e); process.exit(1); });
