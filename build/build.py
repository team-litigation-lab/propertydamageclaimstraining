#!/usr/bin/env python3
"""Builds the PD course's index.html from the Case Management course's index.html + the PD content.

Usage (from the repository root):
    python3 build/build.py <path to Case-Management-Training/index.html>

The CM course's index.html is itself generated from the EA/PA portal (EA-PA-TRAINING)
by Case-Management-Training/build/build.py, so the chain is EA/PA -> CM -> PD. The PD
course keeps the CM course's shell (Skill Builder kit, Tools hub, Practice page,
Presenter view, SOP) and swaps in the PD content from build/:

    day1.js – day5.js        lessons, quick checks, Knowledge Checks
    pd_practice_tools.js     the five Skill Builders (registry; the tools are in js/pd-skillbuilders.js)
    pd_casefile.js           the Angela Carter claim file (also what the AI grader reads)
    pd_roleplay.js           Live Roleplay categories, personas and in-tool scenarios
    pd_calendar.js           a PD Specialist's week (calendar data)

Every edit checks that its anchor exists, so the script stops with an error if the CM
page changed that part: update the anchor here and run it again. Writes ../index.html.
"""
import re, sys, os, datetime
B = os.path.dirname(os.path.abspath(__file__))
if len(sys.argv) != 2:
    sys.exit("usage: python3 build/build.py <Case-Management-Training/index.html>")
SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(B), "index.html")
s = open(SRC, encoding="utf8").read()
rd = lambda f: open(os.path.join(B, f), encoding="utf8").read().strip()


def replace_block(start, end, new):
    global s
    i = s.index(start)
    j = s.index(end, i) + len(end)
    s = s[:i] + new + s[j:]


def rep(old, new, min_count=1):
    global s
    n = s.count(old)
    if n < min_count:
        sys.exit(f"MISSING ({n}): {old[:100]!r}")
    s = s.replace(old, new)


def rep_re(pattern, new):
    """Like rep, for an anchor whose details change (e.g. a script's ?v= version)."""
    global s
    s, n = re.subn(pattern, lambda m: new, s, count=1)
    if not n:
        sys.exit(f"MISSING: {pattern[:100]!r}")


# ---------- 1. wording: CM -> PD (before the PD content goes in, so it isn't touched) ----------
rep("<title>LSH Case Management Training</title>", "<title>LSH Property Damage Claims Training</title>")
rep("LSH Case Management — Platform Orientation", "LSH Property Damage Claims — Platform Orientation")
rep("5-Day Legal Case Management Professional Development Training", "5-Day Legal Property Damage Claims Professional Development Training")
rep("Case Management Professional Development Workshop", "Property Damage Claims Professional Development Workshop")
rep("<p>Run a personal-injury file from intake to disbursement: verify every document, keep treatment on the map, audit before demand, negotiate the net, and stay trial-ready.</p>",
    "<p>Run a property damage claim from the first call to the final payment: set it up right, spot every coverage, keep the client mobile, stop the storage clock, negotiate the value, and close it with a PD-only release.</p>")
rep('["Case File","John Doe v. Apex — the working case. Read it first."],["📁 Case Documents","Every record, bill, lien letter and pleading — with its CMS upload category."],["🧪 Practice","Every practice tool, organized the same way for each day: 🧠 Skill Builders on the case documents, 🗣 Communication (live calls, roleplay, email) and 🗂 Systems (the CMS, docket, medical records, e-filing, calendar and trust ledger). Each day\'s tools open with that day."]',
    '["Claim File","Angela Carter\'s PD claim — the working file. Read it first."],["📁 Documents","Every dec page, invoice, estimate, valuation and release — with its CMS upload category."],["🧪 Practice","Every practice tool, organized the same way for each day: 🧠 Skill Builders on the claim documents, 🗣 Communication (the Call Simulator\'s Property Damage calls and live roleplay) and 🗂 Systems (the CMS). Each day\'s tools open with that day."]')
_i = s.index('{k:"Client", h:"Meet the case: John Doe v. Apex Delivery Services", body:`')
_j = s.index('</div>`},', _i) + len('</div>`},')
s = s[:_i] + ('{k:"Client", h:"Meet the claim: Angela Carter — 2022 Toyota RAV4", body:`\n'
  '      <div class="or-client">\n        <div class="or-avatar">AC</div>\n'
  '        <div><p class="or-lead" style="margin-top:0">Stopped at a red light, rear-ended by a driver looking at his GPS in his mother\'s Explorer. Her RAV4 is at a tow yard at $65 a day, she has no car, and the other insurer wants a recorded statement. Every lesson, Skill Builder, call and CMS exercise works this one claim.</p>\n'
  '        <ul class="or-list"><li>Read the <b>Claim File</b> before Day 1, then open the documents in <b>📁 Documents</b>.</li><li>The documents contain real-world errors — a transposed VIN, an expired dec page, a wrong valuation — catching them is the job.</li><li>Treat everything as confidential, like a real client file.</li></ul></div>\n'
  '      </div>`},') + s[_j:]
rep('${step(2,"📂","Case File","Read the John Doe v. Apex file.")}', '${step(2,"📂","Claim File","Read Angela Carter\'s PD claim file.")}')
rep("CASE BACKGROUND (John Doe v. Apex — the caller may be the client, an adjuster, a provider, a lienholder, opposing counsel or the handling attorney):",
    "CLAIM BACKGROUND (Angela Carter's property damage claim — the caller may be the client, an adjuster, a rental company, a tow yard, a body shop, a lender or the handling attorney):")
rep('"Metro Radiology\'s records department calls: John Doe\'s authorization has the wrong DOB and they won\'t release the MRI.",', '"A-1 Metro Towing calls: Angela Carter\'s RAV4 has been in storage 5 days at $65 a day and they want to know who is paying.",')
rep('"John Doe\'s wife Jane calls asking whether she needs her own claim for her neck pain.",', '"Angela Carter texts: the rental counter says there\'s no authorization on file and she\'s standing at the desk.",')
rep('"The attorney needs the updated lien totals for the Doe file in the next 10 minutes.",', '"The attorney needs Angela Carter\'s total-loss numbers (offer, counter, payoff, equity) in the next 10 minutes.",')
rep('"A court clerk leaves a voicemail: the Answer in another matter was rejected for a missing signature page."', '"Riverside Collision Center leaves a voicemail: the supplement has sat with Crestline for 3 days and the car is blocking a bay."')
rep("Program: LSH (Legal Support Help) 5-day Case Management Training for personal-injury Case Managers (many are remote VAs supporting US law firms). Running case: John Doe v. Apex Delivery Services (commercial T-bone, facial scarring, L4-L5 microdiscectomy).",
    "Program: LSH (Legal Support Help) 5-day Property Damage Claims Training for PD Specialists at personal-injury law firms (many are remote VAs supporting US law firms). Running claim: Angela Carter's 2022 Toyota RAV4, rear-ended 09/18/2026 (Crestline Mutual third-party claim, rental, storage, supplement, total loss, PD-only release).")
rep("Apply the Day ${id} concepts to the John Doe v. Apex case file.", "Apply the Day ${id} concepts to Angela Carter's PD claim file.")
rep("ppt:`Revised CM Training Day ${id}`, canvaLabel:`CM Day ${id}`", "ppt:`PD Claims Training Day ${id}`, canvaLabel:`PD Day ${id}`")
rep('"If this landed on your John Doe file today, what would your first move be?"', '"If this landed on Angela Carter\'s PD file today, what would your first move be?"')
rep("from the John Doe v. Apex file", "from Angela Carter's PD claim")
rep("John Doe case scenarios are realistic.", "Angela Carter PD claim scenarios are realistic.")
rep('if(slide.type==="meetClient") return "Meet the Case — John Doe v. Apex";', 'if(slide.type==="meetClient") return "Meet the Claim — Angela Carter";')
rep("Skill Builders — Practice on the Real Case File", "Skill Builders — Practice on the Real Claim File")
rep("Every Skill Builder comes from the Skill Building slides and runs on the actual case documents — then sends you into the CMS to do the file work.",
    "Every Skill Builder runs on Angela Carter's claim documents — then sends you into the Call Simulator and the CMS to do the work.", min_count=0)
rep('certId:`LSH-CM-', 'certId:`LSH-PD-')
rep('"Case Management Trainee"', '"PD Claims Trainee"')
rep("of the 5-day LSH Case Management program.", "of the 5-day LSH Property Damage Claims program.")
rep("const SOP_DATA = []; // CM: SOP is generated", "const SOP_DATA = []; // PD: SOP is generated")
# AI prompts: who the trainee is
rep("a trainee personal-injury Case Manager's", "a trainee Property Damage (PD) Specialist's")
rep("for a legal-industry Case Management training program", "for a legal-industry Property Damage claims training program")
rep("training call for a personal-injury Case Manager.", "training call for a Property Damage (PD) Specialist at a personal-injury law firm.")
rep("drop on a personal-injury Case Manager's desk", "drop on a PD Specialist's desk")
rep("for a personal-injury Case Manager trainee", "for a Property Damage (PD) Specialist trainee")
rep("in a personal-injury Case Management training program", "in a Property Damage (PD) claims training program at a personal-injury law firm")
rep("Six areas cover most of what a personal-injury Case Manager handles day to day.", "Six areas cover most of what a PD Specialist handles day to day.")
# everything else that names the course or the role
rep("LSH Case Management Training", "LSH Property Damage Claims Training")
rep("Case Management Training", "Property Damage Claims Training")
rep("CASE MANAGER: ", "PD SPECIALIST: ")
rep("Case Manager", "PD Specialist")
rep('PAGE_EYEBROWS = {clientprofile:"Case File", casedocs:"Case Documents",', 'PAGE_EYEBROWS = {clientprofile:"Claim File", casedocs:"Claim Documents",')
rep('"Case File"', '"Claim File"')
rep('var APP_BUILD = "cm-', 'var APP_BUILD = "pd-')
# the PD Worker uses its own Gemini key, GEMINI_API_KEY10 (trainer-facing hints name it and the PD Worker)
rep("<code>GEMINI_API_KEY</code> needs setting on the Worker", "<code>GEMINI_API_KEY10</code> needs setting on the Worker")
rep("replace GEMINI_API_KEY in Cloudflare (Workers & Pages → ea-pa-training →", "replace GEMINI_API_KEY10 in Cloudflare (Workers & Pages → propertydamageclaimstraining →")
rep("add GEMINI_API_KEY (free, from Google AI Studio) as a Secret in Cloudflare (Workers & Pages → ea-pa-training →", "add GEMINI_API_KEY10 (free, from Google AI Studio) as a Secret in Cloudflare (Workers & Pages → propertydamageclaimstraining →")
rep("add GEMINI_API_KEY in Cloudflare", "add GEMINI_API_KEY10 in Cloudflare")
rep("check GEMINI_API_KEY in Cloudflare", "check GEMINI_API_KEY10 in Cloudflare")
rep("is invalid (GEMINI_API_KEY).", "is invalid (GEMINI_API_KEY10).")

# ---------- 2. the PD content ----------
days = "\n\n".join(rd(f"day{i}.js") for i in range(1, 6))
i = s.index("const DAY1 = {")
j = s.index("const DAYS = [DAY1, DAY2, DAY3, DAY4, DAY5];")
s = s[:i] + days + "\n\n" + s[j:]
replace_block("const PRACTICE_TOOLS = [", "\n];\n", rd("pd_practice_tools.js") + "\n")
replace_block("const DAY_ORDER = [", "\n];\n", rd("pd_calendar.js") + "\n")
replace_block("const CLIENT_PROFILE_DOC = [", "\n];\n", rd("pd_casefile.js") + "\n")
rp = rd("pd_roleplay.js")
cats_personas, crisis = rp.split("const CRISIS_SCENARIO_SETS = ")
cats, personas = cats_personas.split("const ROLEPLAY_PERSONAS")
replace_block("const ROLEPLAY_CATEGORIES = [", "\n];\n", cats.strip() + "\n")
replace_block("const ROLEPLAY_PERSONAS= [", "\n];\n", "const ROLEPLAY_PERSONAS" + personas.strip() + "\n")
replace_block("const CRISIS_SCENARIO_SETS = {", "\n};\n", "const CRISIS_SCENARIO_SETS = " + crisis.strip() + "\n")
replace_block("const QUICK_PRACTICE_TOPIC_IDS = [", "];", 'const QUICK_PRACTICE_TOPIC_IDS = ["wheresmycar","rentalends","deductible","liabilitystall","supplementdelay","rentalcounter","lienholder","recordedstatement","storagedispute"];')

# ---------- 3. scripts: the PD pack (relative paths, so the page also works from a subfolder) ----------
s = re.sub(r'<script src="/js/cm-mindset\.js[^"]*"></script>\n?', '', s)
rep_re(r'<script src="/js/cm-updates\.js\?v=[^"]*"></script>', '<script src="js/pd-updates.js?v=2"></script>')
rep_re(r'<script src="/js/cm-documents\.js\?v=[^"]*"></script>', '<script src="js/pd-documents.js?v=1"></script>')
rep_re(r'<script src="/js/cm-skillbuilders\.js\?v=[^"]*"></script>', '<script src="js/pd-skillbuilders.js?v=3"></script>')
rep_re(r'<script src="/js/cm-practice\.js\?v=[^"]*"></script>', '<script src="js/pd-practice.js?v=1"></script>\n<script src="js/pd-canva.js?v=4"></script>\n<script src="js/slide-scripts/day1.js?v=1"></script>\n<script src="js/slide-scripts/day2.js?v=1"></script>\n<script src="js/slide-scripts/day3.js?v=1"></script>\n<script src="js/slide-scripts/day4.js?v=1"></script>\n<script src="js/slide-scripts/day5.js?v=1"></script>\n<script src="js/deck-notes/day1.js?v=1"></script>\n<script src="js/pd-scripts.js?v=2"></script>')
# The admins' "🏠 Main Portal" button (js/portal-link.js, the same file in every LSH course):
# drop any copy inherited from the CM page and add ours after the last script.
s = re.sub(r'<script src="/?js/portal-link\.js[^"]*"></script>\n?', '', s)
rep('<script src="/js/daily-activities.js?v=1"></script>', '<script src="js/daily-activities.js?v=1"></script>\n<script src="js/portal-link.js?v=1"></script>')
s = re.sub(r'var APP_BUILD = "pd-[^"]*";', f'var APP_BUILD = "pd-{datetime.date.today().isoformat().replace("-", ".")}-a";', s, count=1)

open(OUT, "w", encoding="utf8").write(s)
visible = re.sub(r'data:[a-z/+-]+;base64,[A-Za-z0-9+/=]+', '', s)
left = {w: len(re.findall(w, visible)) for w in ["John Doe", "Doe v", "Apex", "Jordan Davies", "Case Manager", "Case File", r"\bCM\b", "cm-"]}
print("wrote", OUT, f"{len(s)/1e6:.2f} MB", "leftovers:", left)
