/* ============================================================
   📋 COMPLIANCE AND PLATFORM UTILIZATION MONITORING, in Admin → Trainee Audit → View Detail
   ------------------------------------------------------------
   The same file in every LSH course built on the EA/PA platform (PD Claims, Medsum & Demand; EA/PA has its own copy,
   js/eapa-compliance-monitor.js). The section every LSH program's trainee scorecard carries (the Foundational Training's
   Batch Sheet has it first, Case Management's 🏅 Scorecard card the same): a dark heading, then a row per measure — what it
   is, the count, and a box per item, ✓ or ✗ — and 📝 Send Feedback under it, so a trainer sees at a glance whether the
   trainee is keeping up with the platform. Drawn before the trainee's 🏅 Scorecard where the course has one, else before
   the AI-Generated Ranking & Review, else at the end of View Detail.
     📚 Lesson decks        each day finished (day-progress[day].done)
     ✍️ Knowledge Checks    each day's Knowledge Check passed (its best at 70% or more)
     🛠 Skill Builders      each Skill Builder run at least once (practice-progress[tool].runs)
     🕘 Last opened         the page they last had open (their last-view) and when
     ⏱ Last on the platform their record's lastActive
     📝 Send Feedback       opens the ✍ Write feedback box further down the same panel
   It only reads what View Detail already loaded (state.traineeWork[id].snap and the record): nothing is saved.
   ============================================================ */
(function(){
"use strict";
if(typeof renderAdminDetail !== "function" || typeof DAYS === "undefined") return;
const E = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);
const T0 = v => { const d = v ? new Date(v) : null; return d && isFinite(d) ? d : null; };
const DTF = new Intl.DateTimeFormat(undefined, {month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit"});
const when = v => { const d = T0(v); return d ? DTF.format(d) : ""; };
const ago = v => { const d = T0(v); if(!d) return ""; const m = Math.round((Date.now() - d) / 60000);
  return m < 2 ? "just now" : m < 60 ? `${m} min ago` : m < 1440 ? `${Math.round(m / 60)} h ago` : `${Math.round(m / 1440)} day${Math.round(m / 1440) === 1 ? "" : "s"} ago`; };
const num = v => typeof v === "number" && isFinite(v);
const PASS = 70;
const dayName = d => { const t = String(d.title || "").replace(/^\s*Day\s+\d+\s*[·:–-]?\s*/i, "").trim(); return `Day ${d.id}${t ? " · " + t : ""}`; };
const tools = () => (typeof PRACTICE_TOOLS !== "undefined" ? PRACTICE_TOOLS : []);
const toolName = t => String(t.title || t.id || "").replace(/\s*\(.*$/, "");
const box = (icon, label, ok, tip) => `<div class="ccm-it" title="${E(tip || label)}"><span class="ccm-ic">${icon}</span><span class="ccm-lb">${E(label)}</span><b class="ccm-mk ${ok ? "ok" : "no"}">${ok ? "✓" : "✗"}</b></div>`;
const tone = (n, of) => n == null ? "" : n >= of ? "ok" : n ? "mid" : "no";
const row = (label, count, cls, detail) => `<tr><th scope="row">${E(label)}</th><td class="ccm-n ${cls || ""}">${count}</td><td>${detail}</td></tr>`;
const grid = items => `<div class="ccm-g">${items.join("")}</div>`;

function html(rec){
  const work = (state.traineeWork || {})[rec.id];
  if(!work || work.loading) return "";
  const snap = work.snap || {}, dp = snap["day-progress"] || rec.dayProgress || {}, pp = snap["practice-progress"] || rec.practiceProgress || {};
  const ds = DAYS.map(d => ({d, ok: !!(dp[d.id] && dp[d.id].done)})), dsN = ds.filter(x => x.ok).length;
  const kc = DAYS.map(d => { const s = dp[d.id] && num(dp[d.id].score) ? dp[d.id].score : null; return {d, s, ok: s != null && s >= PASS}; }), kcN = kc.filter(x => x.ok).length;
  const ts = tools().map(t => { const p = pp[t.id] || {}; return {t, ok: (p.runs || 0) > 0, best: p.bestScore}; }), tsN = ts.filter(x => x.ok).length;
  const lv = snap["last-view"] || null, lvDay = lv && lv.view === "day" ? DAYS.find(d => String(d.id) === String(lv.dayId)) : null;
  const lvWhat = !lv ? "" : lvDay ? `Day ${lvDay.id}` : lv.view === "tool" ? "Practice Lab" : String(lv.view || "").replace(/^\w/, ch => ch.toUpperCase());
  const sid = typeof cssId === "function" ? cssId(rec.id) : String(rec.id).replace(/[^\w-]/g, "_");
  return `<div class="ccm"><table class="ccm-t"><thead><tr><th colspan="3">Compliance and Platform Utilization Monitoring</th></tr></thead><tbody>
    ${row("📚 Lesson decks", `${dsN} / ${ds.length}`, tone(dsN, ds.length), grid(ds.map(x => box("📖", dayName(x.d), x.ok, x.ok ? "Finished" : "Not finished yet"))))}
    ${row("✍️ Knowledge Checks passed", `${kcN} / ${kc.length}`, tone(kcN, kc.length), grid(kc.map(x => box("✍️", `Day ${x.d.id}`, x.ok, x.s == null ? "Not taken yet" : `Best ${Math.round(x.s)}%${x.ok ? "" : ` (passes at ${PASS}%)`}`))))}
    ${ts.length ? row("🛠 Skill Builders", `${tsN} / ${ts.length}`, tone(tsN, ts.length), grid(ts.map(x => box(x.t.icon || "🛠", toolName(x.t), x.ok, x.ok ? `Practised${num(x.best) ? ", best " + Math.round(x.best) + "%" : ""}` : "Not practised yet")))) : ""}
    ${row("🕘 Last opened", lvWhat ? E(lvWhat) : "—", "", lv && lv.at ? E(when(lv.at)) : `<small class="ccm-mu">Nothing opened yet</small>`)}
    ${row("⏱ Last on the platform", rec.lastActive ? E(ago(rec.lastActive)) : "—", "", rec.lastActive ? E(when(rec.lastActive)) : `<small class="ccm-mu">Not seen yet</small>`)}
  </tbody></table>
  <button type="button" class="ccm-send" onclick="lshCompliance.feedback('${E(sid)}')">📝 Send Feedback to ${E(rec.name || "this trainee")}</button></div>`;
}
// 📝 the ✍ Write feedback box (index.html fbComposer_<id>), further down the same panel
function feedback(sid){
  const box = document.getElementById("fbComposer_" + sid);
  if(!box){ if(typeof toast === "function") toast("The feedback box is further down this trainee's panel."); return; }
  box.scrollIntoView({behavior: "smooth", block: "center"});
  const t = box.querySelector("textarea"); if(t) setTimeout(() => t.focus({preventScroll: true}), 350);
}

// before the trainee's 🏅 Scorecard in View Detail, else before the AI-Generated Ranking & Review, else at the end
function placeOf(out){
  const sc = out.indexOf('<div class="sc-admin"'); if(sc >= 0) return sc;
  const ai = out.indexOf('<div class="sidebar-section-lbl" style="padding-left:0;">AI-Generated Ranking');
  if(ai >= 0){ const box = out.lastIndexOf('<div style="margin-top:16px;">', ai); return box >= 0 ? box : ai; }
  return -1;
}
const __detail = renderAdminDetail;
renderAdminDetail = function(rec){
  const out = __detail.apply(this, arguments), sec = rec ? html(rec) : "";
  if(!sec) return out;
  const at = placeOf(out);
  return at >= 0 ? out.slice(0, at) + sec + out.slice(at) : out + sec;
};

const st = document.createElement("style"); st.id = "lsh-compliance-monitor"; st.textContent = `
.ccm{margin:16px 0;}
.ccm-t{width:100%;border-collapse:collapse;background:#fff;border:1px solid #C9CEDB;font-size:14px;}
.ccm-t thead th{background:#1E2340;color:#fff;text-align:left;padding:12px 14px;font-size:17px;font-weight:800;}
.ccm-t tbody th{text-align:left;vertical-align:top;padding:10px 12px;width:24%;color:#1E2340;border-top:1px solid #C9CEDB;}
.ccm-t td{vertical-align:top;padding:10px 12px;border-top:1px solid #C9CEDB;border-left:1px solid #C9CEDB;}
.ccm-n{font-weight:800;width:11%;white-space:nowrap;} .ccm-n.ok{background:#ECFDF3;} .ccm-n.mid{background:#FFF4E2;} .ccm-n.no{background:#FDECEC;}
.ccm-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));border:1px solid #C9CEDB;border-radius:10px;overflow:hidden;}
.ccm-it{display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 6px;text-align:center;border-right:1px solid #E1E4EC;border-bottom:1px solid #E1E4EC;font-size:12.5px;}
.ccm-ic{font-size:18px;} .ccm-lb{color:#2A2F4A;line-height:1.2;overflow-wrap:anywhere;}
.ccm-mk{display:inline-flex;align-items:center;justify-content:center;width:30px;height:26px;border-radius:7px;font-size:15px;}
.ccm-mk.ok{background:#DCF5E5;color:#137A3A;} .ccm-mk.no{background:#FCE1E1;color:#B42318;}
.ccm-mu{color:#5B6178;}
.ccm-send{display:block;width:100%;margin-top:10px;padding:12px 14px;border:0;border-radius:12px;background:linear-gradient(135deg,#1E2340,#2B3158);color:#fff;font:inherit;font-weight:800;font-size:15px;cursor:pointer;}
.ccm-send:hover{filter:brightness(1.12);}
@media(max-width:600px){.ccm-t tbody th{width:auto;} .ccm-g{grid-template-columns:repeat(2,1fr);}}
`; document.head.appendChild(st);

window.lshCompliance = {html, feedback};
})();
