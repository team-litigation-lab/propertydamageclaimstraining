// "Their work this day" (Admin → Trainee Audit → View Detail → Day-by-Day Feedback): the standard LSH "why this score"
// table — one row per scored activity, with the score, 🧾 Why this score, ⭐ What you did great, ❌ What was wrong and
// 💡 What could have been done better, filled from the grader's notes in the work log; a score saved without notes says so.
// Usage: node .github/scripts/score-table.cjs [baseUrl] [screenshot.png]   (with .github/scripts/server.mjs running; needs Playwright)
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:8787/';
const SHOT = process.argv[3] || '';
const failures = []; const fail = (m) => failures.push(m);
const HEADS = ['Activity', 'Score', '🧾 Why this score', '⭐ What you did great', '❌ What was wrong', '💡 What could have been done better'];
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 950 } })).newPage();
  page.on('pageerror', e => fail(`page error: ${e.message}`));
  try {
    await page.goto(BASE); await page.waitForFunction(() => typeof renderFeedbackAdmin === 'function' && typeof dayScoreTable === 'function', null, { timeout: 20000 });
    const id = 'sam-scores--b112626';
    const r = await page.evaluate(async (id) => {
      const put = (k, v) => fetch('/api/storage/set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: k, value: JSON.stringify(v) }) });
      const ago = (h) => new Date(Date.now() - h * 3600e3).toISOString(), tool = relatedTools(1)[0], q = DAYS[0].quiz || [];
      await put('trainee:' + id, { id, name: 'Sam Scores', batch: 'B112626', approved: true, registeredAt: ago(30), lastActive: ago(1) });
      await put('progress:' + id, { savedAt: ago(1), data: {
        'day-progress': { 1: { done: true, score: 80, surpriseTaskScore: 50, history: [{ score: 60, passed: false }, { score: 80, passed: true }] } },
        'practice-progress': { [tool.id]: { runs: 3, bestScore: 88, history: [{ score: 62 }, { score: 88 }, { score: 74 }] } },
        'quick-check-answers': { '1_0': { checked: true, correct: true }, '1_1': { checked: true, correct: false }, '1_2': { checked: true, correct: true } },
        'slide-progress': { 1: 40 },
        'work-log': [
          { kind: 'quiz', dayId: 1, label: 'Day 1 Knowledge Check', score: 80, correct: 12, total: 15, missed: [(q[2] || {}).q || 'Which form starts the claim?', (q[5] || {}).q || 'Who calls the claimant first?'], at: ago(20) },
          { kind: 'lab', dayId: 1, toolId: tool.id, label: tool.title, score: 62, tier: 'Not Yet — Keep Building', at: ago(26) },
          { kind: 'lab', dayId: 1, toolId: tool.id, label: tool.title, score: 88, tier: 'Executive Lead', at: ago(22),
            strengths: ['Logged the date, time and location of loss exactly as the claimant gave them.', 'Confirmed coverage before discussing the rental.'],
            gaps: ['Did not ask whether anyone was hurt before moving on to the vehicle damage.'],
            growth: ['Open every first notice of loss with the injury question, then the damage.'],
            subs: { accuracy: 91, presence: 87, risk: 85, efficiency: 80 }, excerpt: 'Hi Angela, thanks for calling in the loss on your 2019 Camry...' },
          { kind: 'task', dayId: 1, label: 'Random Task · Day 1', score: 100, tier: 'Executive Lead', at: ago(21) },
          { kind: 'task', dayId: 1, label: 'Random Task · Day 1 (missed)', score: 0, at: ago(19) },
          { kind: 'roleplay', dayId: 1, label: 'Roleplay — Upset claimant at the tow yard', score: 72, tier: 'Proficient Assistant', at: ago(18),
            strengths: ['Stayed calm and acknowledged the frustration first.'], gaps: ['Promised a release time without checking with the yard.'],
            subs: { bluf: 80, risk: 60, composure: 84, act: 64 } }
        ] } });
      state.isAdmin = true; state.adminData = null; goto('admin');
      for (let i = 0; i < 60 && !(state.adminData || []).some(x => x.id === id); i++) await new Promise(r => setTimeout(r, 300));
      const rec = state.adminData.find(x => x.id === id);
      await loadTraineeWork(id, true);
      const box = document.createElement('div'); box.id = 'pdstTestBox'; box.style.cssText = 'position:relative;z-index:100000;padding:16px;background:#F8F9FC;max-width:1180px;';
      box.innerHTML = renderFeedbackAdmin(rec); document.body.prepend(box);
      const day1 = box.querySelector('details.fb-day'); if (day1) day1.open = true;
      const t = day1 && day1.querySelector('table.pdst-t');
      const heads = t ? [...t.querySelectorAll('thead th')].map(x => x.textContent.trim()) : [];
      const rows = t ? [...t.querySelectorAll('tbody tr')].map(tr => [...tr.children].map(c => c.textContent.replace(/\s+/g, ' ').trim())) : [];
      const th = t && t.querySelector('tbody th'), hd = t && t.querySelector('thead th');
      const sw = t && t.closest('.pdst-sw');
      return { has: !!t, heads, rows, tool: tool.title, bullets: !!(day1 && day1.querySelector('.fb-evidence')),
        thBg: th ? getComputedStyle(th).backgroundColor : '', thColor: th ? getComputedStyle(th).color : '',
        hdBg: hd ? getComputedStyle(hd).backgroundColor : '', scroll: sw ? getComputedStyle(sw).overflowX : '',
        empty: [...(t ? t.querySelectorAll('tbody td') : [])].filter(c => !c.textContent.trim()).length };
    }, id);
    if (!r.has) fail('Day 1 in Day-by-Day Feedback should show the score table');
    if (r.bullets) fail('the old bullet list ("Their work this day") should be gone');
    if (JSON.stringify(r.heads) !== JSON.stringify(HEADS)) fail(`column headings should be ${JSON.stringify(HEADS)}: ${JSON.stringify(r.heads)}`);
    if (r.hdBg !== 'rgb(38, 43, 69)') fail(`header row should be navy: ${r.hdBg}`);
    if (r.thBg !== 'rgb(255, 255, 255)' || r.thColor === 'rgb(255, 255, 255)') fail(`the Activity column should be white with dark text: ${r.thBg} / ${r.thColor}`);
    if (r.scroll !== 'auto') fail(`the table should sit in a horizontally scrollable wrapper: ${r.scroll}`);
    if (r.empty) fail(`${r.empty} cell(s) left blank`);
    const row = (l) => r.rows.find(x => x[0].startsWith(l)) || [];
    const kc = row('Knowledge Check');
    if (kc[1] !== '80%' || !/Best score of 2 attempts \(60%, 80%\)/.test(kc[2]) || !/12 of 15 questions right/.test(kc[2]) || !/Missed:/.test(kc[4]) || !/retake the Knowledge Check/.test(kc[5])) fail(`Knowledge Check row: ${JSON.stringify(kc)}`);
    const qc = row('Quick Checks');
    if (qc[1] !== '67%' || !/2 of 3 Quick Checks/.test(qc[2]) || !/1 Quick Check answered wrong/.test(qc[4])) fail(`Quick Checks row: ${JSON.stringify(qc)}`);
    const lab = row(r.tool);
    if (lab[1] !== '88%' || !/Best of 3 runs \(62%, 88%, 74%\)/.test(lab[2]) || !/Graded Executive Lead/.test(lab[2]) || !/By area: Accuracy 91%/.test(lab[2])
      || !/Confirmed coverage/.test(lab[3]) || !/anyone was hurt/.test(lab[4]) || !/injury question/.test(lab[5]) || !/Their answer/.test(lab[0])) fail(`Skill Builder row (grader's notes): ${JSON.stringify(lab)}`);
    const rp = row('Upset claimant');
    if (rp[1] !== '72%' || !/Live Roleplay/.test(rp[0]) || !/Stayed calm/.test(rp[3]) || !/release time/.test(rp[4]) || !/then run it again/.test(rp[5])) fail(`Roleplay row: ${JSON.stringify(rp)}`);
    const tk = row('Random task');
    if (tk[1] !== '50%' || !/Average of 2 random tasks \(100%, 0%\)/.test(tk[2]) || !/1 task missed/.test(tk[4])) fail(`Random task row: ${JSON.stringify(tk)}`);
    if (SHOT) { const el = await page.$('#pdstTestBox details.fb-day'); await el.screenshot({ path: SHOT }); }
    // a score saved without the grader's notes is explained from what was saved, not left blank
    const bare = await page.evaluate(() => {
      const tool = relatedTools(2)[0], ev = { d: DAYS[1], dp: { score: 100, history: [{ score: 100 }] }, log: [], qc: [], tools: [tool], pp: { [tool.id]: { runs: 1, bestScore: 70, history: [{ score: 70 }] } }, drafts: '', slides: 3, totalSlides: 10 };
      const box = document.createElement('div'); box.innerHTML = dayScoreTable({}, { snap: { 'work-log': [] } }, ev);
      return [...box.querySelectorAll('tbody tr')].map(tr => [...tr.children].map(c => c.textContent.replace(/\s+/g, ' ').trim()));
    });
    const b = bare.find(x => x[0].includes('Skill Builder')) || [];
    if (!/30% of the points were lost/.test(b[4] || '') || !/wasn't recorded/.test(b[4] || '') || !/Run it again/.test(b[5] || '')) fail(`a Skill Builder score without notes should say the details weren't recorded: ${JSON.stringify(b)}`);
    const k2 = bare.find(x => x[0].startsWith('Knowledge Check')) || [];
    if (k2[4] !== 'Nothing — full marks.') fail(`a 100% Knowledge Check should read "Nothing — full marks.": ${JSON.stringify(k2)}`);
  } catch (e) { fail(`threw: ${e.message}`); }
  await browser.close();
  if (failures.length) { console.error('Score table test FAILED:\n - ' + failures.join('\n - ')); process.exit(1); }
  console.log('Score table test passed (Day-by-Day Feedback → "Their work this day": one row per scored activity, the six standard columns, grader notes mapped, no blank cells).');
})();
