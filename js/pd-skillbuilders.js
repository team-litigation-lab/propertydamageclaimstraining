/* ============================================================
   LSH Property Damage Claims Training — Skill Builders, the Claim
   Document Library, the Training Tools hub (CMS, Call Simulator, Email),
   Handouts and the Claim File. Built on the CM course's Skill Builder kit.
   Loaded after the main portal script: anything assigned to window
   here replaces the portal function of the same name.
   ============================================================ */
(function(){
"use strict";

/* ---------------- styles ---------------- */
const st = document.createElement("style"); st.id = "pd-skillbuilders-css"; st.textContent = `
.pd-part h3{margin:0 0 6px;color:var(--navy);font-size:15.5px}
.pd-part .pd-intro{font-size:13px;color:var(--ink-soft);margin:0 0 12px;max-width:80ch}
.pd-scn{background:#F8F9FC;border-left:4px solid var(--navy);border-radius:10px;padding:12px 16px;margin:0 0 14px;font-size:13px;color:#37394A}
.pd-scn b{color:var(--navy)}
.pd-docs{border:1px dashed var(--line);border-radius:12px;padding:10px 14px;margin:0 0 14px;background:#FFFCF7}
.pd-docs-h{font-size:11.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:6px}
.pd-doc-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 0;border-top:1px solid #F0EDE6;font-size:13px}
.pd-doc-row:first-of-type{border-top:none}
.pd-doc-row .t{font-weight:700;color:var(--ink)}.pd-doc-row .d{font-size:12px;color:var(--ink-soft);font-weight:500}
.pd-doc-row .btn{white-space:nowrap;flex-shrink:0}
.pd-doc-row > div:first-child{min-width:0;flex:1}
.pd-doc-row .cms{font-family:'IBM Plex Mono',monospace;font-size:10.5px;background:#EEF0F6;color:var(--navy);border-radius:999px;padding:2px 8px;white-space:nowrap}
.pd-table{width:100%;border-collapse:collapse;font-size:12.8px;margin:6px 0 10px}
.pd-table th,.pd-table td{border:1px solid var(--line);padding:7px 9px;text-align:left;vertical-align:top}
.pd-table th{background:#F3F4F9;color:var(--navy);font-size:12px}
.pd-table select,.pd-table input{font:inherit;font-size:12.5px;padding:5px 7px;border:1px solid var(--line);border-radius:7px;max-width:100%}
.pd-table tr.ok td{background:#EEF7F1}.pd-table tr.bad td{background:#FBEDEA}
.pd-why{display:block;font-size:11.5px;color:var(--ink-soft);margin-top:3px;font-weight:500}
.pd-res{margin-top:10px;font-size:13px}
.pd-check{display:flex;gap:9px;align-items:flex-start;padding:7px 10px;border:1px solid var(--line);border-radius:9px;margin-bottom:6px;font-size:13px;background:#fff;cursor:pointer}
.pd-check.ok{border-color:var(--success);background:#EEF7F1}.pd-check.bad{border-color:var(--danger);background:#FBEDEA}
.pd-calc{display:grid;grid-template-columns:minmax(0,1fr) 180px;gap:8px 12px;align-items:center;font-size:13px;margin:6px 0 10px}
.pd-calc input{font:inherit;padding:7px 9px;border:1px solid var(--line);border-radius:8px;width:100%}
.pd-calc input.ok{border-color:var(--success);background:#EEF7F1}.pd-calc input.bad{border-color:var(--danger);background:#FBEDEA}
.pd-ta{width:100%;min-height:130px;padding:10px 12px;border-radius:8px;border:1px solid var(--line);font-size:13px;font-family:inherit;resize:vertical}
.pd-cms{border:1.5px solid var(--navy);border-radius:12px;padding:12px 16px;margin:14px 0;background:#F4F6FB}
.pd-cms b{color:var(--navy)}
.pd-cms .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:8px}
.pd-cms input{font:inherit;padding:7px 9px;border:1px solid var(--line);border-radius:8px;min-width:200px}
.pd-soon{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;background:#FFF1DE;color:#9A5B00;border-radius:999px;padding:2px 8px;margin-left:6px}
.pd-tools{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px;margin-bottom:16px}
.pd-tool{padding:16px 18px;display:flex;flex-direction:column;gap:8px}
.pd-tool.soon{opacity:.82}
.pd-tool p{margin:0;font-size:13px;color:var(--ink-soft)}
.pd-tool-h{display:flex;gap:12px;align-items:center}.pd-tool-h b{color:var(--navy);font-size:15px}
.pd-tool-ic{font-size:26px;width:46px;height:46px;border-radius:12px;background:#EEF0F6;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.pd-badge{display:inline-block;font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;margin-top:3px}
.pd-badge.live{background:#E3F4EA;color:#1D6B3C}.pd-badge.soon{background:#FFF1DE;color:#9A5B00}
.pd-tool-act{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto}
.pd-tool-url{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink-soft);word-break:break-all}
.cl-lines-mini{display:flex;flex-wrap:wrap;gap:6px}.cl-lines-mini span{font-size:11.5px;background:#EEF0F6;color:var(--navy);border-radius:999px;padding:3px 9px}
.pd-tool-note{font-size:12.3px!important;margin-top:auto!important}
.pd-tool-admin{display:grid;grid-template-columns:90px minmax(0,1fr) 150px;gap:8px;align-items:center;margin-bottom:8px;font-size:13px}
.pd-tool-admin input,.pd-tool-admin select{font:inherit;padding:7px 9px;border:1px solid var(--line);border-radius:8px;min-width:0}
@media (max-width:600px){.pd-tool-admin{grid-template-columns:1fr}}
#pd-toolframe{position:fixed;left:0;right:0;bottom:0;top:0;z-index:9000;background:var(--paper,#F7F6F2);display:flex;flex-direction:column}
#pd-toolframe[hidden]{display:none}
.pd-tf-bar{display:flex;gap:10px;align-items:center;padding:6px 14px;background:#F3F4F9;border-bottom:1px solid var(--line);flex-wrap:wrap}
.pd-tf-name{flex:1;min-width:0;font-size:13px;font-weight:700;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pd-tf-hint{font-size:11.5px;color:var(--ink-soft)}.pd-tf-hint b{color:var(--navy)}
.pd-tf-bar .btn-ghost{background:#fff}
/* the course's top bar (with its 🧰 Tools menu) stays above the tool frame: #app is its own
   stacking layer, so lift it and hide everything in it but the top bar while a tool is open */
body.pd-tf-open #app{z-index:9001}
body.pd-tf-open #app > :not(.topbar):not(.view-mode-strip){visibility:hidden}
/* while a tool is open, only 🧰 Tools is highlighted in the nav */
body.pd-tf-open .nav > button.active{background:transparent;color:#D7DAEC}
.pd-tf-newtab{background:var(--orange)!important;border-color:var(--orange)!important}
.pd-tf-body{flex:1;position:relative}
.pd-tf-body iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#fff}
body.pd-tf-open{overflow:hidden}
#pd-toolpill{position:fixed;right:18px;bottom:18px;z-index:8999;box-shadow:0 6px 22px rgba(0,0,0,.25);border-radius:999px}
#pd-toolpill[hidden]{display:none}
@media (max-width:760px){.pd-tf-hint,.pd-tf-long{display:none}}
.pd-radio{display:flex;flex-direction:column;gap:6px;margin:6px 0 10px}
.pd-radio label{display:flex;gap:8px;align-items:flex-start;border:1px solid var(--line);border-radius:9px;padding:8px 10px;font-size:13px;background:#fff;cursor:pointer}
.pd-skill-cta{margin-top:14px;border:1.5px solid var(--orange);background:#FFF6EC;border-radius:12px;padding:12px 16px;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.pd-skill-cta b{color:var(--navy);font-size:14px}.pd-skill-cta p{margin:2px 0 0;font-size:12.5px;color:#5A4A32}
.pd-lib-folder{margin-bottom:18px}
.pd-lib-folder h3{font-size:14px;color:var(--navy);margin:0 0 8px}
.pd-key{font-size:11.8px;color:#6B2E26;background:#FBEDEA;border-radius:7px;padding:5px 8px;margin-top:5px;font-weight:600}
.pd-filter{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 16px}
.pd-lesson-visual{margin:12px 0 4px}
.svg-diagram-card .pd-lesson-visual{text-align:left}
/* Top-bar search: the input may shrink (the placeholder ends in "…" instead of spilling out of the box) */
.topbar-search input{flex:1 1 auto;min-width:0;width:100%;text-overflow:ellipsis}
.topbar-search{min-height:36px}
.topbar-search .sicon{flex:0 0 auto;display:flex;align-items:center;color:#fff;cursor:text}
.topbar-search .sicon svg{width:15px;height:15px;display:block}
@media(min-width:761px) and (max-width:1600px){.nav button{padding:7px 7px;font-size:12.5px}}
/* Top bar on laptops and desktops: nothing overlaps. The course title gives way first (down to the logo;
   the text hides when there's no room to read it), then the nav wraps its last buttons onto a second line. */
@media(min-width:1181px){
  .topbar .brand{flex:0 1000000 320px;min-width:40px;container-type:inline-size}  /* a huge shrink factor: the title takes all of the squeeze before the nav wraps */
  .topbar-right{min-width:auto}
  .topbar .nav{flex:0 1 auto;min-width:0;flex-wrap:wrap;column-gap:0;row-gap:4px}
  .topbar .nav>*+*{margin-left:2px}  /* margins, not column-gap: Chrome leaves the gap out of a wrapping row's width */
  .topbar-search{flex-shrink:100000}  /* then the search box, down to its minimum */
  .trainee-chip{flex-shrink:0}
}
@container (max-width:170px){.topbar .brand-text{display:none !important}}
/* The course has two more nav items than EA/PA: on laptop widths the search box is just its icon
   (on tablets it has its own row, full width).
   Clicking it opens the box over the start of the nav (the nav doesn't move); it stays open while
   results are showing. Nothing is clipped, so the results list can drop down. */
@media(min-width:1181px) and (max-width:1600px){
  .topbar-search{flex:0 0 38px !important;min-width:38px !important;max-width:38px !important;padding:8px 0 !important;gap:0 !important;justify-content:center;transition:flex-basis .2s ease,max-width .2s ease,margin-right .2s ease}
  .topbar-search input{flex:0 0 0;width:0;padding:0;opacity:0}
  .topbar-search .sicon{position:absolute;inset:0;justify-content:center;cursor:pointer}
  .topbar-search:focus-within,.topbar-search:has(.search-results){flex-basis:260px !important;max-width:260px !important;margin-right:-222px;padding:8px 14px !important;gap:8px !important;justify-content:flex-start;background:#3B4058;z-index:61;box-shadow:0 6px 18px rgba(0,0,0,.25)}
  .topbar-search:focus-within input,.topbar-search:has(.search-results) input{flex:1 1 auto;width:100%;opacity:1}
  .topbar-search:focus-within .sicon,.topbar-search:has(.search-results) .sicon{position:static;cursor:text}
  .topbar-search .search-results{min-width:320px}
}
@media(max-width:700px){.pd-calc{grid-template-columns:1fr}.pd-doc-row{flex-wrap:wrap}}
`; document.head.appendChild(st);

/* ---------------- small helpers ---------------- */
const E = (s)=> (typeof esc==="function" ? esc(s) : String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])));
const money = (n)=> (n<0?"−":"") + "$" + Math.abs(Number(n)||0).toLocaleString("en-US",{minimumFractionDigits:2, maximumFractionDigits:2});
const pdState = ()=> (toolState.pd = toolState.pd || {});
const PD_UI = {};                                  // key -> config for the current tool
window.__pdUI = PD_UI;                             // read-only hook for automated answer-key tests
const toolOfKey = (key)=> key.split(":")[0];
const dayOfTool = (id)=> { const t = PRACTICE_TOOLS.find(x=>x.id===id); return t ? parseInt(String(t.relates).replace(/\D/g,""),10) : null; };
async function scorePart(key, score){ await bumpPracticeProgress(toolOfKey(key), score); if(score>=90 && typeof burstConfetti==="function") burstConfetti(); }
const part = (title, intro, inner)=> `<div class="pd-part"><h3>${E(title)}</h3>${intro?`<p class="pd-intro">${intro}</p>`:""}${inner}</div>`;
const scenario = (html)=> `<div class="pd-scn">${html}</div>`;

/* ================================================================
   TRAINING TOOLS HUB — the portal embeds every LSH training platform.
   Each tool can be opened inside the portal (a persistent frame that
   keeps its session while you move around the lessons) or on its own
   in a new tab. Admins set each tool's address and status for everyone
   (shared key settings:tools).
   ================================================================ */
const PD_TOOL_DEFAULTS = [
  {id:"cms", icon:"🗂", name:"LSH Case Management System", short:"CMS", status:"live",
   url:"https://lshcasemanagementtraining-trainingcrm.pages.dev",
   desc:"Where the claim work actually happens: start the PD file, key the vehicle and claim facts, add every party and carrier, upload each document under PD (or its category), and log Tasks and Notes for every follow-up.",
   evidence:"CMS Case ID", idHint:"CMS Case ID (e.g. LSH-2026-PI-000123)"},
  // Shared simulators on the LSH Training Portal (used by every program). The course
  // opens them with ?program=PD and the trainee's name and batch, so results carry them.
  {id:"calls", icon:"📞", name:"Call Simulator (LSH Training Portal)", short:"Call Simulator", status:"live",
   url:"https://cm-training-activity.pages.dev/simulators/call.html", portalSim:true,
   desc:"Live practice calls, spoken aloud: the Property Damage pack has 16 calls on the Angela Carter file — opening the claims, verifying and spotting coverage, setting up and extending the rental, the tow yard and the shop, negotiating the total loss, the payoff, and the release. Each call ends with the note it requires, and both are scored.",
   evidence:"Score", idHint:"Score (e.g. 82%)"},
  {id:"email", icon:"✉️", name:"Email Workspace (LSH Training Portal)", short:"Email Workspace", status:"live",
   url:"https://cm-training-activity.pages.dev/simulators/email.html", portalSim:true,
   desc:"A Gmail-style practice inbox (generate one for Property Damage): create labels, clear the inbox with one decision per email, reply, forward and report phishing. Graded on filing, security, triage and writing.",
   evidence:"Score", idHint:"Score"}
];
function pdTool(id){
  const d = PD_TOOL_DEFAULTS.find(t=>t.id===id); if(!d) return null;
  const o = ((state.toolSettings||{})[id])||{};
  const url = String(o.url!=null ? o.url : d.url || "").trim().replace(/\/+$/,"");
  const status = o.status || d.status;
  return Object.assign({}, d, {url, status, live: status==="live" && /^https:\/\//i.test(url)});
}
window.pdTool = pdTool;
function toolHref(t){
  // The CMS serves every LSH program: ?program=pd tags the PD course's saved cases.
  if(t.id==="cms") return t.url + (t.url.includes("?") ? "&" : "?") + "program=pd";
  if(!t.portalSim) return t.url;
  const q = new URLSearchParams({program:"PD"});
  const name = String(state.certName || state.traineeName || "").trim(), batch = String(state.traineeBatch || "").trim();
  if(name && !state.isAdmin) q.set("name", name);
  if(batch && !state.isAdmin) q.set("batch", batch);
  return t.url + (t.url.includes("?") ? "&" : "?") + q.toString();
}
window.pdCmsUrl = function(){ return pdTool("cms").url; };
async function loadToolSettings(){
  try{ const s = await sharedGet("settings:tools"); if(s && typeof s==="object") state.toolSettings = s.tools || s; }catch(e){}
}

/* ---- the persistent in-portal frame (lives outside #app, so render() never reloads it) ---- */
const frames = {};                  // tool id → iframe
let frameShell = null, currentFrame = null;
function ensureShell(){
  if(frameShell) return frameShell;
  frameShell = document.createElement("div");
  frameShell.id = "pd-toolframe"; frameShell.hidden = true;
  // The tool list lives in the course's top bar (🧰 Tools menu); the frame opens under it,
  // so the course navigation stays on screen while a tool is open.
  frameShell.innerHTML = `<div class="pd-tf-bar"><span class="pd-tf-name"></span>
    <span class="pd-tf-hint">Sign-in won't stay? Use <b>New tab</b>.</span>
    <button class="btn btn-navy btn-sm pd-tf-newtab" onclick="openTool(null,'tab')">New tab ↗</button>
    <button class="btn btn-ghost btn-sm" onclick="closeToolFrame()">✕ Close<span class="pd-tf-long"> and back to training</span></button></div>
    <div class="pd-tf-body"></div>`;
  document.body.appendChild(frameShell);
  const pill = document.createElement("button");
  pill.id = "pd-toolpill"; pill.hidden = true; pill.className = "btn btn-navy";
  pill.onclick = ()=> openTool(currentFrame);
  document.body.appendChild(pill);
  document.addEventListener("keydown", e=>{ if(e.key==="Escape" && !frameShell.hidden) closeToolFrame(); });
  window.addEventListener("resize", placeFrame);
  return frameShell;
}
// Start the frame just under the course's top bar.
function placeFrame(){
  if(!frameShell || frameShell.hidden) return;
  const tb = document.querySelector(".topbar");
  const top = tb ? Math.max(0, Math.round(tb.getBoundingClientRect().bottom)) : 0;
  frameShell.style.top = top + "px";
}
function paintShell(){
  const t = pdTool(currentFrame);
  frameShell.querySelector(".pd-tf-name").textContent = t ? `${t.icon} ${t.name.replace(/ \(LSH Training Portal\)$/,"")}` : "";
  Object.entries(frames).forEach(([id,f])=>{ f.style.display = id===currentFrame ? "block" : "none"; });
}
// extra: an optional query string for this opening, e.g. "mock=MC-04" opens that CMS Training Library case.
window.openTool = function(id, mode, extra){
  id = id || currentFrame || "cms";
  const t = pdTool(id);
  if(!t){ return; }
  if(!t.live){ toast(`${t.icon} ${t.name} is coming soon. For now, log this step as a Task in the CMS.`); return; }
  let href = toolHref(t);
  if(extra) href += (href.includes("?") ? "&" : "?") + extra;
  if(mode==="tab"){ window.open(href, "_blank", "noopener"); return; }
  ensureShell();
  if(!frames[id] || frames[id].dataset.src !== href){
    if(frames[id]) frames[id].remove();
    const f = document.createElement("iframe");
    f.src = href; f.dataset.src = href; f.title = t.name;
    // microphone: the Call Simulator listens when trainees answer by voice
    f.setAttribute("allow", "microphone; autoplay; clipboard-read; clipboard-write; fullscreen");
    f.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    frameShell.querySelector(".pd-tf-body").appendChild(f);
    frames[id] = f;
  }
  currentFrame = id; paintShell();
  frameShell.hidden = false; document.body.classList.add("pd-tf-open");
  window.scrollTo(0, 0); placeFrame();
  document.getElementById("pd-toolpill").hidden = true;
  if(typeof render==="function") repaintToolsMenu();
};
window.closeToolFrame = function(){
  if(!frameShell) return;
  frameShell.hidden = true; document.body.classList.remove("pd-tf-open");
  repaintToolsMenu();
  const t = pdTool(currentFrame), pill = document.getElementById("pd-toolpill");
  if(t && pill){ pill.textContent = `${t.icon} Return to ${t.short}`; pill.hidden = false; }
};
window.openCms = function(mode){ openTool("cms", mode); };

/* Tool step: the trainee does the work in a training platform, then logs the ID here.
   A tool that isn't live yet falls back to a CMS Task so no step is ever blocked. */
function toolStep(toolId, key, what){
  const t = pdTool(toolId), saved = ((state.cmsLog||{})[key]||{}), k = key.replace(/\W/g,"_");
  const fallback = !t.live && toolId!=="cms";
  return `<div class="pd-cms"><b>${t.icon} Do this in the ${E(t.name)}</b>${t.live?"":` <span class="pd-soon">coming soon</span>`}
    <p style="font-size:12.8px;margin:6px 0 0;color:#37394A">${what}</p>
    ${fallback?`<p style="font-size:12.3px;margin:6px 0 0;color:var(--ink-soft)">Until the ${E(t.short)} platform is live, add this as a <b>Task</b> in the CMS case and log your CMS Case ID below.</p>`:""}
    <div class="row">
      ${t.live?`<button class="btn btn-navy btn-sm" onclick="openTool('${toolId}')">Open ${E(t.short)}</button><button class="btn btn-ghost btn-sm" onclick="openTool('${toolId}','tab')" title="Open in a new tab">↗</button>`
              :`<button class="btn btn-navy btn-sm" onclick="openTool('cms')">Open CMS</button>`}
      <input id="cmsId_${k}" placeholder="${E(fallback?pdTool("cms").idHint:t.idHint)}" value="${E(saved.caseId||"")}">
      <button class="btn btn-ghost btn-sm" onclick="pdLogCms('${key}','${fallback?"cms":toolId}')">Log my work</button>
      <span id="cmsLogged_${k}" style="font-size:12px;color:var(--success)">${saved.at?`✓ Logged ${fmtDate(saved.at)}`:""}</span>
    </div></div>`;
}
const cmsStep = (key, what)=> toolStep("cms", key, what);
window.pdToolStep = toolStep;
window.pdLogCms = async function(key, platform){
  const el = document.getElementById("cmsId_"+key.replace(/\W/g,"_"));
  const v = (el && el.value || "").trim();
  const t = pdTool(platform||"cms");
  if(v.length < 3){ toast(`Enter the ${t.evidence} the ${t.short} gave you when you saved.`); return; }
  state.cmsLog = state.cmsLog || {};
  state.cmsLog[key] = {caseId:v, at:new Date().toISOString(), tool:toolOfKey(key), platform:t.id};
  await storeSet("cms-log", state.cmsLog);
  const s = document.getElementById("cmsLogged_"+key.replace(/\W/g,"_")); if(s) s.textContent = "✓ Logged just now";
  toast(`Logged. Your trainer can check it in the ${t.short}.`);
};

/* A document packet: the exact files a Skill Builder part is built on. */
function docPacket(ids, title){
  const docs = ids.map(id=>pdDoc(id)).filter(Boolean);
  if(!docs.length) return "";
  return `<div class="pd-docs"><div class="pd-docs-h">📁 ${E(title||"Source documents for this part")}</div>
    ${docs.map(d=>`<div class="pd-doc-row"><div><span class="t">${E(d.title)}</span><div class="d">${E(d.desc)}</div>${state.isAdmin && d.key ? `<div class="pd-key">🔑 Trainer key: ${E(d.key)}</div>` : ""}</div>
      <div style="display:flex;gap:6px;align-items:center"><span class="cms" title="CMS upload category">CMS: ${E(d.cms)}</span><a class="btn btn-ghost btn-sm" href="${pdDocUrl(d)}" target="_blank" rel="noopener">Open</a></div></div>`).join("")}
  </div>`;
}
window.pdDocPacket = docPacket;

/* ---------------- building block: flag table ---------------- */
function flagTable(key, rows, options){
  PD_UI[key] = {type:"flags", rows, options};
  const st = pdState()[key] = pdState()[key] || {};
  return `<table class="pd-table" id="tbl_${key.replace(/\W/g,"_")}"><thead><tr><th>Item</th><th>What the documents show</th><th style="width:170px">Your call</th></tr></thead><tbody>
    ${rows.map((r,i)=>`<tr id="row_${key.replace(/\W/g,"_")}_${i}"><td><b>${E(r.item)}</b></td><td>${E(r.shows)}<span class="pd-why" id="why_${key.replace(/\W/g,"_")}_${i}"></span></td>
      <td><select onchange="pdSet('${key}',${i},this.value)"><option value="">— choose —</option>${options.map(o=>`<option ${st[i]===o?"selected":""}>${E(o)}</option>`).join("")}</select></td></tr>`).join("")}
  </tbody></table><button class="btn btn-ghost btn-sm" onclick="pdCheckFlags('${key}')">Check my calls</button><div class="pd-res" id="res_${key.replace(/\W/g,"_")}"></div>`;
}
window.pdSet = function(key, i, v){ const s = pdState()[key] = pdState()[key] || {}; s[i] = v; };
window.pdCheckFlags = async function(key){
  const cfg = PD_UI[key], s = pdState()[key]||{}, k = key.replace(/\W/g,"_");
  if(cfg.rows.some((_,i)=>!s[i])){ toast("Make a call on every row first."); return; }
  let ok = 0;
  cfg.rows.forEach((r,i)=>{ const good = s[i]===r.answer; if(good) ok++;
    const tr = document.getElementById(`row_${k}_${i}`); if(tr){ tr.classList.toggle("ok",good); tr.classList.toggle("bad",!good); }
    const w = document.getElementById(`why_${k}_${i}`); if(w) w.textContent = (good?"✓ ":"✗ Correct call: "+r.answer+" — ") + r.why; });
  const score = Math.round(ok/cfg.rows.length*100);
  document.getElementById("res_"+k).innerHTML = `<b style="color:${score>=80?"var(--success)":"var(--danger)"}">${ok}/${cfg.rows.length} correct (${score}%)</b>`;
  await scorePart(key, score);
};

/* ---------------- building block: sorter (assign each item to a zone) ---------------- */
function sorter(key, items, zones, colLabel){
  PD_UI[key] = {type:"sort", items, zones};
  const st = pdState()[key] = pdState()[key] || {};
  return `<table class="pd-table" id="tbl_${key.replace(/\W/g,"_")}"><thead><tr><th>${E(colLabel||"Document / item")}</th><th style="width:240px">Where does it go?</th></tr></thead><tbody>
    ${items.map((it,i)=>{ const d = it.doc ? pdDoc(it.doc) : null; return `<tr id="row_${key.replace(/\W/g,"_")}_${i}"><td><b>${E(it.t)}</b>${d?` <a href="${pdDocUrl(d)}" target="_blank" rel="noopener" style="font-size:12px">open ↗</a>`:""}<span class="pd-why" id="why_${key.replace(/\W/g,"_")}_${i}"></span></td>
      <td><select onchange="pdSet('${key}',${i},this.value)"><option value="">— choose —</option>${zones.map(z=>`<option ${st[i]===z?"selected":""}>${E(z)}</option>`).join("")}</select></td></tr>`; }).join("")}
  </tbody></table><button class="btn btn-ghost btn-sm" onclick="pdCheckSort('${key}')">Check my sort</button><div class="pd-res" id="res_${key.replace(/\W/g,"_")}"></div>`;
}
window.pdCheckSort = async function(key){
  const cfg = PD_UI[key], s = pdState()[key]||{}, k = key.replace(/\W/g,"_");
  if(cfg.items.some((_,i)=>!s[i])){ toast("Place every item first."); return; }
  let ok = 0;
  cfg.items.forEach((it,i)=>{ const good = s[i]===it.z; if(good) ok++;
    const tr = document.getElementById(`row_${k}_${i}`); if(tr){ tr.classList.toggle("ok",good); tr.classList.toggle("bad",!good); }
    const w = document.getElementById(`why_${k}_${i}`); if(w) w.textContent = (good?"✓ ":"✗ Goes to: "+it.z+" — ") + (it.why||""); });
  const score = Math.round(ok/cfg.items.length*100);
  document.getElementById("res_"+k).innerHTML = `<b style="color:${score>=80?"var(--success)":"var(--danger)"}">${ok}/${cfg.items.length} placed correctly (${score}%)</b>`;
  await scorePart(key, score);
};

/* ---------------- building block: checklist (select all that apply) ---------------- */
function checklist(key, items, btnLabel){
  PD_UI[key] = {type:"check", items};
  const st = pdState()[key] = pdState()[key] || {};
  return `<div id="chk_${key.replace(/\W/g,"_")}">${items.map((it,i)=>`<label class="pd-check" id="row_${key.replace(/\W/g,"_")}_${i}"><input type="checkbox" ${st[i]?"checked":""} onchange="pdSet('${key}',${i},this.checked)"><span>${E(it.t)}<span class="pd-why" id="why_${key.replace(/\W/g,"_")}_${i}"></span></span></label>`).join("")}</div>
    <button class="btn btn-ghost btn-sm" onclick="pdCheckList('${key}')">${E(btnLabel||"Check my selections")}</button><div class="pd-res" id="res_${key.replace(/\W/g,"_")}"></div>`;
}
window.pdCheckList = async function(key){
  const cfg = PD_UI[key], s = pdState()[key]||{}, k = key.replace(/\W/g,"_");
  let ok = 0;
  cfg.items.forEach((it,i)=>{ const picked = !!s[i], good = picked===!!it.ok; if(good) ok++;
    const row = document.getElementById(`row_${k}_${i}`); if(row){ row.classList.toggle("ok", good); row.classList.toggle("bad", !good); }
    const w = document.getElementById(`why_${k}_${i}`); if(w) w.textContent = (it.ok?"Should be selected — ":"Should NOT be selected — ") + (it.why||""); });
  const score = Math.round(ok/cfg.items.length*100);
  document.getElementById("res_"+k).innerHTML = `<b style="color:${score>=80?"var(--success)":"var(--danger)"}">${ok}/${cfg.items.length} right (${score}%)</b>`;
  await scorePart(key, score);
};

/* ---------------- building block: calculator ---------------- */
function calc(key, fields, afterCheck){
  PD_UI[key] = {type:"calc", fields, afterCheck};
  const st = pdState()[key] = pdState()[key] || {};
  return `<div class="pd-calc">${fields.map((f,i)=>`<label for="calc_${key.replace(/\W/g,"_")}_${i}">${f.label}</label>
      <input id="calc_${key.replace(/\W/g,"_")}_${i}" type="${f.type||"number"}" step="0.01" value="${E(st[i]==null?"":st[i])}" oninput="pdSet('${key}',${i},this.value)" placeholder="${f.type==="date"?"":f.unit?"0":"0.00"}">`).join("")}</div>
    <button class="btn btn-ghost btn-sm" onclick="pdCheckCalc('${key}')">Check my numbers</button><div class="pd-res" id="res_${key.replace(/\W/g,"_")}"></div>`;
}
window.pdCheckCalc = async function(key){
  const cfg = PD_UI[key], s = pdState()[key]||{}, k = key.replace(/\W/g,"_");
  let ok = 0; const notes = [];
  cfg.fields.forEach((f,i)=>{
    const el = document.getElementById(`calc_${k}_${i}`); const raw = el ? el.value : s[i];
    let good;
    if(f.type==="date") good = raw===f.answer;
    else { const v = parseFloat(String(raw).replace(/[$,\s]/g,"")); good = !isNaN(v) && Math.abs(v - f.answer) <= (f.tol==null?1:f.tol); }
    const shown = f.type==="date" ? f.answer : f.unit ? `${f.answer}${f.unit==="%"?"%":" "+f.unit}` : money(f.answer);
    if(good) ok++; else notes.push(`<li><b>${f.label.replace(/<[^>]+>/g,"")}:</b> expected ${shown}${f.hint?` — ${f.hint}`:""}</li>`);
    if(el){ el.classList.toggle("ok",good); el.classList.toggle("bad",!good); }
  });
  const score = Math.round(ok/cfg.fields.length*100);
  document.getElementById("res_"+k).innerHTML = `<b style="color:${score>=80?"var(--success)":"var(--danger)"}">${ok}/${cfg.fields.length} correct (${score}%)</b>${notes.length?`<ul style="margin:6px 0 0;padding-left:18px">${notes.join("")}</ul>`:""}${cfg.afterCheck?`<div style="margin-top:8px">${cfg.afterCheck}</div>`:""}`;
  await scorePart(key, score);
};

/* ---------------- building block: single choice ---------------- */
function choice(key, opts){
  PD_UI[key] = {type:"choice", opts};
  const st = pdState()[key] = pdState()[key] || {};
  return `<div class="pd-radio">${opts.map((o,i)=>`<label><input type="radio" name="rad_${key.replace(/\W/g,"_")}" ${st.v===i?"checked":""} onchange="pdSetChoice('${key}',${i})"><span>${o}</span></label>`).join("")}</div>`;
}
window.pdSetChoice = function(key, i){ (pdState()[key] = pdState()[key]||{}).v = i; };
const choiceText = (key)=>{ const c = PD_UI[key], s = pdState()[key]; return c && s && s.v!=null ? c.opts[s.v].replace(/<[^>]+>/g,"") : "(no option selected)"; };

/* ---------------- building block: AI-graded writing ---------------- */
function aiTask(key, cfg){
  PD_UI[key] = Object.assign({type:"ai"}, cfg);
  return `<label style="font-size:12.8px;font-weight:700;color:var(--navy);display:block;margin:4px 0 5px">${E(cfg.label)}</label>
    <textarea class="pd-ta" id="ta_${key.replace(/\W/g,"_")}" style="min-height:${cfg.rows||150}px" placeholder="${E(cfg.placeholder||"Write it exactly as you would send or file it…")}"></textarea>
    <button class="btn btn-navy btn-sm" style="margin-top:8px" onclick="pdGrade('${key}', this)">Get AI review</button>
    <div id="ai_${key.replace(/\W/g,"_")}" style="margin-top:10px"></div>`;
}
window.pdGrade = async function(key, btn){
  const cfg = PD_UI[key], k = key.replace(/\W/g,"_");
  const ta = document.getElementById("ta_"+k); const text = (ta && ta.value || "").trim();
  const out = document.getElementById("ai_"+k);
  if(text.length < 40){ toast("Write out your full answer first."); return; }
  const tool = toolOfKey(key), day = dayOfTool(tool);
  if(!(await useLabAttempt(day, key))) return;
  if(btn){ btn.disabled = true; btn.textContent = "Reviewing…"; }
  out.innerHTML = `<div class="ai-loading">Reviewing your work against the claim file…</div>`;
  const extra = typeof cfg.extra==="function" ? cfg.extra() : "";
  try{
    const report = await runRubricEvaluation(cfg.exercise || cfg.label,
      `PD CLAIM FILE (Angela Carter · PD-AC-2026-014):\n${CLIENT_DOSSIER_MD}\n\nEXERCISE CONTEXT:\n${cfg.context}${extra?`\n\nTRAINEE'S EARLIER SELECTIONS:\n${extra}`:""}`,
      text, cfg.criteria);
    out.innerHTML = renderEvaluationReport(report, day);
    await bumpPracticeProgress(tool, report.totalScore);
  }catch(e){ out.innerHTML = renderAiErrorBlock(e, "Couldn't review this yet"); }
  if(btn){ btn.disabled = false; btn.textContent = "Get AI review"; }
};

/* ================================================================
   THE SKILL BUILDERS — one per day, all on the Angela Carter PD file
   ================================================================ */
const TOOLS = {};
const days = (n)=> ({unit:"days", tol:0, answer:n});

/* ---------- DAY 1 · Claim Setup Challenge ---------- */
TOOLS.pdSetup1 = ()=>[
  {label:"Intake Packet Audit", html: part("A. Intake Packet Audit",
    "Angela Carter's PD file opened this morning. Before you open a single claim, verify the intake against the documents — not against the intake sheet's own summary. Make a call on every row.",
    scenario(`<b>Scenario:</b> Monday 09/21/2026. Angela signed the retainer at 11:05 AM (BI and PD). Her 2022 RAV4 was rear-ended on Friday and is sitting at a tow yard. She has no car, two kids to get to school, and Crestline Mutual has called her twice.`)
    + docPacket(["AC01","AC02","AC03","AC04","AC05","AC08","AC09","AC10","AC12"], "Intake packet")
    + flagTable("pdSetup1:flags", [
      {item:"Date & time of loss", shows:"09/18/2026 about 5:40 PM on the intake; 17:40 on the police report; towed in at 18:25.", answer:"OK", why:"Consistent across every source."},
      {item:"VIN", shows:"Intake sheet and tow invoice: TRNG4RAV4XLE22041 · registration, police report, Harbor Point dec page and the VIN-label photo: TRNG4RAV4XLE22014.", answer:"Inconsistent", why:"The registration is the source of truth — use …22014 on every claim, fix the intake, and ask A-1 to correct its invoice."},
      {item:"Trim & mileage", shows:"Intake: trim “not sure, the nicer one?”, mileage “about 28,000”. No odometer or window-sticker document in the packet yet.", answer:"Needs follow-up", why:"Trim and mileage decide a total-loss value — get the odometer photo and the window sticker now, while the car is reachable."},
      {item:"Owner & lienholder", shows:"Registration: owner Angela Carter; lienholder Riverbank Auto Finance, loan RAF-5530981. No payoff letter.", answer:"Needs follow-up", why:"Ownership is confirmed, but request the payoff letter now — every total loss needs it and it takes days."},
      {item:"Driver vs named insured", shows:"Police report: driver Kevin Hale, owner Linda Hale. Crestline dec page: named insured Linda Hale; listed drivers Linda and Kevin Hale.", answer:"OK", why:"Kevin is a listed driver on the owner's policy — the Explorer's policy is primary."},
      {item:"At-fault policy period", shows:"Crestline dec page (copy from the scene): 03/01/2026 – 09/01/2026. Date of loss: 09/18/2026.", answer:"Needs follow-up", why:"That term ended before the crash. Confirm with Crestline that the policy renewed and was in force on 09/18 — in writing."},
      {item:"Liability evidence", shows:"RPPD-26-091844: Kevin cited for Following Too Closely; witness Tom Nguyen (555) 390-1142 says Angela was stopped at the red.", answer:"OK", why:"Strong — send it to Crestline today; it's what decides liability."},
      {item:"Vehicle location", shows:"A-1 Metro Towing & Storage since 09/18 at $65 per day. No release authorization on file.", answer:"Needs follow-up", why:"Storage runs every day — get Angela's authorization and move the car to her shop."},
      {item:"Recorded-statement request", shows:"Crestline's acknowledgment asks for a recorded statement; Crestline also called Angela twice.", answer:"Needs follow-up", why:"She's represented: the LOR stops direct contact, and any statement request goes to the attorney."},
      {item:"Angela's own coverage", shows:"Harbor Point dec page: term 06/15–12/15/2026 · collision $500 · rental $40/day up to $1,200.", answer:"OK", why:"In force on the date of loss — and it has rental reimbursement, which is the plan while liability is pending."},
      {item:"Injuries", shows:"Neck and back pain; urgent care on 09/19.", answer:"Needs follow-up", why:"Not PD — route it to Rachel Owens (BI) today, with Harbor Point's $5,000 MedPay."},
      {item:"Rental", shows:"No rental. Crestline won't authorize one until it decides liability.", answer:"Missing", why:"Angela needs a car today — use her Harbor Point rental coverage through a first-party claim."}
    ], ["OK","Missing","Inconsistent","Needs follow-up"]))},
  {label:"Claims & Actions Today", html: part("B. Which claims do you open, and what do you do today?",
    "Select everything a PD Specialist should do on 09/21. Leave out anything that is wrong, premature, or someone else's decision.",
    checklist("pdSetup1:actions", [
      {t:"Open the third-party PD claim with Crestline Mutual under Linda Hale's policy and send the letter of representation.", ok:true, why:"Kevin was cited and there's a witness — the at-fault PD coverage should pay the car with no deductible."},
      {t:"Open a first-party claim with Harbor Point so Angela can use her $40/day rental reimbursement while Crestline investigates.", ok:true, why:"Gets her mobile today; Crestline takes over once liability is accepted and Harbor Point recovers its days."},
      {t:"Send Crestline the police report number, the citation and Tom Nguyen's contact to support liability.", ok:true, why:"Evidence moves liability decisions."},
      {t:"Get Angela's authorization and move the RAV4 from A-1 to Riverside Collision Center (her choice of shop).", ok:true, why:"Stops the $65/day storage clock and puts the car where it'll be inspected."},
      {t:"Request a payoff letter from Riverbank Auto Finance.", ok:true, why:"Request it early — a total loss can't be paid out without it."},
      {t:"Flag Angela's injuries, Harbor Point's MedPay and Crestline's $25,000/$50,000 BI limits to BI Case Manager Rachel Owens.", ok:true, why:"You spot them; the BI team handles them."},
      {t:"Open an uninsured motorist property damage (UMPD) claim with Harbor Point.", ok:false, why:"Kevin is insured — UMPD doesn't apply."},
      {t:"File the car under Harbor Point collision today and have Angela pay the $500 deductible.", ok:false, why:"Not yet — liability looks clear, and the third-party claim pays with no deductible. Collision is the backup if Crestline denies or stalls."},
      {t:"Call Crestline back with Angela on the line so she can give the recorded statement and speed things up.", ok:false, why:"A represented client's statement is the attorney's decision."},
      {t:"Tell Riverside to start the repairs now so Angela gets her car back sooner.", ok:false, why:"No repairs before an inspection and an approved estimate."},
      {t:"Use the VIN on the tow invoice for both claims — it's the most recent document.", ok:false, why:"The tow invoice VIN is transposed; the registration is the source of truth."}
    ], "Check my plan"))},
  {label:"First Call & Claim Setup Note", html: part("C. The first carrier call and the claim setup note",
    "Practice the call in the Call Simulator, then write the CMS note for the claim setup exactly as it goes in the file.",
    scenario(`<b>What the calls gave you (09/21):</b> Crestline claim <b>CMI-26-0918-4471</b>, PD adjuster <b>Derek Lawson</b>, (555) 640-2280 ext 418, dlawson@crestlinemutual.example. Policy CMI-PA-7730215 <b>renewed 09/01/2026–03/01/2027</b> (confirmed by phone; written confirmation requested). Kevin Hale is a listed driver. Liability <b>under investigation</b> — Kevin now says Angela “stopped short on a yellow”; decision expected within 3 business days of the police report. No rental until liability. Harbor Point first-party claim <b>HPI-26-55012</b> (adjuster Nicole Ferris) opened for rental: midsize SUV, Metro Car Rental, $40/day direct bill, pickup today 3:30 PM. A-1 will release the car to Riverside on 09/23 with Angela's signed authorization.`)
    + toolStep("calls", "pdSetup1:call", "Place the <b>Property Damage</b> pack's <b>“Open the Third-Party PD Claim”</b> call (📋 Claim Setup line): get the claim number, the adjuster, coverage on the date of loss and the liability status — and handle the recorded-statement request. Log your score here.")
    + aiTask("pdSetup1:note", {
      label:"Your claim setup note (as it will read in the CMS)",
      exercise:"Claim Setup Challenge — day-one claim setup note",
      rows:190,
      context:"Day one (09/21/2026) of Angela Carter's PD claim. The trainee audited the intake (VIN mismatch: intake/tow invoice …22041 vs registration …22014; trim and mileage unknown; expired Crestline dec page 03/01–09/01/2026; car at A-1 at $65/day; recorded-statement requests; injuries; no rental) and made the first calls: Crestline claim CMI-26-0918-4471, adjuster Derek Lawson ext 418, renewal 09/01/2026–03/01/2027 confirmed by phone, Kevin a listed driver, liability under investigation (decision expected within 3 business days of the police report), no rental until liability; Harbor Point claim HPI-26-55012 for rental ($40/day, midsize SUV, Metro Car Rental direct bill, pickup 3:30 PM); A-1 releasing to Riverside 09/23.",
      criteria:"A strong note: (1) both claim numbers, adjusters and contact details; (2) coverage status — renewal confirmed for the date of loss, written confirmation requested; (3) liability status, what Crestline is waiting for, the evidence sent (police report, citation, witness) and the decision date; (4) the rental plan (Harbor Point $40/day now, switch to Crestline once accepted) and the pickup; (5) the vehicle move (A-1 → Riverside, 09/23) and the storage rate; (6) the corrected VIN …22014 and the request to fix the tow invoice; (7) LOR sent, recorded-statement request routed to the attorney, no direct contact; (8) injuries/MedPay/low BI limits flagged to Rachel Owens; (9) follow-up tasks with dates (liability decision, payoff letter, odometer/window-sticker photos, vehicle move). Penalize invented facts, value predictions, agreeing to a recorded statement, or no follow-up dates."
    }))},
  {label:"Client Call & the CMS", html: part("D. The day-one client call — then build the file in the CMS",
    "Call Angela with the plan. Then put the whole claim into the CMS so anyone on the team could pick it up tomorrow.",
    `<div style="margin-top:4px">${renderCrisisRoleplaySection("pdSetup1", "Live call — the AI plays Angela (or the Crestline adjuster: pick the scenario at the top)")}</div>`
    + cmsStep("pdSetup1:cms", "Create Angela Carter's PD file in the CMS: client and <b>vehicle</b> (2022 RAV4, VIN <b>…22014</b>, plate 8KTR512), both carriers with claim numbers and adjusters, the at-fault driver <b>and</b> owner, the lienholder, A-1, Riverside and Metro Car Rental. Upload the packet under <b>PD</b> (police report under <b>Police</b>). Add Tasks: liability decision (09/24), vehicle move (09/23), payoff letter, odometer and window-sticker photos, rental check. Add your claim setup note as a <b>Note</b>. Save and log the Case ID."))}
];

/* ---------- DAY 2 · Coverage Spotter ---------- */
TOOLS.pdCoverage2 = ()=>[
  {label:"Which Coverage Pays?", html: part("A. Send every loss to the coverage that pays it",
    "Read both declarations pages and Crestline's 09/24 letter. For each item, pick the coverage that pays it (or who handles it).",
    docPacket(["AC08","AC09","AC11"], "Both dec pages and the liability letter")
    + sorter("pdCoverage2:sort", [
      {t:"The RAV4 itself (repair or total loss) — liability accepted 100% on 09/24", z:"Crestline PD liability", why:"Third-party PD coverage, no deductible, $50,000 limit."},
      {t:"Rental 09/21–09/23, while liability was under investigation", z:"Harbor Point rental reimbursement", why:"Angela's own $40/day coverage bridged the gap."},
      {t:"Rental from 09/24 (after liability was accepted)", z:"Crestline PD liability", why:"Like-kind rental at $45/day, direct bill."},
      {t:"A-1 tow $325 and storage $390", z:"Crestline PD liability", why:"Reasonable tow and storage are third-party PD damages."},
      {t:"Child car seat $289.99", z:"Crestline PD liability", why:"Personal property damaged in the crash."},
      {t:"Harbor Point's $120 for the three rental days", z:"Harbor Point subrogates from Crestline", why:"The first carrier recovers what it paid."},
      {t:"Angela's urgent care bill", z:"Not PD — route to the BI team", why:"Medical bills (and Harbor Point's MedPay) belong to the BI file."},
      {t:"Angela's two days of missed work", z:"Not PD — route to the BI team", why:"Lost wages are a BI damage."},
      {t:"IF Crestline had denied liability: the RAV4", z:"Harbor Point collision", why:"Collision pays regardless of fault (minus $500), then subrogates."},
      {t:"IF Kevin had been uninsured: the RAV4 (worth about $30,000)", z:"Harbor Point collision", why:"UMPD caps at $3,500 — collision pays ACV − $500."}
    ], ["Crestline PD liability","Harbor Point rental reimbursement","Harbor Point collision","Harbor Point UMPD","Harbor Point subrogates from Crestline","Not PD — route to the BI team"], "Loss / item"))},
  {label:"Verify the Coverage", html: part("B. Verify what the policies really say",
    "Coverage verification is more than “there's a policy.” Make a call on every line.",
    flagTable("pdCoverage2:verify", [
      {item:"Crestline policy period", shows:"Dec page from the scene: 03/01/2026 – 09/01/2026. Crash: 09/18/2026.", answer:"Confirm with the carrier", why:"Expired term — Crestline's 09/24 letter confirms the renewal 09/01/2026 – 03/01/2027."},
      {item:"Kevin Hale", shows:"Listed household driver on Linda Hale's policy; no excluded drivers.", answer:"Confirmed", why:"The driver is covered under the owner's policy."},
      {item:"2015 Ford Explorer", shows:"Listed on the Crestline policy by VIN.", answer:"Confirmed", why:"The vehicle in the crash is on the policy."},
      {item:"Crestline BI limits", shows:"$25,000 each person / $50,000 each accident.", answer:"Red flag — route it", why:"Low BI limits — Angela's UIM ($50,000/$100,000) may be needed. Tell the BI team today."},
      {item:"Crestline PD limit", shows:"$50,000 each accident; Angela is the only other vehicle.", answer:"Confirmed", why:"Enough for this loss (vehicle + rental + tow/storage + car seat ≈ $36,000)."},
      {item:"Harbor Point UMPD", shows:"$3,500, $250 deductible — at-fault uninsured or unidentified only.", answer:"Doesn't apply", why:"Kevin is insured."},
      {item:"Harbor Point MedPay", shows:"$5,000 each person.", answer:"Red flag — route it", why:"A medical coverage — the BI team uses it."},
      {item:"Harbor Point GAP", shows:"Not purchased. Loan payoff ≈ $19,850.", answer:"Doesn't apply", why:"The car is worth far more than the loan — no gap to cover."},
      {item:"Harbor Point rental reimbursement", shows:"$40 per day / $1,200 maximum.", answer:"Confirmed", why:"Spotted and used 09/21–09/23."},
      {item:"Crestline's liability decision", shows:"Letter 09/24: 100% accepted after the police report and the witness.", answer:"Confirmed", why:"In writing — switch the rental and set up the inspection."}
    ], ["Confirmed","Confirm with the carrier","Red flag — route it","Doesn't apply"]))},
  {label:"What If?", html: part("C. What if the file looked different?",
    "The same skills on five different files. Pick the best path for each.",
    flagTable("pdCoverage2:whatif", [
      {item:"1 · Hit-and-run", shows:"The other car drove off; no plate, no witness. The client has collision ($500 ded) and UMPD that requires an identified vehicle.", answer:"Client's collision", why:"UMPD doesn't cover an unidentified vehicle here — collision is the path."},
      {item:"2 · Uninsured at-fault", shows:"The at-fault driver is identified but uninsured. The car is worth $4,000; repairs are $3,200. The client has UMPD $3,500 ($250 ded) and collision ($1,000 ded).", answer:"Client's UMPD", why:"UMPD pays $2,950 ($3,200 − $250); collision would pay only $2,200."},
      {item:"3 · Clean third-party claim", shows:"Liability accepted 100%; the at-fault PD limit is $50,000; the client's car is worth $22,000.", answer:"Third-party PD claim", why:"No deductible, enough limit."},
      {item:"4 · Excluded driver", shows:"The at-fault carrier denies coverage: the driver is named as an excluded driver on the owner's policy.", answer:"Client's collision + escalate to the attorney", why:"No at-fault coverage; keep the client moving and get the denial to the attorney."},
      {item:"5 · Limits too low", shows:"The at-fault PD limit is $25,000, three cars were damaged, and your client's car alone is worth $34,000.", answer:"Client's collision + escalate to the attorney", why:"The limit can't cover it; collision pays the car and the attorney handles the excess and the other claimants."}
    ], ["Third-party PD claim","Client's collision","Client's UMPD","Client's collision + escalate to the attorney","Wait for the adjuster"]))},
  {label:"Coverage Memo", html: part("D. The coverage memo",
    "Write the coverage memo for the handling attorney (Michael Grant) and the BI Case Manager (Rachel Owens). They should be able to act on it without opening the dec pages.",
    toolStep("calls", "pdCoverage2:call", "Practice first: the <b>Property Damage</b> pack's <b>🛡 Coverage &amp; Liability</b> line — “Verify the At-Fault Policy” and “Spot the Client's Coverage”. Log your best score here.")
    + aiTask("pdCoverage2:memo", {
      label:"Your coverage memo (to Michael Grant, cc Rachel Owens)",
      exercise:"Coverage Spotter — coverage memo",
      rows:190,
      context:"Angela Carter PD claim after Crestline's 09/24 liability acceptance. Crestline (Linda Hale; Kevin Hale listed driver): renewed term 09/01/2026–03/01/2027 confirmed in writing; BI $25,000/$50,000; PD $50,000; no collision/rental on that policy. Harbor Point (Angela): collision $500, comprehensive $250, rental $40/$1,200 (used 09/21–09/23 = $120), towing $100, UMPD $3,500/$250 (n/a), MedPay $5,000, UIM $50,000/$100,000, no GAP (equity), loss payee Riverbank. Estimated PD exposure ≈ $36,000.",
      criteria:"BLUF first (coverage confirmed, liability accepted, PD path = Crestline third-party). Lists what pays each loss (vehicle, rental before/after 09/24, tow/storage, car seat) and Harbor Point's $120 subrogation. Flags for the BI team: Crestline's low BI limits ($25,000/$50,000) + Angela's UIM ($50,000/$100,000) and MedPay ($5,000). States what doesn't apply and why (UMPD, GAP, Crestline MedPay). Notes the resolved red flag (expired dec page → renewal confirmed in writing). PD limit vs exposure. Next steps with dates. Penalize wrong coverages, missing the UIM flag, or legal conclusions/advice."
    }))}
];

/* ---------- DAY 3 · Rental, Storage & Repair Desk ---------- */
TOOLS.pdRental3 = ()=>[
  {label:"Rental Math", html: part("A. Rental math: who pays which days?",
    "Work it from the rental agreement and Crestline's letters. Days count both the first and the last day.",
    docPacket(["AC11","AC13","AC16"], "Rental agreement and Crestline's letters")
    + calc("pdRental3:rental", [
      Object.assign({label:"Days Harbor Point paid (09/21 – 09/23)"}, days(3)),
      {label:"Harbor Point's rental payment — its subrogation claim ($)", answer:120},
      Object.assign({label:"Days on Crestline's direct bill (09/24 through the end date, 10/08)"}, days(15)),
      {label:"Crestline pays for the rental ($45/day)", answer:675},
      {label:"Angela's upgrade cost ($58 − $45 per day)", answer:195},
      {label:"If Angela keeps the car through 10/12 with no extension, she owes ($58/day)", answer:232, hint:"10/09–10/12 = 4 days × $58"}
    ], `<div class="pd-scn" style="margin:0"><b>Why it matters:</b> tell Angela her costs <i>before</i> they happen — the $13/day upgrade, fuel, and any day after the end date — and ask for extensions before the end date, in writing.</div>`))},
  {label:"Who Pays Which Charge?", html: part("B. Who pays each charge?",
    "The rental counter, the tow yard and the carrier all have rules. Sort each charge.",
    sorter("pdRental3:who", [
      {t:"$45/day base rate, 09/24 – 10/08", z:"Crestline pays", why:"The authorized like-kind rate for the authorized period."},
      {t:"The $13/day difference for the standard SUV upgrade", z:"Angela pays", why:"Upgrades are the renter's choice and cost."},
      {t:"Taxes and fees on the authorized $45 rate", z:"Crestline pays", why:"They come with the authorized rate."},
      {t:"Fuel at return", z:"Angela pays", why:"Fuel is the renter's responsibility."},
      {t:"A counter damage waiver at $18/day (if she had bought it)", z:"Angela pays", why:"Optional; her own policy extends to rentals — confirmed with her agent."},
      {t:"Midsize SUV 09/21 – 09/23 at $40/day", z:"Harbor Point paid (recovers by subrogation)", why:"First-party rental while liability was pending."},
      {t:"Days after 10/08 without an approved extension", z:"Angela pays", why:"Outside the authorization."},
      {t:"A-1's tow ($325) and storage ($390)", z:"Crestline pays", why:"Reasonable tow and storage — paid directly to A-1 on 09/28."}
    ], ["Crestline pays","Angela pays","Harbor Point paid (recovers by subrogation)"], "Charge"))},
  {label:"Storage & the Estimate", html: part("C. The storage bill and the estimate review",
    "First the storage math — then review Crestline's field estimate line by line against the shop's findings.",
    docPacket(["AC12","AC14","AC15","AC06"], "Tow invoice, estimate, supplement and window sticker")
    + calc("pdRental3:storage", [
      Object.assign({label:"Storage days at A-1 (09/18 – 09/23, both days counted)"}, days(6)),
      {label:"Storage charge ($65/day)", answer:390},
      {label:"Tow + storage total", answer:715},
      {label:"What storage alone would have cost if the car had stayed at A-1 until the total-loss decision on 10/01 (both days counted)", answer:910, hint:"09/18 – 10/01 = 14 days × $65"}
    ])
    + flagTable("pdRental3:estimate", [
      {item:"Rear bumper reinforcement", shows:"Aftermarket (A/M) on a 2022 with 28,412 miles.", answer:"Ask for OEM", why:"A structural part on a late-model car — the strongest OEM argument."},
      {item:"Rear bumper cover", shows:"Aftermarket (A/M).", answer:"Ask for OEM", why:"Fit and finish on a 2022 — and it houses the blind-spot sensors."},
      {item:"Tail lamps LH / RH", shows:"OEM.", answer:"OK", why:"Already OEM."},
      {item:"Labor rate", shows:"$58/hr on the estimate; Riverside's posted rate is $72/hr.", answer:"Shop & adjuster to resolve", why:"The shop's estimator negotiates the rate; you keep it moving and documented."},
      {item:"Pre- and post-repair scans", shows:"Not on the estimate.", answer:"Missing — add to the supplement", why:"Standard on late-model cars; confirms every system works."},
      {item:"Blind-spot / rear cross-traffic radar calibration", shows:"Not on the estimate; the window sticker shows a blind-spot monitor.", answer:"Missing — add to the supplement", why:"Rear bumper work means the radar must be recalibrated — a safety item."},
      {item:"Paint & materials", shows:"22.0 refinish hours @ $42.", answer:"OK", why:"Matches the refinish hours."}
    ], ["OK","Ask for OEM","Missing — add to the supplement","Shop & adjuster to resolve"]))},
  {label:"Email the Adjuster", html: part("D. Email Derek Lawson",
    "It's Wednesday 09/30. Riverside sent Supplement S1 ($15,379.65) yesterday; repairs are now $24,860.00. Write the email to the adjuster — then practice the call.",
    aiTask("pdRental3:email", {
      label:"Your email to Derek Lawson (Crestline)",
      exercise:"Rental, Storage & Repair Desk — supplement and rental email",
      rows:170,
      context:"Crestline claim CMI-26-0918-4471. Initial field estimate $9,480.35 (A/M bumper cover and reinforcement, $58/hr, no scans or calibration). Riverside Supplement S1 sent 09/29: buckled LH rear frame rail, floor pan, quarter panel; OEM parts; scans; blind-spot radar calibration; labor-rate difference; total repairs $24,860.00. Rental on Crestline direct bill since 09/24 at $45/day, authorized until repairs are complete (or 3 days after a total-loss offer). Training state total-loss threshold: 75% of ACV. The car is at Riverside.",
      criteria:"Clear subject with the claim number. Asks for review/reinspection of S1 by a specific date. Supports the OEM request for the structural reinforcement and bumper cover on a 2022, the scans and the radar calibration (safety), and asks the adjuster to resolve the labor rate with the shop. Raises the total-loss question (repairs $24,860 vs likely ACV — at or over 75%) and asks when the valuation will be done. Confirms the rental continues while the supplement is pending (the delay is the approval, not the client). Professional, specific, no threats, no legal advice. Penalize wrong numbers or accepting the rental cut-off."
    })
    + `<div style="margin-top:14px">${renderCrisisRoleplaySection("pdRental3", "Live call — the rental counter or the supplement (pick the scenario at the top)")}</div>`
    + toolStep("calls", "pdRental3:call", "More practice: the <b>Property Damage</b> pack's <b>🚙 Rental, Tow &amp; Shop</b> line — the rental authorization, the rental counter, the tow-yard release and the supplement stall. Log your best score here."))}
];

/* ---------- DAY 4 · Total Loss Valuation & Counter ---------- */
TOOLS.pdTotal4 = ()=>[
  {label:"Audit the Valuation", html: part("A. Audit Crestline's valuation, line by line",
    "Crestline offered $27,221.63 on 10/05. Check every line of valuation report VR-26-18840 against the file.",
    docPacket(["AC17","AC16","AC06","AC05"], "Valuation, offer letter, window sticker and photos")
    + flagTable("pdTotal4:audit", [
      {item:"Loss vehicle trim & options", shows:"“2022 RAV4 XLE AWD” — no options listed.", answer:"Wrong — correct it", why:"Window sticker: XLE Premium AWD with the Weather Package."},
      {item:"Mileage", shows:"34,812.", answer:"Wrong — correct it", why:"Odometer photo (09/21): 28,412."},
      {item:"VIN", shows:"TRNG4RAV4XLE22014.", answer:"OK", why:"Matches the registration."},
      {item:"Comparable 1", shows:"2022 XLE AWD, 41,300 miles, 22 miles away.", answer:"Not comparable — reject", why:"Lower trim than the XLE Premium, and 13,000 more miles."},
      {item:"Comparable 2", shows:"2022 LE FWD, 36,900 miles.", answer:"Not comparable — reject", why:"Two trims lower and a different drivetrain."},
      {item:"Comparable 3", shows:"2021 XLE AWD, 52,000 miles, 160 miles away.", answer:"Not comparable — reject", why:"Different year, high miles, outside the local market."},
      {item:"Condition adjustment", shows:"−$620, “interior below average” — no inspector notes attached.", answer:"Unsupported — remove", why:"Photo 9 shows a clean interior; ask for their basis."},
      {item:"Prior damage deduction", shows:"−$750, “rear bumper scuffs.”", answer:"Unsupported — remove", why:"That's the damage from this rear-end crash."},
      {item:"Sales tax", shows:"8.25%.", answer:"OK", why:"The training state's rate."},
      {item:"Title, registration & fees", shows:"$0.00.", answer:"Wrong — correct it", why:"The training state requires them: $356.00."}
    ], ["OK","Wrong — correct it","Not comparable — reject","Unsupported — remove"]))},
  {label:"Pick the Comparables", html: part("B. Pick your comparables",
    "The PD team pulled five local listings. Select only the ones a total-loss adjuster must accept as comparable.",
    docPacket(["AC18"], "Comparable listings")
    + checklist("pdTotal4:comps", [
      {t:"A — 2022 RAV4 XLE Premium AWD, Weather Package, 27,950 miles, 18 miles away, $31,495", ok:true, why:"Same year, trim, drivetrain and package; similar miles; local."},
      {t:"B — 2022 RAV4 XLE Premium AWD, Weather Package, 30,210 miles, 25 miles away, $30,900", ok:true, why:"A true comparable."},
      {t:"C — 2022 RAV4 XLE Premium AWD, Weather Package, 26,480 miles, 41 miles away, $31,150", ok:true, why:"A true comparable."},
      {t:"D — 2022 RAV4 Limited AWD, 29,100 miles, 12 miles away, $34,800", ok:false, why:"Higher trim — using it would discredit the counter."},
      {t:"E — 2020 RAV4 XLE Premium AWD, 28,000 miles, 30 miles away, $27,300", ok:false, why:"Different model year."},
      {t:"Crestline's comparable 1 — 2022 XLE AWD, 41,300 miles", ok:false, why:"Lower trim and far higher mileage."}
    ], "Check my comparables"))},
  {label:"Build the Counter", html: part("C. Build the counter",
    "Use your three comparables. Round each line to the cent.",
    calc("pdTotal4:math", [
      {label:"ACV — the average of your three comparables", answer:31181.67},
      {label:"Sales tax at 8.25%", answer:2572.49},
      {label:"Title, registration & plate-transfer fees", answer:356},
      {label:"Total counter", answer:34110.16},
      {label:"Difference from Crestline's $27,221.63 offer", answer:6888.53},
      {label:"Riverbank payoff (good through 10/15)", answer:19850.42},
      {label:"Angela's equity at your counter (total − payoff)", answer:14259.74},
      {label:"Repairs ($24,860) ÷ your ACV — is it still a total loss? (%)", answer:79.7, tol:0.2, unit:"%", hint:"79.7% — over the 75% threshold, so yes"}
    ]))},
  {label:"Counter & Negotiate", html: part("D. Write the counter — then negotiate it",
    "Send the counter to Priya Shah in writing, then take the call. The rental ends 10/08 unless you get an extension.",
    aiTask("pdTotal4:letter", {
      label:"Your counter-offer letter to Priya Shah (Crestline total loss)",
      exercise:"Total Loss Valuation & Counter — counter-offer letter",
      rows:200,
      context:"Crestline claim CMI-26-0918-4471. Offer 10/05: ACV $25,147.00 + tax $2,074.63 = $27,221.63 (VR-26-18840). Errors: trim XLE (is XLE Premium AWD + Weather Package), mileage 34,812 (is 28,412), comps 1–3 not comparable, condition −$620 and prior damage −$750 unsupported, fees $0 (should be $356). LSH comps A $31,495, B $30,900, C $31,150 → ACV $31,181.67; tax $2,572.49; fees $356.00; counter $34,110.16. Payoff $19,850.42 good through 10/15. Rental ends 10/08 under Crestline's 3-days-after-offer rule. Child car seat $289.99 receipt on file.",
      criteria:"Line-by-line audit (each error, the proof/exhibit, the correction); the three comparables and why D and E were excluded; the counter math ($31,181.67 + $2,572.49 + $356.00 = $34,110.16); asks for the valuation to be re-run and a written response by a date; requests a rental extension because the offer used the wrong vehicle (not a fair offer); keeps the car seat on the claim; asks that the payoff go to Riverbank and the balance to Angela; states that any acceptance is the client's decision through the attorney. Professional tone. Penalize wrong math, using D or E, or accepting/threatening."
    })
    + `<div style="margin-top:14px">${renderCrisisRoleplaySection("pdTotal4", "Live negotiation — the AI plays Priya Shah")}</div>`
    + toolStep("calls", "pdTotal4:call", "Then the scored version: the <b>Property Damage</b> pack's <b>💵 Negotiation &amp; Total Loss</b> line — “Negotiate the Total Loss”, Angela's “My Rental Ends Thursday” call and “The Payoff Call”. Log your best score here."))}
];

/* ---------- DAY 5 · Release Review & Close-Out ---------- */
TOOLS.pdClose5 = ()=>[
  {label:"Mark Up the Release", html: part("A. Mark up Crestline's release",
    "Angela authorized $33,534.63 on 10/09 (through Michael Grant). Crestline's release arrived 10/12. Make a call on every clause before it goes to the attorney.",
    docPacket(["AC19","AC21","AC20"], "The draft release, the agreement and the car seat receipt")
    + flagTable("pdClose5:release", [
      {item:"Title", shows:"“RELEASE OF ALL CLAIMS.”", answer:"Revise", why:"It must be a Property Damage Release."},
      {item:"§1 scope", shows:"Releases “any and all claims … including bodily injury, medical expenses, known or unknown injuries.”", answer:"Strike", why:"A PD payment never releases bodily injury — this could end Angela's injury claim."},
      {item:"§1 releasees", shows:"Linda Hale, Kevin Hale and Crestline Mutual.", answer:"OK", why:"The right parties for the PD claim."},
      {item:"§1 amount", shows:"$33,534.63.", answer:"OK", why:"Matches the 10/09 agreement for the vehicle."},
      {item:"§2 items", shows:"The RAV4 only — the child car seat ($289.99) isn't listed.", answer:"Revise", why:"Anything not listed may be waived — add the car seat."},
      {item:"§3 payment", shows:"One check payable jointly to Angela Carter and Riverbank Auto Finance for $33,534.63.", answer:"Revise", why:"Pay Riverbank the updated payoff directly and Angela the balance — a joint check stalls."},
      {item:"§4 indemnity", shows:"Angela indemnifies and holds harmless the releasees from any lien or subrogation interest.", answer:"Escalate to the attorney", why:"A legal term — the attorney decides."},
      {item:"§5 confidentiality", shows:"Angela keeps the terms and amount confidential.", answer:"Escalate to the attorney", why:"Unusual in a PD release — the attorney decides."},
      {item:"§6 title & keys", shows:"Sign the title documents and power of attorney and deliver the keys on payment.", answer:"OK", why:"Standard for a total loss."},
      {item:"§7 entire agreement", shows:"Entire agreement; not an admission of liability.", answer:"OK", why:"Standard."}
    ], ["OK","Revise","Strike","Escalate to the attorney"]))},
  {label:"Route the Payment", html: part("B. Route the payment",
    "Crestline will issue payment on 10/20. The payoff letter was good through 10/15.",
    docPacket(["AC07","AC21"], "Payoff letter and settlement confirmation")
    + calc("pdClose5:pay", [
      {label:"Riverbank payoff on 10/20 ($19,850.42 + $3.10/day after 10/15)", answer:19865.92},
      {label:"Angela's vehicle equity ($33,534.63 − payoff)", answer:13668.71},
      {label:"Total to Angela (equity + car seat $289.99)", answer:13958.70},
      {label:"Paid to A-1 (tow + storage)", answer:715},
      {label:"Paid to Metro Car Rental by Crestline", answer:675},
      {label:"Harbor Point's subrogation recovery", answer:120},
      {label:"Everything Crestline pays on the PD claim (vehicle + car seat + tow/storage + rental + Harbor Point)", answer:35334.62, hint:"Well within the $50,000 PD limit"}
    ]))},
  {label:"Close-Out Checklist", html: part("C. Can you close the PD file?",
    "Select everything that must be true (and documented) before the PD file closes. Leave out anything that doesn't belong.",
    checklist("pdClose5:close", [
      {t:"Riverbank confirms it received the payoff and releases the lien and title.", ok:true, why:"The loan must be fully paid — and short payments come back."},
      {t:"Angela confirms she received $13,958.70.", ok:true, why:"Confirm, don't assume."},
      {t:"The rental is returned and the final bill reconciled (Angela's $195 upgrade is hers).", ok:true, why:"No surprise bills after closing."},
      {t:"Harbor Point knows Crestline accepted liability; its $120 subrogation is tracked.", ok:true, why:"The first-party claim closes cleanly."},
      {t:"The signed PD-only release and the attorney's approval are saved in the CMS.", ok:true, why:"The record that the release was reviewed."},
      {t:"Photos, estimates, the supplement, the valuation and the coverage facts went to Rachel Owens (BI).", ok:true, why:"PD evidence supports the injury claim."},
      {t:"A closing note is written in the CMS.", ok:true, why:"Anyone can see how the file ended."},
      {t:"Send Angela the bodily injury release with the PD release so everything is signed at once.", ok:false, why:"The BI claim is separate and still open."},
      {t:"Close the file as soon as Crestline says the checks were mailed.", ok:false, why:"Wait for confirmations from the lender and the client."},
      {t:"Tell Angela that settling the car also settles her injury claim.", ok:false, why:"Wrong — and it's the opposite of what the PD-only release protects."}
    ], "Check my close-out"))},
  {label:"Closing Note & BI Handoff", html: part("D. The closing note and the BI handoff",
    "Practice the release call, then write the closing note (it goes in the CMS and to Rachel Owens).",
    `<div style="margin-top:4px">${renderCrisisRoleplaySection("pdClose5", "Live call — the AI plays Derek Lawson pushing the standard release")}</div>`
    + aiTask("pdClose5:note", {
      label:"Your PD closing note + BI handoff",
      exercise:"Release Review & Close-Out — closing note and BI handoff",
      rows:200,
      context:"Angela Carter PD claim. Agreed 10/09: ACV $30,650.00 + tax $2,528.63 + fees $356.00 = $33,534.63 (client authority to Michael Grant 10/09). Crestline's draft release (10/12) was a Release of All Claims with BI language, indemnity, confidentiality, a joint check and no car seat — marked up to a PD-only release and approved by the attorney. Payment 10/20: Riverbank $19,865.92 (updated payoff); Angela $13,668.71 + car seat $289.99 = $13,958.70; A-1 $715 (paid 09/28); Metro Car Rental $675 (Crestline direct bill 09/24–10/08; Angela paid her $195 upgrade); Harbor Point $120 by subrogation. Evidence: photos, estimate $9,480.35, supplement $15,379.65 (frame rail, floor pan), valuation VR-26-18840 and the corrected valuation. Coverage facts for BI: Crestline BI $25,000/$50,000; Angela's UIM $50,000/$100,000 and MedPay $5,000.",
      criteria:"Closing note: totals and every payee with amounts and dates; the PD-only release and the attorney's approval; what was confirmed (lender, client, vendors) and any open item with an owner (Harbor Point's $120 subrogation). BI handoff: states the PD settled with a PD-only release and nothing about BI was discussed or released; lists the evidence sent (photos, estimate + supplement showing frame damage, valuation, total-loss decision) and why it matters (force of impact); flags the coverage facts (low Crestline BI limits, Angela's UIM and MedPay); any client statements or carrier contact the BI team should know. Penalize wrong numbers, BI language, or missing open items."
    })
    + cmsStep("pdClose5:cms", "In Angela's PD file in the CMS: upload the signed PD-only release, the payoff confirmation and the final invoices under <b>PD</b>, add your closing note as a <b>Note</b>, add a <b>Task</b> for Harbor Point's $120 subrogation follow-up (30 days), and link your BI handoff. Save and log the Case ID."))}
];
/* ---------- tool dispatch ---------- */
const _origInitTool = window.initTool;
window.initTool = function(id){
  const body = document.getElementById("toolBody"); if(!body) return;
  if(TOOLS[id]){
    toolState.wizardIndex = toolState.wizardIndex || 0;
    const parts = TOOLS[id]();
    body.innerHTML = renderToolWizard(dayOfTool(id), parts);
    if(document.getElementById("crChatWindow")) { try{ crRenderChatWindow(); }catch(e){} }
    return;
  }
  return _origInitTool(id);
};
/* the roleplay section needs toolState.cr set up before the wizard renders */
const _origRenderCr = window.renderCrisisRoleplaySection;
window.renderCrisisRoleplaySection = function(setKey, label){
  const sc = CRISIS_SCENARIO_SETS[setKey];
  if(sc && (!toolState.cr || toolState.cr.setKey!==setKey)){
    const opening = sc[0].script.split("\n")[0].replace(/^OPENING LINE[^:]*:\s*/,"").replace(/^"|"$/g,"");
    toolState.cr = {setKey, activeScenario: sc[0].id, chatHistory:[{role:"client", text: opening}]};
  }
  return _origRenderCr(setKey, label);
};
/* roleplay replies in PD Specialist terms */
window.crSendChat = async function(){
  const input = document.getElementById("crChatInput");
  const text = input.value.trim(); if(!text) return;
  if(!(await useLabAttempt(toolIdToDayId(toolState.cr.setKey), "crSendChat_"+toolState.cr.setKey))) return;
  toolState.cr.chatHistory.push({role:"ea", text}); input.value = ""; crRenderChatWindow();
  toolState.cr.chatHistory.push({role:"client", text:"…thinking…", pending:true}); crRenderChatWindow();
  const s = crCurrentScenario();
  const transcript = toolState.cr.chatHistory.filter(m=>!m.pending).map(m=>(m.role==="client"?"CALLER: ":"PD SPECIALIST: ")+m.text).join("\n");
  const prompt = `You are roleplaying the other party in a property damage (PD) claims training call at a personal-injury law firm (the client, an insurance adjuster, a rental-company agent, a tow yard, a body shop or a lender — stay consistent with whoever spoke first). Stay fully in character; no meta-commentary.

CLAIM BACKGROUND:
${CLIENT_DOSSIER_MD}

SCENARIO: ${s.title}
${s.setup}
${s.stakes}
Pressure beats to work in naturally: ${s.script}

CONVERSATION SO FAR:
${transcript}

Reply with the next line only — 1-3 sentences, realistic, emotionally true to the character. If the PD Specialist is clear, specific and backs points with documents, you may soften or agree. If they are vague, promise values, give legal advice, or give in to pressure, push harder.`;
  try{ const reply = await callAIText(prompt, 220);
    toolState.cr.chatHistory = toolState.cr.chatHistory.filter(m=>!m.pending); toolState.cr.chatHistory.push({role:"client", text: reply.trim().replace(/^["“]+|["”]+$/g,"")});
  }catch(e){ toolState.cr.chatHistory = toolState.cr.chatHistory.filter(m=>!m.pending); toolState.cr.chatHistory.push({role:"client", text:"[Connection issue — try sending again.]"}); }
  crRenderChatWindow();
};

/* ================================================================
   LESSON CARDS — render the slide's table/process/compare visual
   and the Skill Builder call-to-action on Part 1 of each topic.
   ================================================================ */
const _origLessonCard = window.renderLessonCard;
window.renderLessonCard = function(l, i, d, unused, part){
  if(!l || !l.fourPart || (!l.layout && !l.skill)) return _origLessonCard(l, i, d, unused, part);
  let extra = l.layout ? `<div class="pd-lesson-visual">${renderLessonVisual(l)}</div>` : "";
  if(l.skill){
    const t = PRACTICE_TOOLS.find(x=>x.id===l.skill.tool);
    if(t) extra += `<div class="pd-skill-cta"><div><b>🧪 Skill Builder: ${E(t.title)}</b><p>Practice this on the Angela Carter claim file${l.skill.cms?" and log your work in the CMS":""}.</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-navy btn-sm" onclick="goto('tool','${t.id}')">Open Skill Builder</button>${l.skill.cms?`<button class="btn btn-ghost btn-sm" onclick="openCms()">Open CMS</button>`:""}</div></div>`;
  }
  return _origLessonCard(Object.assign({}, l, {svgDiagram: extra}), i, d, unused, part);
};

/* ================================================================
   VIEWS: Claim Documents · Training Tools · Simulators · Handouts · Claim File
   ================================================================ */
const DOC_FILTERS = [["all","All"],["setup","Day 1–2: setup & coverage"],["repair","Day 3: rental & repairs"],["value","Day 4–5: total loss & closing"],["templates","Templates"]];
const DOC_FILTER_FOLDERS = {setup:["intake","police","vehicle","insurance"], repair:["rental","repair"], value:["totalloss","settlement"], templates:["templates"]};
window.renderCaseDocuments = function(){
  const f = state.docFilter || "all";
  const docs = PD_DOCS.filter(d=> f==="all" || (DOC_FILTER_FOLDERS[f]||[]).includes(d.folder));
  const byFolder = PD_DOC_FOLDERS.filter(fo=>fo.id!=="handouts").map(fo=>({fo, items:docs.filter(d=>d.folder===fo.id)})).filter(x=>x.items.length);
  return `<p class="eyebrow">Claim Documents</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">📁 Claim Document Library</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:78ch;margin:0 0 14px">A PD claim runs on paperwork. These are the working files for <b>Angela Carter's property damage claim</b> (2022 RAV4, rear-ended 09/18/2026). Every Skill Builder points to the exact documents it uses. Each file shows the <b>CMS upload category</b> to use when you add it to the PD file in the CMS. They are simulated training documents — and some contain deliberate errors you are expected to catch.</p>
    <div class="pd-filter">${DOC_FILTERS.map(([k,lab])=>`<button class="btn btn-sm ${f===k?"btn-navy":"btn-ghost"}" onclick="state.docFilter='${k}';render()">${lab}</button>`).join("")}
      <button class="btn btn-sm btn-ghost" onclick="openCms()">🗂 Open CMS</button></div>
    ${state.isAdmin ? `<div class="card" style="padding:12px 16px;margin-bottom:16px;border-left:4px solid var(--danger);font-size:12.8px">🔑 <b>Trainer view:</b> the red notes under each document are the audit key — planted errors and what a strong trainee should catch. Trainees don't see them.</div>` : ""}
    ${byFolder.map(({fo,items})=>`<div class="card pd-lib-folder" style="padding:14px 18px"><h3>${fo.icon} ${E(fo.label)} <span style="font-weight:500;color:var(--ink-soft);font-size:12px">(${items.length})</span></h3>
      ${items.map(d=>`<div class="pd-doc-row"><div><span class="t">${E(d.title)}</span> <span style="font-size:11px;color:var(--ink-soft)">· Day ${d.day}</span><div class="d">${E(d.desc)}</div>${state.isAdmin && d.key ? `<div class="pd-key">🔑 ${E(d.key)}</div>` : ""}</div>
        <div style="display:flex;gap:6px;align-items:center"><span class="cms">CMS: ${E(d.cms)}</span><a class="btn btn-ghost btn-sm" href="${pdDocUrl(d)}" target="_blank" rel="noopener">Open</a></div></div>`).join("")}</div>`).join("")}`;
};

window.renderTrainingTools = function(){
  const log = Object.entries(state.cmsLog||{});
  const toolTitle = (id)=> (PRACTICE_TOOLS.find(t=>t.id===id)||{}).title || id;
  const tools = PD_TOOL_DEFAULTS.map(d=>pdTool(d.id));
  return `<p class="eyebrow">Training Tools</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">🧰 LSH Training Tools</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:80ch;margin:0 0 16px">This portal is your home base. The platforms you'll use on the job are built in here: open one <b>inside the portal</b> and it stays signed in while you go back and forth between lessons and Skill Builders. You can also open it on its own in a new tab. Skill Builders tell you exactly what to do in each tool, then ask for the ID or score it gives you so your trainer can review your work.</p>
    <div class="pd-tools">${tools.map(t=>`<div class="card pd-tool${t.live?"":" soon"}">
      <div class="pd-tool-h"><span class="pd-tool-ic">${t.icon}</span><div><b>${E(t.name)}</b><div><span class="pd-badge ${t.live?"live":"soon"}">${t.live?"● Live":"Coming soon"}</span></div></div></div>
      <p>${E(t.desc)}</p>
      ${t.live?`<div class="pd-tool-act"><button class="btn btn-primary btn-sm" onclick="openTool('${t.id}')">Open in portal</button><button class="btn btn-ghost btn-sm" onclick="openTool('${t.id}','tab')">New tab ↗</button></div>
        <div class="pd-tool-url">${E(t.url.replace(/^https:\/\//,""))}</div>`
      :`<p class="pd-tool-note">Until it's live, Skill Builder steps for this tool are logged as <b>Tasks</b> in the CMS.</p>`}
    </div>`).join("")}</div>
    <div class="card" style="padding:16px 20px;margin-bottom:16px"><b style="color:var(--navy)">How the portal and the tools work together</b>
      <ol style="font-size:13px;margin:8px 0 0;padding-left:20px"><li>Learn it in the day's lessons here.</li><li>Open the Skill Builder. It gives you the claim documents and the exercise.</li><li>Do the file work in the tool. In the CMS: <b>Start a New Case</b>, key the client, vehicle and claim facts, add every party and carrier (with claim numbers and adjusters), upload each document under the <b>CMS category</b> shown in 📁 Documents (usually <b>PD</b>), and add Tasks and Notes for every follow-up. Then <b>Save Case</b> to get your permanent Case ID.</li><li>Practice the calls in the <b>Call Simulator</b> (Property Damage pack) — it scores the call and the note you write after it.</li><li>Come back and log the Case ID or score in the Skill Builder. Your trainer reviews your work.</li></ol>
      <p style="font-size:12.3px;color:var(--ink-soft);margin:10px 0 0">Signed in, but the tool asks you to sign in again inside the portal? Some browsers block sign-in inside an embedded page. Use <b>New tab ↗</b>. Your training portal stays open here.</p></div>
    <div class="card" style="padding:16px 20px;margin-bottom:16px"><b style="color:var(--navy)">My tool work log</b>
      ${log.length ? `<table class="pd-table"><thead><tr><th>Skill Builder</th><th>Tool</th><th>ID / score</th><th>Logged</th></tr></thead><tbody>${log.map(([k,v])=>`<tr><td>${E(toolTitle(v.tool||k.split(":")[0]))}</td><td>${E((pdTool(v.platform||"cms")||{}).short||"CMS")}</td><td><b>${E(v.caseId)}</b></td><td>${fmtDate(v.at)}</td></tr>`).join("")}</tbody></table>` : `<p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0">Nothing logged yet. Skill Builders will ask for your Case ID or call score.</p>`}</div>
    ${state.isAdmin ? `<div class="card" style="padding:16px 20px;border-left:4px solid var(--orange)"><b style="color:var(--navy)">Admin: tool addresses</b>
      <p style="font-size:12.8px;color:var(--ink-soft);margin:4px 0 10px">Saved for every trainee. Switch a tool to <b>Live</b> once its address works. Each tool also stays reachable on its own at its address.</p>
      ${tools.map(t=>`<div class="pd-tool-admin"><span>${t.icon} <b>${E(t.short)}</b></span>
        <input id="toolUrl_${t.id}" value="${E(t.url)}" placeholder="https://…">
        <select id="toolStatus_${t.id}"><option value="live"${t.status==="live"?" selected":""}>Live</option><option value="coming"${t.status!=="live"?" selected":""}>Coming soon</option></select></div>`).join("")}
      <button class="btn btn-navy btn-sm" style="margin-top:8px" onclick="saveToolSettings()">Save tool settings</button></div>` : ""}`;
};
window.renderCmsSimulator = window.renderTrainingTools;

/* The Call Simulator's Property Damage pack (Training-Portal: simulators/call-pack-pd.js), by line. */
const PD_CALL_LINES = [["📋","Claim Setup","3 calls"],["🛡","Coverage & Liability","3 calls"],["🚙","Rental, Tow & Shop","4 calls"],["💵","Negotiation & Total Loss","3 calls"],["✍️","Settlement & Close","3 calls"]];
window.PD_CALL_LINES = PD_CALL_LINES;
/* 🛠 Simulators: the shared simulators on the LSH Training Portal, opened for PD. */
window.renderCallSimulator = function(){
  const calls = pdTool("calls"), mail = pdTool("email");
  const card = (t, extra)=> `<div class="card pd-tool${t.live?"":" soon"}">
      <div class="pd-tool-h"><span class="pd-tool-ic">${t.icon}</span><div><b>${E(t.name.replace(/ \(LSH Training Portal\)$/,""))}</b><div><span class="pd-badge ${t.live?"live":"soon"}">${t.live?"● Live on the LSH Training Portal":"Coming soon"}</span></div></div></div>
      <p>${E(t.desc)}</p>${extra||""}
      ${t.live?`<div class="pd-tool-act"><button class="btn btn-primary btn-sm" onclick="openTool('${t.id}')">Open here</button><button class="btn btn-ghost btn-sm" onclick="openTool('${t.id}','tab')">New tab ↗</button></div>`:""}
    </div>`;
  return `<p class="eyebrow">Simulators</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">🛠 Simulators</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:80ch;margin:0 0 16px">Phone and email practice live on the <b>LSH Training Portal</b>, shared by every program. They open here already set to <b>Property Damage</b> and carrying your name and batch, so your scores reach your trainer. On calls the caller speaks: answer by voice (Chrome or Edge, allow the microphone) or by typing. Every PD call ends with the note the call requires — the claim note, the rental confirmation, the negotiation log — graded with the call.</p>
    <div class="pd-tools">${card(calls, `<div class="cl-lines-mini">${PD_CALL_LINES.map(([i,l,n])=>`<span>${i} ${E(l)} · ${n}</span>`).join("")}</div>`)}${card(mail)}</div>
    <div class="card" style="padding:14px 18px;font-size:12.8px;color:var(--ink-soft)">Want more? Live Roleplay (🔥) has the PD client, adjuster and vendor calls from the lessons, and every Skill Builder has a live call built in.${state.isAdmin?` <b>Admin:</b> results appear on the Training Portal's Simulators page when you're signed in there as admin. Addresses are set in 🧰 Tools.`:""}</div>`;
};
window.saveToolSettings = async function(){
  const out = {};
  for(const d of PD_TOOL_DEFAULTS){
    const url = ((document.getElementById("toolUrl_"+d.id)||{}).value||"").trim().replace(/\/+$/,"");
    const status = (document.getElementById("toolStatus_"+d.id)||{}).value || d.status;
    if(url && !/^https:\/\/[^\s]+$/i.test(url)){ toast(`${d.short}: enter the full https:// address.`); return; }
    if(status==="live" && !url){ toast(`${d.short}: add its address before switching it to Live.`); return; }
    out[d.id] = {url, status};
  }
  state.toolSettings = out;
  await sharedSet("settings:tools", {tools:out, at:new Date().toISOString()});
  toast("Tool settings saved for everyone."); render();
};

window.renderHandouts = function(){
  const byDay = [1,2,3,4,5].map(n=>({n, items:PD_HANDOUTS.filter(h=>h.day===n)}));
  const tpl = PD_DOCS.filter(d=>d.folder==="templates");
  return `<p class="eyebrow">Reference Library</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">📚 Handouts & Templates</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:78ch;margin:0 0 16px">One printable handout per training day, plus the working templates and checklists you'll use in the Skill Builders.</p>
    ${byDay.map(({n,items})=>`<div class="card" style="padding:14px 18px;margin-bottom:14px"><h3 style="font-size:14px;color:var(--navy);margin:0 0 6px">Day ${n} — ${E((DAYS.find(d=>d.id===n)||{}).title||"")}</h3>
      ${items.map(h=>`<div class="pd-doc-row"><span class="t">${E(h.title)}</span><a class="btn btn-ghost btn-sm" href="documents/${h.file.split("/").map(encodeURIComponent).join("/")}" target="_blank" rel="noopener">Open</a></div>`).join("")}</div>`).join("")}
    <div class="card" style="padding:14px 18px"><h3 style="font-size:14px;color:var(--navy);margin:0 0 6px">📝 Templates & checklists</h3>
      ${tpl.map(d=>`<div class="pd-doc-row"><div><span class="t">${E(d.title)}</span><div class="d">${E(d.desc)}</div></div><a class="btn btn-ghost btn-sm" href="${pdDocUrl(d)}" target="_blank" rel="noopener">Open</a></div>`).join("")}</div>`;
};

window.renderClientProfile = function(){
  return `<h1 style="color:var(--navy);font-size:28px;margin:0 0 10px">📂 Claim File: Angela Carter — Property Damage</h1>
    <p>The working PD claim for all five days. Every fact below comes from the documents in 📁 Documents — when a Skill Builder asks you to verify something, verify it against the document, not this summary.</p>
    <div class="client-intro-banner"><div class="cib-tag">📌 Read This First</div><h2>One claim, from intake to the final payment</h2>
      <p>Like a real PD file, it moves fast: claim setup and the rental on Day 1, coverage on Day 2, storage, the estimate and the supplement on Day 3, the total loss and the negotiation on Day 4, and the release, payoff and closing on Day 5. The errors you catch on day one — the VIN, the expired dec page, the mileage — are the ones that decide the money later.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn btn-navy btn-sm" onclick="goto('casedocs')">📁 Open the Claim Documents</button><button class="btn btn-ghost btn-sm" onclick="openCms()">🗂 Open the CMS</button></div></div>
    <div class="profile-grid">${CLIENT_PROFILE_DOC.map(sec=>`<div class="card profile-section"><h3>${E(sec.section)}</h3><ul>${sec.items.map(i=>`<li>${E(i)}</li>`).join("")}</ul></div>`).join("")}</div>`;
};
window.clientAvatarSvg = function(){ return `<div class="client-photo-img" style="display:flex;align-items:center;justify-content:center;font-size:42px;background:#EEF0F6">🚗</div>`; };

/* Day 1 "meet the client" slide → meet the claim */
window.renderMeetClientSlide = function(){
  return `<div class="card meet-client-card"><div class="mc-tag">🚗 Meet the Claim</div><h3>Angela Carter — 2022 Toyota RAV4</h3>
    <p>Friday, September 18, 2026, 5:40 PM. Angela was stopped at a red light on Harbor Blvd when Kevin Hale, driving his mother's Ford Explorer and looking at his GPS, slammed into the back of her RAV4. Her car was towed to a yard that charges $65 a day. She has two kids, a job, no car — and the other driver's insurer wants a recorded statement.</p>
    <p>For the next five days you're the PD Specialist on her claim — from the intake sheet to the final payment. Start with the intake documents.</p>
    ${docPacket(["AC01","AC03","AC04"], "Start here")}
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-navy btn-sm" onclick="goto('clientprofile')">Read the Claim File</button><button class="btn btn-ghost btn-sm" onclick="goto('casedocs')">📁 All documents</button></div></div>`;
};

/* ---- 🧰 Tools menu in the course's top bar (rendered by renderTopbar in pd-updates.js) ---- */
window.pdToolsMenuHTML = function(){
  const tools = PD_TOOL_DEFAULTS.map(d=>pdTool(d.id)).filter(t=>t.live);
  const open = currentFrame && frameShell && !frameShell.hidden;
  return `<div class="nav-tools" id="navTools">
    <button type="button" class="${open?"active":""}" aria-haspopup="true" onclick="pdToggleToolsMenu(event)">🧰 Tools ▾</button>
    <div class="nav-tools-menu" role="menu">${tools.map(t=>`<button type="button" role="menuitem" class="${open && t.id===currentFrame?"on":""}" onclick="pdPickTool('${t.id}')">${t.icon} ${E(t.short)}</button>`).join("")}
      <button type="button" class="more" onclick="pdPickTool(null)">All tools, sign-in help &amp; my work log</button></div></div>`;
};
window.pdToggleToolsMenu = function(e){ if(e) e.stopPropagation(); const n = document.getElementById("navTools"); if(n) n.classList.toggle("open"); };
window.pdPickTool = function(id){
  const n = document.getElementById("navTools"); if(n) n.classList.remove("open");
  if(state.mobileNavOpen && typeof toggleMobileNav==="function") toggleMobileNav();
  if(id) openTool(id); else goto("tools");
};
document.addEventListener("click", e=>{ const n = document.getElementById("navTools"); if(n && !n.contains(e.target)) n.classList.remove("open"); });
function repaintToolsMenu(){
  const n = document.getElementById("navTools"); if(!n) return;
  const wasOpen = n.classList.contains("open");
  n.outerHTML = pdToolsMenuHTML();
  if(wasOpen){ const m = document.getElementById("navTools"); if(m) m.classList.add("open"); }
}
// Going anywhere in the course closes the tool (its session is kept; "Return to …" reopens it).
const _gotoForFrame = window.goto;
window.goto = function(){ if(frameShell && !frameShell.hidden) closeToolFrame(); return _gotoForFrame.apply(this, arguments); };
// A re-render can change the top bar's height.
const _renderForFrame = window.render;
window.render = function(){ const r = _renderForFrame.apply(this, arguments); placeFrame(); return r; };

/* The building blocks, for js/pd-practice.js (the 🧪 Practice hub). */
window.__pdKit = {TOOLS, part, scenario, flagTable, sorter, checklist, calc, choice, choiceText, aiTask, docPacket, toolStep, cmsStep, E, money, scorePart, pdState, PD_UI, toolOfKey, dayOfTool};

/* ---------- startup ---------- */
window.addEventListener("load", ()=>{
  setTimeout(async ()=>{
    try{ state.cmsLog = (await storeGet("cms-log")) || state.cmsLog || {}; }catch(e){}
    await loadToolSettings(); if(typeof render==="function" && (state.view==="tools"||state.view==="cms")) render();
  }, 300);
});
})();
