const DAY2 = {
  id: 2,
  title: "Coverage: Reading the Policy & Spotting Coverages",
  theme: "Coverage vs Liability · The Declarations Page · Split Limits & CSL · Liability PD · Collision & Comprehensive · UM/UIM & UMPD · Rental & Towing Coverage · Other Coverages to Spot · The Coverage Verification Call · Liability Decisions · When Damages Exceed the Limits · Choosing the Path",
  objective: "Read any auto declarations page, spot every coverage — on the at-fault policy and the client's own — that can pay part of the loss, verify coverage for the date of loss, respond to each liability decision, recognize when damages exceed the limits, and choose (and document) the right claim path.",
  lessons: [
    { h: "Coverage vs Liability: Two Different Questions",
      layout: "COMPARE",
      compareLeft: { label: "Coverage", items: ["Is there a policy that can pay?", "In force on the date of loss?", "Vehicle listed? Driver covered?", "Which coverages and what limits?", "Any exclusions?"] },
      compareRight: { label: "Liability", items: ["Who caused the crash?", "Accepted, split, denied, or under investigation?", "What evidence decides it?", "Police report, witnesses, photos, statements", "Can change as evidence comes in"] },
      fourPart: {
        corePrinciples: [
          "Coverage asks “is there money to pay?”; liability asks “who is responsible?”",
          "A claim needs both: an accepted liability decision with no coverage pays nothing, and coverage without liability pays nothing on a third-party claim.",
          "Your client's own coverage doesn't need a liability decision — that's why it matters when liability stalls."
        ],
        howTo: [
          "Confirm coverage first: policy in force on the date of loss, vehicle listed, driver covered, limits.",
          "Track liability separately: what the carrier has decided and what evidence it's waiting on.",
          "Give the adjuster the evidence that decides liability (police report, witness, photos).",
          "If either is missing or slow, look at the client's own policy for a faster path."
        ],
        bestPractices: [
          "Write both in the CMS as separate lines: “Coverage: confirmed 09/21” and “Liability: under investigation — decision expected 09/24.”",
          "Ask what the adjuster still needs to decide liability — then supply it.",
          "Pitfall: hearing “we have coverage” and assuming the claim will be paid."
        ],
        discussionCase: "The adjuster confirms the policy is active but says liability is “still under review.” What exactly do you ask for next?"
      },
      trainerCue: "Anchor the two questions. Every coverage problem today is either “no money” or “no decision.”"
    },
    { h: "Reading a Declarations Page",
      layout: "TABLE",
      tableHeaders: ["Section", "What to check"],
      tableRows: [
        ["Named insured & address", "Who owns the policy — compare with the vehicle's owner"],
        ["Policy number & period", "Was it in force on the date of loss?"],
        ["Listed vehicles (with VINs)", "Is the vehicle in the crash on it?"],
        ["Listed / excluded drivers", "Is the driver covered — or excluded?"],
        ["Coverages & limits", "Liability BI/PD, UM/UIM, UMPD, MedPay/PIP, collision, comprehensive, rental, towing"],
        ["Deductibles", "What the client pays on first-party claims"],
        ["Endorsements", "Rental, OEM parts, new car replacement, rideshare, GAP"],
        ["Loss payee / lienholder", "Who must be on a vehicle payment"]
      ],
      fourPart: {
        corePrinciples: [
          "The declarations (dec) page is the one-page summary of an auto policy: who, what, when, and how much.",
          "It doesn't show everything (exclusions live in the policy form), but it answers most day-one questions.",
          "Always read two dec pages: the at-fault driver's and your client's."
        ],
        howTo: [
          "Check the policy period against the date of loss.",
          "Match the vehicle's VIN to the listed vehicles.",
          "Find the driver on the listed drivers — and check for an excluded-driver endorsement.",
          "Read every coverage line and write down the limits and deductibles.",
          "Note the loss payee (lienholder) for any vehicle payment."
        ],
        bestPractices: [
          "Read the client's dec page even when the at-fault carrier looks solid — it's your backup plan.",
          "Keep a coverage summary in the CMS so no one has to re-read the dec pages.",
          "Pitfall: reading only the liability limits and missing the client's rental reimbursement."
        ],
        discussionCase: "What on a dec page tells you the at-fault driver might not be covered, even though the car is?"
      },
      trainerCue: "Put the two Angela Carter dec pages on screen (📁 Documents) and walk the eight sections on each."
    },
    { h: "Split Limits & CSL: Reading 25/50/50",
      layout: "TABLE",
      tableHeaders: ["Notation", "Means"],
      tableRows: [
        ["25 / 50 / 50", "$25,000 BI per person · $50,000 BI per accident · $50,000 PD per accident"],
        ["100 / 300 / 100", "$100,000 BI per person · $300,000 BI per accident · $100,000 PD per accident"],
        ["$500,000 CSL", "One combined single limit for all BI and PD from the accident"],
        ["PD limit", "The most the policy pays for ALL property damage from the crash — every claimant shares it"]
      ],
      fourPart: {
        corePrinciples: [
          "Split limits are written BI per person / BI per accident / PD per accident.",
          "The PD limit is per accident: if several cars were damaged, all the owners share one PD limit.",
          "A combined single limit (CSL) is one pot for BI and PD together."
        ],
        howTo: [
          "Read the three numbers in order: BI per person, BI per accident, PD per accident.",
          "Ask the adjuster how many claimants there are on the PD limit.",
          "Estimate the PD exposure (vehicle + rental + towing/storage + personal property) and compare it to the limit.",
          "Flag low BI limits to the BI Case Manager — the client's UIM may be needed."
        ],
        bestPractices: [
          "On multi-car crashes, move fast — some carriers pay claims as they're settled until the limit runs out.",
          "Note limits in the CMS coverage summary with the source (dec page or adjuster, date).",
          "Pitfall: assuming the PD limit covers your client alone."
        ],
        discussionCase: "Crestline's limits are 25/50/50. Angela's RAV4 is likely worth about $30,000. Is the PD limit enough? What about the BI limit?"
      },
      trainerCue: "Use Angela's file: PD $50,000 is enough for this loss; BI $25,000 per person is low — that's a flag for Rachel Owens (BI) because Angela has UIM $50,000."
    },
    { h: "Liability Property Damage Coverage (Third-Party)",
      layout: "ICONLIST",
      icons: [
        { icon: "🔧", label: "Repairs or ACV", desc: "Reasonable repair cost, or actual cash value if it's a total loss." },
        { icon: "🚙", label: "Rental / loss of use", desc: "A like-kind rental for a reasonable repair or settlement period." },
        { icon: "🚛", label: "Towing & storage", desc: "Reasonable tow and storage charges." },
        { icon: "🧸", label: "Personal property", desc: "Items damaged in the car (car seats, phones, tools)." },
        { icon: "📉", label: "Diminished value", desc: "Lost market value after repairs (where the state allows)." },
        { icon: "🧾", label: "Tax, title & fees", desc: "On a total loss, where the state requires it." }
      ],
      fourPart: {
        corePrinciples: [
          "Liability PD coverage pays the damage the insured caused to other people's property — up to the PD limit.",
          "It pays with no deductible for the claimant, but only after liability is accepted (and only the accepted percentage if it's split).",
          "It covers more than the car: rental or loss of use, towing and storage, personal property, and in many states diminished value."
        ],
        howTo: [
          "List every loss item on the PD claim — not just the vehicle.",
          "Ask the adjuster how they handle rental (direct bill, daily rate, like-kind class).",
          "Submit receipts for towing, storage and personal property.",
          "Raise diminished value on a repaired late-model car (where allowed)."
        ],
        bestPractices: [
          "Keep a running PD damages list in the CMS with the proof for each item.",
          "Ask for payments to go directly to vendors (tow yard, shop, rental company) where possible.",
          "Pitfall: forgetting the child car seat — most manufacturers say replace it after a moderate or severe crash."
        ],
        discussionCase: "Which of Angela's losses fall under Crestline's PD coverage once liability is accepted?"
      },
      trainerCue: "Build the PD damages list together: vehicle, rental, tow, storage, car seat. That list is what the release must cover on Day 5."
    },
    { h: "Collision & Comprehensive (First-Party)",
      layout: "COMPARE",
      compareLeft: { label: "Collision", items: ["Crash with a vehicle or object", "Pays repairs or ACV", "Client pays the deductible", "No liability decision needed", "Carrier subrogates against the at-fault party"] },
      compareRight: { label: "Comprehensive", items: ["Theft, fire, flood, hail, glass, animals, vandalism", "Pays repairs or ACV", "Separate (often lower) deductible", "Not for crashes with other cars", "Sometimes called “other than collision”"] },
      fourPart: {
        corePrinciples: [
          "Collision and comprehensive are the client's own coverages for damage to the client's own car.",
          "They pay regardless of fault, minus the deductible — and the client's carrier recovers from the at-fault carrier (subrogation).",
          "They are optional (often required by the lender) — check the dec page; not every client has them."
        ],
        howTo: [
          "Check the client's dec page for collision and its deductible.",
          "Use collision when liability is denied or delayed, the at-fault driver is uninsured, or the at-fault limits are too low.",
          "Explain the deductible to the client and how it's usually reimbursed after subrogation.",
          "Tell the at-fault carrier when a first-party claim is opened so payments aren't duplicated."
        ],
        bestPractices: [
          "Ask the client's carrier about a collision deductible waiver when the other driver is identified and at fault.",
          "Coordinate the two carriers in writing — one pays, the other reimburses.",
          "Pitfall: filing under comprehensive for a two-car crash (that's collision)."
        ],
        discussionCase: "Liability is denied because the other driver says your client ran the light. The client has collision with a $500 deductible. What's the plan?"
      },
      trainerCue: "Angela has collision ($500 deductible) — it's the backup plan if Crestline had denied liability."
    },
    { h: "UM/UIM & Uninsured Motorist Property Damage (UMPD)",
      layout: "QUADRANT",
      quadrants: [
        { label: "UM (BI)", desc: "Client's injuries when the at-fault driver has no insurance. → BI team." },
        { label: "UIM (BI)", desc: "Client's injuries when the at-fault BI limits are too low. → BI team." },
        { label: "UMPD", desc: "Client's car when the at-fault driver is uninsured (and in some states, unidentified). Has its own limit and deductible." },
        { label: "Not UMPD", desc: "When the at-fault driver IS insured — use their PD coverage (or collision)." }
      ],
      fourPart: {
        corePrinciples: [
          "Uninsured/underinsured motorist coverage protects the client when the at-fault driver can't pay.",
          "UM/UIM BI is for injuries (BI team); UMPD is for the vehicle — often a small limit (e.g., $3,500) with a deductible.",
          "Rules vary by state and policy: some UMPD covers hit-and-run only with physical contact or an identified vehicle."
        ],
        howTo: [
          "When the at-fault driver is uninsured, check the client's UMPD and collision.",
          "For a hit-and-run, read the policy's conditions (police report within a time limit, physical contact).",
          "Compare UMPD (limit + deductible) with collision (ACV − deductible) and choose the better path — often collision for a high-value car.",
          "Send UM/UIM BI questions to the BI Case Manager the same day."
        ],
        bestPractices: [
          "Low at-fault BI limits are a UIM signal — tell the BI team even though it's “not PD.”",
          "Report hit-and-runs to the police and the client's carrier promptly — late notice can void UM coverage.",
          "Pitfall: opening a UMPD claim when the at-fault driver is insured."
        ],
        discussionCase: "Angela's policy has UMPD $3,500 and UIM BI $50,000/$100,000. Crestline is insured with BI $25,000. Which of these matter on her file, and who handles each?"
      },
      trainerCue: "UMPD is a distractor on Angela's file (Kevin is insured). UIM BI is NOT a distractor — it's the BI team's biggest coverage lead."
    },
    { h: "Rental Reimbursement & Towing / Labor",
      layout: "TABLE",
      tableHeaders: ["Coverage", "Typical terms", "Angela's policy"],
      tableRows: [
        ["Rental reimbursement", "$X per day up to a maximum (e.g., $30/$900, $40/$1,200)", "$40 per day, $1,200 max"],
        ["Towing & labor", "Per disablement, small limit", "$100 per disablement"],
        ["Third-party rental", "Like-kind vehicle, reasonable period, direct bill", "Crestline: $45/day after liability accepted"],
        ["What's not covered", "Upgrades, fuel, damage waivers, extra days", "Client pays"]
      ],
      fourPart: {
        corePrinciples: [
          "Rental reimbursement on the client's own policy pays a daily amount up to a maximum — it only applies with a covered first-party loss (collision or comprehensive claim).",
          "The at-fault carrier's PD coverage pays a like-kind rental for a reasonable time once liability is accepted.",
          "Towing & labor is usually a small per-disablement limit — useful when liability is undecided."
        ],
        howTo: [
          "Spot the rental coverage on the client's dec page (clients often don't know they have it).",
          "If liability is pending, open the first-party claim to use it; switch to the at-fault carrier once liability is accepted.",
          "Confirm the daily rate, the maximum and the vehicle class before the client picks up the car.",
          "Tell the client what they'll pay themselves (upgrade difference, fuel, damage waiver, extra days)."
        ],
        bestPractices: [
          "Ask the rental company to direct-bill the carrier — the client shouldn't front the money.",
          "Calendar the rental end date and the day the coverage maximum runs out.",
          "Pitfall: letting the client rent a luxury SUV “because the other guy is paying.”"
        ],
        discussionCase: "Angela's coverage is $40/day; the midsize SUV costs $52/day. What does she pay, and how could you avoid it?"
      },
      trainerCue: "Preview Day 3 (rental setup). Today the skill is spotting the coverage; tomorrow is setting it up."
    },
    { h: "Other Coverages to Spot",
      layout: "ICONLIST",
      icons: [
        { icon: "🩺", label: "MedPay / PIP", desc: "Medical bills regardless of fault → flag to the BI team." },
        { icon: "💳", label: "Loan/Lease Payoff (GAP)", desc: "Pays the gap when the loan is more than ACV." },
        { icon: "✨", label: "New car replacement", desc: "Replaces a new car instead of paying ACV (first party)." },
        { icon: "🔩", label: "OEM parts endorsement", desc: "Requires original-manufacturer parts on repairs." },
        { icon: "🚕", label: "Rideshare / business use", desc: "Personal policies may exclude it; other coverage layers apply." },
        { icon: "☂️", label: "Umbrella / excess", desc: "Extra liability above the auto limits — ask when damages are high." },
        { icon: "🏢", label: "Commercial auto", desc: "Company vehicles: higher limits, different adjusters and rules." }
      ],
      fourPart: {
        corePrinciples: [
          "Spotting coverage means reading every line — and asking about what isn't on the page.",
          "Some coverages belong to other teams (MedPay/PIP → BI) but you still spot and route them.",
          "Endorsements can change the value of the claim: OEM parts, new car replacement, GAP."
        ],
        howTo: [
          "Read every coverage line on both dec pages and list what could apply.",
          "Ask the client: “Did you buy GAP when you bought the car?” (it may be on the loan, not the policy).",
          "Ask the at-fault carrier about umbrella or excess coverage when damages approach the limits.",
          "Ask whether the at-fault driver was working (commercial, delivery, rideshare) at the time."
        ],
        bestPractices: [
          "Write a coverage summary: every coverage, its limit, whether it applies, and who handles it.",
          "When in doubt, list it and let the attorney rule it out.",
          "Pitfall: missing GAP on a new car with negative equity — the client ends up owing the lender."
        ],
        discussionCase: "Angela has no GAP and owes $19,850. If her car is worth $30,000, does GAP matter? What if it were worth $17,000?"
      },
      trainerCue: "Angela has equity, so GAP doesn't matter here — but ask about it on every total loss."
    },
    { h: "The Coverage Verification Call",
      layout: "PROCESS",
      processSteps: [
        { label: "Policy in force?", desc: "On the date of loss — not just today." },
        { label: "Vehicle listed?", desc: "Match the VIN." },
        { label: "Driver covered?", desc: "Listed, permissive, or excluded?" },
        { label: "Limits & claimants", desc: "PD limit and how many claimants share it." },
        { label: "Reservations?", desc: "Any reservation of rights or coverage question?" },
        { label: "In writing", desc: "Ask for written confirmation; note the date and the person." }
      ],
      skill: { tool: "pdCoverage2", cms: true },
      fourPart: {
        corePrinciples: [
          "Coverage verification confirms the policy will actually respond to THIS loss.",
          "A reservation of rights means the carrier is investigating a coverage problem — escalate it.",
          "Many carriers won't disclose limits by phone without the insured's consent or a written request — know what to ask for."
        ],
        howTo: [
          "Ask: was the policy in force on the date of loss (effective and expiration dates)?",
          "Ask: is the vehicle listed, and is the driver a listed driver, permissive user or excluded?",
          "Ask: what is the PD limit, and are there other claimants on it?",
          "Ask: is there any reservation of rights or coverage investigation?",
          "Ask for written confirmation and note who told you, and when."
        ],
        bestPractices: [
          "Ask the same questions of the client's carrier — confirm the client's own coverages too.",
          "Record answers word for word in the CMS note.",
          "Pitfall: accepting “yes, there's coverage” without the date of loss in the question."
        ],
        discussionCase: "The adjuster says, “There's coverage, but we're reviewing whether Kevin had permission to drive.” What does that mean, and who needs to know?"
      },
      trainerCue: "Practice it in the Call Simulator's Coverage & Liability line (PD pack), then complete the Coverage Spotter Skill Builder."
    },
    { h: "Liability Decisions: Accepted, Split, Denied, Under Investigation",
      layout: "QUADRANT",
      quadrants: [
        { label: "Accepted 100%", desc: "Third-party pays all covered PD. Move fast: rental, inspection, payment." },
        { label: "Split (e.g., 80/20)", desc: "They pay their %. Consider collision for 100% − deductible; escalate the split." },
        { label: "Denied", desc: "Get the reason in writing; use the client's collision; send evidence; escalate to the attorney." },
        { label: "Under investigation", desc: "Supply the evidence; set a decision date; use first-party coverage meanwhile." }
      ],
      fourPart: {
        corePrinciples: [
          "The liability decision controls the third-party claim: what's paid and when.",
          "A split decision reduces every third-party payment by the client's percentage.",
          "A denial or a stall is a reason to use the client's own coverage — not to wait."
        ],
        howTo: [
          "Ask for the decision and the reason — in writing.",
          "Accepted: set up rental and inspection with the carrier immediately.",
          "Split or denied: send the evidence (police report, citation, witness, photos) and escalate to the attorney.",
          "Under investigation: ask what's missing and when they'll decide; calendar it; use first-party coverage.",
          "Tell the client what the decision means in plain words."
        ],
        bestPractices: [
          "Never argue fault percentages yourself beyond presenting the evidence — splits go to the attorney.",
          "Independent witnesses and citations move liability decisions; send them early.",
          "Pitfall: letting “under investigation” go two weeks with no decision date."
        ],
        discussionCase: "Kevin tells Crestline that Angela “stopped short on a yellow.” The police report says she was stopped at the red. What do you send, and what do you ask?"
      },
      trainerCue: "Angela's timeline: under investigation 09/21 → accepted 100% on 09/24 after the police report and Tom Nguyen's witness statement."
    },
    { h: "When Damages Exceed the Limits",
      layout: "THREEBOX",
      boxes: [
        { label: "Spot it", desc: "Add up the PD exposure and compare it with the PD limit and the number of claimants." },
        { label: "Use the client's coverage", desc: "Collision for the vehicle (then subrogation); the client's rental coverage." },
        { label: "Escalate", desc: "The attorney decides on excess/umbrella, the at-fault's personal assets, and priority among claimants." }
      ],
      fourPart: {
        corePrinciples: [
          "The PD limit is the most the at-fault policy will pay for all property damage in the crash.",
          "When damages exceed it, the client's own collision coverage usually pays the vehicle (minus the deductible), and the attorney decides what to do about the rest.",
          "Multiple claimants on one limit is a race — speed and documentation matter."
        ],
        howTo: [
          "Total the PD exposure: vehicle (ACV + tax + fees), rental, towing & storage, personal property.",
          "Compare it with the PD limit; ask the adjuster about other claimants.",
          "Recommend the first-party path for the vehicle when the limit won't cover it.",
          "Ask about umbrella or excess coverage.",
          "Escalate to the attorney with the numbers — the attorney handles any claim beyond the limits."
        ],
        bestPractices: [
          "Write the math in the escalation: exposure, limit, shortfall, and the client's coverages.",
          "Never promise the client the excess will be recovered.",
          "Pitfall: settling your client's PD for the full limit when other claimants have claims — that's the attorney's call."
        ],
        discussionCase: "PD limit $25,000; three cars damaged; your client's car alone is worth $34,000. What do you do today?"
      },
      trainerCue: "Angela's file doesn't exceed the limit ($50,000) — the Coverage Spotter's “what if” scenarios practice the cases that do."
    },
    { h: "Choosing the Path: Third-Party, First-Party or Both",
      layout: "TABLE",
      tableHeaders: ["Situation", "Best path"],
      tableRows: [
        ["Liability accepted 100%, enough limits", "Third-party claim (no deductible)"],
        ["Liability under investigation, client needs a car", "First-party rental now; third-party once accepted"],
        ["Liability denied or split", "Client's collision (deductible), evidence to the adjuster, escalate to the attorney"],
        ["At-fault uninsured", "Client's UMPD or collision (compare limit/deductible vs ACV)"],
        ["Hit-and-run", "UMPD (if the policy covers it) or collision; police report required"],
        ["Damages exceed the PD limit", "Collision for the vehicle; attorney decides on the excess"]
      ],
      fourPart: {
        corePrinciples: [
          "There is no single right path — the right path depends on liability, limits and the client's coverages.",
          "Speed, certainty and cost (the deductible) are the trade-offs.",
          "Whatever you choose, write down why."
        ],
        howTo: [
          "List the client's options from both dec pages.",
          "Match the situation to the path (table).",
          "Explain the trade-off to the client in plain words (deductible vs waiting).",
          "Document the decision and the reason in the CMS; tell both carriers what you're doing."
        ],
        bestPractices: [
          "Revisit the path when facts change (liability accepted, total loss declared).",
          "Coordinate so no loss is paid twice and nothing falls between the carriers.",
          "Pitfall: choosing first-party without telling the client about the deductible."
        ],
        discussionCase: "Angela's file on 09/21: liability under investigation, she needs a car, she has rental coverage. On 09/24: liability accepted. What path on each date?"
      },
      trainerCue: "Walk the table against Angela's timeline — first-party rental 09/21–09/23, third-party from 09/24."
    },
    { h: "Coverage Red Flags",
      layout: "ICONLIST",
      icons: [
        { icon: "📅", label: "Lapse or cancellation", desc: "Non-payment or an expired term on the date of loss." },
        { icon: "🚫", label: "Excluded driver", desc: "Named exclusion for the person driving." },
        { icon: "🚗", label: "Vehicle not listed", desc: "A newly bought or borrowed car may not be on the policy." },
        { icon: "💼", label: "Business-use exclusion", desc: "Delivery or rideshare use on a personal policy." },
        { icon: "⏰", label: "Late notice", desc: "The insured didn't report the crash promptly." },
        { icon: "📝", label: "Reservation of rights", desc: "The carrier is investigating whether it has to pay." }
      ],
      skill: { tool: "pdCoverage2", cms: true },
      fourPart: {
        corePrinciples: [
          "A coverage red flag means the at-fault policy might not pay — even if the driver was clearly at fault.",
          "The earlier you spot it, the sooner the client's own coverage can take over.",
          "Coverage disputes are legal questions — you spot, document and escalate."
        ],
        howTo: [
          "Check each red flag on every file during the coverage verification call.",
          "Ask for any coverage position (denial or reservation of rights) in writing.",
          "Move the vehicle and rental to the client's own coverage when coverage is in doubt.",
          "Escalate to the attorney with the dec pages and the carrier's letter."
        ],
        bestPractices: [
          "A reservation-of-rights letter goes to the attorney the day it arrives.",
          "Keep the client's options open — don't let first-party deadlines pass while the dispute runs.",
          "Pitfall: telling the client “they're denying it” without the written reason."
        ],
        discussionCase: "Which red flag was on Angela's file, how was it resolved, and what would you have done if Crestline had said the policy lapsed?"
      },
      trainerCue: "Launch the Day 2 Skill Builder — Coverage Spotter. Trainees sort every loss item to the coverage that pays, verify the dec pages, work five what-if scenarios and write the coverage memo."
    }
  ],
  quickChecks: [
    { afterIndex: 2, q: "A policy reads 25/50/50. The property damage limit is:", opts: ["$25,000 per person", "$50,000 per accident for all property damage", "$50,000 per person", "$25,000 per vehicle"], a: 1, r: "The third number is the PD limit per accident, shared by all property claimants." },
    { afterIndex: 5, q: "The at-fault driver is insured. UMPD on your client's policy:", opts: ["Pays first", "Pays the deductible", "Pays the rental", "Does not apply — use the at-fault PD coverage (or collision)"], a: 3, r: "UMPD is for uninsured (and sometimes unidentified) drivers." },
    { afterIndex: 9, q: "Liability is split 80/20 against the other driver. Their PD coverage pays:", opts: ["100% of the damages", "Nothing", "80% of the damages", "20% of the damages"], a: 2, r: "They pay their insured's share; collision can pay 100% minus the deductible, then subrogate." }
  ],
  quiz: [
    { q: "“Coverage” answers:", opts: ["Whether a policy can pay for this loss", "Who caused the crash", "What the car is worth", "How long the rental lasts"], a: 0, r: "Coverage = is there money; liability = who's responsible." },
    { q: "The first thing to check on the at-fault dec page is:", opts: ["The agent's name", "Whether the policy period covers the date of loss", "The comprehensive deductible", "The color of the car"], a: 1, r: "A policy not in force on the date of loss doesn't respond." },
    { q: "In 100/300/100, the per-person BI limit is:", opts: ["$100,000", "$200,000", "$300,000", "$400,000"], a: 0, r: "BI per person / BI per accident / PD per accident." },
    { q: "Which does third-party liability PD coverage NOT usually pay?", opts: ["The client's medical bills", "Reasonable rental", "Towing and storage", "Personal property in the car"], a: 0, r: "Medical bills belong to the BI claim (and MedPay/PIP)." },
    { q: "Collision coverage pays:", opts: ["Only if the other driver accepts fault", "For the other driver's car", "For the client's car regardless of fault, minus the deductible", "Pain and suffering"], a: 2, r: "It's first-party coverage for the client's own car." },
    { q: "Hail damage to a parked car falls under:", opts: ["Collision", "Liability PD", "UMPD", "Comprehensive"], a: 3, r: "Comprehensive = other than collision (weather, theft, fire, glass, animals)." },
    { q: "Rental reimbursement on the client's policy usually requires:", opts: ["An accepted third-party claim", "A covered first-party loss (collision or comprehensive claim)", "A police report only", "The attorney's signature"], a: 1, r: "It's an add-on to a covered first-party claim." },
    { q: "The client's MedPay coverage is:", opts: ["Used for the rental", "Ignored by PD", "Spotted and flagged to the BI Case Manager", "Paid to the tow yard"], a: 2, r: "MedPay/PIP are medical coverages — BI team." },
    { q: "Low at-fault BI limits and client UIM coverage mean:", opts: ["Flag to the BI Case Manager — UIM may be needed", "Nothing for PD", "Use UIM for the car", "Close the file"], a: 0, r: "UIM is a BI coverage; you spot it and route it." },
    { q: "A reservation-of-rights letter means:", opts: ["The claim is paid", "The client must pay the deductible", "The carrier is investigating whether it must pay — escalate to the attorney", "The rental is extended"], a: 2, r: "It's a coverage warning; send it to the attorney." },
    { q: "Three cars were damaged and the PD limit is $25,000. This means:", opts: ["All three owners share $25,000", "Each car gets $25,000", "Only your client is covered", "The limit doubles"], a: 0, r: "The PD limit is per accident." },
    { q: "Liability is denied. The client has collision. The best next step is:", opts: ["Wait for the adjuster to change their mind", "Tell the client there's nothing to do", "Sue the carrier yourself", "Get the denial in writing, open the collision claim, send the evidence, escalate to the attorney"], a: 3, r: "Keep the client moving on their own coverage while the dispute is escalated." },
    { q: "GAP coverage matters when:", opts: ["The car is repairable", "The loan balance is more than the ACV", "Liability is split", "The client has rental coverage"], a: 1, r: "GAP pays the difference between ACV and the payoff." },
    { q: "The at-fault driver was delivering food at the time. You should:", opts: ["Flag it — a business-use exclusion or a commercial policy may apply", "Ignore it", "Use UMPD", "Close the claim"], a: 0, r: "Business use changes which coverage applies." },
    { q: "Coverage verification is complete when:", opts: ["The adjuster says “there's coverage”", "The client is happy", "You've confirmed the date of loss, vehicle, driver, limits and any reservation — and documented who told you", "The car is repaired"], a: 2, r: "Verify every element, for this date of loss, in writing." }
  ],
  discussionQuestion: "Angela Carter has two dec pages in the file. List every coverage on both that could pay part of her loss, the ones that don't apply and why, and the two coverage facts you must send to the BI Case Manager today."
};
