/* PD — the Training Portal's simulator grades, shown in the course (platform QA 2026-11-19, PD finding 6).
   Day 4's Email Workspace (opened with program=PD), and any other Portal simulator a PD link opens, are kept by the Portal
   in pd:simresults:<id> (simresults:<id> here, under this course's prefix) (its /api/sim-results: { results: [{ simulator, scenario, score, at }], best: { <simulator>:
   { score, count, at } } }); the Worker lets the trainee read it (never write it). The dashboard band shows a "Simulators"
   card: the best score on each simulator, averaged, with each one's best in its tooltip; the Practice page's Email Workspace
   card is marked done from it (js/pd-practice.js). Read once a page load, and again
   when the trainee comes back to the tab (at most every two minutes), so a grade just given shows up. */
(function(){
  "use strict";
  if(typeof renderDashboard !== "function") return;
  const trainee = ()=> !!(state && state.traineeId && !state.isAdmin);
  let at = 0, loading = null;
  function load(){
    if(!trainee() || loading || typeof sharedGet !== "function") return loading;
    at = Date.now();
    loading = sharedGet("simresults:" + state.traineeId).then(v=>{
      state.simResults = v && typeof v === "object" ? v : { best: {} }; loading = null;
      if((state.view === "dashboard" || state.view === "practice") && typeof render === "function") render();
    }).catch(()=>{ state.simResults = { best: {} }; loading = null; });
    return loading;
  }
  window.addEventListener("focus", ()=>{ if(state && state.simResults && Date.now() - at > 120000 && state.view === "dashboard") load(); });
  const esc = (s)=> String(s == null ? "" : s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function card(){
    const r = state.simResults || { best: {} }, sims = Object.entries(r.best || {}).filter(([, b])=> b && typeof b.score === "number");
    const avg = sims.length ? Math.round(sims.reduce((n, [, b])=> n + b.score, 0) / sims.length) : null;
    const tip = sims.length ? sims.map(([k, b])=> `${k}: best ${b.score}%${b.count ? ` (${b.count} time${b.count === 1 ? "" : "s"})` : ""}`).join("\n") : "No Portal simulator grade yet (Day 4's Email Workspace).";
    return `<div class="card stat sim-results-stat" title="${esc(tip)}"><div class="num">${avg === null ? "—" : avg + "%"}</div><div class="lbl">Simulators · ${sims.length} graded</div></div>`;
  }
  const __dash = renderDashboard;
  renderDashboard = function(){
    const html = __dash.apply(this, arguments);
    if(!trainee()) return html;
    if(!state.simResults) load();
    // after the Graded calls card when there is one, else after the band's first card
    if(/graded-calls-stat/.test(html)) return html.replace(/(<div class="card stat graded-calls-stat"[\s\S]*?<\/div><\/div>)/, "$1" + card());
    return html.replace(/(<div class="dash-side-inner">\s*<div class="card stat">[\s\S]*?<\/div><\/div>)/, "$1" + card());
  };
  if(__dash.__band) renderDashboard.__band = true;
  const css = document.createElement("style");
  css.textContent = "@media(min-width:1001px){.dash-side-inner:has(> .graded-calls-stat):has(> .sim-results-stat){grid-template-columns:repeat(6,minmax(0,1fr)) repeat(2,minmax(0,1.6fr));}}";
  document.head.appendChild(css);
  window.pdSimResults = { load };   // (the Practice page asks for it too: its Email Workspace card)
  if(trainee() && state.view === "dashboard") load();
})();
