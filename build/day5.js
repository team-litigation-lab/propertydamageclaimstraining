const DAY5 = {
  id: 5,
  title: "Releases, Payment, Subrogation & Closing the PD Claim",
  theme: "The PD Settlement Package · The PD-Only Release · Release Red Flags · Routing the Payment · Two-Party Checks · Title & Salvage · Deductible Recovery & Subrogation · Closing the PD File · Handoff to the BI Team · Difficult Files · What Goes to the Attorney · PD KPIs",
  objective: "Assemble the full PD settlement, review every release so it covers property damage only, route payments to the lienholder, the client and the vendors correctly, support subrogation and deductible recovery, close the file cleanly with a handoff to the BI team — and know how to handle the difficult files and what must go to the attorney.",
  lessons: [
    { h: "The PD Settlement Package",
      layout: "ICONLIST",
      icons: [
        { icon: "🚗", label: "Vehicle", desc: "Repairs paid to the shop, or ACV + tax + fees in a total loss." },
        { icon: "🚙", label: "Rental / loss of use", desc: "Direct-billed rental days, or a loss-of-use payment." },
        { icon: "🚛", label: "Tow & storage", desc: "Final invoices paid to the yard." },
        { icon: "🧸", label: "Personal property", desc: "Items damaged in the car." },
        { icon: "📉", label: "Diminished value", desc: "Repaired cars only, where allowed." },
        { icon: "💵", label: "Deductible", desc: "If collision was used — recovered by subrogation." }
      ],
      fourPart: {
        corePrinciples: [
          "A PD settlement is more than the vehicle check: it's every property item from the crash.",
          "Some items are paid to vendors directly (shop, tow yard, rental company); others to the client or the lienholder.",
          "The release must match the package — anything left off may be waived."
        ],
        howTo: [
          "Update the PD damages list with the agreed amount for each item.",
          "Confirm how each item is paid (direct to vendor, lienholder, client).",
          "Confirm final invoices from the tow yard and rental company.",
          "Compare the package to the release before anything is signed."
        ],
        bestPractices: [
          "Send the adjuster a one-page settlement summary and ask them to confirm it in writing.",
          "Keep the BI claim completely out of the PD package.",
          "Pitfall: settling the vehicle and forgetting the personal property."
        ],
        discussionCase: "List every item in Angela's PD settlement, the amount, and who is paid."
      },
      trainerCue: "Angela: vehicle $33,534.63 (payoff + equity), tow/storage $715 (A-1), rental $675 (Metro Car Rental), car seat $289.99, Harbor Point $120 by subrogation."
    },
    { h: "The PD Release: Property Damage Only",
      layout: "COMPARE",
      compareLeft: { label: "✅ PD-only release", items: ["Titled “Property Damage Release”", "Releases only the listed property damage claims", "States that bodily injury claims are NOT released", "Lists the vehicle and the amount", "Signed by the owner (and lienholder if required)"] },
      compareRight: { label: "⛔ Release of All Claims", items: ["Releases “any and all claims”", "Includes bodily injury, known or unknown", "Can end the injury case", "Sometimes adds indemnity or confidentiality", "Never for a PD payment"] },
      fourPart: {
        corePrinciples: [
          "The PD release must release property damage only — never bodily injury.",
          "Carriers sometimes send a general “Release of All Claims” form for a PD payment — it can waive the client's injury claim.",
          "The attorney reviews every release before the client signs."
        ],
        howTo: [
          "Read the title and the release language line by line.",
          "Confirm it names only the property damage claims (vehicle, rental, tow/storage, personal property).",
          "Confirm it states bodily injury claims are excluded.",
          "Mark up anything that goes beyond PD and send it to the attorney.",
          "Only send the approved release to the client for signature — with a plain-language explanation."
        ],
        bestPractices: [
          "Ask carriers for their PD-only release form up front.",
          "Tell the BI Case Manager when a PD release is signed.",
          "Pitfall: “It's just the car release” — then the injury claim is gone."
        ],
        discussionCase: "Crestline sends a “Release of All Claims” with the $33,534.63 check request. What exactly do you do?"
      },
      trainerCue: "This is the single most important PD control. The Day 5 Skill Builder has Crestline's release to mark up."
    },
    { h: "Release Red Flags",
      layout: "TABLE",
      tableHeaders: ["Clause", "Action"],
      tableRows: [
        ["“Release of All Claims” / “any and all claims”", "Strike — replace with a PD-only release"],
        ["Bodily injury, medical, “known or unknown injuries”", "Strike — escalate to the attorney"],
        ["Indemnify / hold harmless", "Escalate — the attorney decides"],
        ["Confidentiality", "Escalate — unusual in a PD release"],
        ["Amount or items don't match the agreement", "Revise — every PD item and amount must match"],
        ["Single two-party check for everything", "Revise — pay the lienholder and the client separately"],
        ["Wrong names, VIN or date of loss", "Revise — must match the file exactly"]
      ],
      fourPart: {
        corePrinciples: [
          "Release problems fall into three groups: scope (what's released), terms (indemnity, confidentiality) and accuracy (names, VIN, amounts).",
          "Scope problems are the most dangerous — they can release injury claims.",
          "You spot and mark up; the attorney approves."
        ],
        howTo: [
          "Read the release against the settlement summary and the file.",
          "Mark every clause: OK, revise, strike, or escalate.",
          "Send the markup to the attorney with a short cover note.",
          "Send the approved version back to the adjuster in writing."
        ],
        bestPractices: [
          "Check the VIN, names and date of loss letter by letter.",
          "Keep the carrier's original and the approved version in the CMS.",
          "Pitfall: sending the client a release with a wrong VIN — the title transfer fails."
        ],
        discussionCase: "The release lists the vehicle for $33,534.63 but not the car seat. What's the risk, and what's your fix?"
      },
      trainerCue: "Seven red flags; Crestline's draft has five of them."
    },
    { h: "Routing the Payment",
      layout: "PROCESS",
      processSteps: [
        { label: "Lienholder", desc: "Updated payoff paid directly — releases the title." },
        { label: "Client", desc: "Vehicle equity + personal property." },
        { label: "Vendors", desc: "Shop, tow yard and rental company paid directly." },
        { label: "Client's carrier", desc: "Recovers its payments by subrogation." },
        { label: "Confirm", desc: "Everyone received what they're owed — in writing." }
      ],
      fourPart: {
        corePrinciples: [
          "Each dollar goes to the right payee: the lienholder first, then the client; vendors directly.",
          "Follow the firm's policy on whether PD funds pass through the firm's trust account or go directly to the client.",
          "Confirm every payment landed before you close."
        ],
        howTo: [
          "Get an updated payoff for the payment date (good-through date + per diem).",
          "Ask the carrier to issue: payoff to the lienholder; the balance to the client (or per firm policy); vendor bills directly.",
          "Confirm the payment addresses and payee names in writing.",
          "Confirm receipt with the lienholder, the client and each vendor."
        ],
        bestPractices: [
          "Put the payment breakdown in writing to the client before the checks go out.",
          "Ask the lienholder for the lien-release/title confirmation.",
          "Pitfall: one two-party check to the client and the lienholder — it stalls for weeks."
        ],
        discussionCase: "Settlement $33,534.63; payoff on 10/20 is $19,865.92; car seat $289.99. What does Angela receive in total?"
      },
      trainerCue: "Equity $13,668.71 + car seat $289.99 = $13,958.70. The lienholder receives $19,865.92."
    },
    { h: "Two-Party Checks & Firm Policy",
      layout: "THREEBOX",
      boxes: [
        { label: "Two-party checks", desc: "Both payees must endorse — plan who signs first and how the check travels." },
        { label: "Firm trust account", desc: "If PD funds come through the firm, trust-account rules apply — no commingling." },
        { label: "Written instructions", desc: "Payee names, amounts and addresses confirmed in writing before issue." }
      ],
      fourPart: {
        corePrinciples: [
          "A two-party check needs both payees' endorsements — common for repairs (owner + shop) and total losses (owner + lienholder).",
          "Some firms route PD payments through the trust account; others have the carrier pay the client directly — follow firm policy.",
          "Funds in trust follow strict rules: deposit, clear, disburse with records."
        ],
        howTo: [
          "Ask the carrier to split payments by payee where possible to avoid two-party checks.",
          "When a two-party check is unavoidable, arrange the endorsement route in advance.",
          "Follow the firm's trust procedures if funds come through the firm.",
          "Document every check: number, amount, payees, date received, date disbursed."
        ],
        bestPractices: [
          "Never hold client funds longer than needed; never pay firm expenses from them.",
          "Keep copies of every check and endorsement in the CMS.",
          "Pitfall: a two-party check mailed to the client who can't reach the lienholder to endorse it."
        ],
        discussionCase: "Crestline insists on one check payable to Angela and Riverbank Auto Finance. How do you make that work fast?"
      },
      trainerCue: "Firm policy varies — trainees should know the rule at their firm and document every check."
    },
    { h: "Title & Salvage Paperwork",
      layout: "PROCESS",
      processSteps: [
        { label: "Lien release", desc: "The lienholder sends the title (or e-title release) to the carrier after payoff." },
        { label: "Owner signs", desc: "Title assignment or power of attorney; odometer statement." },
        { label: "Keys & plates", desc: "Keys to the carrier; plates removed if the state requires." },
        { label: "Salvage pickup", desc: "The carrier moves the car to salvage — personal items out first." }
      ],
      fourPart: {
        corePrinciples: [
          "In a total loss, the carrier pays the value and takes the vehicle (and title) — it becomes salvage.",
          "The lienholder releases the title after payoff; the owner signs the documents the carrier needs.",
          "An owner can sometimes keep the car (owner-retained salvage) for a reduced payment — attorney and client decision."
        ],
        howTo: [
          "Ask the carrier for its title packet (title assignment, power of attorney, odometer statement).",
          "Send the packet to the client with instructions; return it promptly.",
          "Confirm the lienholder has what it needs to release the title.",
          "Confirm the salvage pickup date and that the client's belongings are out."
        ],
        bestPractices: [
          "Check names and the VIN on every title document before the client signs.",
          "Remind the client to cancel or move the car's insurance and registration after the transfer (her agent can help).",
          "Pitfall: the payment is held because one title form is missing a signature."
        ],
        discussionCase: "Angela asks whether she can keep the RAV4 and fix it herself. What do you tell her, and who decides?"
      },
      trainerCue: "Owner-retained salvage changes the payment and the title (salvage brand) — attorney and client decide."
    },
    { h: "Deductible Recovery & Subrogation",
      layout: "PROCESS",
      processSteps: [
        { label: "Client's carrier pays", desc: "Collision (minus deductible) or rental coverage." },
        { label: "Subrogation demand", desc: "The client's carrier demands repayment from the at-fault carrier." },
        { label: "Arbitration (if needed)", desc: "Carriers resolve disputes through inter-company arbitration." },
        { label: "Deductible reimbursed", desc: "The client gets the deductible back (in full or pro rata)." }
      ],
      fourPart: {
        corePrinciples: [
          "When the client's own carrier pays (collision, rental), it recovers that money from the at-fault carrier — subrogation.",
          "The client's deductible is usually included in the subrogation demand and reimbursed when it's recovered.",
          "If liability is split, the deductible may be reimbursed pro rata (the at-fault share)."
        ],
        howTo: [
          "Tell the client's carrier when the at-fault carrier accepts liability.",
          "Ask the client's carrier to include the deductible in its subrogation demand.",
          "Or claim the deductible directly from the at-fault carrier on the third-party claim (don't double-recover).",
          "Track the subrogation status and confirm the client is reimbursed."
        ],
        bestPractices: [
          "Put the deductible on the PD damages list until it's reimbursed.",
          "Get subrogation updates in writing; calendar a 30-day follow-up.",
          "Pitfall: closing the file before the client's deductible comes back."
        ],
        discussionCase: "Harbor Point paid Angela's rental for 3 days ($120). How does Harbor Point get it back, and does Angela owe anything?"
      },
      trainerCue: "Angela used Harbor Point only for rental — no deductible. Harbor Point subrogates the $120 from Crestline."
    },
    { h: "Closing the PD File",
      layout: "TABLE",
      tableHeaders: ["Before you close", "Proof in the CMS"],
      tableRows: [
        ["Lienholder paid and title released", "Payoff confirmation / lien release"],
        ["Client received her funds", "Client confirmation"],
        ["Vendors paid (shop, tow yard, rental)", "Final invoices marked paid"],
        ["Rental returned and final bill reconciled", "Rental closing invoice"],
        ["Client's carrier notified; subrogation / deductible handled", "Letter or note"],
        ["PD-only release signed and approved", "Signed release + attorney approval"],
        ["PD evidence sent to the BI team", "Handoff note"],
        ["Closing note written", "CMS closing note"]
      ],
      skill: { tool: "pdClose5", cms: true },
      fourPart: {
        corePrinciples: [
          "A PD file closes when every item is paid, every document is in, and the BI team has what it needs.",
          "The closing note tells anyone who opens the file later exactly how it ended.",
          "Open items (subrogation, deductible) keep the file open — or become a tracked task."
        ],
        howTo: [
          "Run the closing checklist.",
          "Confirm payments with each payee.",
          "Upload the final documents (release, invoices, title/lien release).",
          "Send the PD handoff to the BI Case Manager.",
          "Write the closing note: totals, payees, dates, open items (if any) and who owns them."
        ],
        bestPractices: [
          "Close promptly — open-but-finished files hide the ones that aren't.",
          "Send the client a closing letter summarizing what was paid and to whom.",
          "Pitfall: closing before the lienholder confirms the payoff was enough."
        ],
        discussionCase: "Everything is paid except Harbor Point's $120 subrogation. Do you close the PD file? What do you log?"
      },
      trainerCue: "Launch the Day 5 Skill Builder — Release Review & Close-Out: mark up Crestline's release, route the payment, run the closing checklist and write the handoff."
    },
    { h: "Handing Off to the BI Team",
      layout: "THREEBOX",
      boxes: [
        { label: "Evidence", desc: "Photos, estimates, supplements, the valuation, the total-loss decision." },
        { label: "Coverage facts", desc: "At-fault BI limits, client's UIM and MedPay, any coverage issues." },
        { label: "Status", desc: "PD settled for $X on [date], PD-only release signed, nothing about BI discussed." }
      ],
      fourPart: {
        corePrinciples: [
          "PD evidence is BI evidence: the damage shows the force of the impact.",
          "The BI team needs the coverage facts you found (BI limits, UIM, MedPay).",
          "A clear handoff confirms the PD release did not touch the injury claim."
        ],
        howTo: [
          "Send the BI Case Manager the photos, estimates, supplements and valuation.",
          "Summarize the coverage facts: at-fault BI limits, client's UIM, MedPay.",
          "Confirm the PD settlement amount, date and that the release was PD-only.",
          "Note anything the BI team should know (client statements, recorded-statement requests, liability evidence)."
        ],
        bestPractices: [
          "Use the same handoff format on every file.",
          "Link the handoff note in both the PD and BI files.",
          "Pitfall: the BI team finds out about the total loss from the adjuster."
        ],
        discussionCase: "What three facts from Angela's PD file help Rachel Owens most on the injury claim?"
      },
      trainerCue: "Frame damage + a $24,860 repair estimate on a rear-end crash is strong force-of-impact evidence for the BI claim."
    },
    { h: "Difficult Files: Uninsured, Hit-and-Run, Denied Liability",
      layout: "TABLE",
      tableHeaders: ["File", "PD path", "Watch for"],
      tableRows: [
        ["At-fault uninsured", "Client's UMPD or collision", "UMPD limit and deductible; collision deductible; attorney on the at-fault driver"],
        ["Hit-and-run", "UMPD (if it covers unidentified drivers) or collision", "Police report deadline; physical-contact rules"],
        ["Liability denied", "Collision now; evidence to the adjuster; attorney", "Get the denial reason in writing"],
        ["Client partly at fault", "Split recovery or collision (100% − deductible)", "Pro-rata deductible; the attorney decides on the split"],
        ["No coverage on the client's side either", "Attorney — claim against the at-fault driver directly", "Don't promise recovery"]
      ],
      fourPart: {
        corePrinciples: [
          "When the at-fault carrier won't or can't pay, the client's own coverages carry the claim.",
          "Each difficult file has a standard path — and a point where the attorney takes over.",
          "Speed matters: first-party claims have reporting deadlines."
        ],
        howTo: [
          "Identify which difficult-file type it is.",
          "Check the client's dec page for UMPD, collision and rental.",
          "Open the first-party claim promptly and meet its reporting rules.",
          "Escalate to the attorney with the facts and the coverage summary."
        ],
        bestPractices: [
          "Compare UMPD (limit − deductible) with collision (ACV − deductible) before choosing.",
          "Keep the client informed about the deductible and timing.",
          "Pitfall: waiting on a denied third-party claim while the first-party deadline passes."
        ],
        discussionCase: "A hit-and-run: the client has collision ($1,000 deductible) and UMPD ($3,500, $250 deductible, requires an identified vehicle). What's the path?"
      },
      trainerCue: "UMPD often excludes unidentified drivers — read the policy. Collision is the fallback."
    },
    { h: "Difficult Files: Commercial, Rideshare, Rental Cars & Multiple Claimants",
      layout: "ICONLIST",
      icons: [
        { icon: "🏢", label: "Commercial vehicle", desc: "Company policy, higher limits, corporate claims handling — confirm the named insured." },
        { icon: "🚕", label: "Rideshare / delivery", desc: "Coverage depends on the app status (off, waiting, en route, on a trip)." },
        { icon: "🔑", label: "At-fault rental car", desc: "Renter's own policy, the rental company's coverage, or purchased protection." },
        { icon: "👥", label: "Multiple claimants", desc: "One PD limit shared — move fast, escalate if it won't cover everyone." },
        { icon: "🗺", label: "Out-of-state vehicle", desc: "Different state rules for total loss, tax and fees." }
      ],
      fourPart: {
        corePrinciples: [
          "Some files have more than one possible coverage — and they don't always agree who pays first.",
          "Commercial and rideshare files need the right policy identified before anything else.",
          "Multiple claimants on a small PD limit is a race and a legal question."
        ],
        howTo: [
          "Identify every possible policy: owner, driver, employer, rideshare, rental company.",
          "Ask each carrier for its coverage position in writing.",
          "Track other claimants and the limit remaining.",
          "Escalate early to the attorney with the coverage map."
        ],
        bestPractices: [
          "Ask for the rideshare driver's app status at the time of the crash.",
          "Use the client's own coverage for speed while carriers sort out priority.",
          "Pitfall: accepting the first carrier's “not our policy” without asking who it is."
        ],
        discussionCase: "The at-fault driver was driving a rental car from a rental company. Which policies might pay Angela's PD?"
      },
      trainerCue: "These are attorney-assisted files — the PD Specialist builds the coverage map and keeps the client mobile."
    },
    { h: "What Goes to the Attorney",
      layout: "ICONLIST",
      icons: [
        { icon: "✍️", label: "Every release", desc: "Before the client signs." },
        { icon: "🤝", label: "Every settlement decision", desc: "The client decides with the attorney's advice." },
        { icon: "⚖️", label: "Liability denials and splits", desc: "With the evidence and the carrier's written reason." },
        { icon: "📝", label: "Coverage disputes", desc: "Reservations of rights, lapses, exclusions." },
        { icon: "💰", label: "Damages over the limits", desc: "Excess, umbrella, the at-fault's assets." },
        { icon: "🎙", label: "Recorded-statement requests", desc: "And any direct contact with the client." },
        { icon: "🧭", label: "Anything that sounds like legal advice", desc: "“Should I…?” “Can I sue…?” “Is this fair?”" }
      ],
      fourPart: {
        corePrinciples: [
          "The PD Specialist runs the claim; the attorney makes the legal decisions.",
          "Escalating early is part of the job, not a failure.",
          "A good escalation is short and complete: facts, numbers, documents, the decision needed, and the deadline."
        ],
        howTo: [
          "Recognize the escalation trigger.",
          "Write a short memo: what happened, the numbers, the documents, the decision needed, by when.",
          "Send it the same day and log it in the CMS.",
          "Tell the client the attorney is reviewing it and when they'll hear back."
        ],
        bestPractices: [
          "Include your recommendation — the attorney decides, but your view helps.",
          "Follow up if you don't hear back before the deadline.",
          "Pitfall: answering “should I take it?” yourself."
        ],
        discussionCase: "Which of Angela's file events went (or should have gone) to Michael Grant, and when?"
      },
      trainerCue: "Angela's escalations: the recorded-statement request, the settlement authority, and Crestline's release."
    },
    { h: "PD Specialist KPIs",
      layout: "TABLE",
      tableHeaders: ["KPI", "Target (example)"],
      tableRows: [
        ["Claim opened with the carrier", "Same day as the retainer"],
        ["Client in a rental (if needed)", "Within 1 business day"],
        ["Vehicle moved out of storage", "Within 1–2 business days"],
        ["Liability decision obtained", "Within 5 business days (or first-party path used)"],
        ["Valuation audited and countered", "Within 2 business days of receipt"],
        ["Release reviewed and sent to the attorney", "Same day as received"],
        ["File closed after final payment", "Within 5 business days"]
      ],
      skill: { tool: "pdClose5", cms: true },
      fourPart: {
        corePrinciples: [
          "PD work is measured in days: days without a car, days of storage, days to payment.",
          "KPIs show where files slow down — and where the client pays for delays.",
          "Every KPI depends on a same-day habit: open, call, document, follow up."
        ],
        howTo: [
          "Track the dates of each milestone in the CMS.",
          "Review your open files weekly against the targets.",
          "Find the stage where most files stall and fix the habit behind it.",
          "Report blockers (slow adjusters, missing documents) to your lead."
        ],
        bestPractices: [
          "Storage days and rental overage are the KPIs the client feels in her wallet.",
          "Celebrate fast, clean closes — they're the job done right.",
          "Pitfall: measuring calls made instead of days saved."
        ],
        discussionCase: "On Angela's file, which milestones hit the targets, and which one would you improve?"
      },
      trainerCue: "Close the course by walking Angela's timeline against the KPIs: claim opened day 1, rental day 1, car moved day 3, liability day 4, total-loss offer to agreement in 4 days."
    }
  ],
  quickChecks: [
    { afterIndex: 2, q: "Crestline's release covers “any and all claims, including bodily injury.” You:", opts: ["Send it to the client to sign", "Strike it, request a PD-only release, and escalate to the attorney", "Sign it yourself", "Ignore the BI language"], a: 1, r: "A PD payment gets a PD-only release — always attorney-reviewed." },
    { afterIndex: 6, q: "The client's carrier paid her rental for 3 days before the at-fault carrier accepted liability. It recovers that money by:", opts: ["Billing the client", "Canceling her policy", "Subrogation against the at-fault carrier", "Keeping the deductible"], a: 2, r: "Subrogation lets the client's carrier recover what it paid." },
    { afterIndex: 9, q: "Hit-and-run, unidentified driver. The client's UMPD requires an identified vehicle. The best path is usually:", opts: ["Collision (with the deductible)", "UMPD", "Liability PD", "No claim"], a: 0, r: "If UMPD excludes unidentified drivers, collision is the path." }
  ],
  quiz: [
    { q: "A PD release should release:", opts: ["All claims", "Bodily injury only", "Property damage claims only", "Nothing"], a: 2, r: "Never bodily injury." },
    { q: "Who approves a release before the client signs?", opts: ["The attorney", "The adjuster", "The body shop", "The lienholder"], a: 0, r: "Every release is attorney-reviewed." },
    { q: "In a total loss with a loan, the first payment goes to:", opts: ["The client", "The tow yard", "The firm", "The lienholder, up to the payoff"], a: 3, r: "The payoff releases the title." },
    { q: "Settlement $33,534.63, payoff $19,865.92. The client's vehicle equity is:", opts: ["$13,668.71", "$13,958.70", "$19,865.92", "$33,534.63"], a: 0, r: "$33,534.63 − $19,865.92 = $13,668.71 (plus the car seat $289.99 = $13,958.70 to Angela)." },
    { q: "A two-party check requires:", opts: ["Both payees' endorsements", "One signature", "The adjuster's signature", "Nothing"], a: 0, r: "Plan the endorsement route or ask for split payments." },
    { q: "Subrogation is:", opts: ["A release", "A type of rental", "The paying carrier recovering its payment from the at-fault party's carrier", "A title transfer"], a: 2, r: "It's also how the client's deductible usually comes back." },
    { q: "If liability is split 80/20, the client's deductible is usually reimbursed:", opts: ["In full", "80% (pro rata)", "Not at all", "Twice"], a: 1, r: "The at-fault share of the deductible." },
    { q: "Owner-retained salvage means:", opts: ["The carrier keeps the car", "The lienholder keeps it", "The tow yard keeps it", "The owner keeps the car for a reduced payment"], a: 3, r: "ACV minus salvage value; the title may be branded — attorney and client decide." },
    { q: "Which is NOT on the PD closing checklist?", opts: ["Lienholder paid and title released", "Rental returned and reconciled", "BI demand sent", "PD evidence sent to the BI team"], a: 2, r: "The BI demand belongs to the BI team." },
    { q: "PD photos and estimates help the BI claim because:", opts: ["They show the force of the impact", "They don't", "They replace medical records", "They set the BI value"], a: 0, r: "Physical damage corroborates the mechanism of injury." },
    { q: "The at-fault driver is uninsured. The client's PD options are:", opts: ["Liability PD", "UMPD or collision", "MedPay", "None"], a: 1, r: "Compare the UMPD limit/deductible with collision." },
    { q: "A rideshare driver hit your client. The first question is:", opts: ["What color was the car?", "Was it raining?", "Who owns the rideshare company?", "What was the app status at the time of the crash?"], a: 3, r: "App status decides which coverage layer applies." },
    { q: "Which must ALWAYS go to the attorney?", opts: ["Every settlement decision and every release", "Scheduling the inspection", "Moving the car", "Booking the rental"], a: 0, r: "Legal decisions and documents are the attorney's." },
    { q: "A strong escalation memo includes:", opts: ["Only your opinion", "The client's full medical history", "Facts, numbers, documents, the decision needed and the deadline", "Nothing — just call"], a: 2, r: "Short, complete, and dated." },
    { q: "The PD KPI the client feels most in her wallet is:", opts: ["Number of calls made", "Emails sent", "Length of notes", "Storage days and rental overage"], a: 3, r: "Delays cost the client directly." }
  ],
  discussionQuestion: "Crestline's release for Angela is titled “Release of All Claims,” includes bodily injury, adds an indemnity and a confidentiality clause, leaves out the car seat, and asks for one two-party check. The payoff letter expired 10/15 and payment goes out 10/20. Walk through your markup, the payment routing, what goes to Michael Grant, and your handoff to Rachel Owens."
};
