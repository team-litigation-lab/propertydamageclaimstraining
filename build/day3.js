const DAY3 = {
  id: 3,
  title: "Rental, Storage, Inspections & Repairs",
  theme: "Rental: Who Pays and When · Setting Up the Rental · Like-Kind & What the Client Pays · Rental Duration & Extensions · Loss of Use · Inspections & Appraisals · Reading an Estimate · OEM vs Aftermarket Parts · The Right to Choose the Shop · Supplements · Scans & Calibrations · Diminished Value · Repair Completion",
  objective: "Set up a rental the right way (who pays, rate, class, end date), calculate what each party pays, keep storage and rental from running unchecked, schedule the inspection, read an estimate line by line, manage supplements and safety calibrations, raise diminished value, and close the repair with the right payments.",
  lessons: [
    { h: "Rental: Who Pays and When",
      layout: "TABLE",
      tableHeaders: ["Stage", "Who pays the rental", "Notes"],
      tableRows: [
        ["Liability under investigation", "Client's rental reimbursement (first-party)", "Only if the client has the coverage; daily cap and maximum apply"],
        ["Liability accepted", "At-fault carrier (third-party), usually direct bill", "Like-kind class, reasonable period"],
        ["Liability split", "At-fault pays its % (or client's coverage)", "Escalate the split to the attorney"],
        ["Liability denied / uninsured", "Client's rental coverage (with collision/UMPD claim)", "Or out of pocket, then claim it"],
        ["After the switch", "The first carrier recovers its days by subrogation", "Don't let both carriers pay the same days"]
      ],
      fourPart: {
        corePrinciples: [
          "Who pays the rental depends on the liability decision and the client's own coverage.",
          "The at-fault carrier pays a like-kind rental for a reasonable time once liability is accepted.",
          "The client's rental reimbursement bridges the gap while liability is pending — then the at-fault carrier takes over."
        ],
        howTo: [
          "Check the liability status and the client's rental coverage before you call the rental company.",
          "Pending liability + client coverage → open the first-party claim and rent under it.",
          "Once liability is accepted → move the rental to the at-fault carrier's direct bill.",
          "Tell the first carrier the date the third party took over so it can subrogate its days."
        ],
        bestPractices: [
          "Get every rental authorization with a claim number, rate and start date — in writing.",
          "Set the switch date in the CMS the day liability is accepted.",
          "Pitfall: the client renting on her own credit card “until it's sorted” — she ends up fronting hundreds of dollars."
        ],
        discussionCase: "Angela rented on 09/21 under Harbor Point ($40/day). Crestline accepted liability on 09/24. What calls do you make that day?"
      },
      trainerCue: "Angela's timeline: Harbor Point 09/21–09/23 (3 days × $40 = $120, recovered by subrogation), Crestline from 09/24 at $45/day."
    },
    { h: "Setting Up the Rental: The Calls",
      layout: "PROCESS",
      processSteps: [
        { label: "Adjuster", desc: "Authorize: claim #, daily rate, class, start date, direct bill." },
        { label: "Rental branch", desc: "Reservation under the claim #, billing to the carrier." },
        { label: "Client", desc: "Pickup, what she pays (upgrade, fuel, waiver), return rules." },
        { label: "CMS", desc: "Reservation #, rate, class, end date, follow-up task." }
      ],
      skill: { tool: "pdRental3", cms: true },
      fourPart: {
        corePrinciples: [
          "A rental is set up with three calls: the carrier (authorization), the rental company (reservation and billing), and the client (pickup and rules).",
          "The authorization defines everything: who pays, how much per day, what class, and from when.",
          "The client signs the rental contract — make sure she knows exactly what she's responsible for."
        ],
        howTo: [
          "Carrier: get the rental authorized — claim number, daily rate, vehicle class, start date, direct bill, and how the end date is set.",
          "Rental company: book under the carrier's claim number with direct billing; confirm the rate and class; get the reservation number.",
          "Client: pickup location and time, driver's license and card for the deposit, what she pays, and when the rental ends.",
          "CMS: log the reservation number, rate, class, dates and a task 3 business days before the end date."
        ],
        bestPractices: [
          "Read the authorization back to the adjuster before you hang up.",
          "Ask the rental branch to note “insurance replacement — direct bill” so the counter doesn't charge the client.",
          "Pitfall: no reservation number and no rate in the file — the first dispute is the client's bill."
        ],
        discussionCase: "The rental counter tells Angela, “Your insurance didn't authorize anything.” What do you check, and who do you call first?"
      },
      trainerCue: "Practice the calls in the Call Simulator's Rental, Tow & Shop line (PD pack): the adjuster's rental authorization and the rental counter."
    },
    { h: "Like-Kind, Daily Rates & What the Client Pays",
      layout: "COMPARE",
      compareLeft: { label: "Carrier usually pays", items: ["Like-kind vehicle class at the authorized daily rate", "Taxes and fees on the authorized rate", "The authorized period (reasonable repair or settlement time)"] },
      compareRight: { label: "Client usually pays", items: ["Upgrade difference (bigger or nicer car)", "Fuel and tolls", "Damage waiver / rental insurance at the counter", "Days after the authorized end date", "Extra drivers, GPS, car seats"] },
      fourPart: {
        corePrinciples: [
          "“Like kind” means a vehicle comparable to the client's (a compact SUV for a compact SUV) — not an upgrade.",
          "The carrier pays the authorized daily rate; anything above it is the client's cost.",
          "Damage waivers sold at the counter are usually not paid by the carrier — the client's own auto policy often extends to rentals (check with the agent)."
        ],
        howTo: [
          "Match the rental class to the client's vehicle.",
          "If the client wants an upgrade, tell her the daily difference and get her OK in writing.",
          "Ask the client's agent whether her policy covers a rental car so she can decide about the damage waiver.",
          "Calculate and tell the client her costs before pickup."
        ],
        bestPractices: [
          "Put the client's costs in a text after the call: “Crestline pays $45/day. The standard SUV is $58/day, so you'll pay $13/day.”",
          "Keep receipts for anything the client pays that might be recoverable.",
          "Pitfall: letting the client find out about the upgrade charge when she returns the car."
        ],
        discussionCase: "Angela wants a standard SUV at $58/day “for the kids.” Crestline authorized $45/day for 15 days. What does she pay?"
      },
      trainerCue: "15 × $13 = $195 — the Rental math in the Skill Builder."
    },
    { h: "Rental Duration & Extensions",
      layout: "THREEBOX",
      boxes: [
        { label: "Repairable", desc: "Reasonable repair time — the shop's estimated days plus parts and supplement delays." },
        { label: "Total loss", desc: "Usually ends a few days after the carrier's settlement offer (Crestline: 3 days)." },
        { label: "Extensions", desc: "Ask BEFORE the end date, with the reason and the documents." }
      ],
      fourPart: {
        corePrinciples: [
          "The rental lasts for a reasonable period: until the repairs are done, or a set number of days after a total-loss offer.",
          "Extensions must be requested before the rental ends, with a documented reason (parts backorder, supplement approval, a disputed valuation).",
          "Days after the authorized end date are the client's cost unless an extension is approved."
        ],
        howTo: [
          "Get the end-date rule from the adjuster when the rental is authorized.",
          "Calendar the end date and a task 3 business days before it.",
          "Ask the shop for its repair timeline and any parts delays.",
          "Request extensions in writing with the reason and supporting documents.",
          "Tell the client the end date — and remind her two days before."
        ],
        bestPractices: [
          "If the total-loss offer is based on the wrong vehicle, argue it wasn't a fair offer and ask that the rental continue until a corrected offer.",
          "Get extension approvals in writing, with the new end date.",
          "Pitfall: the client keeps the car past the end date because no one told her."
        ],
        discussionCase: "Crestline's offer on 10/05 used the wrong trim and mileage; the rental ends 10/08. What do you ask for, and what's your argument?"
      },
      trainerCue: "Crestline rule: rental ends 3 days after the offer → 10/08. If Angela keeps it to 10/12 with no extension, that's 4 × $58 = $232 on her."
    },
    { h: "Loss of Use: When There's No Rental",
      layout: "ICONLIST",
      icons: [
        { icon: "📆", label: "Days without the car", desc: "From the loss to repair completion or a reasonable settlement date." },
        { icon: "💲", label: "Daily rate", desc: "Usually the cost of a comparable rental, per day." },
        { icon: "📄", label: "Proof", desc: "Repair timeline, rental quotes for a like-kind vehicle." },
        { icon: "⚖️", label: "Third-party only", desc: "Loss of use is claimed against the at-fault carrier." }
      ],
      fourPart: {
        corePrinciples: [
          "Loss of use compensates the owner for the time without the vehicle when no rental was taken.",
          "It's a third-party damage (claimed from the at-fault carrier), valued at a reasonable daily rate for a comparable vehicle.",
          "The client can't get both a paid rental and loss of use for the same days."
        ],
        howTo: [
          "Confirm the client did not have a paid rental for those days.",
          "Count the days: date of loss to repair completion (or a reasonable total-loss settlement date).",
          "Get two or three like-kind rental quotes to support the daily rate.",
          "Submit the claim in writing with the timeline and the quotes."
        ],
        bestPractices: [
          "Ask about loss of use on every file where the client didn't rent (they often don't know to ask).",
          "Commercial vehicles may claim lost income instead — flag to the attorney.",
          "Pitfall: claiming loss of use for days a rental was paid."
        ],
        discussionCase: "A client borrowed her sister's car for 12 days instead of renting. What can you claim, and how do you prove it?"
      },
      trainerCue: "Angela had a rental, so no loss of use on her file — use the discussion case to practice the claim."
    },
    { h: "Inspections & Appraisals",
      layout: "ICONLIST",
      icons: [
        { icon: "🧑‍🔧", label: "Field appraiser", desc: "The carrier's appraiser inspects at the shop or yard." },
        { icon: "📱", label: "Photo estimate", desc: "The client or shop uploads photos to the carrier's app." },
        { icon: "🏁", label: "Drive-in center", desc: "The carrier's inspection site — only for drivable cars." },
        { icon: "🧾", label: "Shop estimate", desc: "The client's chosen shop writes an estimate for the carrier to review." }
      ],
      fourPart: {
        corePrinciples: [
          "The carrier inspects the damage to decide the repair cost — or whether it's a total loss.",
          "The first estimate is almost always low: hidden damage is found when the shop takes the car apart (teardown).",
          "The inspection happens where the car is — another reason to move it to the client's shop quickly."
        ],
        howTo: [
          "Ask the adjuster how and when they'll inspect (field appraiser, photos, drive-in).",
          "Give the appraiser the shop's address and the estimator's contact.",
          "Ask for a copy of the estimate as soon as it's written.",
          "Calendar a follow-up if the inspection isn't scheduled within 3 business days."
        ],
        bestPractices: [
          "Tell the shop the carrier's appraiser is coming so the estimator can be there.",
          "Send the BI Case Manager the estimate and photos — they show the force of the impact.",
          "Pitfall: letting the shop start repairs before the carrier has inspected or agreed."
        ],
        discussionCase: "The appraiser wrote $9,480.35 from photos without seeing the car. Riverside says the damage is worse. What happens next?"
      },
      trainerCue: "Angela's first estimate (09/24) was $9,480.35; teardown found $15,379.65 more. That's a supplement — next topics."
    },
    { h: "Reading an Estimate",
      layout: "TABLE",
      tableHeaders: ["Line type", "What it means", "Watch for"],
      tableRows: [
        ["Parts", "Each part to replace, with part type and price", "Aftermarket or used parts on a newer car"],
        ["Body labor", "Hours × labor rate to remove, repair, install", "A labor rate below the shop's posted rate"],
        ["Refinish (paint) labor", "Hours to paint panels, plus blend", "Missing blend on adjacent panels"],
        ["Paint & materials", "Paint and supplies per refinish hour", "A cap below the shop's actual cost"],
        ["Sublet", "Work sent out (alignment, glass, calibration)", "Missing ADAS calibrations and scans"],
        ["Betterment", "A deduction when a worn part is replaced new", "Betterment on parts that weren't worn"],
        ["Total", "Parts + labor + materials + sublet + tax", "Compare with the shop's estimate line by line"]
      ],
      fourPart: {
        corePrinciples: [
          "An estimate is a list of parts, labor hours, paint and materials, and sublet work.",
          "Differences between the carrier's and the shop's estimate usually come down to parts type, labor rate, and missed operations.",
          "You don't have to be an estimator — you have to spot the differences and get the shop and adjuster to resolve them."
        ],
        howTo: [
          "Get both estimates (the carrier's and the shop's).",
          "Compare the totals, then parts, labor rate, refinish, materials and sublet.",
          "List every difference with the shop's reason.",
          "Send the list to the adjuster and ask for a reinspection or a revised estimate."
        ],
        bestPractices: [
          "Let the shop's estimator argue the technical points; you keep the process moving and documented.",
          "Watch for missing scans and calibrations — safety items are not optional.",
          "Pitfall: telling the client the carrier's first estimate is the final number."
        ],
        discussionCase: "The carrier's labor rate is $58/hr; Riverside's posted rate is $72/hr. Who resolves it, and what's your role?"
      },
      trainerCue: "The Day 3 Skill Builder has a line-by-line estimate review with five items to call."
    },
    { h: "Parts: OEM, Aftermarket & Recycled",
      layout: "TABLE",
      tableHeaders: ["Part type", "What it is", "When it's an issue"],
      tableRows: [
        ["OEM", "Original equipment manufacturer — the carmaker's own part", "Usually expected on late-model cars; OEM endorsements require it"],
        ["Aftermarket", "Made by another company to fit", "Fit, finish and safety concerns on newer cars; may lower value"],
        ["Recycled (LKQ)", "A used original part from a salvage vehicle", "Condition and mileage of the part"],
        ["Reconditioned", "A repaired original part", "Wheels, bumpers — quality varies"]
      ],
      fourPart: {
        corePrinciples: [
          "Carriers often write estimates with aftermarket or recycled parts to lower the cost.",
          "On a late-model car (like Angela's 2022 RAV4 with 28,412 miles), non-OEM parts are a common dispute.",
          "State rules and policy endorsements may require OEM parts or disclosure of non-OEM parts."
        ],
        howTo: [
          "Check each part's type on the estimate.",
          "Ask the shop which non-OEM parts are a fit, safety or warranty concern.",
          "Request OEM parts in writing for a late-model car, with the reason.",
          "Check the client's policy for an OEM endorsement if it's a first-party claim."
        ],
        bestPractices: [
          "Safety-related parts (structural, sensors, lamps) are the strongest OEM argument.",
          "Tell the client what's being used on her car — no surprises at pickup.",
          "Pitfall: accepting aftermarket structural parts without the shop's input."
        ],
        discussionCase: "The estimate uses an aftermarket rear bumper reinforcement on Angela's 2022 RAV4. What do you ask for?"
      },
      trainerCue: "Structural and sensor-related parts are the ones to push hardest on."
    },
    { h: "The Client's Right to Choose the Shop",
      layout: "COMPARE",
      compareLeft: { label: "Carrier's DRP shop", items: ["Direct Repair Program — the carrier's network", "Often faster approvals", "Carrier-backed repair guarantee", "The shop has a relationship with the carrier"] },
      compareRight: { label: "Client's chosen shop", items: ["The client's legal right in most states", "The shop works for the client", "May take longer to approve supplements", "Carrier still pays a reasonable repair cost"] },
      fourPart: {
        corePrinciples: [
          "In most states the vehicle owner chooses the repair shop — the carrier can recommend but not require its DRP shop.",
          "A carrier “steering” a client to its shop (e.g., “we can only guarantee our shops”) is a red flag.",
          "Whichever shop, the carrier owes a reasonable repair cost."
        ],
        howTo: [
          "Ask the client where she wants the car repaired.",
          "If she has no preference, explain the options neutrally (DRP vs independent).",
          "Tell the adjuster the client's choice in writing.",
          "Document any pressure from the carrier to change shops."
        ],
        bestPractices: [
          "Respect the client's choice — it's her car.",
          "Confirm the shop's contact and estimator in the CMS.",
          "Pitfall: moving the car to the carrier's shop without the client's OK."
        ],
        discussionCase: "The adjuster tells Angela, “If you use Riverside, we can't promise how long it'll take.” What do you do?"
      },
      trainerCue: "Angela chose Riverside Collision Center (not a Crestline DRP shop)."
    },
    { h: "Supplements & Hidden Damage",
      layout: "PROCESS",
      processSteps: [
        { label: "Teardown", desc: "The shop disassembles and finds hidden damage." },
        { label: "Supplement", desc: "The shop sends photos + a supplement estimate to the carrier." },
        { label: "Reinspect / approve", desc: "The adjuster approves (or reinspects) — delays happen here." },
        { label: "Re-evaluate", desc: "If repairs now reach the total-loss threshold → valuation." },
        { label: "Update everyone", desc: "Client, rental end date, BI team, CMS." }
      ],
      fourPart: {
        corePrinciples: [
          "A supplement is an additional estimate for damage found after the first inspection — usually at teardown.",
          "Supplements are normal; slow approvals are what cost rental days.",
          "A big supplement can push the repair cost over the total-loss threshold — then the file becomes a total loss."
        ],
        howTo: [
          "Ask the shop to send the supplement and photos to the adjuster the day it's written.",
          "Follow up with the adjuster within 1 business day for approval or reinspection.",
          "Recalculate: repair cost ÷ ACV — at or over the threshold (75% in this course's training state) means total loss.",
          "Request a rental extension if the approval delays the repair.",
          "Update the client with the new timeline."
        ],
        bestPractices: [
          "Ask the adjuster for approval time commitments (“by end of day tomorrow?”).",
          "Keep the shop, adjuster and client on the same timeline in writing.",
          "Pitfall: letting a supplement sit a week while the rental runs."
        ],
        discussionCase: "Riverside's supplement brings Angela's repairs to $24,860.00. Crestline's ACV is about $25,000. What happens now?"
      },
      trainerCue: "$9,480.35 + $15,379.65 = $24,860.00 → over 75% of ACV → total loss declared 10/01. Day 4 picks up from here."
    },
    { h: "Safety Systems: Scans & Calibrations",
      layout: "ICONLIST",
      icons: [
        { icon: "🩻", label: "Pre-repair scan", desc: "Reads the car's computers for crash-related fault codes." },
        { icon: "✅", label: "Post-repair scan", desc: "Confirms every system works after repairs." },
        { icon: "📡", label: "Radar & sensor calibration", desc: "Blind-spot, rear cross-traffic, parking sensors after bumper work." },
        { icon: "📷", label: "Camera calibration", desc: "Backup and lane cameras after replacement or glass work." }
      ],
      fourPart: {
        corePrinciples: [
          "Modern cars have driver-assistance (ADAS) sensors in the bumpers, mirrors and windshield — they must be recalibrated after related repairs.",
          "Pre- and post-repair diagnostic scans are standard on late-model vehicles.",
          "Missing calibrations are a safety issue, not just a cost item."
        ],
        howTo: [
          "Check the estimate for pre-repair and post-repair scans.",
          "Check for calibrations of any sensor near the damage (rear bumper → blind-spot/rear radar).",
          "Ask the shop to add missing operations to the supplement with the manufacturer's procedure.",
          "Ask the adjuster to approve them in writing."
        ],
        bestPractices: [
          "Ask the shop for the calibration report at pickup — keep it in the file.",
          "Tell the client which safety systems were recalibrated.",
          "Pitfall: a “finished” car with a blind-spot warning light on."
        ],
        discussionCase: "The carrier's estimate replaces Angela's rear bumper but has no scans or blind-spot radar calibration. What do you ask for?"
      },
      trainerCue: "The estimate review in the Skill Builder has missing scans and a missing blind-spot calibration to catch."
    },
    { h: "Diminished Value",
      layout: "THREEBOX",
      boxes: [
        { label: "What it is", desc: "The market value a repaired car loses because it now has an accident history." },
        { label: "When to claim", desc: "Late-model, low-mileage cars with significant repairs — third-party claims, where the state allows." },
        { label: "How to prove", desc: "An independent diminished-value appraisal, the repair estimate and photos." }
      ],
      fourPart: {
        corePrinciples: [
          "Inherent diminished value is the loss in resale value after a car is properly repaired — buyers pay less for a car with an accident history.",
          "It's usually claimed against the at-fault carrier (third-party); most first-party policies don't pay it.",
          "It doesn't apply to a total loss — the client is paid the car's pre-crash value."
        ],
        howTo: [
          "Identify candidates: newer cars, low mileage, significant or structural repairs.",
          "Tell the client about it early — it's often forgotten.",
          "Get an independent diminished-value appraisal after repairs.",
          "Submit it in writing with the estimate and photos; negotiate."
        ],
        bestPractices: [
          "Carriers often use formulas that produce low numbers — ask for their method in writing.",
          "Diminished value is a PD damage — include it before any PD release.",
          "Pitfall: signing a PD release before the diminished value claim is resolved."
        ],
        discussionCase: "If Angela's RAV4 had been repaired for $24,000 (frame damage included), would you raise diminished value? Why?"
      },
      trainerCue: "Not applicable once Angela's car was totaled — but it would have been a strong claim on a repaired 2022 with frame damage."
    },
    { h: "Repair Completion & Payment",
      layout: "PROCESS",
      processSteps: [
        { label: "Final bill", desc: "The shop's final invoice matches approved estimate + supplements." },
        { label: "Payment", desc: "Carrier pays the shop directly (or a two-party check)." },
        { label: "Pickup check", desc: "Client inspects; calibration report; warranty." },
        { label: "Rental return", desc: "Within one business day of pickup." },
        { label: "Close items", desc: "Diminished value, deductible, CMS note." }
      ],
      skill: { tool: "pdRental3", cms: true },
      fourPart: {
        corePrinciples: [
          "A repair is complete when the car is fixed, paid for, and back with the client — and the rental is returned.",
          "The carrier pays the shop directly or issues a check to the owner and the shop (two-party check).",
          "Anything left (diminished value, the deductible if collision was used) is handled before the PD file closes."
        ],
        howTo: [
          "Confirm the shop's final bill matches the approved estimate plus supplements.",
          "Arrange payment to the shop (direct or two-party check).",
          "Ask the client to inspect the car at pickup and get the calibration report and warranty.",
          "Tell the rental company and adjuster the return date.",
          "Log the completion in the CMS and move to closing items."
        ],
        bestPractices: [
          "Tell the client to report any problem before signing off at pickup.",
          "Keep the final invoice, the payment record and the calibration report in the file.",
          "Pitfall: the client keeps the rental two extra days after pickup — those days are hers."
        ],
        discussionCase: "The client picks up her repaired car Friday afternoon. When should the rental go back, and who do you tell?"
      },
      trainerCue: "Launch the Day 3 Skill Builder — Rental, Storage & Repair Desk: rental math, who pays which charges, the storage bill, an estimate review, and the email to the adjuster."
    }
  ],
  quickChecks: [
    { afterIndex: 3, q: "Crestline's rental rule is “3 days after the settlement offer.” The offer was made Monday 10/05. The last covered day is:", opts: ["10/08", "10/05", "10/12", "When the check clears"], a: 0, r: "3 days after 10/05 → 10/08. Request any extension before then." },
    { afterIndex: 7, q: "On a 2022 vehicle, the estimate uses an aftermarket structural part. You:", opts: ["Accept it — it's cheaper", "Ask the shop for its view and request OEM in writing with the reason", "Tell the client to pay the difference", "Ignore it"], a: 1, r: "Late-model structural and safety parts are the strongest OEM argument." },
    { afterIndex: 10, q: "Repairs are now $24,860 and the ACV is about $25,000. In a 75% threshold state:", opts: ["The car is repaired", "The client chooses", "The rental ends today", "The car is a total loss"], a: 3, r: "$24,860 is over 75% of ACV — total loss." }
  ],
  quiz: [
    { q: "While liability is under investigation, the client's rental is best paid by:", opts: ["The client's own rental reimbursement coverage (first-party claim)", "The at-fault carrier", "The body shop", "The lienholder"], a: 0, r: "First-party rental bridges the gap until liability is accepted." },
    { q: "“Like kind” rental means:", opts: ["Any car the client wants", "The cheapest car available", "A vehicle comparable to the client's", "A truck"], a: 2, r: "Comparable class — upgrades are the client's cost." },
    { q: "Crestline authorized $45/day; the client chose a $58/day SUV for 15 days. The client pays:", opts: ["$0", "$195", "$675", "$870"], a: 1, r: "15 × ($58 − $45) = $195." },
    { q: "Which rental charge does the at-fault carrier usually NOT pay?", opts: ["Taxes on the authorized rate", "The counter's damage waiver", "The authorized daily rate", "Days within the authorized period"], a: 1, r: "Damage waivers are usually the client's choice and cost." },
    { q: "A rental extension should be requested:", opts: ["After the rental ends", "Only by the client", "Before the end date, with the reason and documents", "Never"], a: 2, r: "Extensions are approved in advance; days after the end date are the client's cost." },
    { q: "Loss of use is claimed when:", opts: ["The client had no rental for the days without the car", "The client had a paid rental", "The car is a total loss only", "The client is at fault"], a: 0, r: "It compensates time without the car when no rental was paid." },
    { q: "The first estimate is usually low because:", opts: ["Adjusters make mistakes on purpose", "Parts are free", "Hidden damage is found at teardown", "The shop inflates it"], a: 2, r: "Teardown reveals damage the first inspection couldn't see — supplements follow." },
    { q: "OEM parts are:", opts: ["Made by the vehicle's manufacturer", "Used parts", "Aftermarket copies", "Reconditioned"], a: 0, r: "Original Equipment Manufacturer." },
    { q: "In most states, who chooses the repair shop?", opts: ["The carrier", "The tow yard", "The lienholder", "The vehicle owner"], a: 3, r: "The owner chooses; the carrier owes a reasonable repair cost." },
    { q: "After rear bumper replacement on a car with blind-spot monitoring, the estimate should include:", opts: ["Nothing extra", "Pre/post-repair scans and radar calibration", "A new engine", "Diminished value"], a: 1, r: "Sensors behind the bumper must be recalibrated; scans confirm the systems work." },
    { q: "Diminished value is:", opts: ["The resale value lost after proper repairs", "The deductible", "The rental cost", "Storage fees"], a: 0, r: "Inherent DV — usually a third-party claim where the state allows." },
    { q: "Diminished value does NOT apply when:", opts: ["The car is late-model", "The repairs were structural", "The car is a total loss", "The claim is third-party"], a: 2, r: "A total loss pays the pre-crash value; there's no repaired car to lose value." },
    { q: "A two-party check is made out to:", opts: ["The client only", "Two payees (e.g., the owner and the shop, or the owner and the lienholder)", "The adjuster", "The rental company"], a: 1, r: "Both payees must endorse it." },
    { q: "Storage from 09/18 to 09/23 at $65/day (both days counted) costs:", opts: ["$325", "$390", "$455", "$715"], a: 1, r: "6 days × $65 = $390 (plus the $325 tow = $715)." },
    { q: "The supplement arrives and pushes repairs past the threshold. Your first update goes to:", opts: ["No one until the valuation", "Only the shop", "The client (new plan), the adjuster (valuation next), the rental (timeline) and the CMS", "Only the BI team"], a: 2, r: "A total-loss decision changes the rental, the timeline and the client's expectations." }
  ],
  discussionQuestion: "Angela switched from Harbor Point's rental to Crestline's on 09/24, upgraded to a $58/day SUV, and Crestline's offer on 10/05 was based on the wrong trim and mileage. What does Angela owe today, what extension would you request and why, and what would you have done differently on 09/24?"
};
