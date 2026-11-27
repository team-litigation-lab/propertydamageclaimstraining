// 📋 Compliance and Platform Utilization Monitoring (js/lsh-compliance-monitor.js): in Admin → Trainee Audit → View Detail,
// before the AI-Generated Ranking & Review — 📚 Lesson decks, ✍️ Knowledge Checks passed, 🛠 Skill Builders, 🕘 Last opened and
// ⏱ Last on the platform, each item ✓ or ✗ from what is stored, and 📝 Send Feedback, which opens the ✍ Write feedback box.
// Usage: node .github/scripts/compliance-monitor.cjs [baseUrl]   (with .github/scripts/server.mjs running; needs Playwright)
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:8787/';
const failures = []; const fail = (m) => failures.push(m);
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 950 } })).newPage();
  page.on('pageerror', e => fail(`page error: ${e.message}`));
  try {
    await page.goto(BASE); await page.waitForFunction(() => typeof renderAdminDetail === 'function' && !!window.lshCompliance, null, { timeout: 20000 });
    const id = 'cara-monitor--b112626';
    const r = await page.evaluate(async (id) => {
      const put = (k, v) => fetch('/api/storage/set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: k, value: JSON.stringify(v) }) });
      const ago3h = new Date(Date.now() - 3 * 3600e3).toISOString(), tool = PRACTICE_TOOLS[0];
      await put('trainee:' + id, { id, name: 'Cara Monitor', batch: 'B112626', approved: true, registeredAt: ago3h, lastActive: ago3h });
      await put('progress:' + id, { savedAt: ago3h, data: {
        'day-progress': { 1: { done: true, score: 90 }, 2: { done: false, score: 55 } },
        'practice-progress': { [tool.id]: { runs: 2, bestScore: 80, history: [] } },
        'last-view': { view: 'day', dayId: 2, at: '2026-11-25T09:00:00Z' } } });
      state.isAdmin = true; state.adminData = null; goto('admin');
      for (let i = 0; i < 60 && !(state.adminData || []).some(x => x.id === id); i++) await new Promise(r => setTimeout(r, 300));
      const rec = state.adminData.find(x => x.id === id);
      await loadTraineeWork(id, true);
      const box = document.createElement('div'); box.innerHTML = renderAdminDetail(rec); document.body.appendChild(box);
      const sec = box.querySelector('.ccm'), sc = [...box.querySelectorAll('.sidebar-section-lbl')].find(x => /AI-Generated Ranking/.test(x.textContent));
      const rows = sec ? [...sec.querySelectorAll('tbody tr')].map(tr => [...tr.children].map(c => c.textContent.replace(/\s+/g, ' ').trim())) : [];
      const marks = (i) => sec ? [...sec.querySelectorAll(`tbody tr:nth-child(${i}) .ccm-mk`)].map(b => b.textContent).join('') : '';
      const out = { has: !!sec, beforeScorecard: !!(sec && sc && (sec.compareDocumentPosition(sc) & Node.DOCUMENT_POSITION_FOLLOWING)), rows, days: DAYS.length, tools: PRACTICE_TOOLS.length,
        deck: marks(1), kc: marks(2), lab: marks(3), send: (box.querySelector('.ccm-send') || {}).textContent || '' };
      box.remove(); return out;
    }, id);
    if (!r.has) fail('View Detail should carry the Compliance and Platform Utilization Monitoring section');
    if (!r.beforeScorecard) fail('the section should come before the AI-Generated Ranking & Review');
    const row = (l) => r.rows.find(x => x[0].includes(l)) || [];
    if (row('Lesson decks')[1] !== `1 / ${r.days}` || !r.deck.startsWith('✓✗')) fail(`📚 Lesson decks: Day 1 finished → 1 / ${r.days}: ${JSON.stringify(row('Lesson decks'))} ${r.deck}`);
    if (row('Knowledge Checks')[1] !== `1 / ${r.days}` || !r.kc.startsWith('✓✗')) fail(`✍️ Knowledge Checks: Day 1 passed (90%), Day 2 not (55%) → 1 / ${r.days}: ${JSON.stringify(row('Knowledge Checks'))} ${r.kc}`);
    if (row('Skill Builders')[1] !== `1 / ${r.tools}` || r.lab[0] !== '✓') fail(`🛠 Skill Builders: the first one practiced → 1 / ${r.tools}: ${JSON.stringify(row('Skill Builders'))}`);
    if (row('Last opened')[1] !== 'Day 2') fail(`🕘 Last opened should name Day 2: ${JSON.stringify(row('Last opened'))}`);
    if (!/3 h ago/.test(row('Last on the platform')[1] || '')) fail(`⏱ Last on the platform should say 3 h ago: ${JSON.stringify(row('Last on the platform'))}`);
    if (!/Send Feedback to Cara Monitor/.test(r.send)) fail(`📝 Send Feedback should name the trainee: "${r.send}"`);
  } catch (e) { fail(`threw: ${e.message}`); }
  await browser.close();
  if (failures.length) { console.error('Compliance monitor test FAILED:\n - ' + failures.join('\n - ')); process.exit(1); }
  console.log('Compliance monitor test passed (View Detail: 📚 Lesson decks, ✍️ Knowledge Checks, 🛠 Skill Builders, 🕘 Last opened, ⏱ Last on the platform and 📝 Send Feedback, before the AI-Generated Ranking).');
})();
