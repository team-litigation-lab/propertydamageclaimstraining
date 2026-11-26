/* ============================================================
   The lesson deck, in the LSH Portal's design (the look of the LSH Academy Index,
   LSH Elev8 and LSH Atlas): the blue-gold frame (a thick rounded outline, navy along
   the top fading to gold at the bottom), small uppercase mono tags, a clean sans-serif
   in place of the serif, pill badges, soft elevation and dark-navy primary buttons.

   Design only. Nothing here changes what a slide says or shows, the order or number
   of the steps, the Quick Checks, the Skill Builders, scoring or saved places: it is a
   stylesheet laid over the slideshow (index.html's "Lesson slides: presentation stage"
   rules and js/pd-canva.js's deck pages), plus one measurement: a deck page is sized
   to the room the stage has left, so the whole page shows instead of being cut off at
   the bottom on a laptop screen.

   Presenter view's slides window (#audienceRoot) keeps its own full-window look.
   Loaded after js/pd-canva.js; its <style> is moved to the end of <head> once the page
   has loaded, so it sits after the styles the later scripts add.
   ============================================================ */
(function(){
"use strict";
const FRAME = "linear-gradient(180deg,#1E2340 0%,#2c3360 30%,#a8692f 78%,#DB8437 100%)";
const FACE_DARK = "radial-gradient(120% 80% at 100% 0%,rgba(219,132,55,.16) 0%,transparent 55%),radial-gradient(90% 70% at 0% 100%,rgba(120,132,190,.16) 0%,transparent 65%),linear-gradient(160deg,#232951 0%,#1E2340 45%,#171B35 100%)";
const SANS = "'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";
const MONO = "'IBM Plex Mono',ui-monospace,monospace";
const S = "#app";   // the course page; the slides window (#audienceRoot, beside #app) keeps its own look

const css = document.createElement("style");
css.id = "pd-deck-style";
css.textContent = `
/* ---------- the day header: a tag and a clean title on a glass bar ---------- */
${S} .day-head-compact{gap:12px 14px;margin-bottom:8px;padding:7px 14px;border:1px solid rgba(30,35,64,.12);border-radius:14px;
  background:rgba(255,255,255,.86);-webkit-backdrop-filter:saturate(118%) blur(10px);backdrop-filter:saturate(118%) blur(10px);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 12px 26px -20px rgba(30,35,64,.55);}
${S} .day-head-compact .dhc-eyebrow{font-family:${MONO};font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
  color:#fff;background:linear-gradient(180deg,#2a3058 0%,#1E2340 100%);border-radius:999px;padding:4px 11px;
  box-shadow:inset 0 -2px 0 #DB8437;}
${S} .day-head-compact .dhc-title{font-family:${SANS};font-size:17px;font-weight:700;letter-spacing:-.01em;color:#1E2340;}

/* the slideshow page keeps its links and bars tight, so the slide gets the height */
${S} main:has(#lessonStage) .nav-back-row{margin:0 0 6px;}
${S} main:has(#lessonStage) .back-link{margin-bottom:8px;}
/* On a laptop or desktop the slide gets the height: the back links and the day header share one row,
   the toolbar the next, and on a deck page the slide's tag sits on the progress row and the "Click the
   slide…" hint is kept for screen readers (the slide's own tooltip says the same). Nothing is removed. */
@media(min-width:1001px){
  ${S} > main:has(> #lessonStage){display:flex;flex-wrap:wrap;align-items:center;align-content:flex-start;gap:8px 12px;padding-top:14px;}
  ${S} > main:has(> #lessonStage) > *{margin:0 !important;flex:1 1 100%;min-width:0;}
  ${S} > main:has(> #lessonStage) > :has(> .nav-back-row), ${S} > main:has(> #lessonStage) > :empty, ${S} > main:has(> #lessonStage) > .back-link{flex:0 0 auto;}
  ${S} > main:has(> #lessonStage) .nav-back-row{margin:0;}
  ${S} > main:has(> #lessonStage) > .day-head-compact{flex:1 1 360px;}
  ${S} .lesson-stage:has(.pd-deck){position:relative;}
  ${S} .lesson-stage #lessonSlideWrap:has(.pd-deck){position:static;}
  ${S} .lesson-stage .pd-deck .topic-separator{position:absolute;top:8px;left:20px;margin:0 !important;}
  ${S} .lesson-stage:has(.pd-deck) .slide-dots{min-height:26px;align-items:center;align-content:center;justify-content:flex-end;padding-left:340px;margin-bottom:8px;}
  ${S} .pd-deck-cap{position:absolute !important;width:1px;height:1px;margin:-1px !important;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0;}
  ${S} .lesson-stage:has(.pd-deck){padding-top:8px;padding-bottom:10px;}
  ${S} .lesson-stage:has(.pd-deck) .slide-nav{margin-top:8px;padding-top:8px;}
  ${S} .lesson-stage:has(.pd-deck) .slide-nav .btn{padding-top:8px;padding-bottom:8px;}
}

/* ---------- the toolbar above the stage: one glass bar, navy primary buttons ---------- */
${S} .ls-top{margin:0 0 10px;padding:6px 8px 6px 14px;border-radius:14px;border:1px solid rgba(30,35,64,.12);background:rgba(255,255,255,.84);
  -webkit-backdrop-filter:saturate(118%) blur(10px);backdrop-filter:saturate(118%) blur(10px);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 12px 26px -20px rgba(30,35,64,.55);gap:8px 10px;}
${S} .ls-top .or-tip{font-size:12.5px;font-weight:600;color:#2B2F3E;}
${S} .ls-top .btn{border-radius:10px;font-weight:700;letter-spacing:.01em;}
${S} .ls-top .btn-ghost{background:#fff;border-color:rgba(30,35,64,.16);color:#1E2340;box-shadow:0 1px 2px rgba(30,35,64,.06);}
${S} .ls-top .btn-ghost:hover{background:#F4F6FB;border-color:rgba(30,35,64,.3);}
${S} .ls-top .btn-ghost.on{background:linear-gradient(180deg,#fde7b0 0%,#f5c451 50%,#e0a43a 100%);border-color:#e0a43a;color:#1E2340;}
${S} .ls-top .btn-navy, ${S} .ls-top .btn-primary{color:#fff;border:0;background:linear-gradient(180deg,#2a3058 0%,#1E2340 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.12),inset 0 -2px 0 #DB8437,0 8px 16px -10px rgba(30,35,64,.8);}
${S} .ls-top .btn-navy:hover, ${S} .ls-top .btn-primary:hover{background:linear-gradient(180deg,#343b6b 0%,#262c52 100%);color:#fff;}
${S} .ls-top .audio-rate{border-radius:10px;border-color:rgba(30,35,64,.16);font-weight:600;color:#1E2340;}

/* ---------- the stage: the blue-gold frame around a deep-navy face ---------- */
${S} .lesson-stage{border:4px solid transparent;border-radius:22px;padding:12px 20px 12px;
  background:${FACE_DARK} padding-box,${FRAME} border-box;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 24px 48px -26px rgba(20,24,48,.75),0 6px 14px -8px rgba(20,24,48,.35);}
${S} .lesson-stage:fullscreen{border-width:0;border-radius:0;background:${FACE_DARK};}

/* progress: slim gold dots, the current step a gold pill */
${S} .lesson-stage .slide-dots{margin:0 0 10px;}
${S} .lesson-stage .slide-dot{background:rgba(255,255,255,.22);box-shadow:none;}
${S} .lesson-stage .slide-dot:hover{background:rgba(240,192,138,.85);}
${S} .lesson-stage .slide-dot.visited{background:rgba(219,132,55,.62);}
${S} .lesson-stage .slide-dot.active{background:linear-gradient(90deg,#F0C08A 0%,#DB8437 100%);box-shadow:0 0 0 3px rgba(219,132,55,.18);}
${S} .lesson-stage .slide-dot.locked{background:rgba(255,255,255,.1);}

/* the slide's tag ("DAY 1 · SLIDES · PAGE 1 OF 50"): a mono pill badge */
${S} .lesson-stage .pd-deck .topic-separator, ${S} .lesson-stage .pd-canva .topic-separator{display:inline-flex;align-items:center;gap:8px;
  font-family:${MONO};font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#F5C99A !important;
  background:rgba(255,255,255,.06) !important;border:1px solid rgba(240,192,138,.4);border-radius:999px;padding:4px 14px;}
${S} .lesson-stage .pd-deck .topic-separator::before, ${S} .lesson-stage .pd-canva .topic-separator::before{content:"";width:6px;height:6px;border-radius:50%;background:#DB8437;box-shadow:0 0 0 3px rgba(219,132,55,.25);}

/* a deck page: the slide sits in a fine gold-edged frame with a soft lift */
${S} .pd-deck{gap:8px;}
${S} .lesson-stage #lessonSlideWrap:has(.pd-deck){padding:2px 0;}
${S} .pd-deck-frame, ${S} .pd-canva-frame{border-radius:14px;background:#11142A;
  box-shadow:0 0 0 1px rgba(240,192,138,.38),0 0 0 5px rgba(255,255,255,.04),0 22px 44px -22px rgba(0,0,0,.75),0 6px 14px -8px rgba(0,0,0,.45);}
${S} .pd-deck-frame{max-width:var(--pd-fit-w, calc((clamp(440px,66vh,720px) - 100px) * var(--ar)));}   /* measured: as large as the stage allows */
${S} .pd-deck-nav span{width:44px;height:44px;background:rgba(30,35,64,.78);border:1px solid rgba(240,192,138,.55);color:#fff;
  box-shadow:0 8px 18px -8px rgba(0,0,0,.6);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);}
${S} .pd-deck-cap, ${S} .pd-canva-hint{font-size:12.5px;font-weight:600;letter-spacing:.01em;color:#C9CEE6;}

/* the Previous / Next bar: a ghost button, a mono step badge, a gold primary */
${S} .lesson-stage .slide-nav{margin:10px 0 0;padding-top:10px;border-top:1px solid rgba(255,255,255,.08);}
${S} .lesson-stage .slide-nav .btn{border-radius:11px;font-weight:700;letter-spacing:.01em;padding:9px 20px;}
${S} .lesson-stage .slide-nav .btn-ghost{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.28);color:#fff;box-shadow:none;}
${S} .lesson-stage .slide-nav .btn-ghost:hover{background:rgba(255,255,255,.14);border-color:rgba(240,192,138,.7);color:#fff;}
${S} .lesson-stage .slide-nav .btn-primary{color:#1E2340;border:0;background:linear-gradient(180deg,#fde7b0 0%,#f5c451 50%,#e0a43a 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.45),inset 0 -2px 0 #B8862A,0 10px 20px -12px rgba(224,164,58,.55);}
${S} .lesson-stage .slide-nav .btn-primary:hover{background:linear-gradient(180deg,#ffefc4 0%,#f7cf6a 50%,#e8b04a 100%);color:#1E2340;}
${S} .lesson-stage .slide-counter{font-family:${MONO};font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#E6E9F5;
  background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:5px 14px;}
${S} .lesson-stage .slide-done-banner{border-radius:12px;font-weight:600;background:rgba(255,255,255,.07);border:1px solid rgba(240,192,138,.4);color:#fff;}

/* ---------- the written steps (Meet the Claim, Quick Checks, Skill Builders, Objectives): a paper slide in the frame ---------- */
${S} .lesson-stage #lessonSlideWrap:not(:has(.pd-deck)){border:4px solid transparent;border-radius:18px;
  background:linear-gradient(180deg,#FFFFFF 0%,#FBF9F5 100%) padding-box,${FRAME} border-box;
  box-shadow:inset 0 1px 0 #fff,0 18px 34px -22px rgba(0,0,0,.6);}
${S} .lesson-stage #lessonSlideWrap:not(:has(.pd-deck))::before{display:none;}
${S} .lesson-stage #lessonSlideWrap:not(:has(.pd-deck)) .topic-separator, ${S} .lesson-stage #lessonSlideWrap .qc-tag, ${S} .lesson-stage #lessonSlideWrap .mc-tag{font-family:${MONO};letter-spacing:.12em;color:#9A5418 !important;}   /* no case change: a slide's words stay as written */
${S} .lesson-stage #lessonSlideWrap .lesson-card h4, ${S} .lesson-stage #lessonSlideWrap h2.section-title, ${S} .lesson-stage #lessonSlideWrap .meet-client-card h3,
${S} .lesson-stage #lessonSlideWrap > .card > b:first-child, ${S} .lesson-stage #lessonSlideWrap .quiz-q{font-family:${SANS} !important;font-weight:700;letter-spacing:-.015em;color:#1E2340 !important;}
${S} .lesson-stage #lessonSlideWrap .quiz-opt{border-radius:12px;border-color:rgba(30,35,64,.16);box-shadow:0 1px 2px rgba(30,35,64,.06),0 8px 18px -16px rgba(30,35,64,.5);transition:border-color .15s ease,box-shadow .15s ease,transform .15s ease;}
${S} .lesson-stage #lessonSlideWrap .quiz-opt:not([disabled]):hover{border-color:#1E2340;transform:translateY(-1px);}
${S} .lesson-stage #lessonSlideWrap .fp-num, ${S} .lesson-stage #lessonSlideWrap ol > li::before{background:#1E2340 !important;}
${S} .lesson-stage #lessonSlideWrap .btn-primary{border:0;color:#fff;background:linear-gradient(180deg,#2a3058 0%,#1E2340 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.12),inset 0 -2px 0 #DB8437,0 8px 16px -10px rgba(30,35,64,.8);}
${S} .lesson-stage #lessonSlideWrap .btn-primary:hover{background:linear-gradient(180deg,#343b6b 0%,#262c52 100%);color:#fff;}
${S} .lesson-stage #lessonSlideWrap .di-kicker{font-family:${MONO};letter-spacing:.14em;}
${S} .lesson-stage.day-intro h1, ${S} .lesson-stage.day-intro h2, ${S} .lesson-stage.day-intro h3{font-family:${SANS} !important;letter-spacing:-.015em;}

/* ---------- phones ---------- */
@media(max-width:760px){
  ${S} .lesson-stage{border-width:3px;border-radius:16px;padding:12px 10px;}
  ${S} .lesson-stage #lessonSlideWrap:not(:has(.pd-deck)){border-width:3px;border-radius:14px;}
  ${S} .ls-top{padding:8px;}
  ${S} .lesson-stage .slide-nav{background:linear-gradient(rgba(27,32,66,0),#1B2042 30%);border-top:0;}   /* the sticky bar fades into the stage, not the page */
  ${S} .lesson-stage .slide-nav .btn{padding:9px 14px;}
  ${S} .lesson-stage .slide-counter{padding:4px 10px;letter-spacing:.06em;}
  ${S} .lesson-stage .pd-deck .topic-separator{letter-spacing:.08em;padding:4px 10px;}
}
@media(prefers-reduced-motion:reduce){
  ${S} .lesson-stage .slide-dot, ${S} .lesson-stage #lessonSlideWrap .quiz-opt, ${S} .pd-deck-nav{transition:none !important;}
  ${S} .lesson-stage #lessonSlideWrap .quiz-opt:hover{transform:none;}
  ${S} .lesson-slide{animation:none !important;}
}
`;
document.head.appendChild(css);
window.addEventListener("load", ()=>document.head.appendChild(css));   // after the styles later scripts add

/* A deck page is sized to the room the stage has left (js/lsh-one-screen.js caps the stage at --ls-max),
   so the whole slide shows on a laptop screen instead of being cut off below. Height-bound only: on a
   phone, in full screen and in the slides window the page keeps its own sizing. */
function fitDeck(){
  pending = 0;
  const stage = document.getElementById("lessonStage"), wrap = document.getElementById("lessonSlideWrap");
  const frame = wrap && wrap.querySelector(".pd-deck-frame");
  if(!stage || !frame || stage.closest("#audienceRoot")) return;
  const max = parseFloat(stage.style.getPropertyValue("--ls-max"));
  if(!max || document.fullscreenElement || innerWidth < 1001){ if(frame.style.getPropertyValue("--pd-fit-w")) frame.style.removeProperty("--pd-fit-w"); return; }
  const deck = frame.parentElement, cs = getComputedStyle(wrap), dcs = getComputedStyle(deck);
  const chrome = stage.getBoundingClientRect().height - wrap.clientHeight;         // dots, the nav bar, the stage's padding and frame
  const pad = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
  const gap = parseFloat(dcs.rowGap) || 0;
  let others = 0; [...deck.children].forEach(c=>{ const cs = getComputedStyle(c); if(c !== frame && cs.display !== "none" && cs.position !== "absolute") others += c.getBoundingClientRect().height + gap; });
  const h = max - chrome - pad - others - 8;   // a few px for rounding, so the slide never scrolls
  const ar = parseFloat(getComputedStyle(frame).getPropertyValue("--ar")) || 16/9;
  const w = h > 120 ? Math.floor(h * ar) + "px" : "";
  if(frame.style.getPropertyValue("--pd-fit-w") === w) return;   // unchanged: no style write, so no new mutation
  if(w) frame.style.setProperty("--pd-fit-w", w); else frame.style.removeProperty("--pd-fit-w");
}
let pending = 0;
const soon = ()=>{ if(!pending) pending = requestAnimationFrame(()=>requestAnimationFrame(fitDeck)); };
addEventListener("resize", soon);
addEventListener("fullscreenchange", soon);
addEventListener("load", soon);
const watch = ()=>{ const app = document.getElementById("app") || document.body; new MutationObserver(soon).observe(app, {childList:true, subtree:true, attributes:true, attributeFilter:["style"]}); soon(); };
if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", watch); else watch();
})();
