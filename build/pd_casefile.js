const CLIENT_PROFILE_DOC = [
  {section:"Claim Snapshot", items:[
    "Client: Angela Carter · DOB 03/22/1987 · 1820 Birchwood Dr, Riverview Park, ST 90214 · (555) 214-7730 · angela.carter@email.com · prefers texts before 5 PM (dental hygienist at Bright Smile Dental)",
    "LSH PD File # PD-AC-2026-014 (property damage) · the bodily injury file MVA-AC-2026-014 is handled by BI Case Manager Rachel Owens · Handling Attorney: Michael Grant, Esq.",
    "Date of loss: Friday, 09/18/2026 · 5:40 PM · Harbor Blvd & 9th St, Riverview Park, ST · clear and dry",
    "Retainer: signed Monday 09/21/2026 · covers the bodily injury AND the property damage claims · all carrier contact goes through the firm",
    "Training state (ST) rules used in this course: total loss when repairs reach 75% of the vehicle's actual cash value (ACV) · a third-party total-loss settlement includes sales tax (8.25%) and title, registration and plate-transfer fees ($356.00)"
  ]},
  {section:"Facts of Loss — Police Report RPPD-26-091844 (Officer J. Morales #2217)", items:[
    "Angela (Unit 2, 2022 Toyota RAV4) was stopped at a red light southbound on Harbor Blvd at 9th St.",
    "Kevin Hale (Unit 1, 2015 Ford Explorer, registered owner Linda Hale — his mother) struck the rear of the RAV4. Kevin told the officer he “looked down at the GPS.”",
    "Kevin Hale cited: Following Too Closely.",
    "Independent witness: Tom Nguyen, pedestrian at the corner, (555) 390-1142 — Angela had been stopped at the red light “for several seconds.”",
    "The RAV4 was not drivable (rear crushed, liftgate jammed). Police rotation tow: A-1 Metro Towing & Storage."
  ]},
  {section:"Angela's Vehicle", items:[
    "2022 Toyota RAV4 XLE Premium AWD · Weather Package · color Blueprint (blue) · plate 8KTR512 (ST)",
    "VIN TRNG4RAV4XLE22014 (registration, title and Harbor Point dec page) · the A-1 tow invoice shows TRNG4RAV4XLE22041 — transposed, must be corrected",
    "Odometer at loss: 28,412 miles (Angela's odometer photo 09/21)",
    "Owner: Angela Carter · Lienholder: Riverbank Auto Finance, loan # RAF-5530981 · 10-day payoff $19,850.42 good through 10/15/2026, then $3.10 per day · no GAP coverage",
    "Personal property in the vehicle: a rear-facing convertible child car seat bought 02/2026 for $289.99 (receipt on file) — the manufacturer says replace it after a moderate or severe crash"
  ]},
  {section:"At-Fault Coverage — Crestline Mutual Insurance", items:[
    "Policy CMI-PA-7730215 · Named insured: Linda Hale · Listed drivers: Linda Hale, Kevin Hale · Vehicle: 2015 Ford Explorer (listed)",
    "The dec page Angela got at the scene shows the term 03/01/2026–09/01/2026 — it ENDED before the date of loss. Crestline confirmed by phone (09/21) that the policy renewed 09/01/2026–03/01/2027 with the same limits.",
    "Limits: Bodily Injury $25,000 / $50,000 · Property Damage $50,000 · (Crestline's MedPay covers its own car's occupants — not Angela)",
    "Claim # CMI-26-0918-4471 · PD adjuster Derek Lawson, (555) 640-2280 ext 418, dlawson@crestlinemutual.example · Total-loss adjuster Priya Shah, ext 431",
    "Liability: “under investigation” on 09/21 (Kevin now claims Angela “stopped short on a yellow”) → ACCEPTED 100% on 09/24 after the police report and the witness statement"
  ]},
  {section:"Angela's Own Coverage — Harbor Point Insurance", items:[
    "Policy HPI-AU-4418-2207 · Named insured: Angela Carter · Term 06/15/2026–12/15/2026 · Agent: Paul Brennan, Brennan Insurance Agency, (555) 233-9001",
    "Bodily Injury $100,000 / $300,000 · Property Damage $100,000 · Uninsured/Underinsured Motorist BI $50,000 / $100,000 · Medical Payments $5,000",
    "Uninsured Motorist Property Damage $3,500 ($250 deductible) — only when the at-fault driver is uninsured or unidentified",
    "Collision: ACV, $500 deductible (no deductible waiver) · Comprehensive: ACV, $250 deductible",
    "Rental Reimbursement: $40 per day, $1,200 maximum · Towing & Labor: $100 per disablement · Loan/Lease Payoff (GAP): not purchased · Loss payee: Riverbank Auto Finance",
    "First-party claim # HPI-26-55012 (opened 09/21 to use the rental coverage while Crestline investigated liability) · adjuster Nicole Ferris, (555) 700-5120"
  ]},
  {section:"Claim Timeline", items:[
    "Fri 09/18 — Crash at 5:40 PM. The RAV4 is towed to A-1 Metro Towing & Storage (tow $325; storage $65 per day starting 09/18).",
    "Sat 09/19 — Angela goes to urgent care for neck and back pain (BI file — MedPay and treatment go to Rachel Owens).",
    "Mon 09/21 — Retainer signed; PD file opened; Crestline claim opened (liability under investigation); Harbor Point claim opened for rental; Angela rents a midsize SUV from Metro Car Rental on Harbor Point's $40/day direct bill.",
    "Wed 09/23 — RAV4 moved from A-1 to Riverside Collision Center (Angela's choice of shop). Storage stops: 6 days (09/18–09/23) × $65 = $390 + tow $325 = $715.",
    "Thu 09/24 — Crestline accepts liability 100%. Field appraiser writes $9,480.35 (repairable). Crestline takes over the rental on direct bill at $45/day (compact SUV, like kind); Angela upgrades to a standard SUV at $58/day and pays the $13/day difference.",
    "Tue 09/29 — Teardown at Riverside finds a buckled left rear frame rail and rear floor pan: supplement $15,379.65 → repairs $24,860.00.",
    "Thu 10/01 — Crestline declares the RAV4 a total loss (repairs are 75%+ of ACV).",
    "Fri 10/02 — Crestline valuation report VR-26-18840: ACV $25,147.00.",
    "Mon 10/05 — Crestline's written total-loss offer: $27,221.63 (ACV + 8.25% tax, no fees). Crestline's rule: rental ends 3 days after the offer (10/08).",
    "Negotiation — LSH's counter (Day 4): ACV $31,181.67 from true comparables → $34,110.16 with tax and fees.",
    "Agreed 10/09 — ACV $30,650.00 + tax $2,528.63 + fees $356.00 = $33,534.63. Payment issued 10/20 (payoff by then: $19,865.92)."
  ]},
  {section:"Crestline's Valuation Report VR-26-18840 — What's Wrong With It", items:[
    "Vehicle listed as RAV4 XLE AWD — the car is an XLE Premium AWD with the Weather Package (options missing).",
    "Mileage listed as 34,812 — the odometer read 28,412.",
    "None of the three comparables is comparable: #1 is a lower-trim XLE with 41,300 miles, #2 an LE FWD (lower trim, different drivetrain), #3 a 2021 with 52,000 miles, 160 miles away.",
    "Condition deduction −$620 (“interior below average”) — no inspection note or photo supports it.",
    "Prior-damage deduction −$750 (“rear bumper scuffs”) — that is the damage from THIS crash.",
    "Title, registration and plate-transfer fees ($356.00) left out."
  ]},
  {section:"Money on the PD File", items:[
    "Crestline's offer 10/05: $27,221.63 · LSH counter: $34,110.16 · Agreed 10/09: $33,534.63",
    "Tow + storage: $715.00 (paid by Crestline directly to A-1) · Rental: 15 days × $45 = $675.00 on Crestline's direct bill (09/24–10/08); Angela's upgrade share 15 × $13 = $195.00",
    "Harbor Point paid 3 rental days (09/21–09/23) × $40 = $120.00 → recovers it from Crestline by subrogation",
    "Child car seat: $289.99 · Diminished value: not applicable (total loss) · Loss of use: not claimed (rental provided)",
    "Payment (10/20): Riverbank Auto Finance payoff $19,865.92 · to Angela: vehicle equity $13,668.71 + car seat $289.99 = $13,958.70"
  ]},
  {section:"Key Contacts", items:[
    "Handling Attorney: Michael Grant, Esq. (settlement authority, releases, anything over the policy limits) · BI Case Manager: Rachel Owens",
    "Crestline Mutual: Derek Lawson (PD adjuster, ext 418) · Priya Shah (total loss, ext 431) · Crestline claims line (555) 640-2280",
    "Harbor Point: Nicole Ferris (first-party adjuster) (555) 700-5120 · Harbor Point subrogation unit",
    "A-1 Metro Towing & Storage, 4410 Industrial Way, (555) 318-6620 · Riverside Collision Center, estimator Dana Whitfield, (555) 455-0192",
    "Metro Car Rental, Harbor Blvd branch, (555) 248-3100 · Riverbank Auto Finance, payoff department, (555) 800-4412"
  ]},
  {section:"⚠ What a PD Specialist Must Catch on This File", items:[
    "The VIN on the tow invoice is transposed (…22041 vs …22014).",
    "The at-fault dec page from the scene is an expired term — coverage on the date of loss had to be confirmed.",
    "Kevin Hale is not the named insured — he is a listed driver on his mother's policy, which is primary for the car he was driving.",
    "Crestline's BI limits are only $25,000 / $50,000 — Angela's UM/UIM BI ($50,000 / $100,000) and MedPay ($5,000) go to the BI Case Manager right away.",
    "Storage at A-1 costs $65 a day — move the car the first business day.",
    "Crestline's valuation used the wrong trim, the wrong mileage, non-comparable comps and two unsupported deductions, and left out fees.",
    "Crestline's release is titled “Release of All Claims” and includes bodily injury — it must be a property-damage-only release.",
    "The payoff letter expires 10/15; payment on 10/20 needs an updated payoff."
  ]}
];
