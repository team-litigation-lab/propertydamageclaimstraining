/* ============================================================
   LSH Property Damage Claims Training — 🧪 PRACTICE
   One page for every practice tool, organized the same way for
   every day into three categories:
     🧠 Skill Builders  — think it through on the claim documents
     🗣 Communication   — say it: the Call Simulator's Property
                          Damage calls, live roleplay, email
     🗂 Systems         — do it in the platform: the CMS
   Loaded after pd-skillbuilders.js (uses window.__pdKit).
   ============================================================ */
(function(){
"use strict";
const K = window.__pdKit;
if(!K){ console.warn("pd-practice: pd-skillbuilders.js must load first"); return; }
const {E} = K;

/* ---------------- styles ---------------- */
const st = document.createElement("style"); st.id = "pd-practice-css"; st.textContent = `
.px-cats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0 0 18px}
.px-cat{border-radius:14px;padding:14px 16px;border:1.5px solid var(--line);background:#fff}
.px-cat b{display:block;font-size:15px;color:var(--navy)}.px-cat p{margin:4px 0 0;font-size:12.6px;color:var(--ink-soft)}
.px-cat .ic{font-size:22px}
.px-cat.think{border-color:#C9D3F0;background:#F6F8FE}.px-cat.talk{border-color:#F3D2B3;background:#FFF8F1}.px-cat.do{border-color:#BFE3CE;background:#F3FBF6}
.px-bar{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin:0 0 16px}
.px-bar .sep{width:1px;height:24px;background:var(--line);margin:0 4px}
.px-day{margin-bottom:22px;padding:16px 18px}
.px-day-h{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:12px}
.px-day-h h2{margin:0;font-size:17px;color:var(--navy)}.px-day-h .sub{font-size:12.5px;color:var(--ink-soft);margin-top:2px}
.px-prog{font-size:12px;font-weight:700;color:var(--navy);background:#EEF0F6;border-radius:999px;padding:4px 10px;white-space:nowrap}
.px-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.px-grid.one{grid-template-columns:minmax(0,1fr)}
.px-col h3{font-size:12px;letter-spacing:.05em;text-transform:uppercase;margin:0 0 8px;display:flex;align-items:center;gap:6px}
.px-col.think h3{color:#2B4C9B}.px-col.talk h3{color:#B45A12}.px-col.do h3{color:#1D6B3C}
.px-item{display:flex;gap:10px;align-items:flex-start;border:1px solid var(--line);border-radius:11px;padding:10px 12px;margin-bottom:8px;background:#fff;cursor:pointer;transition:border-color .15s, box-shadow .15s}
.px-item:hover{border-color:var(--orange);box-shadow:0 2px 10px rgba(0,0,0,.06)}
.px-item.locked{opacity:.6;cursor:not-allowed}
.px-item .ic{font-size:20px;width:34px;height:34px;border-radius:9px;background:#EEF0F6;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.px-item .t{font-weight:700;color:var(--ink);font-size:13.4px;line-height:1.3}
.px-item .d{font-size:12px;color:var(--ink-soft);margin-top:2px;line-height:1.4}
.px-item .tags{display:flex;gap:5px;flex-wrap:wrap;margin-top:5px}
.px-tag{font-size:10.5px;font-weight:700;border-radius:999px;padding:1px 8px;background:#F3F4F9;color:var(--navy)}
.px-tag.done{background:#E3F4EA;color:#1D6B3C}.px-tag.new{background:#FFF1DE;color:#9A5B00}.px-tag.where{background:#EEF0F6;color:#4A4F6A}
.px-foot{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}
@media (max-width:900px){.px-grid{grid-template-columns:minmax(0,1fr)}}
@media (max-width:640px){.px-cats{gap:8px}.px-cat{padding:9px 6px;text-align:center}.px-cat p{display:none}.px-cat b{font-size:11px}.px-cat .ic{font-size:18px}}
/* platform-style screens inside the new Systems tools */
.px-sys{border:1.5px solid var(--navy);border-radius:12px;overflow:hidden;margin:6px 0 12px;background:#fff}
.px-sys-h{background:var(--navy);color:#fff;padding:9px 14px;font-size:12.5px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}
.px-sys-h b{color:#F0C08A;letter-spacing:.03em}
.px-sys-b{padding:10px 14px}
.px-ledger-sum{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:8px 0}
.px-ledger-sum div{border:1px solid var(--line);border-radius:10px;padding:8px 10px;background:#F8F9FC}
.px-ledger-sum span{display:block;font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-soft);font-weight:700}
.px-ledger-sum b{font-size:17px;color:var(--navy);font-family:'IBM Plex Mono',monospace}
@media (max-width:640px){.px-ledger-sum{grid-template-columns:minmax(0,1fr)}}
.px-q{border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin-bottom:8px;background:#fff}
.px-q.ok{border-color:var(--success);background:#EEF7F1}.px-q.bad{border-color:var(--danger);background:#FBEDEA}
.px-q .who{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-soft)}
.px-q .ask{font-size:13.3px;font-weight:700;color:var(--navy);margin:3px 0 7px}
.px-q .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.px-q select{font:inherit;font-size:12.8px;padding:6px 8px;border:1px solid var(--line);border-radius:8px;flex:1;min-width:220px;max-width:100%}
`; document.head.appendChild(st);

/* Each day unlocks when that day's Skill Builder has been submitted (any score). */
window.dayLabDone = function(dayId){
  const tools = PRACTICE_TOOLS.filter(t=>t.gate!==false && (String(t.relates||"").match(/\d+/g)||[]).map(Number).includes(dayId));
  if(!tools.length){ const p = state.progress[dayId]; return !!(p && (p.done || typeof p.score==="number")); }
  const pp = state.practiceProgress || {};
  return tools.every(t=>pp[t.id] && (pp[t.id].runs||0) >= 1);
};
PRACTICE_TOOLS.forEach(t=>{ if(!t.cat) t.cat = "think"; });
const CATS = {
  think:{icon:"🧠", label:"Skill Builders", short:"Skill Builder", blurb:"Think it through on the claim documents: audit, decide, calculate and write."},
  talk:{icon:"🗣", label:"Communication", short:"Communication", blurb:"Say it: live calls with adjusters, the client, the tow yard, the rental counter and the lender."},
  do:{icon:"🗂", label:"Systems", short:"Systems", blurb:"Do it in the platform: build and update the PD file in the CMS."}
};
window.pdToolCategory = (id)=> { const t = PRACTICE_TOOLS.find(x=>x.id===id); return CATS[(t && t.cat) || "think"]; };

/* ================================================================
   THE PLAN: every day, three categories
   ================================================================ */
const SIM = (id, extra)=> Object.assign({kind:"sim", id}, extra||{});
const RP = (categoryId, topicId)=> ({kind:"rp", categoryId, topicId});
const PLAN = {
  1:{think:["pdSetup1"],
     talk:[SIM("calls",{title:"Call Simulator — 📋 Claim Setup", note:"Open the third-party claim · open the first-party rental claim · Angela's intake call"}), RP("client","wheresmycar"), RP("adjuster","recordedstatement")],
     do:[SIM("cms",{title:"Build Angela's PD file in the CMS", note:"Vehicle, parties, both carriers, documents under PD, day-one tasks", })]},
  2:{think:["pdCoverage2"],
     talk:[SIM("calls",{title:"Call Simulator — 🛡 Coverage & Liability", note:"Verify the at-fault policy · spot the client's coverage · liability still under investigation"}), RP("adjuster","liabilitystall"), RP("client","deductible")],
     do:[SIM("cms",{title:"Add the coverage summary to the CMS", note:"Every coverage, its limit, whether it applies, who handles it"})]},
  3:{think:["pdRental3"],
     talk:[SIM("calls",{title:"Call Simulator — 🚙 Rental, Tow & Shop", note:"Rental authorization · the rental counter · the tow-yard release · the supplement stall"}), RP("vendors","rentalcounter"), RP("vendors","storagedispute"), RP("adjuster","supplementdelay")],
     do:[SIM("cms",{title:"Log the rental and the repair in the CMS", note:"Reservation #, rate, end date, estimate, supplement, tasks"})]},
  4:{think:["pdTotal4"],
     talk:[SIM("calls",{title:"Call Simulator — 💵 Negotiation & Total Loss", note:"Negotiate the total loss · “my rental ends Thursday” · the payoff call"}), RP("adjuster","takeitorleaveit"), RP("client","shouldtakeit"), RP("client","upsidedown")],
     do:[SIM("cms",{title:"Log the valuation audit and counter in the CMS", note:"Audit table, comparables, counter letter, rental extension request"}), SIM("email",{note:"Generate a Property Damage inbox and clear it"})]},
  5:{think:["pdClose5"],
     talk:[SIM("calls",{title:"Call Simulator — ✍️ Settlement & Close", note:"The “standard release” · “should I take it?” · the subrogation follow-up"}), RP("adjuster","releaseallclaims"), RP("vendors","lienholder")],
     do:[SIM("cms",{title:"Close Angela's PD file in the CMS", note:"Release, payments, closing note, BI handoff, subrogation task"})]}
};

function rpLabel(it){
  const c = (typeof ROLEPLAY_CATEGORIES!=="undefined" ? ROLEPLAY_CATEGORIES : []).find(x=>x.id===it.categoryId);
  const t = c && c.topics.find(x=>x.id===it.topicId);
  return t ? {title:t.label, desc:t.context, cat:c.label} : null;
}
function itemView(it){
  if(typeof it==="string"){
    const t = PRACTICE_TOOLS.find(x=>x.id===it); if(!t) return null;
    const p = (state.practiceProgress||{})[t.id];
    return {icon:t.icon, title:t.title, desc:t.desc, done:!!p, doneLabel: p ? `✓ Best ${p.bestScore}%` : "",
      where:"In this portal", act:`goto('tool','${t.id}')`, unlocked: toolUnlocked(t)};
  }
  if(it.kind==="rp"){
    const r = rpLabel(it); if(!r) return null;
    return {icon:"🔥", title:r.title, desc:r.desc, where:`Live roleplay · ${r.cat}`, act:`pxRoleplay('${it.categoryId}','${it.topicId}')`};
  }
  if(it.kind==="sim"){
    const t = pdTool(it.id); if(!t) return null;
    const logged = Object.values(state.cmsLog||{}).some(v=>(v.platform||"cms")===it.id);
    const name = it.title || t.name.replace(/ \(LSH Training Portal\)$/,"");
    return {icon:t.icon, title:name, desc:it.note || t.desc, where: it.id==="cms" ? "LSH CMS" : "LSH Training Portal",
      done: logged && it.id!=="cms", doneLabel:"✓ Work logged", live:t.live,
      act: it.go ? `goto('${it.go}')` : `openTool('${it.id}')`};
  }
  return null;
}
window.pxRoleplay = function(categoryId, topicId){
  state.rpHub = {step:"mode", categoryId, topicId};
  goto("crisisroleplay");
};
function itemHTML(v, locked){
  const lk = locked || v.unlocked===false;
  return `<div class="px-item${lk?" locked":""}" ${lk?`title="Opens when this day unlocks"`:`onclick="${v.act}"`} role="button" tabindex="0">
    <span class="ic">${lk?"🔒":v.icon}</span>
    <div style="min-width:0"><div class="t">${E(v.title)}</div><div class="d">${E(v.desc.length>150 ? v.desc.slice(0,147).replace(/\s+\S*$/,"")+"…" : v.desc)}</div>
      <div class="tags"><span class="px-tag where">${E(v.where)}</span>${v.done?`<span class="px-tag done">${E(v.doneLabel)}</span>`:""}${v.live===false?`<span class="px-tag">Coming soon</span>`:""}</div></div></div>`;
}

window.renderPracticeHub = function(){
  const pf = state.pxFilter || {day:"all", cat:"all"};
  const days = [1,2,3,4,5].filter(n=> pf.day==="all" || String(n)===String(pf.day));
  const cats = ["think","talk","do"].filter(c=> pf.cat==="all" || pf.cat===c);
  const dayTitle = (n)=> ((typeof DAYS!=="undefined" && DAYS.find(d=>d.id===n))||{}).title || "";
  const chip = (group, val, label)=> `<button class="btn btn-sm ${String((pf||{})[group])===String(val)?"btn-navy":"btn-ghost"}" onclick="pxSetFilter('${group}','${val}')">${label}</button>`;
  const blocks = days.map(n=>{
    const plan = PLAN[n]; const unlocked = state.isAdmin || typeof dayUnlocked!=="function" || dayUnlocked(n);
    const views = {}; let total = 0, done = 0;
    cats.forEach(c=>{ views[c] = (plan[c]||[]).map(it=>itemView(it)).filter(Boolean); views[c].forEach(v=>{ total++; if(v.done) done++; }); });
    return `<div class="card px-day" id="px-day-${n}"><div class="px-day-h"><div><h2>Day ${n}${unlocked?"":" · 🔒"}</h2><div class="sub">${E(dayTitle(n))}</div></div>
        <span class="px-prog">${done} of ${total} done</span></div>
      <div class="px-grid${cats.length===1?" one":""}">${cats.map(c=>`<div class="px-col ${c}"><h3>${CATS[c].icon} ${CATS[c].label}</h3>
        ${views[c].map(v=>itemHTML(v, !unlocked)).join("") || `<p style="font-size:12px;color:var(--ink-soft)">—</p>`}</div>`).join("")}</div></div>`;
  }).join("");
  return `<p class="eyebrow">Practice</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">🧪 Practice</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:84ch;margin:0 0 14px">Every practice tool in one place, organized the same way for every day. Each day has all three kinds of practice: <b>think</b> it through on the claim documents, <b>say</b> it on a call, and <b>do</b> it in the CMS. Each day's tools open when you reach that day${state.isAdmin ? " (as an admin you can open all of them)" : ""}.</p>
    <div class="px-cats">${["think","talk","do"].map(c=>`<div class="px-cat ${c}"><span class="ic">${CATS[c].icon}</span><b>${CATS[c].label}</b><p>${CATS[c].blurb}</p></div>`).join("")}</div>
    <div class="px-bar">${chip("day","all","All days")}${[1,2,3,4,5].map(n=>chip("day",n,"Day "+n)).join("")}<span class="sep"></span>${chip("cat","all","All")}${["think","talk","do"].map(c=>chip("cat",c,CATS[c].icon+" "+CATS[c].label)).join("")}</div>
    ${blocks}
    <div class="card" style="padding:14px 18px;margin-bottom:14px"><b style="color:var(--navy)">Any day</b>
      <div class="px-grid" style="margin-top:10px">
        <div class="px-col think"><h3>${CATS.think.icon} Review</h3>${itemHTML({icon:"📁", title:"Claim Documents", desc:"Every Angela Carter document the tools use — dec pages, invoices, estimates, the valuation, the release.", where:"In this portal", act:"goto('casedocs')"})}${itemHTML({icon:"📂", title:"Claim File", desc:"The one-page summary of Angela's PD claim and its timeline.", where:"In this portal", act:"goto('clientprofile')"})}</div>
        <div class="px-col talk"><h3>${CATS.talk.icon} Open practice</h3>${itemHTML({icon:"🎲", title:"Quick roleplay call", desc:"A random live PD call, no setup.", where:"Live roleplay", act:"rpLaunchQuickPractice()"})}${itemHTML({icon:"🔥", title:"All roleplay situations", desc:"Pick any category, situation, difficulty and persona.", where:"Live roleplay", act:"state.rpHub={step:'category'};goto('crisisroleplay')"})}${itemHTML({icon:"📞", title:"Call Simulator (all 16 PD calls)", desc:"Claim setup, coverage, rental and storage, negotiation, and closing — scored with the note each call requires.", where:"LSH Training Portal", act:"openTool('calls')"})}</div>
        <div class="px-col do"><h3>${CATS.do.icon} Platforms</h3>${itemHTML({icon:"🗂", title:"LSH Case Management System", desc:"Build and update Angela's PD file.", where:"LSH CMS", act:"openTool('cms')"})}${itemHTML({icon:"🧰", title:"All tools, sign-in help & my work log", desc:"Every platform's address, how sign-in works inside the portal, and the IDs and scores you've logged.", where:"In this portal", act:"goto('tools')"})}</div>
      </div></div>`;
};
window.pxSetFilter = function(group, val){
  state.pxFilter = Object.assign({day:"all", cat:"all"}, state.pxFilter||{}); state.pxFilter[group] = val; render();
};
})();
