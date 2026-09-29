/* Day 5 — hand-written spoken scripts for Presenter view, one per topic (the day's slides are its Canva deck).
   Same format as the EA/PA course: four beats — why (the punchline) · talk (plain spoken explanation)
   · walk (the points in order: First, Next, Then, After that, Finally) · ask (a question or action for the room). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "5::The PD Settlement Package": {
  "p1": {
   "why": "A PD settlement is every piece of property the crash touched, not just the check for the car.",
   "talk": "When we settle PD, we close out everything: the vehicle, rental or loss of use, tow and storage, personal property in the car, diminished value where allowed, and the deductible if collision was used. Some of that is paid straight to vendors like the shop, the tow yard and the rental company, and the rest goes to the client or the lienholder. And the release has to match the package, because anything left off may be waived.",
   "walk": [
    "First, update the PD damages list with the agreed amount for every item. If an item isn't on the list, nobody remembers to get it paid.",
    "Next, confirm how each item is paid: direct to the vendor, to the lienholder, or to the client. Get that wrong and the money lands in the wrong place.",
    "Then, confirm the final invoices from the tow yard and the rental company. Settle on an old number and somebody is left holding a balance.",
    "After that, send the adjuster a one-page settlement summary, with the BI claim left completely out, and ask them to confirm it in writing. That confirmation is what we check the release against.",
    "Finally, compare the package to the release before anything is signed. The classic pitfall is settling the vehicle and forgetting the personal property, which may then be waived."
   ],
   "ask": "Your turn: list every item in Angela's PD settlement, the amount, and who is paid. Don't forget what was inside the RAV4."
  }
 },
 "5::The PD Release: Property Damage Only": {
  "p1": {
   "why": "The PD release must release property damage only, never bodily injury, and it's the single most important control we have on a PD file.",
   "talk": "Sometimes a carrier sends a general Release of All Claims form with a property damage payment. That form releases \"any and all claims\", including bodily injury, known or unknown, and one signature can end the client's injury case. A proper PD-only release is titled Property Damage Release, lists the vehicle and the amount, and says plainly that bodily injury claims are not released. So ask carriers for their PD-only form up front, and remember that the attorney reviews every release before the client signs.",
   "walk": [
    "First, read the title and the release language line by line. Skimming is exactly how a general release slips through.",
    "Next, confirm it names only the property damage claims: vehicle, rental, tow and storage, and personal property. Anything broader is not a PD release.",
    "Then, confirm it states that bodily injury claims are excluded. If that sentence isn't there, we don't assume it; we flag it.",
    "After that, mark up anything beyond PD and send it to the attorney. We spot the problem; the attorney approves the fix.",
    "Finally, send only the approved release to the client, with a plain-language explanation, and tell the BI Case Manager once it's signed. The pitfall is \"it's just the car release\", and then the injury claim is gone."
   ],
   "ask": "Crestline sends a Release of All Claims with the $33,534.63 check request. What exactly do you do before Angela signs anything?"
  }
 },
 "5::Release Red Flags": {
  "p1": {
   "why": "Every release problem is about scope, terms or accuracy, and scope is the one that can quietly give away the injury claim.",
   "talk": "We sort release problems into three groups. Scope is what's being released, and it's the most dangerous, because \"any and all claims\" or \"known or unknown injuries\" can release bodily injury. Terms are extras like indemnity or confidentiality, which always go to the attorney. Accuracy is names, VIN, date of loss and amounts, which must match the file exactly. There are seven red flags to know, and Crestline's draft for Angela has five of them.",
   "walk": [
    "First, read the release against the settlement summary and the file, never on its own. A clause only looks wrong next to what was actually agreed.",
    "Next, mark every clause OK, revise, strike or escalate: strike all-claims language, strike and escalate injury language, escalate indemnity and confidentiality, and revise mismatches or a single two-party check. An unmarked clause is the one that slips through.",
    "Then, check the VIN, the names and the date of loss letter by letter. Send the client a release with a wrong VIN and the title transfer fails.",
    "After that, send your markup to the attorney with a short cover note. We spot and mark up; the attorney approves.",
    "Finally, send the approved version to the adjuster in writing, and keep both the carrier's original and the approved version in the CMS, so the file shows what changed."
   ],
   "ask": "Angela's release lists the vehicle for $33,534.63 but not the car seat. What's the risk, and what's your fix?"
  }
 },
 "5::Routing the Payment": {
  "p1": {
   "why": "Every dollar has a right payee: the lienholder first, then the client, with the vendors paid directly.",
   "talk": "Once the numbers are agreed, the question is who gets paid what. The lienholder's updated payoff is paid directly, and that's what releases the title. The client gets her equity plus personal property, vendors are paid directly, and her own carrier recovers what it paid through subrogation. Whether her share passes through the firm's trust account or goes straight to her is firm policy, so know your firm's rule.",
   "walk": [
    "First, get an updated payoff for the payment date, with the good-through date and the per diem. An old payoff leaves the lien short, and the title doesn't release.",
    "Next, ask the carrier to issue the payoff to the lienholder, the balance to the client or per firm policy, and vendor bills directly. One two-party check to the client and the lienholder can stall for weeks.",
    "Then, confirm the payment addresses and payee names in writing. One wrong name or address and the check goes nowhere.",
    "After that, put the payment breakdown in writing to the client before the checks go out, so she's never surprised.",
    "Finally, confirm receipt with the lienholder, the client and each vendor, and ask the lienholder for the lien-release or title confirmation. Until every payment lands, we're not done."
   ],
   "ask": "Let's do the math. The settlement is $33,534.63, the payoff on 10/20 is $19,865.92, and the car seat is $289.99. What does Angela receive in total, and what does the lienholder get?"
  }
 },
 "5::Two-Party Checks & Firm Policy": {
  "p1": {
   "why": "A two-party check can't be cashed until both payees endorse it, so if we don't plan the route, the money just sits.",
   "talk": "We see two-party checks on repairs, owner and shop, and on total losses, owner and lienholder. Firms also handle PD money differently: some route it through the trust account, others have the carrier pay the client directly, so know your firm's rule and follow it. If the money comes through the firm, trust rules are strict: deposit, let it clear, disburse with records, and no commingling.",
   "walk": [
    "First, ask the carrier to split payments by payee wherever it can. Separate checks avoid the endorsement chase entirely.",
    "Next, when a two-party check is unavoidable, arrange the endorsement route in advance: who signs first and how the check travels. Mail it to a client who can't reach the lienholder and it just sits.",
    "Then, confirm payee names, amounts and addresses in writing before the check is issued. Fixing a check after it's cut costs far more time.",
    "After that, if funds come through the firm, follow the trust procedures exactly. Never hold client funds longer than needed, and never pay firm expenses from them.",
    "Finally, document every check: number, amount, payees, date received and date disbursed, with copies in the CMS. If it isn't recorded, we can't show where the client's money went."
   ],
   "ask": "Crestline insists on one check payable to Angela and Riverbank Auto Finance. How do you make that work fast? And what's your firm's rule for PD funds?"
  }
 },
 "5::Title & Salvage Paperwork": {
  "p1": {
   "why": "In a total loss, the carrier pays for the car and takes it, so the title paperwork has to be right before the money moves.",
   "talk": "In a total loss, the carrier pays the value and takes the vehicle and its title, and the car becomes salvage. The lienholder releases the title after payoff, and the owner signs the documents the carrier needs. Then the keys go to the carrier, the plates come off if the state requires it, and the carrier picks the car up. An owner can sometimes keep the car for a reduced payment, called owner-retained salvage, but that changes the payment and the title, so it's an attorney and client decision.",
   "walk": [
    "First, ask the carrier for its title packet: title assignment, power of attorney and odometer statement. Asking early keeps paperwork from holding up the money.",
    "Next, check the names and the VIN on every title document before the client signs. One wrong detail and the form has to be redone.",
    "Then, send the packet to the client with instructions and get it back promptly, because one missing signature holds the payment.",
    "After that, confirm the lienholder has what it needs to release the title, or the transfer can't finish.",
    "Finally, confirm the salvage pickup date and that the client's belongings are out first. Remind her to cancel or move the car's insurance and registration after the transfer; her agent can help."
   ],
   "ask": "Angela asks whether she can keep the RAV4 and fix it herself. What do you tell her, and who decides?"
  }
 },
 "5::Deductible Recovery & Subrogation": {
  "p1": {
   "why": "When the client's own carrier pays first, it gets that money back from the at-fault carrier, and our job is to make sure the client's deductible comes back too.",
   "talk": "That recovery is called subrogation. If the client used her collision or rental coverage, her carrier pays, then demands repayment from the at-fault carrier, and if they disagree, the carriers resolve it through inter-company arbitration. The client's deductible is usually included in that demand and reimbursed when it's recovered, or pro rata, meaning the at-fault share, if liability is split. That deductible is the client's own money, so it stays on our radar until it's back with her.",
   "walk": [
    "First, tell the client's carrier when the at-fault carrier accepts liability. That's the signal it needs to pursue its subrogation demand.",
    "Next, ask the client's carrier to include the deductible in that demand, or claim it directly from the at-fault carrier on the third-party claim. Pick one route, because we never double-recover.",
    "Then, keep the deductible on the PD damages list until it's reimbursed. Once it drops off the list, it drops out of everyone's mind.",
    "After that, get subrogation updates in writing and calendar a 30-day follow-up. Without a follow-up date, subrogation just drifts.",
    "Finally, track the status and confirm the client was actually reimbursed. Closing the file before her deductible comes back is the pitfall that leaves her out of her own money."
   ],
   "ask": "Harbor Point paid three days of Angela's rental, $120. How does Harbor Point get it back, and does Angela owe anything?"
  }
 },
 "5::Closing the PD File": {
  "p1": {
   "why": "A PD file closes when every item is paid, every document is in, and the BI team has what it needs.",
   "talk": "Closing runs on a checklist, and each item has proof that belongs in the CMS: the lien release, the client's confirmation, paid vendor invoices, the rental closing invoice, the signed and approved PD-only release, and the handoff note. Open items like subrogation or a deductible either keep the file open or become a tracked task with an owner. And the closing note tells anyone who opens the file later exactly how it ended.",
   "walk": [
    "First, run the closing checklist, item by item. Memory misses things; a checklist doesn't.",
    "Next, confirm payments with each payee, and don't close until the lienholder confirms the payoff was enough. Close too early and a short payoff sits on a file nobody is watching.",
    "Then, upload the final documents: the release, the invoices, and the title or lien release. If it isn't in the CMS, the file can't prove it happened.",
    "After that, send the PD handoff to the BI Case Manager and a closing letter to the client summarizing what was paid and to whom, so she hears how it ended from us.",
    "Finally, write the closing note: totals, payees, dates, open items and who owns them. Then close promptly, because open-but-finished files hide the ones that aren't."
   ],
   "ask": "Everything on Angela's file is paid except Harbor Point's $120 subrogation. Do you close the PD file, and what do you log? Then we'll do it for real in the Day 5 Skill Builder."
  }
 },
 "5::Handing Off to the BI Team": {
  "p1": {
   "why": "Everything we gathered on the car is evidence for the injury claim, because the damage shows how hard the impact was.",
   "talk": "The PD file and the BI file are about the same crash. The photos, estimates, supplements, valuation and total-loss decision all show the BI team how much force was involved. We also found coverage facts they need, and a clear handoff confirms in writing that the PD release covered property damage only and that nothing about BI was discussed.",
   "walk": [
    "First, send the BI Case Manager the photos, estimates, supplements and valuation. That's force-of-impact evidence, and the BI team shouldn't have to chase it.",
    "Next, summarize the coverage facts: the at-fault BI limits, the client's UIM and her MedPay. We already found them, so there's no reason for the BI team to start from scratch.",
    "Then, confirm the PD settlement amount, the date, and that the release was PD-only. That line tells the BI team their claim is still intact.",
    "After that, note anything else they should know: client statements, recorded-statement requests and liability evidence. The pitfall is the BI team finding out about the total loss from the adjuster.",
    "Finally, use the same handoff format on every file and link the note in both the PD and BI files, so anyone on either side can find it."
   ],
   "ask": "Rachel Owens is working Angela's injury claim. What three facts from the PD file help her most? Think about what frame damage and a $24,860 repair estimate say about a rear-end crash."
  }
 },
 "5::Difficult Files: Uninsured, Hit-and-Run, Denied Liability": {
  "p1": {
   "why": "When the at-fault carrier won't or can't pay, the client's own coverage carries the claim, and that coverage has its own clock.",
   "talk": "Difficult files come in familiar shapes: the at-fault driver is uninsured, it's a hit-and-run, liability is denied, the client is partly at fault, or there's no coverage on the client's side either. Each one has a standard path and a point where the attorney takes over. Most of those paths run through the client's own policy. And speed matters, because first-party claims have reporting deadlines.",
   "walk": [
    "First, identify which kind of difficult file you have. Each type has its own path, and the wrong one wastes days.",
    "Next, check the client's dec page for UMPD, collision and rental. On a hit-and-run, read whether UMPD covers unidentified drivers, and watch the police report deadline and any physical-contact rules.",
    "Then, compare before you choose: UMPD is the limit minus its deductible, collision is ACV minus its deductible. Choose without comparing and the client may end up with less.",
    "After that, open the first-party claim promptly and meet its reporting rules. The pitfall is waiting on a denied third-party claim while the first-party deadline passes, so get the denial reason in writing and keep moving.",
    "Finally, escalate to the attorney with the facts and a coverage summary, and keep the client informed about the deductible and timing. Never promise recovery."
   ],
   "ask": "A hit-and-run: the client has collision with a $1,000 deductible, and UMPD of $3,500 with a $250 deductible that requires an identified vehicle. What's the path, and why?"
  }
 },
 "5::Difficult Files: Commercial, Rideshare, Rental Cars & Multiple Claimants": {
  "p1": {
   "why": "On these files more than one policy might pay, and the carriers don't always agree on who pays first.",
   "talk": "These are attorney-assisted files: we build the coverage map and keep the client mobile. A commercial vehicle means a company policy, higher limits and corporate claims handling, so confirm the named insured. Rideshare and delivery coverage depends on the app status: off, waiting, en route or on a trip. An out-of-state vehicle brings different state rules for total loss, tax and fees, and an at-fault rental car can bring in more than one policy.",
   "walk": [
    "First, identify every possible policy: owner, driver, employer, rideshare and rental company. Miss one and you may miss the one that actually pays.",
    "Next, ask each carrier for its coverage position in writing, and on rideshare files, ask for the driver's app status at the time of the crash. Never accept \"not our policy\" without asking whose policy it is.",
    "Then, track the other claimants and the limit remaining. Multiple claimants on one small PD limit is a race, and the limit can run out before everyone is paid.",
    "After that, use the client's own coverage for speed while the carriers sort out priority, so she isn't stuck without a car while they argue.",
    "Finally, escalate early to the attorney with your coverage map. Who pays first, and a limit that won't cover everyone, are legal questions."
   ],
   "ask": "The at-fault driver was driving a rental car from a rental company. Which policies might pay Angela's PD? Let's build the coverage map together."
  }
 },
 "5::What Goes to the Attorney": {
  "p1": {
   "why": "We run the claim, the attorney makes the legal decisions, and knowing where that line sits is part of doing this job well.",
   "talk": "Escalating early isn't a failure; it's part of the job. Some things always go to the attorney: every release before the client signs, every settlement decision, liability denials and splits, coverage disputes like reservations of rights, lapses or exclusions, damages over the limits, and recorded-statement requests or any direct contact with the client. So does anything that sounds like legal advice, like \"Should I take it?\", \"Can I sue?\" or \"Is this fair?\" On settlement, the client decides with the attorney's advice.",
   "walk": [
    "First, recognize the trigger. If it's on that list, or it sounds like a legal question, it goes up, however small it looks.",
    "Next, write a short memo: what happened, the numbers, the documents, the decision needed and by when. A complete memo gets a fast answer; a vague one gets questions back.",
    "Then, include your recommendation. The attorney decides, but your view from inside the file helps.",
    "After that, send it the same day, log it in the CMS, and tell the client the attorney is reviewing it and when they'll hear back, so they aren't left wondering.",
    "Finally, follow up if you don't hear back before the deadline. And never answer \"should I take it?\" yourself; that's legal advice, and it isn't ours to give."
   ],
   "ask": "Which events on Angela's file went, or should have gone, to Michael Grant, and when? See if you can name all three."
  }
 },
 "5::PD Specialist KPIs": {
  "p1": {
   "why": "PD work is measured in days: days without a car, days of storage, days to payment, and the client feels every one of them.",
   "talk": "KPIs show where files slow down, and where the client pays for the delay. A few example targets: claim opened the same day as the retainer, client in a rental within one business day, car out of storage within one to two business days, and a liability decision within five business days, or the first-party path used. Every one of those depends on a same-day habit: open, call, document, follow up.",
   "walk": [
    "First, track the date of each milestone in the CMS. If the dates aren't recorded, you can't see where a file slowed down.",
    "Next, review your open files weekly against the targets. A weekly look catches a stalled file while there's still time to fix it.",
    "Then, find the stage where most of your files stall and fix the habit behind it. Storage days and rental overage are the KPIs the client feels in her wallet, so start there.",
    "After that, report blockers like slow adjusters or missing documents to your lead, who can't clear what they don't know about.",
    "Finally, measure days saved, not calls made, and celebrate the fast, clean closes. They're the job done right."
   ],
   "ask": "Let's close the course with Angela's timeline: claim opened day 1, rental day 1, car moved day 3, liability day 4, and total-loss offer to agreement in 4 days. Which milestones hit the targets, and which one would you improve?"
  }
 }
});
