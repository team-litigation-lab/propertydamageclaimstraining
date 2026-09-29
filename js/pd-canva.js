/* ============================================================
   Canva slides — each day's lesson slides are that day's Canva deck.
   The deck replaces the written Task Overview and topic slides in the day's
   slideshow and is the first thing a day shows; the interactive steps follow:
     🎨 Day N slides → (Day 1: Meet the Claim) → Quick Checks → Skill Builders
     → Trainer Checkpoint → Knowledge Check
   Opening a day goes straight to the deck (the "Before you start" overview is
   under 📋 Objectives), and positions saved under the old, longer slide list
   are moved to the deck once.
   The deck is embedded, never linked: there is no "Open in Canva" link
   anywhere in the course. The embed uses Canva's own embed settings (no
   sandbox): a sandboxed frame loads the first page but its player can't
   turn the pages.
   To change a deck, paste the design's ID and view token from its share link
   (canva.com/design/<ID>/<TOKEN>/view) below.

   Deck pages: once a day's deck is captured from its view link
   (build/capture_canva.cjs) or downloaded from Canva (PDF or PNGs), and
   converted with build/deck_pages.py, its pages are images in slides/dayN/
   (listed in js/deck-pages.js) and each page is its own step in place of the
   embed. Next → / ← Previous, ← →, and a click on the slide turn the pages
   for trainees; in Presenter view Next → turns the slide the room sees and
   shows that page's speaker notes (js/deck-notes/dayN.js). Days without
   pages keep the Canva embed.
   ============================================================ */
(function(){
"use strict";
const PD_CANVA_DECKS = {
  1: { id: "DAGnZmzOT0I", token: "MaqvKhpoKoqL7iFAPVMDDQ" },   // "Property Damage Claims DAY 1" (50 pages)
  2: { id: "DAGnZtsWZN4", token: "4A-sEPwlF7uJHoS3UFH4ag" },   // "Property Damage Claims Day 2" (59)
  3: { id: "DAGnZixNtaM", token: "wfl-hPUxCpERG2cz1UBM0w" },   // "Property Damage Day 3" (34)
  4: { id: "DAGna3Dh7Gs", token: "aToie10h2f6Wb-eNl2b03w" },   // "Property Damage Claims DAY 4" (46)
  5: { id: "DAGnZuCPxiU", token: "V_PGqt3U1OeYHrJY5M_x0w" }    // "Property Damage Claims Day 5" (40)
};
window.PD_CANVA_DECKS = PD_CANVA_DECKS;
const deckFor = (dayId)=> PD_CANVA_DECKS[dayId] || null;
const embedUrl = (deck)=> `https://www.canva.com/design/${encodeURIComponent(deck.id)}/${encodeURIComponent(deck.token)}/view?embed`;
/* The deck's pages as images (js/deck-pages.js, written by build/deck_pages.py), or null. */
const deckPages = (dayId)=>{ const m = (window.PD_DECK_PAGES || {})[dayId]; return m && m.pages > 0 ? m : null; };
const deckSteps = (dayId)=>{ const m = deckPages(dayId); return m ? m.pages : 1; };   // steps the deck takes at the start of the day
const pageSrc = (dayId, n)=>{ const m = deckPages(dayId); return `slides/day${dayId}/${String(n).padStart(2,"0")}.${m.ext||"webp"}?v=${encodeURIComponent(m.v||"1")}`; };
const pageNote = (dayId, n)=> ((window.DECK_NOTES || {})[dayId] || []).find(x=>x && x.page===n) || null;
window.pdDeckPages = deckPages;

const css = document.createElement("style");
css.id = "pd-canva-css";
css.textContent = `
.pd-canva{width:100%;display:flex;flex-direction:column;align-items:center;gap:8px;}
.pd-canva .topic-separator{margin:0;}
.pd-canva-frame{position:relative;width:100%;max-width:calc((clamp(440px,66vh,720px) - 100px) * 16 / 9);aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#1F2440;box-shadow:0 8px 24px -10px rgba(31,36,64,.45);}
.pd-canva-frame::before{content:attr(data-loading);position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#C9CEE6;font-size:14px;font-weight:600;}
.pd-canva-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}
.pd-canva-hint{margin:0;font-size:12.5px;color:var(--ink-soft);text-align:center;}
.lesson-stage #lessonSlideWrap:has(.pd-canva){padding:12px 16px 14px;}
.stage-body:has(.pd-canva){grid-template-columns:minmax(0,1fr) !important;}
.stage-body:has(.pd-canva) .stage-presenter{display:none;}
.lesson-stage:fullscreen .pd-canva-frame{max-width:calc((100vh - 230px) * 16 / 9);}
.lesson-stage:fullscreen .pd-canva-hint{display:none;}
#audienceRoot .pd-canva-frame{max-width:calc((100vh - 120px) * 16 / 9);}
@media(max-width:760px){.pd-canva-frame{max-width:none;}}
/* deck pages as images: one page per step */
.pd-deck, .lesson-stage #lessonSlideWrap > .pd-deck{width:100%;max-width:none;display:flex;flex-direction:column;align-items:center;gap:8px;}
.pd-deck .topic-separator{margin:0;}
.pd-deck-frame{position:relative;width:100%;max-width:calc((clamp(440px,66vh,720px) - 100px) * var(--ar));border-radius:12px;overflow:hidden;background:#1F2440;box-shadow:0 8px 24px -10px rgba(31,36,64,.45);cursor:pointer;user-select:none;-webkit-user-select:none;}
.pd-deck-frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;display:block;-webkit-user-drag:none;}
.pd-deck-nav{position:absolute;top:0;bottom:0;width:22%;display:flex;align-items:center;opacity:0;transition:opacity .15s;}
.pd-deck-nav.prev{left:0;justify-content:flex-start;} .pd-deck-nav.next{right:0;justify-content:flex-end;}
.pd-deck-nav span{width:42px;height:42px;margin:0 12px;border-radius:999px;background:rgba(31,36,64,.62);color:#fff;font-size:24px;line-height:1;display:flex;align-items:center;justify-content:center;}
.pd-deck-frame:hover .pd-deck-nav{opacity:1;}
.pd-deck-cap{margin:0;font-size:12.5px;color:#C9CEE6;text-align:center;}
.lesson-slide:has(.pd-deck){animation:none;}
.lesson-stage #lessonSlideWrap:has(.pd-deck){padding:2px 0 4px;background:transparent;}
.lesson-stage #lessonSlideWrap:has(.pd-deck)::before{display:none;}
.stage-body:has(.pd-deck){grid-template-columns:minmax(0,1fr) !important;}
.stage-body:has(.pd-deck) .stage-presenter{display:none;}
.lesson-stage:fullscreen .pd-deck-frame{max-width:calc((100vh - 200px) * var(--ar));}
.lesson-stage:fullscreen .pd-deck-cap{display:none;}
/* a day's deck is dozens of steps: smaller dots so they stay on one or two rows */
.slide-dots:has(.slide-dot:nth-child(31)){gap:3px;}
.slide-dots:has(.slide-dot:nth-child(31)) .slide-dot{width:6px;height:6px;}
.slide-dots:has(.slide-dot:nth-child(31)) .slide-dot.active{width:16px;}
/* the slides window shared in Meet: the page fills the window */
#audienceRoot .lesson-stage:has(.pd-deck){padding:1.5vh 1.5vw;background:#11142A;}
#audienceRoot .lesson-stage:has(.pd-deck) .slide-dots, #audienceRoot .lesson-stage:has(.pd-deck) .slide-nav, #audienceRoot .lesson-stage:has(.pd-deck) .slide-done-banner, #audienceRoot .pd-deck .topic-separator, #audienceRoot .pd-deck-cap, #audienceRoot .pd-deck-nav{display:none !important;}
#audienceRoot #lessonSlideWrap:has(.pd-deck){display:flex;align-items:center;justify-content:center;padding:0;max-height:none;overflow:hidden;}
#audienceRoot .lesson-stage:has(.pd-deck) .stage-body{height:100%;}
#audienceRoot .pd-deck{height:100%;justify-content:center;}
#audienceRoot .pd-deck-frame{max-width:calc(97vh * var(--ar));border-radius:6px;box-shadow:none;cursor:default;}
@media(max-width:760px){.pd-deck-frame{max-width:none;} .pd-deck-nav{opacity:1;} .pd-deck-nav span{width:34px;height:34px;font-size:20px;margin:0 6px;}}
`;
document.head.appendChild(css);

/* The day's steps: the deck first (its pages, or the embed), in place of the Task Overview and topic slides. */
const __buildDaySlides = window.buildDaySlides;
window.buildDaySlides = function(d){
  if(!d || (!deckFor(d.id) && !deckPages(d.id))) return __buildDaySlides(d);
  const pages = deckPages(d.id);
  const slides = pages ? Array.from({length: pages.pages}, (_,k)=>({type:"deckPage", page:k+1})) : [{type:"canva"}];
  if(d.id===1) slides.push({type:"meetClient"});
  d.lessons.forEach((l,i)=>{ if((d.quickChecks||[]).some(q=>q.afterIndex===i)) slides.push({type:"quickCheck", lessonIndex:i}); });
  if(d.recapVideo) slides.push({type:"video"});
  if(relatedTools(d.id).length) slides.push({type:"practiceLab"});
  if(d.discussionQuestion && trainerInline()) slides.push({type:"discussion"});
  return slides;
};

/* Saved positions ("last-slide", "slide-progress") point into the slide list they were saved under. The
   list changed when the decks came in (the old ~27-step list → the deck first) and changes again when a
   day's deck becomes pages (1 step → one per page). Once per layout (the marker travels with the trainee's
   synced "last-slide"), move each saved position to the same place in the new list; positions from before
   the decks go to the deck, and a day whose Knowledge Check is passed stays fully open. */
const layoutSig = ()=> "deck-v2:" + DAYS.filter(d=>deckFor(d.id) || deckPages(d.id)).map(d=>`${d.id}=${deckSteps(d.id)}`).join(",");
function parseLayout(s){
  if(s==="canva-deck-first") return {};                        // every day's deck was one step (the embed)
  if(typeof s!=="string" || s.indexOf("deck-v2:")!==0) return null;   // from before the decks
  const o = {}; s.slice(8).split(",").forEach(p=>{ const kv = p.split("="); if(kv[0]) o[kv[0]] = (+kv[1]) || 1; }); return o;
}
function migrateSlidePositions(){
  if(typeof state==="undefined" || typeof DAYS==="undefined") return;
  const ls = (state.lastSlide && typeof state.lastSlide==="object") ? state.lastSlide : (state.lastSlide = {});
  const sig = layoutSig(); if(ls.layout===sig) return;
  const prev = parseLayout(ls.layout);
  const sp = (state.slideProgress && typeof state.slideProgress==="object") ? state.slideProgress : (state.slideProgress = {});
  DAYS.forEach(d=>{
    if(!deckFor(d.id) && !deckPages(d.id)) return;
    const done = !!(state.progress && state.progress[d.id] && state.progress[d.id].done), total = buildDaySlides(d).length;
    const from = prev ? (prev[d.id] || 1) : null, to = deckSteps(d.id);
    const map = (i)=> from==null ? 0 : (i < from ? Math.min(i, to-1) : Math.min(total-1, i - from + to));
    if(typeof ls[d.id]==="number") ls[d.id] = map(ls[d.id]);
    if(typeof sp[d.id]==="number") sp[d.id] = done ? total-1 : map(sp[d.id]);
  });
  ls.layout = sig;
  try{ storeSet("last-slide", ls); storeSet("slide-progress", sp); }catch(e){}
}
const __resumeSlideFor = window.resumeSlideFor;
window.resumeSlideFor = function(dayId){ migrateSlidePositions(); return __resumeSlideFor(dayId); };
/* Opening a day shows the deck straight away, not the "Before you start" overview. */
const __goto = window.goto;
window.goto = function(view, id){
  if(view==="day" && (deckFor(id) || deckPages(id))){
    migrateSlidePositions();
    if(!introSeen(id)){ state.introSeen = state.introSeen || {}; state.introSeen[id] = true; try{ storeSet("intro-seen", state.introSeen); }catch(e){} }
  }
  return __goto.apply(this, arguments);
};

const __daySlideTitle = window.daySlideTitle;
window.daySlideTitle = function(d, slide){
  if(slide && slide.type==="canva") return `Day ${d.id} Slides`;
  if(slide && slide.type==="deckPage"){ const n = pageNote(d.id, slide.page); return `Page ${slide.page}` + (n && n.title ? ` · ${n.title}` : ` of ${deckSteps(d.id)}`); }
  return __daySlideTitle(d, slide);
};

const __renderDaySlideContent = window.renderDaySlideContent;
const preloaded = new Map();
function preload(dayId, n){
  const m = deckPages(dayId); if(!m || n < 1 || n > m.pages) return;
  const src = pageSrc(dayId, n); if(preloaded.has(src)) return;
  const im = new Image(); im.decoding = "async"; im.src = src; preloaded.set(src, im);
}
/* A click on the page turns it: the left third goes back, the rest goes on. It goes through the same keys as
   ← →, so the course, Presenter view and the slides window all handle it their own way. */
window.pdDeckClick = function(e){
  const f = e.currentTarget, r = f.getBoundingClientRect(), back = (e.clientX - r.left) < r.width / 3;
  e.preventDefault();
  document.dispatchEvent(new KeyboardEvent("keydown", {key: back ? "ArrowLeft" : "ArrowRight", bubbles:true, cancelable:true}));
};
window.renderDaySlideContent = function(d, slide, idx){
  if(slide && slide.type==="deckPage"){
    const m = deckPages(d.id), n = slide.page, total = m ? m.pages : 0, note = pageNote(d.id, n);
    if(!m) return "";
    setTimeout(()=>{ preload(d.id, n+1); preload(d.id, n+2); preload(d.id, n-1); }, 0);
    const w = m.w || 1920, h = m.h || 1080;
    return `
    <div class="pd-deck">
      <div class="topic-separator">DAY ${d.id} &middot; SLIDES &middot; PAGE ${n} OF ${total}</div>
      <div class="pd-deck-frame" style="--ar:${(w/h).toFixed(5)};aspect-ratio:${w}/${h};" onclick="pdDeckClick(event)" title="Click for the next page (left side: back)">
        <img src="${esc(pageSrc(d.id, n))}" alt="Day ${d.id} slides, page ${n} of ${total}${note && note.title ? ": "+esc(note.title) : ""}" draggable="false" decoding="async" fetchpriority="high">
        ${n > 1 ? `<div class="pd-deck-nav prev" aria-hidden="true"><span>‹</span></div>` : ""}
        <div class="pd-deck-nav next" aria-hidden="true"><span>›</span></div>
      </div>
      <p class="pd-deck-cap">Click the slide or press → for the next page, ← to go back.</p>
    </div>`;
  }
  if(!slide || slide.type!=="canva") return __renderDaySlideContent(d, slide, idx);
  const deck = deckFor(d.id);
  return `
    <div class="pd-canva">
      <div class="topic-separator">DAY ${d.id} &middot; SLIDES</div>
      <div class="pd-canva-frame" data-loading="Loading Day ${d.id} slides…">
        <iframe src="${esc(embedUrl(deck))}" title="Day ${d.id} slides — ${esc(d.title)}" loading="lazy"
          allow="fullscreen" allowfullscreen></iframe>
      </div>
      <p class="pd-canva-hint">Click the slides and use the arrows (or ← →) to go through today's deck. When you've reached the end, press Next.</p>
    </div>`;
};

/* The deck (the embed, or one of its pages) sizes itself to the slide: never split it into "pages" (a split
   would hide it, reload the embed, and make Presenter view spend Next presses on phantom pages). */
const __paginate = window.paginateLessonSlide;
window.paginateLessonSlide = function(){
  const wrap = document.getElementById("lessonSlideWrap");
  if(wrap && wrap.querySelector(".pd-canva, .pd-deck")){
    state.slidePages = 1; state.slidePage = 0;
    try{ updateSlidePageUi(); }catch(e){}
    return;
  }
  return __paginate.apply(this, arguments);
};

/* On the deck, ← → turn Canva's pages (they'd otherwise skip to the next course step): the keys go
   to the deck, and Next moves on. */
const onDeck = ()=> state.view==="day" && state.dayViewMode==="slides" && !!document.querySelector("#lessonSlideWrap .pd-canva iframe");
window.addEventListener("keydown", (e)=>{
  if(!["ArrowRight","ArrowLeft","PageDown","PageUp"].includes(e.key) || !onDeck()) return;
  if((typeof isTyping==="function" && isTyping()) || document.querySelector(".overlay")) return;
  e.preventDefault(); e.stopImmediatePropagation();
  const f = document.querySelector("#lessonSlideWrap .pd-canva iframe"); if(f) f.focus();
  if(!window.__pdDeckKeyHint){ window.__pdDeckKeyHint = true; toast("The arrow keys now turn the slides. Press Next when you're done with the deck."); }
}, true);

/* Audio mode reads a slide and moves on — never past the deck (it can't read Canva slides). */
const __finished = Narrator.finished.bind(Narrator);
Narrator.finished = function(){
  const d = (typeof DAYS!=="undefined") && DAYS.find(x=>x.id===state.dayId);
  const slide = d && buildDaySlides(d)[state.lessonSlide||0];
  if(state.audioMode && state.view==="day" && slide && slide.type==="canva"){
    toast("🎧 Go through today's slides, then press Next — audio mode picks up again on the next step.");
    return;
  }
  return __finished();
};

/* Audio mode on a deck page reads that page's speaker notes; a page without notes stays up for 8 seconds. */
const curDeckPage = ()=>{
  if(state.view!=="day" || state.dayViewMode!=="slides") return null;
  const d = (typeof DAYS!=="undefined") && DAYS.find(x=>x.id===state.dayId), sl = d && buildDaySlides(d)[state.lessonSlide||0];
  return sl && sl.type==="deckPage" ? {d, n: sl.page} : null;
};
const __slideText = Narrator.slideText.bind(Narrator);
Narrator.slideText = function(){ const c = curDeckPage(); if(!c) return __slideText(); const note = pageNote(c.d.id, c.n); return note && note.notes ? String(note.notes) : ""; };
const __play = Narrator.play.bind(Narrator);
Narrator.play = function(){
  const c = curDeckPage();
  if(c && !this.slideText()){
    if(state.audioMode){ const tok = ++this.token; this.playing = false; this.paint(); setTimeout(()=>{ if(tok===this.token) this.finished(); }, 8000); }
    else toast("This page has no speaker notes to read yet.");
    return;
  }
  return __play();
};

/* Presenter view on a deck page without notes: the day's topic scripts, to pick from (the pick starts at the
   topic about as far through the day as the page is through the deck). */
function deckTopicPicker(d, page){
  const ls = d.lessons || [];
  if(!ls.length || typeof window.renderPdScript!=="function") return "";
  state.pvDeckTopic = state.pvDeckTopic || {};
  const key = d.id+":"+page, guess = Math.min(ls.length-1, Math.floor((page-1) / deckSteps(d.id) * ls.length));
  const i = Math.max(0, Math.min(ls.length-1, state.pvDeckTopic[key]!=null ? state.pvDeckTopic[key] : guess));
  return `<div class="pv-topicnav"><select onchange="pdDeckTopic(${d.id}, ${page}, this.value)" title="Pick a topic">${ls.map((l,k)=>`<option value="${k}" ${k===i?"selected":""}>Topic ${k+1} · ${esc(l.h)}</option>`).join("")}</select></div>
    <h3 class="pv-topic-h">${esc(ls[i].h)}</h3>${window.renderPdScript(d, ls[i])}`;
}
window.pdDeckTopic = function(dayId, page, v){
  state.pvDeckTopic = state.pvDeckTopic || {}; state.pvDeckTopic[dayId+":"+page] = +v;
  const d = DAYS.find(x=>x.id===dayId), cu = document.getElementById("pvCues");
  if(d && cu) cu.innerHTML = presenterCues(d, buildDaySlides(d)[state.lessonSlide||0]);
};

/* Presenter view: the trainer's cue for the deck — a page's speaker notes and scenario, or, for the embed,
   today's topics as talking points. */
if(typeof window.presenterCues==="function"){
  const __presenterCues = window.presenterCues;
  window.presenterCues = function(d, slide){
    if(slide && slide.type==="deckPage"){
      const note = pageNote(d.id, slide.page);
      const head = `<h3>Page ${slide.page} of ${deckSteps(d.id)}${note && note.title ? ` · ${esc(note.title)}` : ""}</h3>`;
      if(note && typeof window.renderDeckPage==="function") return head + window.renderDeckPage(d, note);
      return head + `<p class="pv-empty">No speaker notes for this page yet. The day's topic scripts:</p>` + deckTopicPicker(d, slide.page);
    }
    if(!slide || slide.type!=="canva") return __presenterCues(d, slide);
    const topics = (d.lessons||[]).map(l=>`<li>${esc(l.h)}</li>`).join("");
    return `<h3>Day ${d.id} Slides (Canva)</h3>
      <p>Present today's deck: click into it and use its arrows or ← →. Stop on each topic to ask who has seen it on a real claim.</p>
      <p>When you reach the last slide, press <b>Next</b> for the Quick Checks.</p>
      ${topics ? `<b class="cue-sub">Today's topics</b><ul>${topics}</ul>` : ""}`;
  };
}
})();
