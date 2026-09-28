#!/usr/bin/env python3
"""Writes the PD course's simulated claim-file documents (documents/*.html).

Every page is marked TRAINING — SIMULATED DOCUMENT. The numbers here are the
single source for the Angela Carter file; the lessons, Skill Builders and the
Call Simulator pack use the same figures. Run: python3 build/make_documents.py
"""
import os
from decimal import Decimal, ROUND_HALF_UP

B = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(B), "documents")
TAX = Decimal("0.0825")


def c(x):
    return Decimal(x).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)


def m(x):
    return "${:,.2f}".format(c(x))


def page(path, title, body, kind="Claim file"):
    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    depth = path.count("/")
    css = "../" * depth + "doc.css"
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — LSH PD Training</title>
<link rel="stylesheet" href="{css}">
</head>
<body>
<div class="sim">TRAINING — SIMULATED DOCUMENT · LSH Property Damage Claims Training · {kind}</div>
<main class="doc">
{body.strip()}
</main>
<p class="foot">Fictional people, companies, policies and numbers created for LSH training. Not a real claim file.</p>
</body>
</html>
"""
    with open(full, "w", encoding="utf8") as f:
        f.write(html)


def table(headers, rows, cls=""):
    h = "".join(f"<th>{x}</th>" for x in headers)
    r = "".join("<tr>" + "".join(f"<td>{x}</td>" for x in row) + "</tr>" for row in rows)
    return f'<table class="{cls}"><thead><tr>{h}</tr></thead><tbody>{r}</tbody></table>'


def kv(rows):
    return '<table class="kv"><tbody>' + "".join(f"<tr><th>{k}</th><td>{v}</td></tr>" for k, v in rows) + "</tbody></table>"


CSS = """
:root{--navy:#262B45;--orange:#DB8437;--ink:#1B1E2E;--soft:#5B6178;--line:#D5D9E4;--paper:#fff;--bg:#EEF0F6}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.55 Georgia,'Times New Roman',serif}
.sim{background:#B54A3F;color:#fff;font:700 12px/1.4 Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;text-align:center;padding:7px 12px}
.doc{max-width:860px;margin:22px auto;background:var(--paper);padding:34px 40px;border:1px solid var(--line);box-shadow:0 6px 24px -14px rgba(0,0,0,.35)}
.doc h1{font:700 22px/1.25 Arial,sans-serif;color:var(--navy);margin:0 0 4px}
.doc h2{font:700 15px/1.3 Arial,sans-serif;color:var(--navy);margin:22px 0 8px;text-transform:uppercase;letter-spacing:.04em;border-bottom:2px solid var(--navy);padding-bottom:4px}
.doc .sub{font:13px Arial,sans-serif;color:var(--soft);margin:0 0 14px}
.doc .hdr{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;border-bottom:3px solid var(--orange);padding-bottom:12px;margin-bottom:16px}
.doc .hdr .co{font:800 18px Arial,sans-serif;color:var(--navy)}
.doc .hdr .meta{font:12.5px/1.5 Arial,sans-serif;color:var(--soft);text-align:right}
table{width:100%;border-collapse:collapse;margin:8px 0 14px;font:13px/1.45 Arial,sans-serif}
th,td{border:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:top}
thead th{background:#F1F3F8;color:var(--navy)}
table.kv th{width:34%;background:#F7F8FB;color:var(--navy);font-weight:700}
td.num,th.num{text-align:right;white-space:nowrap}
tr.total td{font-weight:700;background:#FFF6EC}
.note{border-left:4px solid var(--orange);background:#FFF8EF;padding:10px 14px;margin:12px 0;font:13.5px/1.5 Arial,sans-serif}
.stamp{display:inline-block;border:2px solid #B54A3F;color:#B54A3F;font:800 12px Arial,sans-serif;letter-spacing:.08em;padding:3px 9px;transform:rotate(-2deg);margin:6px 0}
.sig{margin-top:26px;display:grid;grid-template-columns:1fr 1fr;gap:26px;font:13px Arial,sans-serif}
.sig div{border-top:1px solid var(--ink);padding-top:4px}
ol,ul{padding-left:22px}
li{margin-bottom:4px}
.clause{margin:10px 0;padding-left:34px;text-indent:-34px}
.clause b{display:inline-block;width:30px;text-indent:0}
.foot{max-width:860px;margin:0 auto 26px;font:12px Arial,sans-serif;color:var(--soft);text-align:center;padding:0 16px}
@media(max-width:640px){.doc{margin:0;padding:20px 16px;border:0}.sig{grid-template-columns:1fr}table{font-size:12px}th,td{padding:5px}.doc .hdr .meta{text-align:left}}
@media print{body{background:#fff}.doc{box-shadow:none;border:0;margin:0}}
"""


def hdr(company, meta):
    return f'<div class="hdr"><div class="co">{company}</div><div class="meta">{meta}</div></div>'


# ------------------------------------------------------------------ estimates
def estimate(lines):
    """lines: (desc, type, amount, taxable). Returns rows, subtotal pieces and total."""
    taxable = sum((Decimal(str(a)) for _, _, a, t in lines if t), Decimal("0"))
    nontax = sum((Decimal(str(a)) for _, _, a, t in lines if not t), Decimal("0"))
    tax = c(taxable * TAX)
    return taxable, nontax, tax, c(taxable + nontax + tax)


INITIAL = [
    ("Rear bumper cover — AFTERMARKET (A/M)", "Part", "412.00", True),
    ("Rear bumper reinforcement — AFTERMARKET (A/M)", "Part", "286.00", True),
    ("Rear bumper energy absorber — OEM", "Part", "118.40", True),
    ("Liftgate shell — OEM", "Part", "1684.20", True),
    ("Liftgate glass — OEM", "Part", "489.00", True),
    ("Tail lamp assembly LH — OEM", "Part", "389.75", True),
    ("Tail lamp assembly RH — OEM", "Part", "389.75", True),
    ("Rear body (back) panel — OEM", "Part", "512.30", True),
    ("Liftgate emblems & moldings — OEM", "Part", "146.90", True),
    ("Body labor — 41.0 hrs @ $58.00", "Labor", "2378.00", False),
    ("Refinish labor — 22.0 hrs @ $58.00", "Labor", "1276.00", False),
    ("Paint & materials — 22.0 hrs @ $42.00", "Materials", "924.00", True),
]
# shop supplies / hazardous waste (non-taxable) closes the estimate to the file's figure
_tx, _nt, _t, _tot = estimate(INITIAL)
SUPPLIES = c(Decimal("9480.35") - _tot)
INITIAL.append(("Shop supplies & hazardous waste disposal", "Misc", str(SUPPLIES), False))
I_TAXABLE, I_NONTAX, I_TAX, I_TOTAL = estimate(INITIAL)
assert I_TOTAL == Decimal("9480.35") and Decimal("15") < SUPPLIES < Decimal("80"), (I_TOTAL, SUPPLIES)

SUPP = [
    ("Rear frame rail LH — OEM", "Part", "1710.68", True),
    ("Rear floor pan — OEM", "Part", "912.75", True),
    ("Quarter panel LH — OEM", "Part", "1148.60", True),
    ("Rear bumper reinforcement — OEM (replaces A/M)", "Part", "402.10", True),
    ("Credit: A/M bumper reinforcement removed", "Part", "-286.00", True),
    ("Rear bumper cover — OEM (replaces A/M)", "Part", "618.30", True),
    ("Credit: A/M bumper cover removed", "Part", "-412.00", True),
    ("Blind-spot radar bracket LH — OEM", "Part", "64.20", True),
    ("Seam sealer & corrosion protection", "Materials", "186.00", True),
    ("Frame setup, measure & pull — 6.0 hrs @ $95.00", "Labor", "570.00", False),
    ("Refinish labor (added panels) — 12.0 hrs @ $72.00", "Labor", "864.00", False),
    ("Paint & materials (added) — 12.0 hrs @ $42.00", "Materials", "504.00", True),
    ("Labor-rate difference on initial estimate — 63.0 hrs × ($72 − $58)", "Labor", "882.00", False),
    ("Sublet: pre-repair diagnostic scan", "Sublet", "95.00", False),
    ("Sublet: post-repair diagnostic scan", "Sublet", "95.00", False),
    ("Sublet: blind-spot / rear cross-traffic radar calibration", "Sublet", "385.00", False),
    ("Sublet: four-wheel alignment", "Sublet", "149.00", False),
]
SUPP.insert(9, ("Body labor — structural (rail sectioning, floor pan, quarter panel) — 98.0 hrs @ $72.00", "Labor", "7056.00", False))
SUPP_TARGET = Decimal("15379.65")
_tx, _nt, _t, _tot = estimate(SUPP)
STRUCT = c(SUPP_TARGET - _tot)   # supplement shop supplies (non-taxable) close it to the file's figure
SUPP.append(("Shop supplies & hazardous waste disposal (supplement)", "Misc", str(STRUCT), False))
S_TAXABLE, S_NONTAX, S_TAX, S_TOTAL = estimate(SUPP)
assert S_TOTAL == SUPP_TARGET and Decimal("15") < STRUCT < Decimal("80"), (S_TOTAL, STRUCT)
assert I_TOTAL + S_TOTAL == Decimal("24860.00")


def est_rows(lines):
    return [[d, t, f'<span style="white-space:nowrap">{m(a)}</span>'] for d, t, a, _ in lines]


# ------------------------------------------------------------------ valuation
COMPS_CARRIER = [
    ("1", "2022 Toyota RAV4 XLE AWD", "41,300", "22 mi", "$27,450", "−$470 (mileage/equipment)", 26980),
    ("2", "2022 Toyota RAV4 LE FWD", "36,900", "38 mi", "$25,200", "+$951 (equipment)", 26151),
    ("3", "2021 Toyota RAV4 XLE AWD", "52,000", "160 mi", "$24,995", "+$1,425 (mileage/year)", 26420),
]
BASE = Decimal(sum(x[6] for x in COMPS_CARRIER)) / 3
assert BASE == Decimal("26517"), BASE
ACV_CARRIER = BASE - 620 - 750
assert ACV_CARRIER == Decimal("25147")
TAX_CARRIER = c(ACV_CARRIER * TAX)
OFFER = ACV_CARRIER + TAX_CARRIER
assert OFFER == Decimal("27221.63"), OFFER

LSH_COMPS = [
    ("A", "2022 Toyota RAV4 XLE Premium AWD · Weather Package", "27,950", "18 mi", "Harborview Toyota", "$31,495", True),
    ("B", "2022 Toyota RAV4 XLE Premium AWD · Weather Package", "30,210", "25 mi", "Metro Auto Plaza", "$30,900", True),
    ("C", "2022 Toyota RAV4 XLE Premium AWD · Weather Package", "26,480", "41 mi", "Bayside Motors", "$31,150", True),
    ("D", "2022 Toyota RAV4 Limited AWD", "29,100", "12 mi", "Harborview Toyota", "$34,800", False),
    ("E", "2020 Toyota RAV4 XLE Premium AWD", "28,000", "30 mi", "Riverview Auto Sales", "$27,300", False),
]
ACV_LSH = c(Decimal(31495 + 30900 + 31150) / 3)
TAX_LSH = c(ACV_LSH * TAX)
FEES = Decimal("356.00")
COUNTER = ACV_LSH + TAX_LSH + FEES
assert (ACV_LSH, TAX_LSH, COUNTER) == (Decimal("31181.67"), Decimal("2572.49"), Decimal("34110.16"))
ACV_AGREED = Decimal("30650.00")
TAX_AGREED = c(ACV_AGREED * TAX)
AGREED = ACV_AGREED + TAX_AGREED + FEES
assert AGREED == Decimal("33534.63"), AGREED
PAYOFF = Decimal("19850.42")
PAYOFF_1020 = PAYOFF + 5 * Decimal("3.10")
EQUITY = AGREED - PAYOFF_1020
assert (PAYOFF_1020, EQUITY) == (Decimal("19865.92"), Decimal("13668.71"))


def build():
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, "doc.css"), "w", encoding="utf8") as f:
        f.write(CSS.strip() + "\n")

    # ---------------- intake ----------------
    page("intake/AC_01_PD_Intake_Sheet.html", "PD Intake Sheet — Angela Carter", hdr("LSH Law Group", "PD Intake Sheet<br>Taken 09/21/2026 9:40 AM by Intake (M. Ruiz)") + """
<h1>Property Damage Intake — Angela Carter</h1>
<p class="sub">LSH PD File # PD-AC-2026-014 · linked BI file MVA-AC-2026-014</p>
<h2>Client</h2>""" + kv([
        ("Name", "Angela Carter"), ("Date of birth", "03/22/1987"), ("Address", "1820 Birchwood Dr, Riverview Park, ST 90214"),
        ("Phone / email", "(555) 214-7730 · angela.carter@email.com"), ("Best contact", "Text before 5 PM (works as a dental hygienist)"),
    ]) + "<h2>Loss</h2>" + kv([
        ("Date / time", "Friday 09/18/2026 · about 5:40 PM"), ("Location", "Harbor Blvd &amp; 9th St, Riverview Park"),
        ("How it happened (client)", "“I was stopped at the red light and he just slammed into the back of me.”"),
        ("Police", "Riverview Park PD — report # RPPD-26-091844"),
        ("Other driver", "Kevin Hale — driving his mom's Ford Explorer"),
        ("Other insurance (photo of card)", "Crestline Mutual · policy CMI-PA-7730215 · insured Linda Hale · card shows <b>exp. 09/01/2026</b>"),
    ]) + "<h2>Vehicle</h2>" + kv([
        ("Vehicle", "2022 Toyota RAV4 — blue — AWD · trim: “not sure, the nicer one?”"),
        ("VIN", "TRNG4RAV4XLE22041 <i>(copied from the tow invoice)</i>"),
        ("Plate", "8KTR512 (ST)"), ("Mileage", "“about 28,000”"),
        ("Drivable?", "No — rear crushed, liftgate won't open"),
        ("Where is it now", "A-1 Metro Towing &amp; Storage, 4410 Industrial Way — yard said <b>$65 per day</b>"),
        ("Loan / lease", "Loan with Riverbank Auto Finance — client doesn't know the balance · no payoff letter yet"),
        ("Client's insurance", "Harbor Point Insurance (dec page emailed)"),
        ("Photos", "6 photos of the rear damage (no odometer, VIN plate or interior photos yet)"),
    ]) + """
<h2>Notes</h2>
<ul>
<li>Client says Crestline called her twice (09/19 and 09/20) asking for a <b>recorded statement</b>. She hasn't called back.</li>
<li>Neck and back pain — went to urgent care Saturday 09/19. <i>(BI — route to Rachel Owens.)</i></li>
<li>Needs a car for work and to take her two kids to school. No rental yet.</li>
<li>Her 18-month-old's car seat was in the back seat during the crash — still in the car.</li>
<li>Witness: a man on the corner gave his number to the officer (name on the police report).</li>
</ul>
""")

    page("intake/AC_02_Retainer_Summary.html", "Retainer Summary — Angela Carter", hdr("LSH Law Group", "Engagement summary<br>Signed 09/21/2026") + """
<h1>Contingent Fee Retainer — Summary Page</h1>
<p class="sub">Client: Angela Carter · Date of loss 09/18/2026</p>""" + kv([
        ("Signed", "Monday 09/21/2026, 11:05 AM (e-signature)"),
        ("Scope", "Bodily injury claim <b>and</b> property damage claim arising from the 09/18/2026 collision"),
        ("Fee — bodily injury", "33⅓% before suit / 40% if a lawsuit is filed"),
        ("Fee — property damage", "No attorney fee is taken from the property damage recovery. PD payments may be issued directly to the client, the lienholder and vendors."),
        ("Authority", "The firm may communicate with all insurers on the client's behalf. All settlement decisions are the client's, made with the attorney's advice."),
        ("Handling attorney", "Michael Grant, Esq. · PD Specialist: assigned PD team · BI Case Manager: Rachel Owens"),
    ]) + '<div class="note">Instruction to all carriers: direct all communication to LSH Law Group. The client is not to be contacted directly.</div>')

    # ---------------- police ----------------
    page("police/AC_03_Police_Report_RPPD-26-091844.html", "Police Report RPPD-26-091844", hdr("Riverview Park Police Department", "Traffic Collision Report<br>Report # RPPD-26-091844") + """
<h1>Traffic Collision Report</h1>
<p class="sub">Officer J. Morales #2217 · Reported 09/18/2026 17:52 · Weather clear · Road dry · Daylight</p>""" + kv([
        ("Date / time of collision", "09/18/2026 · 17:40"), ("Location", "Harbor Blvd at 9th St, Riverview Park, ST"),
        ("Type", "Rear-end collision · 2 vehicles · no fatalities"),
    ]) + "<h2>Unit 1</h2>" + kv([
        ("Driver", "Kevin Hale · DOB 04/02/2004 · (555) 780-3321 · DL S-HALE-0402"),
        ("Vehicle", "2015 Ford Explorer · plate 6WNB903 (ST) · front damage (moderate)"),
        ("Registered owner", "Linda Hale, 77 Westgate Ct, Riverview Park"),
        ("Insurance (as shown)", "Crestline Mutual · CMI-PA-7730215"),
    ]) + "<h2>Unit 2</h2>" + kv([
        ("Driver", "Angela Carter · DOB 03/22/1987 · (555) 214-7730"),
        ("Vehicle", "2022 Toyota RAV4 · blue · plate 8KTR512 (ST) · VIN TRNG4RAV4XLE22014 · rear damage (major) · not drivable"),
        ("Registered owner", "Angela Carter · Lienholder: Riverbank Auto Finance"),
        ("Insurance (as shown)", "Harbor Point Insurance · HPI-AU-4418-2207"),
    ]) + """
<h2>Narrative</h2>
<p>Unit 2 was stopped for a steady red signal, southbound on Harbor Blvd at 9th St. Unit 1, also southbound, failed to stop and struck the rear of Unit 2. Driver 1 stated he “looked down at the GPS for a second.” Witness W1 (pedestrian at the SW corner) stated Unit 2 “had been stopped at the red for several seconds” before the impact.</p>
<p>Driver 2 complained of neck pain and declined transport. Unit 2 was not drivable and was removed by rotation tow A-1 Metro Towing &amp; Storage. Unit 1 was driven from the scene.</p>
<h2>Citation &amp; witness</h2>""" + kv([
        ("Citation", "Driver 1 (Kevin Hale): Following Too Closely — citation # RP-448120"),
        ("Witness W1", "Tom Nguyen · (555) 390-1142 · pedestrian"),
        ("Tow", "A-1 Metro Towing &amp; Storage (rotation) · 4410 Industrial Way"),
    ]))

    # ---------------- vehicle ----------------
    page("vehicle/AC_04_Registration_and_Title.html", "Vehicle Registration — 2022 RAV4", hdr("State of ST · Department of Motor Vehicles", "Vehicle Registration Card<br>Valid 04/2026 – 04/2027") + "<h1>Registration Card</h1>" + kv([
        ("Plate", "8KTR512"), ("VIN", "<b>TRNG4RAV4XLE22014</b>"), ("Year / make / model", "2022 Toyota RAV4"),
        ("Body / drivetrain", "4-door SUV · AWD"), ("Color", "Blue"),
        ("Registered owner", "Angela Carter, 1820 Birchwood Dr, Riverview Park, ST 90214"),
        ("Legal owner / lienholder", "Riverbank Auto Finance, PO Box 4412, Metro Center, ST · loan # RAF-5530981"),
        ("Title status", "Clean · title held by lienholder (electronic lien)"),
    ]) + '<div class="note">The lienholder holds the title until the loan is paid off. In a total loss, the lienholder must be paid and release the title before the carrier takes the vehicle.</div>')

    page("vehicle/AC_05_Photo_Log.html", "Photo Log — Angela Carter RAV4", hdr("LSH Law Group", "PD photo log<br>Updated 09/22/2026") + "<h1>Photo Log — 2022 RAV4 (PD-AC-2026-014)</h1>" + table(
        ["#", "Taken", "By", "What it shows"], [
            ["1", "09/18 17:48", "Client (scene)", "Rear view: bumper cover pushed in, liftgate buckled, both tail lamps broken"],
            ["2", "09/18 17:48", "Client (scene)", "Rear 3/4 left: left quarter panel creased above the wheel"],
            ["3", "09/18 17:49", "Client (scene)", "Rear 3/4 right: right tail lamp and bumper corner"],
            ["4", "09/18 17:49", "Client (scene)", "Liftgate glass shattered; cargo area with glass"],
            ["5", "09/18 17:50", "Client (scene)", "Other vehicle (Explorer) front end — moderate damage"],
            ["6", "09/18 17:55", "Client (scene)", "Child car seat in the rear seat (rear-facing) at the time of impact"],
            ["7", "09/21 15:20", "Client (at A-1)", "<b>Odometer: 28,412 miles</b>"],
            ["8", "09/21 15:21", "Client (at A-1)", "Door-jamb VIN label: TRNG4RAV4XLE22014"],
            ["9", "09/21 15:23", "Client (at A-1)", "Interior front and rear: clean, no stains, tears or wear beyond normal"],
            ["10", "09/21 15:25", "Client (at A-1)", "Weather Package badge / heated steering wheel button; moonroof"],
        ]) + '<div class="note">Photos 7–10 were requested by the PD Specialist on day one — they prove the mileage, VIN, condition and options for any valuation.</div>')

    page("vehicle/AC_06_Window_Sticker.html", "Window Sticker — 2022 RAV4 XLE Premium AWD", hdr("Toyota — Monroney Label (copy)", "Provided by client from purchase file") + "<h1>2022 RAV4 XLE Premium AWD</h1><p class=\"sub\">VIN TRNG4RAV4XLE22014 · Exterior: Blueprint · Interior: Black SofTex</p>" + table(
        ["Item", "MSRP"], [
            ["Base price — RAV4 XLE Premium AWD 2.5L 4-cyl, 8-speed automatic", "$32,475"],
            ["Weather Package: heated steering wheel, heated rear seats, rain-sensing wipers", "$515"],
            ["Standard on XLE Premium: power tilt/slide moonroof, SofTex heated front seats, 19-inch alloy wheels, power liftgate, blind-spot monitor with rear cross-traffic alert", "Included"],
            ["Delivery, processing and handling", "$1,215"],
            ["<b>Total MSRP</b>", "<b>$34,205</b>"],
        ]) + '<div class="note">Trim and packages drive the value in a total loss. This sticker proves XLE <b>Premium</b> AWD with the Weather Package.</div>')

    page("vehicle/AC_07_Riverbank_Payoff_Letter.html", "Payoff Letter — Riverbank Auto Finance", hdr("Riverbank Auto Finance", "Payoff Department · (555) 800-4412<br>Issued 10/05/2026") + "<h1>10-Day Payoff Letter</h1>" + kv([
        ("Borrower", "Angela Carter"), ("Loan #", "RAF-5530981"), ("Collateral", "2022 Toyota RAV4 · VIN TRNG4RAV4XLE22014"),
        ("Payoff amount", f"<b>{m(PAYOFF)}</b>"), ("Good through", "<b>10/15/2026</b>"),
        ("Per diem after the good-through date", "<b>$3.10 per day</b>"),
        ("Send payment to", "Riverbank Auto Finance, Attn: Payoffs, PO Box 4412, Metro Center, ST 90201 · reference loan # RAF-5530981"),
        ("Title", "Electronic lien. On receipt of the full payoff, Riverbank releases the lien and the title to the payor/insurer within 10 business days."),
    ]) + '<div class="note">A short payment (sent after the good-through date without the per diem) will be returned and the lien will not be released.</div>')

    # ---------------- insurance ----------------
    page("insurance/AC_08_Crestline_Dec_Page_prior_term.html", "Crestline Mutual Declarations (prior term)", hdr("Crestline Mutual Insurance", "Personal Auto Policy Declarations<br>Policy CMI-PA-7730215") + '<h1>Declarations Page</h1><span class="stamp">Copy provided at the scene</span>' + kv([
        ("Named insured", "Linda Hale, 77 Westgate Ct, Riverview Park, ST"),
        ("Policy period", "<b>03/01/2026 12:01 AM – 09/01/2026 12:01 AM</b>"),
        ("Listed drivers", "Linda Hale · Kevin Hale (household)"), ("Excluded drivers", "None"),
        ("Vehicle 1", "2015 Ford Explorer · VIN TRNGEXPL15HALE903 · plate 6WNB903"),
    ]) + table(["Coverage", "Limits", "Deductible"], [
        ["Bodily Injury Liability", "$25,000 each person / $50,000 each accident", "—"],
        ["Property Damage Liability", "$50,000 each accident", "—"],
        ["Medical Payments (occupants of the insured vehicle)", "$1,000 each person", "—"],
        ["Uninsured Motorist BI", "$25,000 / $50,000", "—"],
        ["Collision", "Not purchased", "—"], ["Comprehensive", "ACV", "$1,000"],
        ["Rental Reimbursement", "Not purchased", "—"],
    ]) + '<div class="note">This is the term that ended 09/01/2026. The collision was 09/18/2026 — confirm with Crestline that the policy renewed and was in force on the date of loss.</div>')

    page("insurance/AC_09_Harbor_Point_Dec_Page.html", "Harbor Point Declarations — Angela Carter", hdr("Harbor Point Insurance", "Auto Policy Declarations<br>Policy HPI-AU-4418-2207") + "<h1>Declarations Page</h1>" + kv([
        ("Named insured", "Angela Carter, 1820 Birchwood Dr, Riverview Park, ST 90214"),
        ("Policy period", "06/15/2026 – 12/15/2026"),
        ("Agent", "Paul Brennan, Brennan Insurance Agency · (555) 233-9001"),
        ("Vehicle 1", "2022 Toyota RAV4 XLE Premium AWD · VIN TRNG4RAV4XLE22014"),
        ("Loss payee", "Riverbank Auto Finance"), ("Listed drivers", "Angela Carter"),
    ]) + table(["Coverage", "Limits", "Deductible"], [
        ["Bodily Injury Liability", "$100,000 / $300,000", "—"],
        ["Property Damage Liability", "$100,000", "—"],
        ["Uninsured / Underinsured Motorist BI", "$50,000 each person / $100,000 each accident", "—"],
        ["Uninsured Motorist Property Damage", "$3,500 (only when the at-fault driver is uninsured or unidentified)", "$250"],
        ["Medical Payments", "$5,000 each person", "—"],
        ["Collision", "Actual cash value", "$500 (no deductible waiver)"],
        ["Comprehensive", "Actual cash value", "$250"],
        ["Rental Reimbursement", "$40 per day / $1,200 maximum (with a covered collision or comprehensive loss)", "—"],
        ["Towing &amp; Labor", "$100 per disablement", "—"],
        ["Loan / Lease Payoff (GAP)", "Not purchased", "—"],
    ]))

    page("insurance/AC_10_Crestline_Claim_Acknowledgment.html", "Crestline Claim Acknowledgment", hdr("Crestline Mutual Insurance", "Claims · (555) 640-2280<br>09/21/2026") + """
<h1>Claim Acknowledgment</h1>
<p>To: LSH Law Group, attorneys for Angela Carter</p>""" + kv([
        ("Claim #", "<b>CMI-26-0918-4471</b>"), ("Our insured", "Linda Hale · driver Kevin Hale"),
        ("Date of loss", "09/18/2026"), ("Your client", "Angela Carter · 2022 Toyota RAV4"),
        ("Assigned PD adjuster", "Derek Lawson · (555) 640-2280 ext 418 · dlawson@crestlinemutual.example"),
        ("Liability", "<b>Under investigation.</b> Our driver reports your client stopped suddenly on a yellow signal. We are awaiting the police report."),
        ("Rental", "No rental can be authorized until a liability decision is made."),
        ("Inspection", "A field appraiser will be assigned once the vehicle location is confirmed."),
    ]) + '<div class="note">To complete our investigation, please make your client available for a <b>recorded statement</b> at her earliest convenience.</div>')

    page("insurance/AC_11_Crestline_Liability_Acceptance.html", "Crestline Liability Acceptance", hdr("Crestline Mutual Insurance", "Claim CMI-26-0918-4471<br>09/24/2026") + """
<h1>Liability Decision &amp; Rental Authorization</h1>
<p>To: LSH Law Group, attorneys for Angela Carter</p>
<p>After review of police report RPPD-26-091844 and the statement of independent witness Tom Nguyen, Crestline Mutual <b>accepts 100% liability</b> for the 09/18/2026 collision.</p>""" + kv([
        ("Coverage", "Policy CMI-PA-7730215 was renewed and in force on the date of loss: term 09/01/2026 – 03/01/2027. Property damage coverage is confirmed."),
        ("Rental", "Authorized from 09/24/2026 at <b>$45.00 per day</b>, compact SUV (like kind), <b>direct bill</b> to Metro Car Rental. Rental ends when repairs are complete, or <b>3 days after a total-loss settlement offer</b>."),
        ("Tow &amp; storage", "Reasonable tow and storage will be paid directly to the facility on receipt of the final invoice."),
        ("Inspection", "Field appraiser at Riverside Collision Center, 09/24/2026, 2:00 PM."),
        ("Prior rental days", "Rental days paid by another carrier may be submitted through subrogation."),
    ]) + "<p>Derek Lawson, Property Damage Adjuster</p>")

    # ---------------- rental, tow, storage ----------------
    page("rental/AC_12_A1_Tow_and_Storage_Invoice.html", "A-1 Tow & Storage Invoice", hdr("A-1 Metro Towing &amp; Storage", "4410 Industrial Way · (555) 318-6620<br>Invoice # A1-26-7719") + "<h1>Tow &amp; Storage Invoice</h1>" + kv([
        ("Vehicle", "2022 Toyota RAV4 · blue · plate 8KTR512"), ("VIN", "TRNG4RAV4XLE22041"),
        ("Owner", "Angela Carter"), ("Towed from", "Harbor Blvd &amp; 9th St (police rotation, RPPD-26-091844)"),
        ("In", "09/18/2026 18:25"), ("Released", "09/23/2026 10:10 to Riverside Collision Center (owner's authorization on file)"),
    ]) + table(["Charge", "Qty", "Rate", "Amount"], [
        ["Tow — light duty, police rotation", "1", "$325.00", "$325.00"],
        ["Storage (09/18 – 09/23, calendar days incl. day in)", "6", "$65.00", "$390.00"],
        ["<b>Total</b>", "", "", "<b>$715.00</b>"],
    ]) + '<p>Paid 09/28/2026 by Crestline Mutual, check # 0048127 (claim CMI-26-0918-4471).</p>')

    page("rental/AC_13_Metro_Car_Rental_Agreement.html", "Metro Car Rental Agreement", hdr("Metro Car Rental — Harbor Blvd", "(555) 248-3100<br>Rental Agreement RA-2026-88412") + "<h1>Insurance Replacement Rental</h1>" + kv([
        ("Renter", "Angela Carter · DL on file"), ("Opened", "09/21/2026 15:45"),
    ]) + table(["Period", "Billed to", "Claim #", "Class", "Rate", "Notes"], [
        ["09/21 – 09/23", "Harbor Point Insurance", "HPI-26-55012", "Midsize SUV", "$40.00/day", "Direct bill; Harbor Point max $1,200"],
        ["From 09/24", "Crestline Mutual", "CMI-26-0918-4471", "Standard SUV (renter upgrade)", "$58.00/day", "Crestline authorized $45.00/day (compact SUV). <b>Renter pays the $13.00/day difference.</b>"],
    ]) + kv([
        ("Damage waiver", "DECLINED — renter's own auto policy extends to rentals (confirmed with agent Paul Brennan 09/21)"),
        ("Fuel", "Renter's responsibility (return full)"),
        ("End date", "Per insurer authorization. Days after the insurer's end date are billed to the renter at $58.00/day."),
    ]))

    # ---------------- repairs ----------------
    page("repair/AC_14_Crestline_Estimate.html", "Crestline Field Estimate", hdr("Crestline Mutual — Field Appraisal", "Estimate E-4471-01 · 09/24/2026<br>Appraiser: T. Walsh (on site at Riverside)") + "<h1>Preliminary Repair Estimate</h1><p class=\"sub\">2022 Toyota RAV4 · VIN TRNG4RAV4XLE22014 · odometer not recorded</p>" + table(["Line", "Type", "Amount"], est_rows(INITIAL)) + table(["", "Amount"], [
        ["Taxable parts &amp; materials", m(I_TAXABLE)], ["Labor &amp; non-taxable", m(I_NONTAX)], ["Sales tax 8.25% on parts &amp; materials", m(I_TAX)], ["<b>Estimate total</b>", f"<b>{m(I_TOTAL)}</b>"],
    ]) + '<div class="note">Labor rate used: $58.00/hr (Crestline’s survey rate). Riverside Collision Center’s posted labor rate: $72.00/hr. No diagnostic scans or sensor calibrations are included. Hidden damage may be found at teardown.</div>')

    page("repair/AC_15_Riverside_Supplement.html", "Riverside Supplement S1", hdr("Riverside Collision Center", "Estimator: Dana Whitfield · (555) 455-0192<br>Supplement S1 · 09/29/2026") + "<h1>Supplement S1 — Teardown Findings</h1><p class=\"sub\">Crestline claim CMI-26-0918-4471 · RAV4 VIN TRNG4RAV4XLE22014 · 28,412 miles</p><p>Teardown found the <b>left rear frame rail buckled</b>, the <b>rear floor pan</b> pushed forward and the left quarter panel damaged beyond repair. OEM parts are requested for all structural and sensor-related parts on this 2022 vehicle.</p>" + table(["Line", "Type", "Amount"], est_rows(SUPP)) + table(["", "Amount"], [
        ["Taxable parts &amp; materials (net of credits)", m(S_TAXABLE)], ["Labor, sublet &amp; non-taxable", m(S_NONTAX)], ["Sales tax 8.25% on parts &amp; materials", m(S_TAX)], ["<b>Supplement total</b>", f"<b>{m(S_TOTAL)}</b>"],
        ["Preliminary estimate E-4471-01", m(I_TOTAL)], ["<b>Total repair cost</b>", f"<b>{m(I_TOTAL + S_TOTAL)}</b>"],
    ]) + '<div class="note">Total repairs of $24,860.00 — the shop asks Crestline to evaluate the vehicle as a possible total loss.</div>')

    # ---------------- total loss ----------------
    page("totalloss/AC_16_Crestline_Total_Loss_Letter.html", "Crestline Total Loss Offer", hdr("Crestline Mutual Insurance", "Total Loss Unit · Priya Shah ext 431<br>10/05/2026") + """
<h1>Total Loss Settlement Offer</h1>
<p>To: LSH Law Group, attorneys for Angela Carter · Claim CMI-26-0918-4471</p>
<p>On 10/01/2026 the 2022 Toyota RAV4 was determined to be a <b>total loss</b>: the repair cost ($24,860.00) exceeds the state threshold. Our offer, based on valuation report VR-26-18840 (enclosed):</p>""" + table(["", "Amount"], [
        ["Actual cash value", m(ACV_CARRIER)], ["Sales tax (8.25%)", m(TAX_CARRIER)], ["<b>Total settlement offer</b>", f"<b>{m(OFFER)}</b>"],
    ]) + """<ul>
<li>Payment will be issued to the lienholder (Riverbank Auto Finance) for the payoff, and the balance to the owner.</li>
<li><b>Rental:</b> per our authorization, the rental will end <b>3 days after this offer — 10/08/2026</b>.</li>
<li>Please return the enclosed title packet (power of attorney, odometer statement) and the keys.</li>
</ul>
<p>Priya Shah, Total Loss Adjuster</p>""")

    val_rows = [[n, d, mi, dist, lp, adj, "${:,}".format(v)] for n, d, mi, dist, lp, adj, v in COMPS_CARRIER]
    page("totalloss/AC_17_Valuation_Report_VR-26-18840.html", "Valuation Report VR-26-18840", hdr("Vehicle Valuation Services (for Crestline Mutual)", "Report VR-26-18840<br>10/02/2026") + "<h1>Market Valuation Report</h1><h2>Loss vehicle</h2>" + kv([
        ("Vehicle", "2022 Toyota RAV4 <b>XLE AWD</b>"), ("VIN", "TRNG4RAV4XLE22014"), ("Mileage", "<b>34,812</b>"),
        ("Options / packages", "None listed beyond base XLE equipment"), ("Location", "Riverview Park, ST 90214"),
    ]) + "<h2>Comparable vehicles</h2>" + table(["#", "Vehicle", "Miles", "Distance", "List price", "Adjustments", "Adjusted value"], val_rows) + "<h2>Valuation</h2>" + table(["", "Amount"], [
        ["Base value (average of adjusted comparables)", m(BASE)],
        ["Condition adjustment — interior “below average”", "−$620.00"],
        ["Prior damage deduction — “rear bumper scuffs”", "−$750.00"],
        ["<b>Adjusted vehicle value (ACV)</b>", f"<b>{m(ACV_CARRIER)}</b>"],
        ["Sales tax 8.25%", m(TAX_CARRIER)],
        ["Title, registration &amp; fees", "$0.00"],
        ["<b>Total</b>", f"<b>{m(OFFER)}</b>"],
    ]) + '<p class="sub">Condition rating entered by valuation desk from photo review. No inspector notes attached.</p>')

    lsh_rows = [[k, d, mi, dist, dealer, p, "✔ use" if ok else "✘ exclude"] for k, d, mi, dist, dealer, p, ok in LSH_COMPS]
    page("totalloss/AC_18_Comparable_Listings_LSH.html", "Comparable Listings — compiled by LSH", hdr("LSH Law Group — PD Team", "Comparable vehicle listings<br>Pulled 10/06/2026 (screenshots on file)") + "<h1>Comparable Vehicle Listings — 2022 RAV4 XLE Premium AWD</h1><p class=\"sub\">Loss vehicle: 2022 RAV4 XLE Premium AWD · Weather Package · 28,412 miles · Riverview Park</p>" + table(["", "Vehicle", "Miles", "Distance", "Dealer", "Price", "Draft call"], lsh_rows) + '<div class="note">Draft calls are the PD team’s first pass — confirm each one against the matching rules (year, model, trim, drivetrain, options, mileage, local market) before you use it.</div>')

    # ---------------- settlement ----------------
    page("settlement/AC_19_Crestline_Release_DRAFT.html", "Crestline Release — DRAFT", hdr("Crestline Mutual Insurance", "Claim CMI-26-0918-4471<br>Draft sent 10/12/2026") + """
<h1>RELEASE OF ALL CLAIMS</h1>
<p class="clause"><b>1.</b> For the sole consideration of <b>$33,534.63</b>, the undersigned, Angela Carter (“Releasor”), releases and forever discharges Linda Hale, Kevin Hale and Crestline Mutual Insurance (“Releasees”) from <b>any and all claims, demands, damages, actions and causes of action, including but not limited to bodily injury, medical expenses, known or unknown injuries</b>, property damage and loss of use, arising from the accident of 09/18/2026.</p>
<p class="clause"><b>2.</b> The consideration is for the 2022 Toyota RAV4, VIN TRNG4RAV4XLE22014, declared a total loss.</p>
<p class="clause"><b>3.</b> Payment will be made by one check payable jointly to <b>“Angela Carter and Riverbank Auto Finance”</b> for the full consideration.</p>
<p class="clause"><b>4.</b> Releasor agrees to <b>indemnify and hold harmless</b> the Releasees from any lien, claim or subrogation interest of any person arising from the accident.</p>
<p class="clause"><b>5.</b> Releasor agrees to keep the terms and amount of this settlement <b>confidential</b>.</p>
<p class="clause"><b>6.</b> Releasor will sign the title documents and power of attorney and deliver the keys on receipt of payment.</p>
<p class="clause"><b>7.</b> This release is the entire agreement and is not an admission of liability.</p>
<div class="sig"><div>Releasor: Angela Carter · Date</div><div>Notary</div></div>""")

    page("settlement/AC_20_Child_Car_Seat_Receipt.html", "Receipt — Child Car Seat", hdr("KidSafe Baby Supply", "Store #212 · Riverview Park<br>02/14/2026 13:22") + "<h1>Sales Receipt</h1>" + table(["Item", "Qty", "Price"], [
        ["Convertible child car seat — rear/forward facing, 5-point harness", "1", "$268.00"], ["Sales tax 8.25%", "", "$21.99"], ["<b>Total paid (card ending 4410)</b>", "", "<b>$289.99</b>"],
    ]) + '<div class="note">Manufacturer’s instructions: replace the car seat after a moderate or severe crash, even if no damage is visible. The seat was occupied-position installed (rear-facing) in the RAV4 at the time of the 09/18/2026 rear-end collision.</div>')

    page("settlement/AC_21_Settlement_Confirmation.html", "Settlement Confirmation — Crestline", hdr("Crestline Mutual Insurance", "Email from Priya Shah<br>10/09/2026 4:12 PM") + f"""
<h1>Re: Carter — revised total loss (CMI-26-0918-4471)</h1>
<p>Following our call today, and subject to your client's approval, the revised valuation is:</p>""" + table(["", "Amount"], [
        ["Loss vehicle corrected to XLE Premium AWD with Weather Package, 28,412 miles", ""],
        ["Condition and prior-damage deductions removed", ""],
        ["Actual cash value", m(ACV_AGREED)], ["Sales tax (8.25%)", m(TAX_AGREED)], ["Title, registration &amp; plate-transfer fees", m(FEES)],
        ["<b>Total vehicle settlement</b>", f"<b>{m(AGREED)}</b>"],
    ]) + """<ul>
<li>Child car seat: will be paid on receipt of the receipt ($289.99).</li>
<li>Rental: returned 10/08 (Ms. Carter is using a family car until payment); direct bill 09/24–10/08 = 15 days × $45.00 = $675.00. Her $13.00/day upgrade is billed to her.</li>
<li>Tow &amp; storage ($715.00) already paid to A-1.</li>
<li>Our release will follow for signature.</li>
</ul>
<p class="sub">Client authority: Angela Carter authorized acceptance of $33,534.63 by email to Michael Grant, Esq., 10/09/2026 6:05 PM (on file).</p>""")

    # ---------------- templates ----------------
    page("templates/PD_Letter_of_Representation_Template.html", "Template — PD Letter of Representation", hdr("LSH Law Group", "Template") + """
<h1>Letter of Representation — Property Damage</h1>
<p>[Date]</p><p>[Adjuster name] · [Carrier] · Claim # [claim number] · Your insured: [named insured] / driver [driver] · Date of loss: [date]</p>
<p>Please be advised that LSH Law Group represents <b>[client name]</b> for all claims arising from the above collision, including [property damage / property damage and bodily injury].</p>
<ol>
<li>Direct all communication to our office. Do not contact our client directly, and do not request a recorded statement from our client.</li>
<li>Please confirm in writing: that the policy was in force on the date of loss; the vehicle and driver are covered; your liability decision; and the property damage limit (or what you need to disclose it).</li>
<li>Vehicle: [year make model trim], VIN [VIN], currently at [location, daily storage rate]. Please advise your inspection plan.</li>
<li>Rental: our client needs a like-kind rental. Please confirm your authorization (rate, class, direct bill).</li>
<li>Please preserve all evidence, including your insured's statements, photos and vehicle data.</li>
</ol>
<p>[Name], PD Specialist, on behalf of [Attorney], Esq. · [phone] · [email]</p>""", kind="Template")

    page("templates/PD_Claim_Setup_Checklist.html", "Template — PD Claim Setup Checklist", hdr("LSH Law Group", "Template") + "<h1>PD Claim Setup — Day-One Checklist</h1>" + table(["✔", "Item", "Verified against"], [
        ["☐", "Vehicle: year, make, model, TRIM, VIN, plate, color, MILEAGE, options", "Registration, odometer/VIN photos, window sticker"],
        ["☐", "Owner and lienholder; loan number; payoff letter requested", "Registration, loan statement"],
        ["☐", "Vehicle location, daily storage rate, move authorized", "Tow/storage invoice"],
        ["☐", "Police report number, citation, witness", "Police report"],
        ["☐", "At-fault driver, owner, named insured, listed/excluded drivers", "Police report, at-fault dec page, adjuster"],
        ["☐", "At-fault policy in force ON THE DATE OF LOSS", "Adjuster confirmation (in writing)"],
        ["☐", "Client's coverages: collision, rental, towing, UMPD, MedPay (→ BI)", "Client's dec page"],
        ["☐", "Claims opened: claim #, adjuster, direct line, email", "CMS"],
        ["☐", "LOR sent; recorded-statement requests routed to the attorney", "CMS"],
        ["☐", "Rental plan: who pays, rate, class, end-date rule", "Adjuster / rental company"],
        ["☐", "Injuries flagged to the BI Case Manager", "CMS note"],
        ["☐", "Follow-up tasks with dates", "CMS"],
    ]), kind="Template")

    page("templates/Total_Loss_Counter_Template.html", "Template — Total Loss Counter", hdr("LSH Law Group", "Template") + """
<h1>Total Loss Counter-Offer</h1>
<p>[Adjuster] · Claim # [ ] · Valuation report # [ ]</p>
<p>We have reviewed your valuation of [year make model] and ask that it be corrected as follows:</p>""" + table(["Line", "Your report", "Error", "Proof (exhibit)", "Correction"], [
        ["Trim / options", "", "", "", ""], ["Mileage", "", "", "", ""], ["Comparables", "", "", "", ""],
        ["Condition deduction", "", "", "", ""], ["Prior damage deduction", "", "", "", ""], ["Tax, title &amp; fees", "", "", "", ""],
    ]) + table(["Our comparables", "Miles", "Distance", "Price"], [["A", "", "", ""], ["B", "", "", ""], ["C", "", "", ""], ["<b>Average (ACV)</b>", "", "", ""]]) + table(["Counter", "Amount"], [["ACV", ""], ["Sales tax", ""], ["Title, registration &amp; fees", ""], ["<b>Total</b>", ""]]) + "<p>Please re-run the valuation with the corrected vehicle and confirm in writing. Because the offer was based on the wrong vehicle, please also extend the rental until a corrected offer is issued.</p>", kind="Template")

    page("templates/PD_Release_Review_Checklist.html", "Template — PD Release Review Checklist", hdr("LSH Law Group", "Template") + "<h1>PD Release Review — Before It Goes to the Attorney</h1>" + table(["Check", "OK / Revise / Strike / Escalate"], [
        ["Title says Property Damage Release (not “All Claims”)", ""],
        ["Releases property damage ONLY; states bodily injury is NOT released", ""],
        ["Names: releasor, releasees, carrier — exactly as in the file", ""],
        ["VIN, date of loss, claim number — letter by letter", ""],
        ["Amount matches the written agreement", ""],
        ["Every PD item listed (vehicle, rental, tow/storage, personal property, DV)", ""],
        ["Payment: lienholder payoff and client balance paid separately", ""],
        ["Indemnity / hold harmless — escalate", ""],
        ["Confidentiality — escalate", ""],
        ["Attorney approval recorded before the client signs", ""],
    ]), kind="Template")

    # ---------------- handouts ----------------
    H = [
        ("handouts/Day1_PD_Day_One_Playbook.html", "Day 1 — PD Day-One Playbook", "<h1>PD Day-One Playbook</h1><ol><li>Verify the vehicle (VIN, trim, mileage, options) against documents.</li><li>Identify owner, driver, named insured and lienholder.</li><li>Open the claim: claim #, adjuster, coverage on the DATE OF LOSS, liability status.</li><li>Send the LOR — all contact through the firm; no recorded statements.</li><li>Rental: third-party if accepted; client's own rental coverage if pending.</li><li>Move the car — stop storage.</li><li>Flag injuries, MedPay and BI limits to the BI Case Manager.</li><li>Client call: plan, dates, what to send, what not to do.</li><li>CMS: parties, documents, notes, tasks with dates.</li></ol>"),
        ("handouts/Day2_Coverage_Spotting_Cheat_Sheet.html", "Day 2 — Coverage Spotting Cheat Sheet", "<h1>Coverage Spotting Cheat Sheet</h1>" + table(["Loss / situation", "Look for"], [["Vehicle — at-fault insured, liability accepted", "At-fault Property Damage liability"], ["Vehicle — liability denied/split, or limits too low", "Client's Collision (deductible)"], ["Vehicle — at-fault uninsured / hit-and-run", "Client's UMPD (check conditions) or Collision"], ["Rental while liability is pending", "Client's Rental Reimbursement"], ["Tow", "At-fault PD; client's Towing &amp; Labor as backup"], ["Loan &gt; ACV", "GAP (policy or loan)"], ["Medical bills", "MedPay / PIP → BI team"], ["Low at-fault BI limits", "Client's UIM → BI team"]])),
        ("handouts/Day3_Rental_Storage_Repair_Rules.html", "Day 3 — Rental, Storage & Repair Rules", "<h1>Rental, Storage &amp; Repair Rules</h1><ul><li>Rental = authorization (claim #, rate, class, start, direct bill) + reservation # + client briefed on her costs.</li><li>Client pays: upgrades, fuel, damage waiver, days after the end date.</li><li>Extensions: ask before the end date, with the reason.</li><li>Storage: move the car on day one or two.</li><li>Estimates: compare parts type, labor rate, refinish, materials, sublet (scans, calibrations).</li><li>Supplement → recheck repair ÷ ACV against the 75% threshold.</li><li>Diminished value: third-party, repaired late-model cars.</li></ul>"),
        ("handouts/Day4_Total_Loss_Audit_Checklist.html", "Day 4 — Total Loss Audit Checklist", "<h1>Total Loss Audit Checklist</h1><ol><li>Trim, drivetrain and options match the window sticker.</li><li>Mileage matches the odometer photo.</li><li>Every comp: same year, model, trim, drivetrain, similar miles, local.</li><li>Condition deduction supported by notes/photos?</li><li>Prior damage really prior?</li><li>Tax and title/registration fees included (state rule).</li><li>Payoff letter current; equity or negative equity (GAP?).</li><li>Counter in writing, line by line, with exhibits.</li><li>Rental extension if the offer was based on the wrong vehicle.</li><li>No acceptance without the client's authority through the attorney.</li></ol>"),
        ("handouts/Day5_Release_and_Close_Out_Checklist.html", "Day 5 — Release & Close-Out Checklist", "<h1>Release &amp; Close-Out Checklist</h1><ol><li>PD-only release, attorney-approved.</li><li>Every PD item listed and paid.</li><li>Updated payoff for the payment date; lienholder paid separately.</li><li>Client paid; vendors paid direct.</li><li>Title packet, keys, lien release.</li><li>Subrogation / deductible tracked.</li><li>PD evidence and coverage facts handed to the BI team.</li><li>Closing note in the CMS.</li></ol>"),
    ]
    for path, title, body in H:
        page(path, title, hdr("LSH Law Group — PD Training", "Handout") + body, kind="Handout")

    print(f"initial estimate {m(I_TOTAL)} (supplies {m(SUPPLIES)}) · supplement {m(S_TOTAL)} (supplies {m(STRUCT)}) · repairs {m(I_TOTAL + S_TOTAL)}")
    print(f"carrier ACV {m(ACV_CARRIER)} offer {m(OFFER)} · LSH ACV {m(ACV_LSH)} counter {m(COUNTER)} · agreed {m(AGREED)} · payoff 10/20 {m(PAYOFF_1020)} · equity {m(EQUITY)}")


if __name__ == "__main__":
    build()
