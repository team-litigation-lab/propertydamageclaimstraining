/* ============================================================
   Trainer scripts in the EA/PA format — Presenter view, Admin → Trainer
   Cues and the Speaker Notes PDF.
   The scripts are hand-written in js/slide-scripts/dayN.js, one per topic:
   window.SLIDE_SCRIPTS["<day>::<topic title>"].p1 = {why, talk, walk:[…], ask}
     ① The why          the punchline to open with
     ② Talk it through  the idea in plain spoken words
     ③ Walk through it  the points in order: First, Next, Then, Finally
     ④ Ask the room     a question or a "Your turn" for the room
   plus the topic's scenario for the room (its discussion case).
   The day's slides are its Canva deck. Where the deck's own pages have speaker
   notes (js/deck-notes/dayN.js: window.DECK_NOTES[day] = [{page, title, notes,
   scenario}], edited from the deck's notes, with a scenario for every page),
   Presenter view follows the deck page by page; otherwise it shows the topic
   scripts. Next → / ← Previous (and the ← → keys in the presenter tab) move
   through the pages or topics, then on to the next step. The deck itself moves
   in the slides window (click it, then its arrows or ← →).
   Nothing here is generated at run time.
   ============================================================ */
(function(){
"use strict";
const scriptFor = (d, l)=> (((window.SLIDE_SCRIPTS || {})[`${d.id}::${l.h}`]) || {}).p1 || null;

const css = document.createElement("style");
css.id = "pd-scripts-css";
css.textContent = `
.script-row p{white-space:pre-line;}
.pv-topicnav{display:flex;gap:6px;align-items:center;margin:8px 0 4px;}
.pv-topicnav select{flex:1;min-width:0;font:inherit;font-size:12.5px;padding:5px 8px;border:1px solid var(--line);border-radius:8px;background:#fff;}
.pv-topicnav button{flex:0 0 auto;}
.pv-topic-h{margin:10px 0 2px;font-size:15px;color:var(--navy);}
.pv-topic-k{font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--orange-deep);}
.pn-hint{font-size:12.5px;color:var(--ink-soft);margin:4px 0 0;}
`;
document.head.appendChild(css);

/* One topic's script, laid out like EA/PA's "🎙 Script — read aloud". */
function renderPdScript(d, l, where){
  const s = scriptFor(d, l);
  const row = (k, v)=> v ? `<div class="script-row"><b>${k}</b><p>${esc(v)}</p></div>` : "";
  const scen = (l.fourPart && l.fourPart.discussionCase) || "";
  if(!s) return __renderPresenterNote(d, l, 1);
  return `<div class="pn">
    ${l.trainerCue ? `<div class="pn-on"><b>Trainer note</b><p>${esc(l.trainerCue)}</p></div>` : ""}
    <div class="script-block"><div class="script-head"><span>🎙 Script — read aloud${where ? ` · ${esc(where)}` : ""}</span></div>
      ${row("① The why", s.why)}
      ${row("② Talk it through", s.talk)}
      ${row("③ Walk through it", (s.walk||[]).join("\n"))}
      ${row(/^your turn/i.test(s.ask||"") ? "④ Your turn" : "④ Ask the room", s.ask)}
    </div>
    ${scen ? `<div class="pn-scen"><b>🎬 Scenario</b><p>${esc(scen)}</p></div>` : ""}
  </div>`;
}
window.renderPdScript = renderPdScript;

/* Admin → Trainer Cues: one script per topic (the topic is one part of the Canva deck, not two slides). */
const __renderPresenterNote = window.renderPresenterNote;
window.renderPresenterNote = function(d, l, part){
  if(!scriptFor(d, l)) return __renderPresenterNote.apply(this, arguments);
  return part===2 ? "" : renderPdScript(d, l);
};
const __slideLabel = window.slideLabel;
window.slideLabel = function(d, i){
  const l = d && d.lessons && d.lessons[i];
  if(l && scriptFor(d, l)) return `Canva deck · topic ${i+1} of ${d.lessons.length}`;
  return __slideLabel.apply(this, arguments);
};
if(typeof DAYS!=="undefined") DAYS.forEach(d=>(d.lessons||[]).forEach(l=>{ if(scriptFor(d, l)) l.singleSlide = true; }));

/* Speaker Notes PDF, in the EA/PA layout. */
const __buildDayScriptLines = window.buildDayScriptLines;
window.buildDayScriptLines = function(d){
  const pages = (window.pdDeckNotes && window.pdDeckNotes(d)) || null;
  if(pages){
    const lines = [`## Day ${d.id} — ${d.title}: Trainer Speaker Notes`,
      `The day's slides are the Day ${d.id} Canva deck: speaker notes and a scenario for every page.`];
    pages.forEach(pg=>{
      lines.push(`## Page ${String(pg.page).padStart(2,"0")}. ${pg.title||""}`);
      lines.push("SPEAKER NOTES:"); lines.push(pg.notes||"");
      if(pg.scenario) lines.push(`SCENARIO: ${pg.scenario}`);
      lines.push("---");
    });
    const orig = __buildDayScriptLines(d), at = orig.findIndex(x=>/^## End-of-Day Discussion/.test(x));
    return at >= 0 ? lines.concat(orig.slice(at)) : lines;
  }
  if(!(d.lessons||[]).some(l=>scriptFor(d, l))) return __buildDayScriptLines(d);
  const lines = [`## Day ${d.id} — ${d.title}: Trainer Speaker Notes`,
    `The day's slides are the Day ${d.id} Canva deck. One script per topic, in the order the deck covers them.`];
  d.lessons.forEach((l,i)=>{
    const s = scriptFor(d, l);
    lines.push(`## ${String(i+1).padStart(2,"0")}. ${l.h}`);
    if(!s){ lines.push("(No script written for this topic yet.)"); lines.push("---"); return; }
    lines.push(`THE WHY: ${s.why}`);
    lines.push("TALK IT THROUGH:"); lines.push(s.talk);
    lines.push("WALK THROUGH IT:"); (s.walk||[]).forEach(x=>lines.push(x));
    lines.push(`${/^your turn/i.test(s.ask||"") ? "YOUR TURN" : "ASK THE ROOM"}: ${String(s.ask||"").replace(/^your turn:\s*/i, "")}`);
    const scen = l.fourPart && l.fourPart.discussionCase; if(scen) lines.push(`SCENARIO: ${scen}`);
    lines.push("---");
  });
  // the end-of-day discussion, as before
  const orig = __buildDayScriptLines(d), at = orig.findIndex(x=>/^## End-of-Day Discussion/.test(x));
  return at >= 0 ? lines.concat(orig.slice(at)) : lines;
};

/* ---------- Presenter view on the deck step ---------- */
const deckNotes = (d)=>{ const n = (window.DECK_NOTES || {})[d.id]; return Array.isArray(n) && n.length ? n : null; };
window.pdDeckNotes = deckNotes;
function renderDeckPage(d, pg){
  return `<div class="pn">
    <div class="script-block"><div class="script-head"><span>🎙 Speaker notes — read aloud</span></div>
      <div class="script-row"><p>${esc(pg.notes||"")}</p></div>
    </div>
    ${pg.scenario ? `<div class="pn-scen"><b>🎬 Scenario</b><p>${esc(pg.scenario)}</p></div>` : ""}
  </div>`;
}
window.renderDeckPage = renderDeckPage;
/* What the deck step steps through: the deck's pages when they have notes, else the day's topics. */
function cueItems(d){
  const pages = deckNotes(d);
  if(pages) return {kind:"page", list: pages.map(pg=>({label:`Page ${pg.page}`, title: pg.title||"", html: ()=>renderDeckPage(d, pg)}))};
  if(topics(d).some(l=>scriptFor(d, l))) return {kind:"topic", list: topics(d).map((l,k)=>({label:`Topic ${k+1}`, title: l.h, html: ()=>renderPdScript(d, l)}))};
  return null;
}
const topics = (d)=> d.lessons || [];
function topicIdx(d){ state.pvTopic = state.pvTopic || {}; const it = cueItems(d), n = it ? it.list.length : 1; return Math.max(0, Math.min(n-1, state.pvTopic[d.id]||0)); }
function repaintCues(d){
  const slide = buildDaySlides(d)[state.lessonSlide||0];
  const cu = document.getElementById("pvCues"); if(cu){ cu.innerHTML = presenterCues(d, slide); if(cu.parentElement) cu.parentElement.scrollTop = 0; }
  const nx = document.getElementById("pvNext"); if(nx) nx.innerHTML = presenterNextText(d);
}
function pdScriptTopic(dir, to){
  const d = DAYS.find(x=>x.id===state.dayId); if(!d) return;
  const it = cueItems(d); if(!it) return;
  state.pvTopic = state.pvTopic || {};
  state.pvTopic[d.id] = Math.max(0, Math.min(it.list.length-1, to!=null ? +to : topicIdx(d) + dir));
  repaintCues(d);
}
window.pdScriptTopic = pdScriptTopic;

const __presenterCues = window.presenterCues;
window.presenterCues = function(d, slide){
  const it = slide && slide.type==="canva" ? cueItems(d) : null;
  if(!it) return __presenterCues(d, slide);
  const ls = it.list, i = topicIdx(d), cur = ls[i], what = it.kind==="page" ? "page" : "topic";
  return `<h3>Day ${d.id} Slides (Canva)</h3>
    <p class="pn-hint">Move the deck in the slides window: click it, then use its arrows or ← →. Move these notes with <b>Next →</b> / <b>← Previous</b> (or ← → here), one ${what} at a time; after the last ${what}, Next goes on to the next step.</p>
    <div class="pv-topicnav">
      <button class="btn btn-ghost btn-sm" onclick="pdScriptTopic(-1)" ${i===0?"disabled":""} title="Previous ${what}">‹</button>
      <select onchange="pdScriptTopic(0, this.value)" title="Jump to a ${what}">${ls.map((x,k)=>`<option value="${k}" ${k===i?"selected":""}>${esc(x.label)} · ${esc(x.title)}</option>`).join("")}</select>
      <button class="btn btn-ghost btn-sm" onclick="pdScriptTopic(1)" ${i===ls.length-1?"disabled":""} title="Next ${what}">›</button>
    </div>
    <div class="pv-topic-k">${esc(cur.label)} of ${ls.length}</div>
    <h3 class="pv-topic-h">${esc(cur.title)}</h3>
    ${cur.html()}`;
};

/* Next → / ← Previous (buttons, keys, the slides window) step through the pages or topics on the deck, then move on. */
const __presenterStep = window.presenterStep;
window.presenterStep = function(dir){
  const d = DAYS.find(x=>x.id===state.dayId);
  if(!d) return __presenterStep(dir);
  const slides = buildDaySlides(d), before = state.lessonSlide||0, cur = slides[before], it = cueItems(d), n = it ? it.list.length : 0;
  if(state.presenting && cur && cur.type==="canva" && n){
    const i = topicIdx(d);
    if(dir>0 && i<n-1){ pdScriptTopic(1); return; }
    if(dir<0 && i>0){ pdScriptTopic(-1); return; }
  }
  const r = __presenterStep(dir);
  const after = state.lessonSlide||0, now = slides[after];
  if(after!==before && now && now.type==="canva" && n){ state.pvTopic = state.pvTopic || {}; state.pvTopic[d.id] = dir>0 ? 0 : n-1; repaintCues(d); }
  return r;
};
const __presenterNextText = window.presenterNextText;
window.presenterNextText = function(d){
  const cur = buildDaySlides(d)[state.lessonSlide||0], it = cur && cur.type==="canva" ? cueItems(d) : null;
  if(it){
    const i = topicIdx(d);
    if(i < it.list.length-1){ const nx = it.list[i+1]; return `${esc(nx.label)} of ${it.list.length}: ${esc(nx.title)}`; }
  }
  return __presenterNextText(d);
};

/* Admin → Trainer Cues: the deck's pages first (when the day has them), then the topic scripts for reference. */
const __renderAdminTrainerCues = window.renderAdminTrainerCues;
window.renderAdminTrainerCues = function(){
  const html = __renderAdminTrainerCues.apply(this, arguments);
  const d = DAYS.find(x=>x.id===(state.cuesDay||1)) || DAYS[0], pages = d && deckNotes(d);
  const marker = '<div class="card" style="padding:6px 0;margin-bottom:18px;">';
  if(!pages || html.indexOf(marker) < 0) return html;
  const deck = `<h3 style="color:var(--navy);font-size:15px;margin:14px 0 8px;">🎨 Day ${d.id} deck: speaker notes and a scenario for every page (${pages.length} pages)</h3>
    <div class="card" style="padding:6px 0;margin-bottom:18px;">${pages.map((pg,k)=>`
      <details class="cue-item" ${k===0?"open":""}>
        <summary><span class="cue-num">${String(pg.page).padStart(2,"0")}</span>${esc(pg.title||"")}<span class="cue-steps">Page ${pg.page} of ${pages.length}</span></summary>
        <div class="cue-body">${renderDeckPage(d, pg)}</div>
      </details>`).join("")}</div>
    <h3 style="color:var(--navy);font-size:15px;margin:14px 0 8px;">📚 Topic scripts (the day's topics, for reference)</h3>`;
  return html.replace(marker, deck + marker);
};
})();
