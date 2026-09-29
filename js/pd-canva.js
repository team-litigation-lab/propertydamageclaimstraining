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
   anywhere in the course, and the embed runs sandboxed without pop-ups or
   top-level navigation, so Canva's own links inside it can't open either.
   To change a deck, paste the design's ID and view token from its share link
   (canva.com/design/<ID>/<TOKEN>/view) below.
   ============================================================ */
(function(){
"use strict";
const PD_CANVA_DECKS = {
  1: { id: "DAGnZtsWZN4", token: "4A-sEPwlF7uJHoS3UFH4ag" },
  2: { id: "DAGnZmzOT0I", token: "MaqvKhpoKoqL7iFAPVMDDQ" },
  3: { id: "DAGnZixNtaM", token: "wfl-hPUxCpERG2cz1UBM0w" },
  4: { id: "DAGna3Dh7Gs", token: "aToie10h2f6Wb-eNl2b03w" },
  5: { id: "DAGnZuCPxiU", token: "V_PGqt3U1OeYHrJY5M_x0w" }
};
window.PD_CANVA_DECKS = PD_CANVA_DECKS;
const deckFor = (dayId)=> PD_CANVA_DECKS[dayId] || null;
const embedUrl = (deck)=> `https://www.canva.com/design/${encodeURIComponent(deck.id)}/${encodeURIComponent(deck.token)}/view?embed`;

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
`;
document.head.appendChild(css);

/* The day's steps: the deck first, in place of the Task Overview and topic slides. */
const __buildDaySlides = window.buildDaySlides;
window.buildDaySlides = function(d){
  if(!d || !deckFor(d.id)) return __buildDaySlides(d);
  const slides = [{type:"canva"}];
  if(d.id===1) slides.push({type:"meetClient"});
  d.lessons.forEach((l,i)=>{ if((d.quickChecks||[]).some(q=>q.afterIndex===i)) slides.push({type:"quickCheck", lessonIndex:i}); });
  if(d.recapVideo) slides.push({type:"video"});
  if(relatedTools(d.id).length) slides.push({type:"practiceLab"});
  if(d.discussionQuestion && trainerInline()) slides.push({type:"discussion"});
  return slides;
};

/* Saved positions ("last-slide", "slide-progress") from before the decks point into the old,
   ~27-step list, which would drop a returning trainee on the last step, past the deck. Once per
   trainee (the marker travels with their synced "last-slide"), move them to the deck; a day whose
   Knowledge Check is passed stays fully open. */
const SLIDE_LAYOUT = "canva-deck-first";
function migrateSlidePositions(){
  if(typeof state==="undefined" || typeof DAYS==="undefined") return;
  const ls = (state.lastSlide && typeof state.lastSlide==="object") ? state.lastSlide : (state.lastSlide = {});
  if(ls.layout===SLIDE_LAYOUT) return;
  const sp = (state.slideProgress && typeof state.slideProgress==="object") ? state.slideProgress : (state.slideProgress = {});
  DAYS.forEach(d=>{
    if(!deckFor(d.id)) return;
    const done = !!(state.progress && state.progress[d.id] && state.progress[d.id].done);
    if(typeof ls[d.id]==="number") ls[d.id] = 0;
    if(typeof sp[d.id]==="number") sp[d.id] = done ? buildDaySlides(d).length-1 : 0;
  });
  ls.layout = SLIDE_LAYOUT;
  try{ storeSet("last-slide", ls); storeSet("slide-progress", sp); }catch(e){}
}
const __resumeSlideFor = window.resumeSlideFor;
window.resumeSlideFor = function(dayId){ migrateSlidePositions(); return __resumeSlideFor(dayId); };
/* Opening a day shows the deck straight away, not the "Before you start" overview. */
const __goto = window.goto;
window.goto = function(view, id){
  if(view==="day" && deckFor(id)){
    migrateSlidePositions();
    if(!introSeen(id)){ state.introSeen = state.introSeen || {}; state.introSeen[id] = true; try{ storeSet("intro-seen", state.introSeen); }catch(e){} }
  }
  return __goto.apply(this, arguments);
};

const __daySlideTitle = window.daySlideTitle;
window.daySlideTitle = function(d, slide){
  if(slide && slide.type==="canva") return `Day ${d.id} Slides`;
  return __daySlideTitle(d, slide);
};

const __renderDaySlideContent = window.renderDaySlideContent;
window.renderDaySlideContent = function(d, slide, idx){
  if(!slide || slide.type!=="canva") return __renderDaySlideContent(d, slide, idx);
  const deck = deckFor(d.id);
  return `
    <div class="pd-canva">
      <div class="topic-separator">DAY ${d.id} &middot; SLIDES</div>
      <div class="pd-canva-frame" data-loading="Loading Day ${d.id} slides…">
        <iframe src="${esc(embedUrl(deck))}" title="Day ${d.id} slides — ${esc(d.title)}" loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-presentation" allow="fullscreen" allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      <p class="pd-canva-hint">Click the slides and use the arrows (or ← →) to go through today's deck. When you've reached the end, press Next.</p>
    </div>`;
};

/* The deck is one embed that sizes itself to the slide: never split it into "pages" (a split would
   hide it, reload it, and make Presenter view spend Next presses on phantom pages). */
const __paginate = window.paginateLessonSlide;
window.paginateLessonSlide = function(){
  const wrap = document.getElementById("lessonSlideWrap");
  if(wrap && wrap.querySelector(".pd-canva")){
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

/* Presenter view: the trainer's cue for the deck, with today's topics as talking points. */
if(typeof window.presenterCues==="function"){
  const __presenterCues = window.presenterCues;
  window.presenterCues = function(d, slide){
    if(!slide || slide.type!=="canva") return __presenterCues(d, slide);
    const topics = (d.lessons||[]).map(l=>`<li>${esc(l.h)}</li>`).join("");
    return `<h3>Day ${d.id} Slides (Canva)</h3>
      <p>Present today's deck: click into it and use its arrows or ← →. Stop on each topic to ask who has seen it on a real claim.</p>
      <p>When you reach the last slide, press <b>Next</b> for the Quick Checks.</p>
      ${topics ? `<b class="cue-sub">Today's topics</b><ul>${topics}</ul>` : ""}`;
  };
}
})();
