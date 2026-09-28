const DAY4 = {
  id: 4,
  title: "Total Loss, Valuation & Negotiation",
  theme: "When Is It a Total Loss? · Actual Cash Value · Reading a Valuation Report · Auditing the Valuation · Comparable Vehicles · Options, Condition & Mileage · Tax, Title & Fees · Loans, Lienholders & GAP · The Negotiation Framework · Adjuster Tactics · Client Authority · Rental & Personal Property in a Total Loss · Escalation & Appraisal",
  objective: "Recognize a total loss, read and audit a valuation report line by line, build a documented counter from true comparables with tax, title and fees, handle the lienholder payoff, negotiate professionally against common adjuster tactics, keep the rental and personal property on the claim, and get the client's authority through the attorney before anything is accepted.",
  lessons: [
    { h: "When Is It a Total Loss?",
      layout: "THREEBOX",
      boxes: [
        { label: "Threshold states", desc: "Total loss when repairs reach a set % of ACV (this course's training state: 75%)." },
        { label: "Formula states", desc: "Total loss when repair cost + salvage value ≥ ACV." },
        { label: "Carrier's call", desc: "Carriers may total a car below the threshold (e.g., frame or airbag damage)." }
      ],
      fourPart: {
        corePrinciples: [
          "A car is a total loss when repairing it costs too much compared with its actual cash value (ACV).",
          "States set the rule: a percentage threshold (e.g., 75%) or a formula (repairs + salvage ≥ ACV).",
          "Once it's a total loss, the claim changes from “fix it” to “pay its value” — and the negotiation is about ACV."
        ],
        howTo: [
          "Get the repair total (estimate + supplements) and the carrier's ACV.",
          "Divide repairs by ACV and compare it with the state threshold.",
          "Ask the adjuster for the total-loss decision and the valuation report in writing.",
          "Tell the client what a total loss means and what happens next (valuation, payoff, title)."
        ],
        bestPractices: [
          "Check the math with the RIGHT ACV — a low ACV makes a repairable car look like a total loss (and vice versa).",
          "Ask the client to remove personal items (and photograph them) before the car goes to salvage.",
          "Pitfall: telling the client “they're totaling it” before the carrier confirms."
        ],
        discussionCase: "Angela's repairs are $24,860. Crestline's ACV is $25,147; LSH's is about $31,182. Is it a total loss either way at 75%?"
      },
      trainerCue: "$24,860 ÷ $25,147 = 98.9%; ÷ $31,181.67 = 79.7%. Over 75% either way — so it's a total loss, and the fight is over the value."
    },
    { h: "Actual Cash Value (ACV)",
      layout: "STAT",
      statNumber: "ACV",
      statLabel: "What a comparable vehicle would have sold for in the local market the moment before the crash",
      fourPart: {
        corePrinciples: [
          "Actual cash value is the market value of the vehicle immediately before the loss — not what the client paid, and not what she owes.",
          "It's based on comparable vehicles: same year, make, model, trim, options, similar mileage and condition, in the local market.",
          "In a total loss, the client is owed ACV plus (where the state requires) sales tax and title/registration fees."
        ],
        howTo: [
          "Start from the vehicle's exact identity: year, make, model, trim, drivetrain, options, mileage.",
          "Find comparable vehicles for sale (or sold) near the client.",
          "Adjust for real differences (mileage, options) — not guesses.",
          "Add the tax and fees the state requires."
        ],
        bestPractices: [
          "Explain ACV to the client early — it's not the purchase price or the loan balance.",
          "Keep the window sticker, options list and maintenance records in the file.",
          "Pitfall: letting the client believe the loan balance is what she'll get."
        ],
        discussionCase: "Angela paid $34,200 for the RAV4 in 2023 and owes $19,850. What is she owed in a total loss, and how do you explain it?"
      },
      trainerCue: "Three different numbers — purchase price, loan balance, ACV. Only ACV (plus tax and fees) is the claim."
    },
    { h: "Reading a Valuation Report",
      layout: "TABLE",
      tableHeaders: ["Section", "What to check"],
      tableRows: [
        ["Loss vehicle", "Year, make, model, TRIM, drivetrain, options/packages, MILEAGE, VIN"],
        ["Comparables", "Same year/model/trim, similar mileage, distance from the client, date, price"],
        ["Comparable adjustments", "Mileage and option adjustments — are they reasonable?"],
        ["Base value", "The average of the adjusted comparables"],
        ["Condition adjustment", "Is there an inspection note or photo that supports it?"],
        ["Prior damage", "Is it really prior damage — or damage from this crash?"],
        ["Tax, title, fees", "Are the state's required amounts included?"],
        ["Settlement total", "ACV + tax + fees − deductible (first-party only)"]
      ],
      fourPart: {
        corePrinciples: [
          "A valuation report shows how the carrier reached its ACV: the loss vehicle's details, the comparables, the adjustments and the totals.",
          "Every number traces back to a fact — if the fact is wrong, the number is wrong.",
          "Your job is to check every line against the file."
        ],
        howTo: [
          "Check the loss vehicle's details against the registration, window sticker and odometer photo.",
          "Check each comparable: trim, drivetrain, year, mileage, distance.",
          "Check every deduction for proof (condition, prior damage).",
          "Check tax, title and fees against the state's rules.",
          "List every error with the document that proves it."
        ],
        bestPractices: [
          "Request the full valuation report — not just the total.",
          "Keep the report and your audit side by side in the CMS.",
          "Pitfall: negotiating the total without auditing the lines."
        ],
        discussionCase: "Crestline's report lists Angela's car as an XLE with 34,812 miles. What two documents prove it's an XLE Premium with 28,412?"
      },
      trainerCue: "Open Crestline's Valuation Report VR-26-18840 in 📁 Documents — the Day 4 Skill Builder audits it line by line."
    },
    { h: "Auditing the Valuation: The Common Errors",
      layout: "ICONLIST",
      icons: [
        { icon: "🏷", label: "Wrong trim", desc: "A base trim instead of the car's real trim (XLE vs XLE Premium)." },
        { icon: "🧩", label: "Missing options", desc: "Packages, moonroof, tech or weather packages left out." },
        { icon: "🔢", label: "Wrong mileage", desc: "Higher miles than the odometer — lowers the value." },
        { icon: "🚗", label: "Non-comparable comps", desc: "Lower trims, other drivetrains, older years, far away, high miles." },
        { icon: "🧽", label: "Unsupported condition deduction", desc: "“Below average” with no inspection note or photo." },
        { icon: "🔁", label: "Prior damage that isn't prior", desc: "Deducting for damage caused by this crash." },
        { icon: "🧾", label: "Missing tax, title & fees", desc: "State-required amounts left off the total." }
      ],
      fourPart: {
        corePrinciples: [
          "Most low valuations come from a handful of repeat errors.",
          "Each error has a document that corrects it — the audit is matching errors to proof.",
          "Small errors add up: a wrong trim, higher mileage and two deductions can be several thousand dollars."
        ],
        howTo: [
          "Trim & options → window sticker, dealer invoice or a VIN decode.",
          "Mileage → odometer photo, inspection report, service records.",
          "Comps → reject any that don't match year, trim, drivetrain, similar mileage and local market.",
          "Condition → ask for the inspector's notes and photos; provide your own photos.",
          "Prior damage → show it's damage from this loss (photos, police report).",
          "Tax & fees → cite the state requirement."
        ],
        bestPractices: [
          "Write the audit as a table: line → their number → the error → the proof → the correction.",
          "Be precise and calm — the adjuster will fix documented errors faster than arguments.",
          "Pitfall: arguing “it's worth more” without pointing to a specific line."
        ],
        discussionCase: "Which of these errors are on Crestline's report for Angela's RAV4? How much do the two deductions alone cost her?"
      },
      trainerCue: "Six errors on VR-26-18840: trim/options, mileage, two bad comps, condition −$620, prior damage −$750, fees left off ($356)."
    },
    { h: "Building the Counter: Comparable Vehicles",
      layout: "TABLE",
      tableHeaders: ["Match", "Rule of thumb"],
      tableRows: [
        ["Year, make, model", "Exact"],
        ["Trim & drivetrain", "Exact (XLE Premium AWD ≠ XLE AWD ≠ LE FWD)"],
        ["Options / packages", "Same or adjusted"],
        ["Mileage", "Close to the loss vehicle (e.g., ± 5,000–10,000)"],
        ["Location", "Local market (e.g., within 50–100 miles)"],
        ["Date", "Recent listings or sales (last 30–90 days)"],
        ["Source", "Dealer listings with VIN and a link or screenshot"]
      ],
      fourPart: {
        corePrinciples: [
          "A counter is only as strong as its comparables.",
          "Good comps match the loss vehicle on year, model, trim, drivetrain, options and mileage, in the local market, recently.",
          "Three good comps beat ten loose ones."
        ],
        howTo: [
          "Search local listings for the same year, model, trim and drivetrain.",
          "Keep only those with similar mileage and the same packages.",
          "Save each listing (screenshot, VIN, price, mileage, dealer, date).",
          "Average the prices of the true comparables.",
          "Exclude higher trims and different years even if they help — the adjuster will reject them and your credibility with them."
        ],
        bestPractices: [
          "Show your exclusions: “We excluded the Limited (higher trim) and the 2020 (different year).”",
          "Use the carrier's own comparables if any are true matches.",
          "Pitfall: including a Limited trim to push the average up — it discredits the whole counter."
        ],
        discussionCase: "You found five listings: three 2022 XLE Premium AWDs, a 2022 Limited, and a 2020 XLE Premium. Which do you use, and why?"
      },
      trainerCue: "The Comparable Vehicle Listings document has exactly that set. A, B and C average $31,181.67."
    },
    { h: "Proving Options, Condition & Mileage",
      layout: "ICONLIST",
      icons: [
        { icon: "📄", label: "Window sticker / build sheet", desc: "Proves trim and factory packages." },
        { icon: "🔍", label: "VIN decode", desc: "Confirms model, trim and drivetrain." },
        { icon: "🧾", label: "Maintenance records", desc: "Show care and mileage over time." },
        { icon: "📸", label: "Pre-loss and scene photos", desc: "Show condition and the odometer." },
        { icon: "🛞", label: "Recent purchases", desc: "New tires, brakes, aftermarket equipment (receipts)." }
      ],
      fourPart: {
        corePrinciples: [
          "The carrier values what it can see in the file — options and condition you can't prove don't count.",
          "Mileage is proven by the odometer (photo), the inspection, and service records.",
          "Recent major purchases (tires, brakes) can support a value adjustment."
        ],
        howTo: [
          "Ask the client for the window sticker, purchase documents or dealer invoice.",
          "Ask for maintenance records and receipts for recent work.",
          "Collect clear photos: odometer, interior, exterior (pre-loss if the client has any).",
          "Send the proof with the counter, labeled line by line."
        ],
        bestPractices: [
          "Collect options and mileage proof on Day 1 — before the car goes to salvage.",
          "Label attachments to match your audit table (“Exhibit B — odometer 28,412”).",
          "Pitfall: the car is already at the salvage auction when you ask for an odometer photo."
        ],
        discussionCase: "The valuation deducts $620 for “interior below average.” What do you send, and what do you ask them to send you?"
      },
      trainerCue: "Angela's odometer photo (09/21) shows 28,412 — Day 1's intake pays off here."
    },
    { h: "Tax, Title & Fees",
      layout: "TABLE",
      tableHeaders: ["Item", "Angela's file (training state)"],
      tableRows: [
        ["Agreed / counter ACV", "Counter: $31,181.67"],
        ["Sales tax (8.25%)", "$31,181.67 × 8.25% = $2,572.49"],
        ["Title, registration & plate transfer", "$356.00"],
        ["Deductible", "$0 — third-party claim"],
        ["Total vehicle claim", "$34,110.16"]
      ],
      fourPart: {
        corePrinciples: [
          "Many states require a total-loss settlement to include sales tax and title/registration fees — so the owner can replace the car.",
          "Some states pay tax only on proof of a replacement purchase — know your state's rule.",
          "A deductible applies only on a first-party (collision) claim, not a third-party claim."
        ],
        howTo: [
          "Apply the state sales-tax rate to the ACV.",
          "Add the state title, registration and plate-transfer fees.",
          "Subtract the deductible only on a first-party claim.",
          "Show the math line by line in the counter."
        ],
        bestPractices: [
          "Round only at the end of each line (to the cent).",
          "Check the carrier's tax rate against the client's county/city rate.",
          "Pitfall: accepting a total that leaves the fees off — $356 is the client's money."
        ],
        discussionCase: "Crestline's offer: $25,147 + $2,074.63 tax = $27,221.63. What's missing, and what should the total be on Crestline's own ACV?"
      },
      trainerCue: "On Crestline's own ACV, fees alone add $356 → $27,577.63. On LSH's ACV the total is $34,110.16."
    },
    { h: "Loans, Lienholders & GAP",
      layout: "PROCESS",
      processSteps: [
        { label: "Payoff letter", desc: "10-day payoff, good-through date, per diem." },
        { label: "Split the payment", desc: "Lienholder paid first; the client gets the equity." },
        { label: "Title release", desc: "Lienholder releases title to the carrier after payment." },
        { label: "Client documents", desc: "Signed title / power of attorney, keys, registration." },
        { label: "Negative equity?", desc: "Loan > ACV → GAP (if purchased) or the client owes the difference." }
      ],
      fourPart: {
        corePrinciples: [
          "If the car is financed, the lienholder is paid first from the total-loss settlement — up to the payoff.",
          "The client receives the equity: settlement total minus the payoff.",
          "Payoff letters expire; after the good-through date the payoff grows by a daily amount (per diem)."
        ],
        howTo: [
          "Request a 10-day payoff letter (payoff amount, good-through date, per diem, where to send payment).",
          "Calculate the client's equity: settlement − payoff.",
          "If payment will be after the good-through date, get an updated payoff or add the per diem.",
          "Ask the carrier to pay the lienholder directly and the client the balance.",
          "Coordinate the title: the lienholder releases it to the carrier; the client signs what's needed."
        ],
        bestPractices: [
          "Negative equity (loan > ACV) is a client-crisis moment: check for GAP immediately and tell the attorney.",
          "Track the payoff good-through date as a hard deadline in the CMS.",
          "Pitfall: the payoff letter expires and the lender rejects the payment as short."
        ],
        discussionCase: "Payoff $19,850.42 good through 10/15, then $3.10/day. Payment goes out 10/20. What's the payoff, and what does Angela get from $33,534.63?"
      },
      trainerCue: "5 extra days × $3.10 = $15.50 → $19,865.92. Equity $13,668.71 (Day 5 payment routing)."
    },
    { h: "The Negotiation Framework",
      layout: "PROCESS",
      processSteps: [
        { label: "Prepare", desc: "Audit, comps, math, proof — before the call." },
        { label: "Anchor", desc: "Lead with your documented number and the key errors." },
        { label: "Ask for their basis", desc: "“Which comps support that? Why the deduction?”" },
        { label: "Trade on facts", desc: "Concede only what the documents don't support." },
        { label: "Confirm in writing", desc: "Every agreed correction and number, same day." },
        { label: "Authority", desc: "No acceptance without the client's OK through the attorney." }
      ],
      skill: { tool: "pdTotal4", cms: true },
      fourPart: {
        corePrinciples: [
          "PD negotiation is evidence-based: the side with the better documents usually wins.",
          "Anchor with your documented counter; make the adjuster justify their numbers line by line.",
          "You negotiate the numbers — the client (advised by the attorney) decides whether to accept."
        ],
        howTo: [
          "Send the written counter first, then call to walk the adjuster through it.",
          "Start with the biggest, clearest errors (trim, mileage, fees).",
          "Ask the adjuster to show the basis for each of their numbers.",
          "Move only on points your documents don't support; ask for something in return.",
          "Summarize agreements in an email the same day.",
          "Take any final offer to the attorney and client — never accept on the call."
        ],
        bestPractices: [
          "Stay calm, specific and polite; the adjuster is a professional counterpart, not an enemy.",
          "Use silence — let the adjuster answer your “why?”",
          "Pitfall: splitting the difference just to finish the call."
        ],
        discussionCase: "The adjuster offers to fix the trim but not the mileage. What do you say?"
      },
      trainerCue: "Practice live: the Call Simulator's Negotiation & Total Loss line (PD pack) has Priya Shah on Angela's valuation."
    },
    { h: "Handling Adjuster Tactics",
      layout: "TABLE",
      tableHeaders: ["Tactic", "What you say / do"],
      tableRows: [
        ["“This is the market value — take it or leave it.”", "“Which comparables support it? Ours are attached — three 2022 XLE Premium AWDs within 41 miles.”"],
        ["“Our system sets the value; I can't change it.”", "“Then please correct the inputs — trim and mileage are wrong. Who can re-run it?”"],
        ["“The rental ends in 3 days either way.”", "“The offer used the wrong vehicle, so it isn't a fair offer — please extend the rental until the corrected offer.”"],
        ["“We need a decision today.”", "“Any decision goes to the client through the attorney. I'll have an answer by [date].”"],
        ["“Let's just split the difference.”", "“Let's start with the documented errors — each has proof attached.”"],
        ["Silence / no callback", "Follow up in writing with a date; escalate to the supervisor after two tries."]
      ],
      fourPart: {
        corePrinciples: [
          "Adjusters use predictable tactics: “the system,” time pressure, rental cut-offs, and splitting the difference.",
          "Each tactic has a calm, factual response — and most come back to the documents.",
          "Time pressure is never a reason to accept a number without the attorney and client."
        ],
        howTo: [
          "Recognize the tactic.",
          "Respond with a question or a fact from your audit.",
          "Redirect to the documents and the next step.",
          "Escalate to a supervisor when an adjuster won't engage — in writing."
        ],
        bestPractices: [
          "Keep a tactics cheat sheet next to your phone.",
          "Document tactics that affect the client (rental cut-offs, deadlines) in the CMS note.",
          "Pitfall: losing your temper — it moves the conversation away from the documents."
        ],
        discussionCase: "Priya Shah says, “Our valuation vendor is independent — we can't override it.” What's your answer?"
      },
      trainerCue: "Role-play two tactics live, then use the Live Roleplay “Take-It-or-Leave-It Adjuster.”"
    },
    { h: "Client Authority & Communicating the Offer",
      layout: "THREEBOX",
      boxes: [
        { label: "Explain", desc: "The offer, how it was calculated, and what changed — in plain words." },
        { label: "Show the split", desc: "What goes to the lienholder, what comes to the client." },
        { label: "Decide with the attorney", desc: "The client decides with the attorney's advice; get authority in writing." }
      ],
      fourPart: {
        corePrinciples: [
          "Only the client can accept a settlement, and only with the attorney's advice — the PD Specialist negotiates and explains.",
          "Clients need the numbers in plain language: total, payoff, their equity, and what happens to the rental.",
          "Written authority protects the client and the firm."
        ],
        howTo: [
          "Summarize the offer in writing: ACV, tax, fees, total, payoff, the client's equity.",
          "Explain what was corrected and what wasn't.",
          "Set a call with the attorney for the client's decision.",
          "Get written authority (email or signed form) before telling the carrier “accepted.”",
          "Tell the client the next steps: release, title, payment timing, rental end date."
        ],
        bestPractices: [
          "Never say “I'd take it” or “you should hold out” — that's advice.",
          "Put the rental end date in the same message — it's the client's most urgent concern.",
          "Pitfall: telling the carrier “we accept” before the client has authorized it."
        ],
        discussionCase: "Angela asks, “Is $33,534.63 good? Should I take it?” What do you say?"
      },
      trainerCue: "The Live Roleplay “Should I Take It?” practices this exact call."
    },
    { h: "Rental, Personal Property & Other Items in a Total Loss",
      layout: "ICONLIST",
      icons: [
        { icon: "🚙", label: "Rental", desc: "Ends a set time after the offer — extend if the offer was wrong." },
        { icon: "🧸", label: "Personal property", desc: "Car seats, electronics, tools — with receipts or values." },
        { icon: "🛠", label: "Aftermarket equipment", desc: "Added accessories with receipts can add value." },
        { icon: "🚛", label: "Tow & storage", desc: "Paid directly to the yard; confirm the final bill." },
        { icon: "📦", label: "Items in the car", desc: "The client removes belongings before salvage." }
      ],
      fourPart: {
        corePrinciples: [
          "The vehicle's value isn't the only PD item in a total loss.",
          "Personal property, the rental, towing and storage must be settled before the PD release.",
          "Anything not listed in the release may be waived — list everything first."
        ],
        howTo: [
          "Keep a PD damages list: vehicle, rental, tow, storage, personal property, other items.",
          "Submit receipts for personal property (e.g., the child car seat $289.99).",
          "Confirm the tow yard's final bill and the rental company's final invoice.",
          "Make sure the client removes belongings (and the license plate if the state requires it) before salvage pickup."
        ],
        bestPractices: [
          "Ask the client specifically about car seats, phones, laptops, tools and sports gear.",
          "Match the damages list to the release on Day 5.",
          "Pitfall: the release lists only the vehicle and the car seat claim disappears."
        ],
        discussionCase: "Angela left her child's car seat in the RAV4. How do you claim it, and what proof do you need?"
      },
      trainerCue: "Car seats after a moderate or severe crash: most manufacturers (and safety agencies) say replace."
    },
    { h: "When You Can't Agree: Escalation & Appraisal",
      layout: "PROCESS",
      processSteps: [
        { label: "Supervisor", desc: "Ask for a supervisor review in writing." },
        { label: "Complaint / regulator", desc: "Unreasonable handling may be reported (attorney's call)." },
        { label: "Appraisal clause", desc: "First-party policies: each side hires an appraiser; an umpire decides." },
        { label: "Attorney", desc: "Litigation or other options — the attorney decides." }
      ],
      skill: { tool: "pdTotal4", cms: true },
      fourPart: {
        corePrinciples: [
          "When negotiation stalls, escalate step by step — in writing.",
          "First-party policies usually have an appraisal clause: each side hires an appraiser and an umpire settles differences.",
          "Third-party disputes may end in small claims or a lawsuit — the attorney's decision."
        ],
        howTo: [
          "Request a supervisor review with your audit and the adjuster's responses.",
          "Document every unanswered request and missed deadline.",
          "On a first-party claim, explain the appraisal clause to the attorney as an option.",
          "Escalate to the attorney with a short memo: numbers, gap, what's been tried."
        ],
        bestPractices: [
          "Escalation is a tool, not a threat — use it when the documents support you.",
          "Keep the client informed and mobile (rental) while you escalate.",
          "Pitfall: letting a stalled negotiation drift for weeks without escalation."
        ],
        discussionCase: "After two calls, the adjuster fixes only the fees. When do you escalate, and what goes in your memo?"
      },
      trainerCue: "Launch the Day 4 Skill Builder — Total Loss Valuation & Counter: audit VR-26-18840, pick the true comps, build the counter math, write the counter letter, then negotiate live in the Call Simulator."
    }
  ],
  quickChecks: [
    { afterIndex: 2, q: "The valuation lists 34,812 miles; the odometer photo shows 28,412. You:", opts: ["Send the odometer photo and ask for the valuation to be re-run", "Accept it — close enough", "Lower your counter", "Ask the client to guess"], a: 0, r: "Mileage errors lower value; the odometer photo corrects it." },
    { afterIndex: 6, q: "ACV $31,181.67, tax 8.25%, fees $356. The total is:", opts: ["$31,181.67", "$33,754.16", "$34,110.16", "$34,466.16"], a: 2, r: "$31,181.67 + $2,572.49 + $356.00 = $34,110.16." },
    { afterIndex: 9, q: "The adjuster says, “Take it today or the rental ends.” You:", opts: ["Accept to save the rental", "Hang up", "Tell the client to return the car", "Explain any decision goes through the attorney, argue the offer wasn't fair (wrong vehicle), and request an extension in writing"], a: 3, r: "Time pressure isn't authority — and a wrong offer isn't a fair offer." }
  ],
  quiz: [
    { q: "In a 75% threshold state, a car is a total loss when:", opts: ["Repairs cost more than $10,000", "Repairs reach 75% or more of ACV", "The airbags deploy", "The client asks"], a: 1, r: "Repair cost ÷ ACV ≥ 75%." },
    { q: "Actual cash value is:", opts: ["What the client paid", "What the client owes", "The market value right before the loss", "The repair cost"], a: 2, r: "ACV = pre-loss market value." },
    { q: "A comparable vehicle should match:", opts: ["Year, model, trim, drivetrain, options, similar mileage, local market", "Only the make", "Only the color", "Any SUV"], a: 0, r: "True comparables match the vehicle's value drivers." },
    { q: "A 2022 RAV4 LE FWD used as a comparable for an XLE Premium AWD is:", opts: ["A good comp", "Comparable if cheaper", "Not comparable — lower trim and different drivetrain", "Required"], a: 2, r: "Trim and drivetrain must match." },
    { q: "A “prior damage” deduction for rear bumper scuffs on a rear-end total loss is:", opts: ["Suspect — that may be damage from this crash", "Always valid", "Required by law", "Paid by the client"], a: 0, r: "Deducting the loss's own damage double-counts it." },
    { q: "A condition deduction should be supported by:", opts: ["Nothing", "The adjuster's opinion", "The loan balance", "Inspection notes or photos"], a: 3, r: "Ask for the basis; supply your own photos." },
    { q: "Where the state requires it, a third-party total loss includes:", opts: ["Only ACV", "ACV + sales tax + title/registration fees", "ACV − deductible", "The loan balance"], a: 1, r: "Tax and fees let the owner replace the car." },
    { q: "A deductible is subtracted on:", opts: ["First-party (collision) claims", "Third-party claims", "Both", "Neither"], a: 0, r: "No deductible on a third-party claim." },
    { q: "The lienholder is paid:", opts: ["Last", "Nothing", "First, up to the payoff; the client gets the equity", "By the client"], a: 2, r: "The loan must be paid off to release the title." },
    { q: "The payoff letter's good-through date has passed. You:", opts: ["Send the old amount", "Get an updated payoff or add the per diem", "Skip the lienholder", "Pay the client everything"], a: 1, r: "A short payment won't release the title." },
    { q: "Negative equity means:", opts: ["ACV is higher than the loan", "The car is repairable", "No tax is owed", "The loan is higher than ACV — check for GAP and tell the attorney"], a: 3, r: "GAP covers the gap; without it the client owes the lender." },
    { q: "The best opening in a total-loss negotiation is:", opts: ["“What's your best number?”", "Splitting the difference", "Your documented counter with the key errors and proof", "Threatening a lawsuit"], a: 2, r: "Anchor with documented facts." },
    { q: "Who accepts a settlement?", opts: ["The client, with the attorney's advice", "The PD Specialist", "The adjuster", "The lienholder"], a: 0, r: "You negotiate and explain; the client decides with the attorney." },
    { q: "An appraisal clause is found in:", opts: ["The police report", "First-party auto policies", "The rental contract", "The payoff letter"], a: 1, r: "It resolves first-party value disputes through appraisers and an umpire." },
    { q: "Before the PD release, the damages list must include:", opts: ["Only the vehicle", "Medical bills", "The BI demand", "Vehicle, rental, towing & storage, personal property and any other PD items"], a: 3, r: "Anything not listed may be waived by the release." }
  ],
  discussionQuestion: "Crestline offered $27,221.63 for Angela's RAV4. Walk through every error in the valuation, the three comparables you'd use and the two you'd exclude, your counter total, and what you'd say when Priya Shah says the rental ends Thursday no matter what."
};
