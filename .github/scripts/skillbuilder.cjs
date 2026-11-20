// A Skill Builder's score is the whole exercise, earned on each part's first check (platform QA 2026-11-19, PD finding 2).
// The first check marks right and wrong without giving the answers; the answers show from the second check, which is practice
// and doesn't raise the score; and one part's score is never the whole Skill Builder's "best".
// Usage: node .github/scripts/skillbuilder.cjs http://localhost:8787/
const { chromium } = require('playwright');
const signIn = require('./sign-in.cjs');
const BASE = process.argv[2] || 'http://localhost:8787/';
const failures = []; const fail = (m) => failures.push(m);
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1360, height: 900 } });
  page.on('pageerror', (e) => fail(`page error: ${e.message}`));
  await page.goto(BASE, { waitUntil: 'load' }); await page.waitForTimeout(800);
  await signIn(page, 'Sky', 'Builder' + String(Date.now()).slice(-6).replace(/\d/g, (d) => 'abcdefghij'[d]), 'B100926');
  await page.waitForFunction(() => window.__pdKit && window.__pdKit.TOOLS && window.__pdKit.TOOLS.pdSetup1, null, { timeout: 15000 });
  // the Claim Setup Challenge's parts, on the page
  await page.evaluate(() => { const box = document.createElement('div'); box.id = 'sb-test'; box.innerHTML = window.__pdKit.TOOLS.pdSetup1().map((p) => p.html).join(''); document.body.appendChild(box); });
  const rows = await page.evaluate(() => window.__pdUI['pdSetup1:flags'].rows.map((r) => r.answer));
  const wrong = (a) => (a === 'OK' ? 'Missing' : 'OK');
  // 1. every call wrong: 0%, and no row says what the right call is
  await page.evaluate((picks) => picks.forEach((v, i) => pdSet('pdSetup1:flags', i, v)), rows.map(wrong));
  await page.evaluate(() => pdCheckFlags('pdSetup1:flags'));
  const why1 = await page.evaluate(() => [...document.querySelectorAll('#sb-test [id^="why_pdSetup1_flags_"]')].map((e) => e.textContent).join(' | '));
  if (/Correct call/.test(why1)) fail(`the first check must not give the answers away: ${why1.slice(0, 200)}`);
  // 2. the right calls, checked again: practice; the part keeps its first check (0)
  await page.evaluate((picks) => picks.forEach((v, i) => pdSet('pdSetup1:flags', i, v)), rows);
  await page.evaluate(() => pdCheckFlags('pdSetup1:flags'));
  let pp = await page.evaluate(() => state.practiceProgress.pdSetup1);
  if (!pp || pp.parts['pdSetup1:flags'] !== 0 || pp.bestScore !== 0) fail(`a second check is practice, not a score: ${JSON.stringify(pp)}`);
  // 3. the checklist right on its first check: 100 for that part, but the Skill Builder is the average of all its graded parts
  const items = await page.evaluate(() => window.__pdUI['pdSetup1:actions'].items.map((it) => !!it.ok));
  await page.evaluate((picks) => picks.forEach((v, i) => pdSet('pdSetup1:actions', i, v)), items);
  await page.evaluate(() => pdCheckList('pdSetup1:actions'));
  pp = await page.evaluate(() => state.practiceProgress.pdSetup1);
  const graded = await page.evaluate(() => Object.keys(window.__pdUI).filter((k) => k.startsWith('pdSetup1:') && ['flags', 'sort', 'check', 'calc', 'ai'].includes(window.__pdUI[k].type)).length);
  if (!pp || pp.parts['pdSetup1:actions'] !== 100 || pp.bestScore !== Math.round(100 / graded) || pp.bestScore >= 100) fail(`one part's 100% is not the whole Skill Builder's best: ${JSON.stringify(pp)} (${graded} graded parts)`);
  // 4. the second check of a part does show the answers (the teaching stays)
  await page.evaluate((picks) => picks.forEach((v, i) => pdSet('pdSetup1:flags', i, v)), rows.map(wrong));
  await page.evaluate(() => pdCheckFlags('pdSetup1:flags'));
  const why3 = await page.evaluate(() => document.querySelector('#sb-test [id="why_pdSetup1_flags_0"]').textContent);
  if (!/Correct call/.test(why3)) fail(`from the second check the answers show: ${why3}`);
  await browser.close();
  if (failures.length) { console.log(`${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
  console.log('Skill Builder scoring test passed (first check counts, no answers on it, the whole exercise is the score).');
})().catch((e) => { console.error(e); process.exit(1); });
