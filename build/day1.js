const DAY1 = {
  id: 1,
  title: "PD Claims Foundations & Setting Up the Claim",
  theme: "What a PD Specialist Owns · PD vs BI · First-Party vs Third-Party · The PD Claim Lifecycle · PD Intake & Documents · Owner, Driver, Insured & Claimant · Opening the Claim · Letter of Representation · Towing & Storage · The File in the CMS · The Day-One Client Call",
  objective: "Understand what a Property Damage (PD) Specialist owns from intake to closing, gather the facts and documents a PD claim runs on, identify every party and carrier, open the claim correctly on day one, stop the storage clock, and set the client's expectations — all documented in the CMS.",
  taskOverview: [
    { label: "Intake & Claim Setup", tasks: [
        "Collect the PD facts on day one: vehicle (year, make, model, trim, VIN, plate, mileage), owner, lienholder, where the car is, and whether it is drivable.",
        "Verify every fact against a document — registration, police report, tow invoice, photos — not just the intake notes.",
        "Identify every party and carrier: owner vs driver, named insured vs listed driver, the client's own carrier.",
        "Open the right claims and record every claim number, adjuster and contact in the CMS."
      ], sample: "Sample task: Angela Carter's intake lands on your desk — confirm her RAV4's VIN, owner and lienholder from the registration, then open the third-party claim with Crestline Mutual and log the claim number." },
    { label: "Coverage & Liability", tasks: [
        "Read the declarations pages and spot every coverage that can pay part of the loss.",
        "Confirm the at-fault policy was in force on the date of loss, the vehicle is listed and the driver is covered.",
        "Track the liability decision (accepted, denied, split, under investigation) and act on each one.",
        "Flag anything outside PD — injuries, MedPay, low BI limits — to the BI Case Manager."
      ], sample: "Sample task: the at-fault dec page from the scene ends 09/01; the crash was 09/18 — confirm with the carrier that the policy renewed before you rely on it." },
    { label: "Rental & Vehicle Logistics", tasks: [
        "Get the client into a rental the right way: who pays, the authorized daily rate, like-kind class, and the end date.",
        "Stop storage fees: move the car to the repair shop or the carrier's yard as soon as possible.",
        "Schedule the inspection and track estimates, supplements and repair progress.",
        "Warn the client about costs the carrier won't cover (upgrades, fuel, damage waivers, extra days)."
      ], sample: "Sample task: the car is at a tow yard charging $65 a day — get the client's authorization and move it to her chosen shop today." },
    { label: "Negotiation & Valuation", tasks: [
        "Audit estimates and total-loss valuations line by line: trim, options, mileage, comparables, deductions, tax and fees.",
        "Build a documented counter with true comparables and send it in writing.",
        "Negotiate rental extensions, storage, supplements and total-loss value professionally.",
        "Get the client's authority — through the attorney — before accepting any figure."
      ], sample: "Sample task: the valuation lists an XLE with 34,812 miles; the car is an XLE Premium with 28,412 — write the counter with three true comparables." },
    { label: "Payment, Release & Closing", tasks: [
        "Review every release: property damage ONLY — never bodily injury.",
        "Route payments correctly: lienholder payoff first, then the client's equity; direct bills to the shop, tow yard and rental company.",
        "Recover the deductible and support the client's carrier's subrogation.",
        "Close the PD file with a clean note and hand the PD evidence to the BI team."
      ], sample: "Sample task: Crestline's release is titled “Release of All Claims” — mark it up to a PD-only release and escalate to the attorney." },
    { label: "Communication & Documentation", tasks: [
        "Keep the client informed with plain-language updates on a set schedule.",
        "Keep every adjuster, shop and vendor conversation in writing or in a CMS note the same day.",
        "Never give legal advice or promise a value — the attorney decides and advises.",
        "Calendar every follow-up: liability decision, inspection, rental end date, payoff expiration."
      ], sample: "Sample task: after the adjuster call, log a CMS note with the claim number, adjuster contact, liability status and the next follow-up date." }
  ],
  lessons: [
    { h: "Training Agenda & What a PD Specialist Owns",
      layout: "ICONLIST",
      icons: [
        { icon: "📥", label: "Intake & Claim Setup", desc: "Facts, documents, parties and claim numbers on day one." },
        { icon: "🛡", label: "Coverage & Liability", desc: "Which policy pays, and has liability been accepted?" },
        { icon: "🚗", label: "Rental & Logistics", desc: "Rental, towing, storage, inspection and repairs." },
        { icon: "💵", label: "Valuation & Negotiation", desc: "Estimates, supplements, total loss, counters." },
        { icon: "✍️", label: "Payment & Release", desc: "PD-only releases, lienholders, subrogation, closing." },
        { icon: "🗂", label: "Documentation", desc: "Every call and decision in the CMS the same day." }
      ],
      fourPart: {
        corePrinciples: [
          "Today's agenda: 01 PD claim foundations · 02 The parties and the lifecycle · 03 Setting up the claim on day one.",
          "A PD Specialist handles the client's property damage claim — the vehicle, the rental, towing and storage, and personal property — from the first call to the final payment.",
          "The PD claim usually moves faster than the injury claim: the client wants their car (or its value) back in weeks, not months."
        ],
        howTo: [
          "Set up the claim correctly on day one — every later step depends on it.",
          "Find every coverage that can pay and confirm liability.",
          "Keep the client mobile (rental) and stop avoidable costs (storage).",
          "Get the vehicle repaired or valued fairly — and negotiate when it isn't.",
          "Close with a PD-only release and payments routed to the right people."
        ],
        bestPractices: [
          "Think like the owner of the file: you are the reason the claim moves.",
          "Speed matters in PD — every idle day costs rental and storage money.",
          "Pitfall: treating PD as “just paperwork.” A wrong VIN, an expired policy or a missed release clause can cost the client thousands."
        ],
        discussionCase: "Ask the room: when you were without a car after a crash (or saw someone who was), what cost the most — the repair, the rental, or the time?"
      },
      trainerCue: "Set the frame: the client's car is often their job, their school run and their independence. A PD Specialist's speed and accuracy is what the client feels first."
    },
    { h: "PD vs BI: Two Claims, Two Tracks",
      layout: "COMPARE",
      compareLeft: { label: "Property Damage (PD)", items: ["The vehicle: repair or total loss", "Rental / loss of use", "Towing & storage", "Personal property in the car", "Diminished value (repairs)", "Usually resolves in weeks"] },
      compareRight: { label: "Bodily Injury (BI)", items: ["Medical treatment & bills", "Lost wages", "Pain & suffering", "Liens & MedPay/PIP", "Handled by the BI Case Manager", "Usually resolves in months"] },
      fourPart: {
        corePrinciples: [
          "One crash usually creates two claims against the same carrier: property damage and bodily injury.",
          "They are handled separately, on different timelines, often by different adjusters.",
          "Resolving PD must never release or weaken the BI claim."
        ],
        howTo: [
          "Open the PD claim and the BI claim under the same carrier claim number (with separate features/exposures).",
          "Keep PD work in the PD file; route anything about injuries, treatment, MedPay or PIP to the BI Case Manager.",
          "Share PD evidence with the BI team — photos, estimates and the valuation show the force of the impact.",
          "Read every PD release for bodily injury language before it goes anywhere."
        ],
        bestPractices: [
          "Tell the client on day one: “Your car and your injuries are two separate claims — settling the car doesn't settle your injuries.”",
          "Send the BI Case Manager the repair estimate and photos as soon as you have them.",
          "Pitfall: letting a “Release of All Claims” through for a PD payment — it can end the injury case."
        ],
        discussionCase: "A client says, “Just get me paid for my car so this is over.” What do you explain, and what do you flag to the BI team?"
      },
      trainerCue: "Stress the BI release risk now — it comes back on Day 5. PD photos and estimates are evidence for the BI claim (force of impact)."
    },
    { h: "First-Party vs Third-Party Claims",
      layout: "COMPARE",
      compareLeft: { label: "Third-party claim", items: ["Against the AT-FAULT driver's insurer", "Paid under their Property Damage liability coverage", "No deductible for the client", "Waits on a liability decision", "Can include rental, loss of use, diminished value"] },
      compareRight: { label: "First-party claim", items: ["Against the CLIENT'S OWN insurer", "Paid under collision (or UMPD, rental coverage)", "Client pays the deductible", "No liability decision needed — faster", "Carrier recovers from the at-fault carrier (subrogation)"] },
      fourPart: {
        corePrinciples: [
          "A third-party claim is made against the at-fault driver's liability coverage; a first-party claim is made under the client's own policy.",
          "Third-party pays without a deductible but only after liability is accepted.",
          "First-party is faster and certain, but the client pays the deductible up front — then the client's carrier subrogates and the deductible is usually reimbursed."
        ],
        howTo: [
          "Start with the third-party claim when liability is clear.",
          "Open a first-party claim when liability is disputed or delayed, the at-fault driver is uninsured, or the at-fault limits are too low.",
          "Use the client's rental coverage while liability is under investigation, if the client has it.",
          "Document why you chose each path — the attorney and client should be able to see the reason."
        ],
        bestPractices: [
          "You can use both: first-party for speed, third-party for the deductible and the losses the client's policy doesn't cover.",
          "Never double-recover: the same dollar can't be paid by two carriers.",
          "Pitfall: waiting weeks on a stalled liability decision while the client has no car and storage runs."
        ],
        discussionCase: "Liability is “under investigation” and the client has rental coverage on her own policy. What do you do today, and what do you tell her about the deductible?"
      },
      trainerCue: "Anchor the vocabulary: first-party = our client's carrier; third-party = the other side's carrier. Subrogation is how the client's carrier gets its money back."
    },
    { h: "The PD Claim Lifecycle",
      layout: "PROCESS",
      processSteps: [
        { label: "Intake", desc: "Facts, documents, parties." },
        { label: "Claim Setup", desc: "Open claims, LOR, CMS." },
        { label: "Coverage & Liability", desc: "Who pays, and when." },
        { label: "Rental & Storage", desc: "Keep the client mobile; stop fees." },
        { label: "Inspection & Estimate", desc: "Repair or total loss?" },
        { label: "Repair / Valuation", desc: "Supplements or ACV negotiation." },
        { label: "Payment & Release", desc: "PD-only release; route funds." },
        { label: "Close", desc: "Subrogation, handoff, archive." }
      ],
      fourPart: {
        corePrinciples: [
          "Every PD claim moves through the same eight stages, from intake to close.",
          "Rental and storage run the whole time — they are the costs that grow while the file waits.",
          "The file is either a repair (estimate → supplements → repair) or a total loss (valuation → negotiation → payoff)."
        ],
        howTo: [
          "01 Intake — facts and documents",
          "02 Claim setup — claims, letter of representation, CMS",
          "03 Coverage & liability",
          "04 Rental & storage",
          "05 Inspection & estimate",
          "06 Repair or total-loss valuation",
          "07 Payment & release",
          "08 Close"
        ],
        bestPractices: [
          "Know which stage every one of your files is in — and what it is waiting on.",
          "Each stage has a follow-up date in the CMS; nothing waits without one.",
          "Pitfall: letting a file sit at “waiting on adjuster” with no follow-up scheduled."
        ],
        discussionCase: "Which stage do you think causes the most delay, and what would you calendar to prevent it?"
      },
      trainerCue: "Walk the eight boxes. Point out that stages 3–4 run in parallel on day one: rental and storage decisions can't wait for the estimate."
    },
    { h: "The PD Intake: Facts You Need on Day One",
      layout: "TABLE",
      tableHeaders: ["Area", "What to collect", "Verify against"],
      tableRows: [
        ["Vehicle", "Year, make, model, TRIM, color, VIN, plate, mileage, options/packages", "Registration, title, odometer photo, window sticker"],
        ["Ownership", "Registered owner, lienholder or lease company, loan number", "Registration, loan statement"],
        ["Location", "Where the car is now, drivable or not, storage rate", "Tow / storage invoice"],
        ["The crash", "Date, time, place, how it happened, police report number", "Police report"],
        ["Other party", "Driver, owner, their carrier and policy number, plate", "Police report, info exchange"],
        ["Client's policy", "Carrier, policy number, collision/rental/UMPD coverages", "Client's declarations page"],
        ["Evidence", "Photos (all sides, odometer, VIN plate, interior), witnesses", "Client's phone, police report"]
      ],
      fourPart: {
        corePrinciples: [
          "A PD claim runs on the vehicle's exact identity: the VIN, trim, options and mileage decide both the repair and the value.",
          "Collect it all on day one — the facts are easiest to get while the client is still engaged and the car is still accessible.",
          "Every fact is verified against a document, not the intake form's summary."
        ],
        howTo: [
          "Get the vehicle details from the registration (not memory).",
          "Ask for the lender and loan number — every total loss needs a payoff.",
          "Find the car: which tow yard, what it charges per day, and whether it can be moved.",
          "Collect photos: all four sides, the damage close up, the odometer, the VIN plate and the interior.",
          "Get the other party's driver, owner, carrier and policy number from the police report."
        ],
        bestPractices: [
          "Ask for an odometer photo on day one — mileage errors are the most common valuation mistake.",
          "Ask about packages and options (“Did it have a sunroof? A tech or weather package?”) — they add value in a total loss.",
          "Pitfall: accepting “about 28,000 miles” or “it's the blue one” as vehicle data."
        ],
        discussionCase: "The client doesn't know her trim level or mileage and the car is at a tow yard across town. How do you get both today?"
      },
      trainerCue: "Emphasize trim and mileage — both come back on Day 4 when the valuation gets them wrong."
    },
    { h: "The PD Document Checklist",
      layout: "TABLE",
      tableHeaders: ["Document", "Why it matters"],
      tableRows: [
        ["Police report", "Liability, parties, carriers, witnesses, citations"],
        ["Photos of the damage (all sides)", "Proves the damage and supports the BI claim"],
        ["Registration / title", "Proves ownership, VIN and the lienholder"],
        ["Loan or lease statement / payoff letter", "Needed to pay off the lender in a total loss"],
        ["Client's declarations page", "Shows the client's own coverages (rental, collision, UMPD)"],
        ["At-fault declarations page / info exchange", "Shows the other side's carrier and limits — check the policy period"],
        ["Tow & storage invoices", "Proves costs and the daily storage rate"],
        ["Rental agreement", "Rate, class, dates and who is billed"],
        ["Receipts for personal property", "Car seats, phones, tools, etc. damaged in the crash"]
      ],
      fourPart: {
        corePrinciples: [
          "The documents prove the claim; the adjuster pays what the documents support.",
          "Some documents are needed immediately (police report, registration, dec pages); others follow (payoff letter, receipts).",
          "Each document is uploaded to the CMS under the PD category with a clear name."
        ],
        howTo: [
          "Request the police report the same day.",
          "Get the registration and the client's dec page from the client.",
          "Request a 10-day payoff letter from the lender early — before you know it's a total loss.",
          "Keep every invoice and receipt — storage, tow, rental, personal property.",
          "Upload each one to the CMS with a consistent name (e.g., “PD — Tow Invoice — A-1 — 09/18/2026”)."
        ],
        bestPractices: [
          "Compare the same fact across documents — the VIN on the tow invoice should match the registration.",
          "Check the dates on every dec page against the date of loss.",
          "Pitfall: filing a claim with the VIN from the tow invoice without checking it."
        ],
        discussionCase: "The tow invoice VIN ends in 22041; the registration ends in 22014. Which one do you use, and who do you tell?"
      },
      trainerCue: "Preview the Day 1 Skill Builder: the Angela Carter intake packet has a transposed VIN and an expired dec page to catch."
    },
    { h: "Owner, Driver, Insured, Claimant: Who's Who",
      layout: "QUADRANT",
      quadrants: [
        { label: "Registered owner", desc: "Whose name the vehicle is in. Coverage usually follows the car." },
        { label: "Driver", desc: "Who was driving. May not be the owner (permissive user, listed driver, excluded driver)." },
        { label: "Named insured", desc: "The person the policy is issued to. Check that the driver is covered under it." },
        { label: "Claimant", desc: "Our client — the person whose property was damaged (and the owner/lienholder of it)." }
      ],
      fourPart: {
        corePrinciples: [
          "In most states insurance follows the vehicle: the owner's policy on the car is primary, even when someone else drives it.",
          "The driver may be a listed driver, a permissive user, or an EXCLUDED driver — exclusions can void coverage for that driver.",
          "On our side, the claimant must be the owner (or have the owner's authorization) — and a lienholder has an interest in the payment."
        ],
        howTo: [
          "Compare the police report's driver and owner with the at-fault dec page's named insured and listed drivers.",
          "Ask the carrier directly: “Is the driver a listed driver, a permissive user, or excluded?”",
          "Confirm our client owns the car (registration) — if not, get the owner's authorization.",
          "Note the lienholder as a loss payee for any payment on the vehicle."
        ],
        bestPractices: [
          "If the driver has their own policy, it may be excess over the owner's — note it for the attorney.",
          "Business use, rideshare and delivery drivers raise coverage questions — flag them early.",
          "Pitfall: opening the claim under the driver's name when the policy belongs to the owner."
        ],
        discussionCase: "Kevin Hale (22) was driving his mother Linda's Explorer. Whose policy do you claim against, and what do you ask the adjuster about Kevin?"
      },
      trainerCue: "Use the Angela Carter file: Linda Hale is the named insured; Kevin is a listed driver on her policy. That's the answer to confirm on the first call."
    },
    { h: "Opening the Claim: The First Call to the Carrier",
      layout: "PROCESS",
      processSteps: [
        { label: "Identify", desc: "Firm, your name, that you represent the claimant." },
        { label: "Report", desc: "Insured, date, place, how it happened, police report." },
        { label: "Get", desc: "Claim number, adjuster, direct line, email." },
        { label: "Ask", desc: "Coverage in force on DOL? Driver covered? Liability status?" },
        { label: "Arrange", desc: "Rental, inspection, vehicle move." },
        { label: "Confirm", desc: "Next step, date, and send the LOR in writing." }
      ],
      skill: { tool: "pdSetup1", cms: true },
      fourPart: {
        corePrinciples: [
          "The first call sets up the whole claim: claim number, adjuster, coverage and liability status.",
          "You speak for the client — the carrier contacts the firm, not the client.",
          "Carriers often won't disclose policy limits by phone; ask what they need in writing."
        ],
        howTo: [
          "Identify yourself and the firm, and state that you represent the claimant for property damage (and injuries, if the firm does).",
          "Give the loss facts: insured's name and policy number, date, time, place, police report number, how it happened.",
          "Get the claim number, the assigned adjuster's name, direct line and email.",
          "Ask: was the policy in force on the date of loss? Is the vehicle listed? Is the driver covered? What is the liability status?",
          "Ask how they handle rental and inspection, and when you'll hear on liability.",
          "Confirm everything in writing the same day with the letter of representation."
        ],
        bestPractices: [
          "Have the police report, VIN and client details in front of you before you dial.",
          "Write the claim number back to the representative digit by digit.",
          "Pitfall: agreeing to put the client on the phone for a recorded statement — that goes to the attorney."
        ],
        discussionCase: "The claims rep says, “We'll need a recorded statement from your client before we can make a liability decision.” What do you say?"
      },
      trainerCue: "Demo the call using the process boxes. Then send trainees to the Call Simulator's “Open the Third-Party Claim” call (PD pack) and the Day 1 Skill Builder."
    },
    { h: "The Letter of Representation (LOR)",
      layout: "THREEBOX",
      boxes: [
        { label: "Who & what", desc: "Client, date of loss, claim number, the insured — and that the firm represents the client." },
        { label: "The ask", desc: "Direct all contact to the firm; preserve evidence; confirm coverage and limits in writing." },
        { label: "The record", desc: "Sent the same day by email; saved to the CMS; follow-up calendared." }
      ],
      fourPart: {
        corePrinciples: [
          "The LOR tells the carrier the client is represented — from that moment, all contact goes through the firm.",
          "It creates a written record of the claim facts, the claim number and what you asked for.",
          "It must match the retainer: property damage only, or property damage and bodily injury."
        ],
        howTo: [
          "Address it to the assigned adjuster with the claim number and the insured's name.",
          "State who the firm represents and for which claims (PD, BI or both).",
          "Ask that all communication go through the firm and that the carrier not contact the client.",
          "Request confirmation of coverage and the liability decision, and ask for a written limits disclosure if the state allows it.",
          "Attach what supports the claim (police report number, photos) — never the client's medical records from the PD file."
        ],
        bestPractices: [
          "Send it the same day as the first call — a phone call alone isn't proof.",
          "Save the sent copy and the carrier's acknowledgment in the CMS.",
          "Pitfall: an LOR that says “property damage only” when the firm also represents the client's injuries."
        ],
        discussionCase: "The carrier's claims rep already called the client twice for a statement. What goes in the LOR, and what do you tell the client?"
      },
      trainerCue: "The LOR is the firm's shield. If the adjuster contacts a represented client after receiving it, document it and tell the attorney."
    },
    { h: "Stop the Storage Clock: Towing & Vehicle Location",
      layout: "STAT",
      statNumber: "$65/day",
      statLabel: "What A-1 Metro Towing charges to store Angela's RAV4 — every day it sits there",
      fourPart: {
        corePrinciples: [
          "Tow yards charge daily storage from the day the car arrives — it adds up fast and carriers may refuse “unreasonable” storage.",
          "Moving the car to the client's chosen repair shop (or the carrier's yard) stops the clock.",
          "The tow yard will want the owner's (or carrier's) authorization and payment of the tow and storage to date."
        ],
        howTo: [
          "Find out where the car is, the daily rate and the release requirements on day one.",
          "Get the client's authorization to release the vehicle and choose where it goes (their shop, or the carrier's yard for inspection).",
          "Tell the adjuster where the car is going and ask them to pay the tow and storage directly once liability is accepted.",
          "If liability isn't decided yet, use the client's own coverage (towing & labor, or collision) rather than let storage run.",
          "Calendar the move and confirm it happened."
        ],
        bestPractices: [
          "Check the tow invoice's VIN, plate and dates — they become part of the claim.",
          "Ask the client to remove personal items (and the car seat) when the car is moved — photograph them first.",
          "Pitfall: waiting for the adjuster to “get to it” while storage runs for two weeks."
        ],
        discussionCase: "The adjuster says, “We'll move it after the inspection next week.” Storage is $65 a day. What do you do?"
      },
      trainerCue: "Do the math out loud: 6 days = $390; if Angela's car had stayed until the total-loss decision on 10/01, it would have been 14 days = $910."
    },
    { h: "Setting Up the File in the CMS",
      layout: "TABLE",
      tableHeaders: ["What", "Where in the CMS", "Follow-up"],
      tableRows: [
        ["Claim numbers & adjusters (both carriers)", "Parties / Insurance", "—"],
        ["Liability decision", "Task", "48 hours, then every 2 business days"],
        ["Vehicle location & move", "Task + Note", "Same day / next business day"],
        ["Inspection / estimate", "Task", "Within 3 business days of the move"],
        ["Rental end date", "Calendar + Task", "3 business days before it ends"],
        ["Payoff letter (lienholder)", "Task", "Request day 1; watch the good-through date"],
        ["Every call", "Note (same day)", "—"]
      ],
      fourPart: {
        corePrinciples: [
          "The CMS is the single source of truth for the claim — if it isn't in the CMS, it didn't happen.",
          "Every claim number, adjuster and contact goes in on day one.",
          "Every waiting point has a task with a due date and an owner."
        ],
        howTo: [
          "Create the PD claim with the correct VIN, vehicle and owner details.",
          "Add the parties: at-fault driver and owner, both carriers, adjusters, tow yard, shop, rental company, lienholder.",
          "Upload the documents under the PD category with consistent names.",
          "Create tasks for every follow-up (liability, vehicle move, inspection, payoff, rental end date).",
          "Write a same-day note for every call: who, what was said, what was agreed, the next step and date."
        ],
        bestPractices: [
          "Use the same naming for documents on every file so anyone can find them.",
          "Link the PD file to the BI file so the teams can see each other's work.",
          "Pitfall: keeping claim numbers in your email instead of the CMS — no one else can find them."
        ],
        discussionCase: "You're out sick tomorrow. Could a colleague pick up Angela's file from the CMS alone? What would be missing?"
      },
      trainerCue: "Trainees build Angela Carter's PD file in the CMS in the Day 1 Skill Builder and log their CMS Case ID."
    },
    { h: "The Day-One Client Call: Setting Expectations",
      layout: "THREEBOX",
      boxes: [
        { label: "What happens next", desc: "Claims opened, rental plan, the car's move, inspection, the liability decision — with dates." },
        { label: "What the client should do", desc: "Send photos and documents; save receipts; no statements to the other carrier; take personal items out." },
        { label: "What we won't do", desc: "Guess values, promise dates we don't control, or give legal advice." }
      ],
      fourPart: {
        corePrinciples: [
          "The first client call sets the tone: the client should hang up knowing exactly what happens next and when they'll hear from you.",
          "Clients are stressed about transportation and money — lead with the rental and the next date.",
          "You give facts and process, not legal opinions or value predictions."
        ],
        howTo: [
          "Confirm identity and the best way and time to reach the client.",
          "Explain the plan: which claims are open, how the rental works, where the car is going, and when you expect the liability decision.",
          "Tell the client what to send (photos, registration, dec page, loan info, receipts).",
          "Tell the client not to talk to the other carrier and to send any calls or letters to you.",
          "Explain costs the client may carry (deductible if we use their collision; rental upgrades, fuel, extra days).",
          "Set the next update date and log the call."
        ],
        bestPractices: [
          "Use plain words: “The other driver's insurance hasn't decided yet if they'll pay — we expect an answer by Thursday.”",
          "Put the plan in a short follow-up text or email so the client can re-read it.",
          "Pitfall: “Don't worry, they'll pay for everything” — you don't control that."
        ],
        discussionCase: "Angela asks, “Will they total my car? How much will I get?” What do you say?"
      },
      trainerCue: "Model a calm, concrete answer. Then practice with the Live Roleplay “Where's My Car?” client call."
    },
    { h: "Day-One Red Flags",
      layout: "ICONLIST",
      icons: [
        { icon: "📅", label: "Expired policy dates", desc: "The at-fault dec page ends before the date of loss — confirm renewal." },
        { icon: "🔢", label: "VIN mismatch", desc: "Different VINs on different documents — fix it before it goes on a claim." },
        { icon: "🚫", label: "Excluded or unlisted driver", desc: "The driver may not be covered — ask the carrier directly." },
        { icon: "🏢", label: "Commercial, rideshare or rental vehicle", desc: "Different policies and layers apply — flag to the attorney." },
        { icon: "🎙", label: "Recorded statement request", desc: "Route to the attorney; the client doesn't give one." },
        { icon: "🩹", label: "Injuries mentioned", desc: "Flag to the BI Case Manager the same day." },
        { icon: "⏱", label: "Storage running", desc: "Move the car before it becomes a dispute." },
        { icon: "❓", label: "No police report / hit-and-run", desc: "Liability and coverage change — client's own coverage may be the path." }
      ],
      skill: { tool: "pdSetup1", cms: true },
      fourPart: {
        corePrinciples: [
          "Most expensive PD problems are visible on day one — if you look for them.",
          "A red flag doesn't stop the claim; it changes what you ask, what you document, and who you tell.",
          "When in doubt, escalate early: the attorney would rather hear it on day one than day thirty."
        ],
        howTo: [
          "Check every dec page date against the date of loss.",
          "Check every VIN, plate and name across the documents.",
          "Compare the driver with the named insured and listed drivers.",
          "Note commercial use, rideshare, rental cars or out-of-state vehicles.",
          "Route injuries and recorded-statement requests the same day."
        ],
        bestPractices: [
          "Keep a day-one checklist and run it on every file.",
          "Write the red flag and your action in the CMS note — “flagged” isn't a plan.",
          "Pitfall: noticing the problem and assuming someone else will fix it."
        ],
        discussionCase: "Which of these red flags is on Angela Carter's file, and what's your first action for each?"
      },
      trainerCue: "Launch the Day 1 Skill Builder — Claim Setup Challenge. Trainees audit Angela's packet, choose which claims to open, write the setup note and build the file in the CMS."
    }
  ],
  quickChecks: [
    { afterIndex: 2, q: "Liability is still under investigation and the client needs a car. She has rental reimbursement on her own policy. The best move today is:", opts: ["Wait for the at-fault carrier's decision", "Use her own rental coverage through a first-party claim, and keep pursuing the third-party claim", "Tell her to rent a car and hope she's reimbursed", "Put her on the phone with the other carrier"], a: 1, r: "First-party coverage gets her mobile now; the third-party claim still recovers what her policy doesn't cover." },
    { afterIndex: 7, q: "The at-fault carrier asks for a recorded statement from your client. You:", opts: ["Explain the client is represented and route the request to the attorney", "Schedule it for tomorrow", "Give the statement yourself", "Tell the client to call them directly"], a: 0, r: "The firm speaks for a represented client; recorded statements are the attorney's decision." },
    { afterIndex: 9, q: "The car is at a tow yard at $65/day. The adjuster wants to inspect it next week. You:", opts: ["Leave it there until the inspection", "Tell the client to pay storage and sort it out later", "Get the client's authorization and move it to her chosen shop (or the carrier's yard) now, and tell the adjuster where it is", "Ignore it — storage is the carrier's problem"], a: 2, r: "Moving the car stops the storage clock; carriers may refuse unreasonable storage." }
  ],
  quiz: [
    { q: "A PD Specialist handles:", opts: ["The client's medical treatment", "The vehicle, rental, towing & storage and personal property", "Only the police report", "The lawsuit"], a: 1, r: "PD covers the property side of the crash; injuries go to the BI Case Manager." },
    { q: "A third-party PD claim is made against:", opts: ["The client's own insurer", "The client's lender", "The repair shop", "The at-fault driver's liability insurer"], a: 3, r: "Third-party = the other side's liability coverage." },
    { q: "The main advantage of a first-party (collision) claim is:", opts: ["No deductible", "It pays diminished value", "It doesn't wait on a liability decision", "It pays pain and suffering"], a: 2, r: "First-party is faster and certain; the client pays the deductible, which the carrier usually recovers by subrogation." },
    { q: "Subrogation means:", opts: ["The client's carrier recovers what it paid from the at-fault party's carrier", "The client sues the carrier", "The adjuster denies the claim", "The lender repossesses the car"], a: 0, r: "The paying carrier steps into the client's shoes to recover its payment (and the deductible)." },
    { q: "In most states, when someone borrows a car, the primary coverage is:", opts: ["The driver's health insurance", "The owner's policy on the vehicle", "The client's policy", "No one's"], a: 1, r: "Coverage generally follows the vehicle; the driver's own policy may be excess." },
    { q: "The at-fault dec page shows a policy term of 03/01–09/01; the crash was 09/18. You:", opts: ["Assume there's no coverage", "Use the client's UMPD immediately", "Ignore the dates", "Confirm with the carrier that the policy renewed and was in force on the date of loss"], a: 3, r: "A dec page from an earlier term isn't proof of coverage on the date of loss — confirm it." },
    { q: "Which vehicle detail most often causes a low total-loss valuation if it's wrong?", opts: ["Trim, options and mileage", "Color", "The license plate", "The tow yard"], a: 0, r: "Trim, packages and mileage drive the value; get them right on day one." },
    { q: "Why request the lender's payoff letter early?", opts: ["It's required to open the claim", "To lower the car's value", "A total loss can't be paid out correctly without it, and it takes time to get", "Lenders require it for rentals"], a: 2, r: "The lienholder is paid first in a total loss; the payoff letter has a good-through date." },
    { q: "The Letter of Representation should:", opts: ["Be sent only if the adjuster asks", "Include the client's medical records", "Be skipped if you called", "Tell the carrier all contact goes through the firm and confirm the claim facts in writing"], a: 3, r: "The LOR is the written record that the client is represented." },
    { q: "Two documents show different VINs (…22014 and …22041). You:", opts: ["Use the one on the tow invoice", "Verify against the registration/title, use the correct VIN, and get the wrong document corrected", "Leave the VIN off the claim", "Average them"], a: 1, r: "The registration and title are the source of truth for the VIN." },
    { q: "Storage at the tow yard is best handled by:", opts: ["Waiting for the adjuster's inspection", "Asking the client to visit the yard daily", "Moving the car as soon as possible with the client's authorization", "Letting the lender decide"], a: 2, r: "Every day costs money and may become a dispute." },
    { q: "Which is NOT a day-one follow-up?", opts: ["The mediation date", "The liability decision", "Moving the vehicle", "The payoff letter"], a: 0, r: "Mediation belongs to the BI litigation track, not PD setup." },
    { q: "The client mentions neck pain on the PD call. You:", opts: ["Ignore it — you're PD", "Tell her to see your chiropractor", "Flag it to the BI Case Manager the same day and note it", "Add it to the PD claim"], a: 2, r: "Injuries belong to the BI file; route them the same day." },
    { q: "The best answer to “How much will I get for my car?” on day one is:", opts: ["“It depends on the inspection and, if it's a total loss, a valuation — I'll walk you through it as soon as we have it, and the attorney will review any offer with you.”", "A number from an online estimate", "“At least what you owe on it.”", "“They always total cars like yours.”"], a: 0, r: "Explain the process and next date; never guess values." },
    { q: "Everything on a PD call is documented:", opts: ["At the end of the week", "Only if the adjuster agrees", "In your personal email", "In a same-day CMS note with the next step and date"], a: 3, r: "If it isn't in the CMS, it didn't happen." }
  ],
  discussionQuestion: "Angela Carter's packet has a transposed VIN on the tow invoice, an at-fault dec page that expired before the crash, a driver who isn't the named insured, a car sitting at $65 a day, a recorded-statement voicemail, and neck pain. In what order do you handle them today, and who hears about each one?"
};
