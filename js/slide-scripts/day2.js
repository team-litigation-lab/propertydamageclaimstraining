/* Day 2 — hand-written spoken scripts for Presenter view, one per topic (the day's slides are its Canva deck).
   Same format as the EA/PA course: four beats — why (the punchline) · talk (plain spoken explanation)
   · walk (the points in order: First, Next, Then, After that, Finally) · ask (a question or action for the room). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "2::Coverage vs Liability: Two Different Questions": {
  "p1": {
   "why": "Every PD claim answers two separate questions, is there money to pay and who is responsible, and a yes on one tells you nothing about the other.",
   "talk": "Coverage asks whether there's a policy that can pay. Liability asks who caused the crash. A third-party claim needs both: coverage with no liability decision pays nothing, and an accepted liability decision with no coverage pays nothing either. Our client's own coverage doesn't need a liability decision, which is exactly why it matters when liability stalls. Every coverage problem today comes down to no money, or no decision.",
   "walk": [
    "First, confirm coverage: in force on the date of loss, vehicle listed, driver covered, and the limits. Skip this and you can chase liability for weeks on a policy that was never going to pay.",
    "Next, track liability as its own line in the CMS, like \"Liability: under investigation, decision expected 09/24\" next to \"Coverage: confirmed 09/21.\" Anyone who opens the file sees where each one stands.",
    "Then, ask the adjuster what they still need to decide liability, and supply it: the police report, the witness, the photos. The decision moves when the evidence does.",
    "After that, if either answer is missing or slow, look at the client's own policy for a faster path.",
    "Finally, never hear \"we have coverage\" and assume the claim will be paid. Coverage is only half the answer."
   ],
   "ask": "The adjuster confirms the policy is active but says liability is \"still under review.\" What exactly do you ask for next?"
  }
 },
 "2::Reading a Declarations Page": {
  "p1": {
   "why": "The declarations page answers most of your day-one questions on a single page, and on every file you read two of them.",
   "talk": "The dec page is the one-page summary of an auto policy: who, what, when, and how much. Exclusions live in the policy form, but the dec page answers most day-one questions. We always read two: the at-fault driver's and our client's. The client's page is our backup plan, even when the at-fault carrier looks solid.",
   "walk": [
    "First, check the policy period against the date of loss. A policy that's active today doesn't help if it wasn't active on the day of the crash.",
    "Next, match the vehicle's VIN to the listed vehicles, then find the driver on the listed drivers and check for an excluded-driver endorsement. A car can be covered while the person driving it is not.",
    "Then, read every coverage line and write down the limits and deductibles. The deductible is what the client pays on a first-party claim, so they should hear that number from us first.",
    "After that, note the loss payee, the lienholder, because they have to be on any vehicle payment.",
    "Finally, keep a coverage summary in the CMS so no one has to re-read the dec pages, and don't stop at the liability limits. The easy miss is the client's rental reimbursement."
   ],
   "ask": "Your turn: with Angela's two dec pages in front of you, what would tell you the at-fault driver might not be covered, even though the car is?"
  }
 },
 "2::Split Limits & CSL: Reading 25/50/50": {
  "p1": {
   "why": "Three short numbers tell you how much money is really available, and the last one is shared by everyone whose property was damaged.",
   "talk": "Split limits are written in a fixed order: BI per person, BI per accident, PD per accident. So 25/50/50 means $25,000 BI per person, $50,000 BI per accident, and $50,000 PD per accident. A combined single limit, or CSL, is one pot for BI and PD together. What trips people up is that the PD limit is per accident, so if several cars were damaged, all the owners share it.",
   "walk": [
    "First, read the three numbers in order. Get the order wrong and you'll quote the wrong limit to the client and the attorney.",
    "Next, ask the adjuster how many claimants are on the PD limit. On a multi-car crash, move fast, because some carriers pay claims as they're settled until the limit runs out.",
    "Then, estimate the PD exposure, the vehicle plus rental plus towing and storage plus personal property, and compare it to the limit. That's how you see a shortfall coming.",
    "After that, flag low BI limits to the BI Case Manager, because the client's UIM may be needed. The BI team can't use a lead they never hear about.",
    "Finally, note the limits in the CMS coverage summary with the source and the date, and never assume the PD limit covers your client alone."
   ],
   "ask": "Crestline's limits are 25/50/50, and Angela's RAV4 is likely worth about $30,000. Is the PD limit enough? What about the BI limit?"
  }
 },
 "2::Liability Property Damage Coverage (Third-Party)": {
  "p1": {
   "why": "The at-fault driver's PD coverage pays for much more than the car, but only for the losses we list and prove.",
   "talk": "Liability PD coverage pays for damage the insured caused to other people's property, up to the PD limit. There's no deductible for our client, but it pays only once liability is accepted, and only the accepted percentage if it's split. It covers repairs or actual cash value, rental or loss of use, towing and storage, and personal property in the car. Where the state allows or requires it, it can also cover diminished value, and tax, title and fees on a total loss.",
   "walk": [
    "First, list every loss item on the PD claim, not just the vehicle. Anything left off is money the client may never see.",
    "Next, ask how the adjuster handles rental, direct bill, daily rate and like-kind class, so the client isn't fronting money.",
    "Then, submit receipts for towing, storage and personal property, and ask for payments to go straight to vendors where possible. Keep a running PD damages list in the CMS with proof for each item.",
    "After that, raise diminished value on a repaired late-model car where the state allows it. That one is on us to bring up.",
    "Finally, don't forget the child car seat. Most manufacturers say to replace it after a moderate or severe crash."
   ],
   "ask": "Your turn: let's build Angela's PD damages list together. Which of her losses does Crestline's PD coverage pay once liability is accepted? That list is what the release must cover on Day 5."
  }
 },
 "2::Collision & Comprehensive (First-Party)": {
  "p1": {
   "why": "Collision pays regardless of fault, which makes it the client's backup plan whenever the third-party claim gets stuck.",
   "talk": "Collision and comprehensive are the client's own coverages for damage to the client's own car. They pay regardless of fault, minus the deductible, and then the client's carrier recovers from the at-fault carrier. That's subrogation. Collision is for a crash with a vehicle or an object; comprehensive is for theft, fire, flood, hail, glass, animals and vandalism. Both are optional, though lenders often require them, so not every client has them.",
   "walk": [
    "First, check the client's dec page for collision and its deductible. You can't build a backup plan on coverage the client never bought.",
    "Next, use collision when liability is denied or delayed, the at-fault driver is uninsured, or the at-fault limits are too low. It needs no liability decision, so it works when the other side won't move.",
    "Then, explain the deductible to the client and how it's usually reimbursed after subrogation. When the other driver is identified and at fault, ask the client's carrier about a collision deductible waiver.",
    "After that, tell the at-fault carrier when a first-party claim is opened, and coordinate the two carriers in writing: one pays, the other reimburses. That keeps payments from being duplicated.",
    "Finally, file a two-car crash under collision, never comprehensive. Comprehensive isn't for crashes with other cars."
   ],
   "ask": "Angela has collision with a $500 deductible. Suppose Crestline had denied liability because the other driver said she ran the light. What's the plan?"
  }
 },
 "2::UM/UIM & Uninsured Motorist Property Damage (UMPD)": {
  "p1": {
   "why": "When the at-fault driver can't pay, the client's own uninsured and underinsured coverage steps in, as long as we route each piece to the right team.",
   "talk": "Uninsured and underinsured motorist coverage protects the client when the at-fault driver can't pay. UM and UIM bodily injury cover the client's injuries, and those belong to the BI team. UMPD covers the client's car, and it's often a small limit, like $3,500, with a deductible. Rules vary by state and policy; some UMPD covers a hit-and-run only with physical contact or an identified vehicle.",
   "walk": [
    "First, when the at-fault driver is uninsured, check the client's UMPD and collision. When the at-fault driver is insured, don't open a UMPD claim; use their PD coverage or the client's collision.",
    "Next, for a hit-and-run, read the policy's conditions, like a police report within a time limit or physical contact. Report it to the police and the client's carrier promptly, because late notice can void UM coverage.",
    "Then, compare UMPD, its limit and deductible, with collision, the ACV minus the deductible, and choose the better path. For a high-value car, that's often collision.",
    "Finally, send UM and UIM bodily injury questions to the BI Case Manager the same day. Low at-fault BI limits are a UIM signal, so tell the BI team even though it's \"not PD.\""
   ],
   "ask": "Angela's policy has UMPD of $3,500 and UIM BI of $50,000/$100,000. Kevin is insured with Crestline, with BI of $25,000. Which of these matter on her file, and who handles each?"
  }
 },
 "2::Rental Reimbursement & Towing / Labor": {
  "p1": {
   "why": "Clients often don't know they have rental coverage, and spotting it is what keeps them in a car while liability is undecided.",
   "talk": "Rental reimbursement on the client's own policy pays a daily amount up to a maximum, and it only applies with a covered first-party loss, a collision or comprehensive claim. The at-fault carrier's PD coverage pays for a like-kind rental for a reasonable time, but only once liability is accepted. Towing and labor is usually a small per-disablement limit, useful while liability is undecided. Today we spot these coverages; tomorrow we set up the rental.",
   "walk": [
    "First, spot the rental coverage on the client's dec page. If we don't find it, the client may never use a coverage they're already paying for.",
    "Next, if liability is pending, open the first-party claim to use it, then switch to the at-fault carrier once liability is accepted.",
    "Then, confirm the daily rate, the maximum and the vehicle class before the client picks up the car, and ask the rental company to direct-bill the carrier so the client doesn't front the money.",
    "After that, tell the client what they'll pay themselves: an upgrade difference, fuel, a damage waiver, or extra days. And don't let them rent a luxury SUV \"because the other guy is paying.\"",
    "Finally, calendar the rental end date and the day the coverage maximum runs out. Otherwise the client gets the bill."
   ],
   "ask": "Angela's coverage is $40 a day with a $1,200 maximum, and the midsize SUV costs $52 a day. What does she pay, and how could you avoid it?"
  }
 },
 "2::Other Coverages to Spot": {
  "p1": {
   "why": "Spotting coverage means reading every line on the page and asking about what isn't on it.",
   "talk": "Other coverages can change who pays or what the claim is worth. MedPay and PIP pay medical bills regardless of fault; they belong to the BI team, but we still spot and route them. GAP pays the gap when the loan is more than the car's ACV. New car replacement and an OEM parts endorsement can change the value of the claim. Rideshare, umbrella and commercial auto can bring in other coverage layers, adjusters and rules.",
   "walk": [
    "First, read every coverage line on both dec pages and list what could apply. If it's not on your list, nobody will think to claim it.",
    "Next, ask the client, \"Did you buy GAP when you bought the car?\" It may be on the loan, not the policy, and missing it on a new car with negative equity leaves the client owing the lender.",
    "Then, ask the at-fault carrier about umbrella or excess coverage when damages approach the limits. That's extra liability above the auto limits.",
    "After that, ask whether the at-fault driver was working at the time: commercial, delivery or rideshare. Personal policies may exclude it, and other coverage may apply.",
    "Finally, write a coverage summary: every coverage, its limit, whether it applies, and who handles it. When in doubt, list it and let the attorney rule it out."
   ],
   "ask": "Angela has no GAP and owes $19,850. If her car is worth $30,000, does GAP matter? What if it were worth $17,000?"
  }
 },
 "2::The Coverage Verification Call": {
  "p1": {
   "why": "\"Yes, there's coverage\" means nothing until you know it covers this loss, on this date, for this driver, and you have it in writing.",
   "talk": "The coverage verification call confirms the policy will actually respond to this loss. We ask the client's carrier the same questions, to confirm the client's own coverages too. A reservation of rights means the carrier is investigating a coverage problem, and that gets escalated. And many carriers won't disclose limits by phone without the insured's consent or a written request, so know what to ask for.",
   "walk": [
    "First, ask whether the policy was in force on the date of loss, with the effective and expiration dates. Put the date of loss in the question, because coverage today proves nothing about the day of the crash.",
    "Next, ask whether the vehicle is listed, matching the VIN, and whether the driver is listed, a permissive user or excluded. A covered car with an excluded driver can still mean no money.",
    "Then, ask for the PD limit and whether other claimants are on it. A shared limit changes how fast we need to move.",
    "After that, ask whether there's any reservation of rights or coverage investigation. If there is, it gets escalated, not filed away.",
    "Finally, ask for written confirmation, note who told you and when, and record the answers word for word in the CMS. A paraphrase won't help if the carrier's position changes."
   ],
   "ask": "The adjuster says, \"There's coverage, but we're reviewing whether Kevin had permission to drive.\" What does that mean, and who needs to know?"
  }
 },
 "2::Liability Decisions: Accepted, Split, Denied, Under Investigation": {
  "p1": {
   "why": "The liability decision controls what the third-party carrier pays and when, so each of the four answers comes with its own next move.",
   "talk": "Accepted at 100 percent means they pay all the covered PD, so we move fast. Split, like 80/20, means they pay their percentage, and every third-party payment is reduced by the client's share. Denied means we get the reason in writing and turn to the client's collision. Under investigation means no decision yet. A denial or a stall is a reason to use the client's own coverage, not to wait.",
   "walk": [
    "First, ask for the decision and the reason, in writing. A verbal answer is hard to act on and harder to hand to the attorney.",
    "Next, if liability is accepted, set up the rental and inspection with the carrier immediately. Every day we wait, the client goes without a car.",
    "Then, if it's split or denied, send the evidence, the police report, citation, witness and photos, and escalate to the attorney. Independent witnesses and citations move decisions; beyond presenting them, don't argue fault percentages yourself.",
    "After that, if it's under investigation, ask what's missing and when they'll decide, calendar it, and use first-party coverage meanwhile. Never let \"under investigation\" run two weeks with no decision date.",
    "Finally, tell the client what the decision means in plain words, so they understand why we might be using their own coverage."
   ],
   "ask": "Kevin tells Crestline that Angela \"stopped short on a yellow.\" The police report says she was stopped at the red. What do you send, and what do you ask?"
  }
 },
 "2::When Damages Exceed the Limits": {
  "p1": {
   "why": "When the damages are bigger than the PD limit, we spot the shortfall early, protect the client with their own coverage, and give the attorney the numbers.",
   "talk": "The PD limit is the most the at-fault policy pays for all property damage in the crash, not just our client's. When damages exceed it, the client's own collision usually pays for the vehicle, minus the deductible, and the attorney decides what to do about the rest: excess or umbrella coverage, the at-fault driver's personal assets, and priority among claimants. Several claimants on one limit is a race, so speed and documentation matter.",
   "walk": [
    "First, total the PD exposure: the vehicle's ACV plus tax and fees, rental, towing and storage, and personal property. You can't see a shortfall until it's all added up.",
    "Next, compare that total with the PD limit and ask the adjuster about other claimants. A shared limit can run out before your client is paid.",
    "Then, recommend the first-party path for the vehicle when the limit won't cover it, and ask about umbrella or excess coverage.",
    "After that, escalate to the attorney with the math written out: exposure, limit, shortfall, and the client's coverages. Settling for the full limit when others have claims is the attorney's call, not ours.",
    "Finally, never promise the client the excess will be recovered. The attorney handles any claim beyond the limits."
   ],
   "ask": "Angela's file stays under the limit, so here's a what-if. The PD limit is $25,000, three cars were damaged, and your client's car alone is worth $34,000. What do you do today?"
  }
 },
 "2::Choosing the Path: Third-Party, First-Party or Both": {
  "p1": {
   "why": "There's no single right path; it depends on liability, the limits and the client's coverages, and whichever you choose, you write down why.",
   "talk": "Every path trades off speed, certainty and cost, and the cost is usually the deductible. Liability accepted at 100 percent with enough limits points to the third-party claim, with no deductible. Liability under investigation, with a client who needs a car, means first-party rental now and third-party once it's accepted. Denied or split means the client's collision, evidence to the adjuster, and the attorney. For an uninsured driver, a hit-and-run, or damages over the limit, the client's UMPD or collision carries the vehicle.",
   "walk": [
    "First, list the client's options from both dec pages. You can't choose a path you didn't know was there.",
    "Next, match the situation to the path: where liability stands, whether the limits are enough, and what the client carries.",
    "Then, explain the trade-off to the client in plain words: a deductible now, or waiting on the other side. Never choose first-party without telling the client about the deductible; it's their money.",
    "After that, document the decision and the reason in the CMS, and tell both carriers what you're doing, so no loss is paid twice and nothing falls between the carriers.",
    "Finally, revisit the path when the facts change, like liability being accepted or a total loss being declared."
   ],
   "ask": "Angela's file on 09/21: liability under investigation, she needs a car, and she has rental coverage. On 09/24: liability accepted. What path do you choose on each date?"
  }
 },
 "2::Coverage Red Flags": {
  "p1": {
   "why": "A coverage red flag means the at-fault policy might not pay even when the driver was clearly at fault, and the sooner you spot it, the sooner the client's own coverage can take over.",
   "talk": "There are six red flags to check on every file: a lapse or cancellation on the date of loss, an excluded driver, a vehicle that isn't listed, like a newly bought or borrowed car, a business-use exclusion for delivery or rideshare, late notice from the insured, and a reservation of rights, which means the carrier is investigating whether it has to pay. Coverage disputes are legal questions, so our job is to spot, document and escalate.",
   "walk": [
    "First, check each red flag on every file during the coverage verification call. Catching it early gives the client time to use their own coverage.",
    "Next, ask for any coverage position, a denial or a reservation of rights, in writing. Don't tell the client \"they're denying it\" until you have the written reason.",
    "Then, move the vehicle and rental to the client's own coverage when coverage is in doubt, and don't let first-party deadlines pass while the dispute runs.",
    "Finally, escalate to the attorney with the dec pages and the carrier's letter. A reservation-of-rights letter goes to the attorney the day it arrives."
   ],
   "ask": "Which red flag was on Angela's file, how was it resolved, and what would you have done if Crestline had said the policy lapsed? Then it's your turn: open the Coverage Spotter Skill Builder and write the coverage memo."
  }
 }
});
