/* Day 3 — hand-written spoken scripts for Presenter view, one per topic (the day's slides are its Canva deck).
   Same format as the EA/PA course: four beats — why (the punchline) · talk (plain spoken explanation)
   · walk (the points in order: First, Next, Then, After that, Finally) · ask (a question or action for the room). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "3::Rental: Who Pays and When": {
  "p1": {
   "why": "Who pays for the rental depends on where liability stands today, and our job is to make sure the right carrier pays for the right days.",
   "talk": "The at-fault carrier owes a like-kind rental for a reasonable time, but only once it accepts liability. Until then, the client's own rental reimbursement, if she has it, bridges the gap. If liability is denied or the other driver is uninsured, her own rental coverage applies with her collision or UMPD claim. And if liability is split, that goes to the attorney.",
   "walk": [
    "First, check the liability status and the client's rental coverage before you call the rental company. Book first and you can put her in a car nobody agreed to pay for.",
    "Next, if liability is pending and she has the coverage, open the first-party claim and rent under it. Her coverage has a daily cap and a maximum, so know both.",
    "Then, the day liability is accepted, move the rental to the at-fault carrier's direct bill and set the switch date in the CMS.",
    "After that, tell the first carrier that date so it can subrogate its days. Two carriers should never pay for the same days.",
    "Finally, get every authorization in writing, with a claim number, rate and start date, and don't let the client rent on her own card \"until it's sorted.\" That's how she ends up fronting hundreds of dollars."
   ],
   "ask": "Angela rented on 09/21 under Harbor Point at $40 a day, and Crestline accepted liability on 09/24. What calls do you make that day?"
  }
 },
 "3::Setting Up the Rental: The Calls": {
  "p1": {
   "why": "Every rental takes three calls, the carrier, the rental company and the client, and the authorization from that first call decides everything after it.",
   "talk": "The authorization covers who pays, how much per day, what class of car, and from what date. The client signs the rental contract herself, so she has to know exactly what she's responsible for before she reaches the counter. And if the file has no reservation number and no rate, the first dispute lands on her bill.",
   "walk": [
    "First, call the adjuster for the authorization: claim number, daily rate, vehicle class, start date, direct bill, and how the end date is set. Read it back before you hang up, because a misheard rate becomes an argument later.",
    "Next, call the rental branch and book under the carrier's claim number with direct billing, confirm the rate and class, and get the reservation number. Ask them to note \"insurance replacement, direct bill\" so the counter doesn't charge the client.",
    "Then, call the client with the pickup location and time, and tell her to bring her driver's license and a card for the deposit. Tell her what she pays, like an upgrade, fuel or a waiver, and when the rental ends.",
    "Finally, log the reservation number, rate, class and dates in the CMS, with a task 3 business days before the end date, so the rental never runs past its end date unnoticed."
   ],
   "ask": "The rental counter tells Angela, \"Your insurance didn't authorize anything.\" What do you check, and who do you call first?"
  }
 },
 "3::Like-Kind, Daily Rates & What the Client Pays": {
  "p1": {
   "why": "The carrier pays for a like-kind car at the authorized rate, anything above that is the client's cost, and she should hear those numbers before pickup.",
   "talk": "Like kind means a vehicle comparable to the client's, a compact SUV for a compact SUV, not an upgrade. The carrier usually pays that class at the authorized rate, plus taxes and fees, for the authorized period. The client usually pays the upgrade difference, fuel and tolls, extras like GPS or car seats, and any days past the end date. Counter damage waivers usually aren't paid by the carrier, but her own auto policy often extends to rentals.",
   "walk": [
    "First, match the rental class to the client's vehicle, because that's the class the carrier pays for.",
    "Next, if she wants an upgrade, tell her the daily difference and get her OK in writing, so nobody argues later about what she agreed to.",
    "Then, ask her agent whether her policy covers a rental car, so she decides about the damage waiver with facts, not counter pressure.",
    "After that, text her the costs after the call: \"Crestline pays $45/day. The standard SUV is $58/day, so you'll pay $13/day.\" Keep receipts for anything she pays that might be recoverable.",
    "Finally, never let her find out about an upgrade charge when she returns the car. By then it's too late for her to choose differently."
   ],
   "ask": "Your turn: Angela wants a standard SUV at $58 a day \"for the kids,\" and Crestline authorized $45 a day for 15 days. What does she pay?"
  }
 },
 "3::Rental Duration & Extensions": {
  "p1": {
   "why": "A rental ends on a date, not when the client is ready, and every day past that date is hers unless an extension is approved first.",
   "talk": "The rental lasts a reasonable period. On a repairable car, that's the shop's estimated repair time plus parts and supplement delays. On a total loss, it usually ends a few days after the carrier's settlement offer, and Crestline's rule is 3 days. Extensions have to be requested before the rental ends, with a documented reason like a parts backorder, a supplement approval or a disputed valuation.",
   "walk": [
    "First, get the end-date rule from the adjuster when the rental is authorized, and calendar the end date with a task 3 business days before it, so it never sneaks up on anyone.",
    "Next, ask the shop for its repair timeline and any parts delays. That's your evidence if you need more days.",
    "Then, request extensions in writing with the reason and the documents, and get the approval in writing with the new end date. A verbal yes is hard to prove later.",
    "After that, if a total-loss offer is based on the wrong vehicle, argue it wasn't a fair offer and ask that the rental continue until a corrected offer.",
    "Finally, tell the client the end date and remind her two days before, so she never keeps the car past it because no one told her."
   ],
   "ask": "Crestline's offer on 10/05 used the wrong trim and mileage, and Angela's rental ends 10/08. What do you ask for, and what's your argument?"
  }
 },
 "3::Loss of Use: When There's No Rental": {
  "p1": {
   "why": "When a client goes without her car and doesn't rent, she still lost something, and loss of use is how she gets paid for it.",
   "talk": "Loss of use compensates the owner for the time without the vehicle when no rental was taken. It's a third-party damage, claimed from the at-fault carrier, and valued at a reasonable daily rate for a comparable vehicle, usually the cost of a like-kind rental. Clients often don't know to ask, so we ask on every file where the client didn't rent. One hard rule: she can't get both a paid rental and loss of use for the same days.",
   "walk": [
    "First, confirm the client did not have a paid rental for the days you're claiming. Claiming loss of use for days a rental was paid is the pitfall here.",
    "Next, count the days, from the date of loss to repair completion or to a reasonable total-loss settlement date.",
    "Then, get two or three like-kind rental quotes to support the daily rate. Without them, your number has nothing behind it.",
    "After that, submit the claim in writing with the timeline and the quotes, so the adjuster has everything needed to evaluate it.",
    "Finally, if it's a commercial vehicle, flag it to the attorney. Those owners may claim lost income instead, and that's the attorney's call."
   ],
   "ask": "Angela had a rental, so this isn't on her file. Say a client borrowed her sister's car for 12 days instead of renting. What can you claim, and how do you prove it?"
  }
 },
 "3::Inspections & Appraisals": {
  "p1": {
   "why": "The carrier's inspection sets the first number on the repair, and that number is almost always low, so get it done fast and treat it as a starting point.",
   "talk": "The carrier inspects to decide the repair cost, or whether the car is a total loss. That can be a field appraiser at the shop or yard, a photo estimate through the carrier's app, a drive-in center for drivable cars, or a review of the client's shop's estimate. The inspection happens where the car is, another reason to move it to the client's shop quickly. And hidden damage usually turns up at teardown, when the shop takes the car apart.",
   "walk": [
    "First, ask the adjuster how and when they'll inspect: field appraiser, photos or drive-in. You can't plan the repair until you know.",
    "Next, give the appraiser the shop's address and the estimator's contact, and tell the shop the appraiser is coming so the estimator can be there.",
    "Then, ask for a copy of the estimate as soon as it's written, and send it with the photos to the BI Case Manager. They show the force of the impact.",
    "After that, calendar a follow-up if the inspection isn't scheduled within 3 business days, because a stalled inspection stalls the whole repair.",
    "Finally, don't let the shop start repairs before the carrier has inspected or agreed. Otherwise you're arguing about work the carrier never saw."
   ],
   "ask": "The appraiser wrote Angela's estimate at $9,480.35 from photos without seeing the car, and Riverside says the damage is worse. What happens next?"
  }
 },
 "3::Reading an Estimate": {
  "p1": {
   "why": "You don't have to be an estimator to read an estimate, you just have to spot the differences and get the right people to resolve them.",
   "talk": "Every estimate is a list of parts, labor hours, paint and materials, and sublet, which is work sent out like alignment, glass or calibration. When the carrier's estimate and the shop's don't match, it usually comes down to parts type, labor rate and missed operations. Watch betterment too, a deduction when a worn part is replaced new, because it sometimes shows up on parts that weren't worn. The shop's estimator argues the technical points. We keep the process moving and documented.",
   "walk": [
    "First, get both estimates, the carrier's and the shop's. You can't find the differences if you only have one side.",
    "Next, compare the totals, then parts, labor rate, refinish, materials and sublet. Look for aftermarket parts on a newer car, missing blend on adjacent panels, or a labor rate below the shop's posted rate.",
    "Then, list every difference with the shop's reason, and watch for missing scans and calibrations. Safety items are not optional.",
    "After that, send the list to the adjuster and ask for a reinspection or a revised estimate, so every difference gets an answer in writing.",
    "Finally, never tell the client the carrier's first estimate is the final number. It rarely is, and she'll stop trusting you when it changes."
   ],
   "ask": "The carrier's labor rate is $58 an hour, and Riverside's posted rate is $72 an hour. Who resolves that difference, and what's your role?"
  }
 },
 "3::Parts: OEM, Aftermarket & Recycled": {
  "p1": {
   "why": "The parts on the estimate decide how the car gets fixed, and on a late-model car like Angela's, non-OEM parts are worth pushing back on, especially anything structural or safety-related.",
   "talk": "OEM means original equipment manufacturer, the carmaker's own part. Aftermarket parts are made by another company to fit. Recycled parts, or LKQ, are used original parts from a salvage vehicle, and reconditioned parts are repaired originals. Carriers often write estimates with aftermarket or recycled parts to lower the cost, and on a 2022 RAV4 with 28,412 miles, that's a common dispute. State rules and policy endorsements may require OEM parts or disclosure of non-OEM parts.",
   "walk": [
    "First, check each part's type on the estimate. You can't object to a part you didn't notice.",
    "Next, ask the shop which non-OEM parts are a fit, safety or warranty concern. Never accept aftermarket structural parts without the shop's input.",
    "Then, request OEM parts in writing for a late-model car, with the reason. Safety-related parts like structural parts, sensors and lamps make the strongest OEM argument.",
    "After that, if it's a first-party claim, check the client's policy for an OEM endorsement, since that can settle the question.",
    "Finally, tell the client what's being used on her car, so there are no surprises at pickup."
   ],
   "ask": "The estimate uses an aftermarket rear bumper reinforcement on Angela's 2022 RAV4. What do you ask for, and what reason do you give?"
  }
 },
 "3::The Client's Right to Choose the Shop": {
  "p1": {
   "why": "It's the client's car, and in most states the choice of shop is hers: the carrier can recommend its own shop but can't require it.",
   "talk": "Carriers have Direct Repair Program shops, or DRP shops, in their network. Those can mean faster approvals and a carrier-backed repair guarantee, but that shop also has a relationship with the carrier. A shop the client picks works for the client, though it may take longer to get supplements approved. Either way, the carrier still owes a reasonable repair cost. And when a carrier says something like \"we can only guarantee our shops,\" that's steering, and it's a red flag.",
   "walk": [
    "First, ask the client where she wants the car repaired. It's her decision, so it starts with her.",
    "Next, if she has no preference, explain the options neutrally, DRP versus independent. We inform her choice, we don't make it for her.",
    "Then, tell the adjuster the client's choice in writing, and confirm the shop's contact and estimator in the CMS so every call goes to the right person.",
    "After that, document any pressure from the carrier to change shops. If steering becomes an issue, that record is what shows it happened.",
    "Finally, never move the car to the carrier's shop without the client's OK. That takes the choice away from her."
   ],
   "ask": "Angela chose Riverside Collision Center, which isn't a Crestline DRP shop. The adjuster tells her, \"If you use Riverside, we can't promise how long it'll take.\" What do you do?"
  }
 },
 "3::Supplements & Hidden Damage": {
  "p1": {
   "why": "Supplements are normal, but slow approvals burn rental days, and a big supplement can turn a repair into a total loss.",
   "talk": "A supplement is an additional estimate for damage found after the first inspection, usually at teardown when the shop takes the car apart. The shop sends photos and the supplement to the carrier, and the adjuster approves it or reinspects. That approval step is where the delays happen. And if the supplement pushes the repair cost to the total-loss threshold, the file stops being a repair and becomes a total loss.",
   "walk": [
    "First, ask the shop to send the supplement and photos to the adjuster the day it's written. Every day it sits is a day the rental keeps running.",
    "Next, follow up with the adjuster within 1 business day for approval or reinspection, and ask for a time commitment, like \"by end of day tomorrow?\"",
    "Then, recalculate: repair cost divided by ACV. At or over 75%, the threshold in this course's training state, the file becomes a total loss.",
    "After that, request a rental extension if the approval delays the repair, so the extra days don't land on the client.",
    "Finally, update the client with the new timeline, and keep the shop, adjuster and client on that same timeline in writing. The pitfall is letting a supplement sit a week while the rental runs."
   ],
   "ask": "Angela's first estimate was $9,480.35, and Riverside's supplement brings the repairs to $24,860.00. Crestline's ACV is about $25,000. Run the math: what happens to her file now?"
  }
 },
 "3::Safety Systems: Scans & Calibrations": {
  "p1": {
   "why": "A missing calibration isn't just a cost item, it's a safety issue, and a car isn't really fixed until its safety systems work.",
   "talk": "Modern cars have driver-assistance sensors, called ADAS, in the bumpers, mirrors and windshield, and they must be recalibrated after related repairs. That means blind-spot and rear cross-traffic radar and parking sensors after bumper work, and backup and lane cameras after replacement or glass work. On late-model vehicles, pre- and post-repair diagnostic scans are standard. The pre-repair scan reads the car's computers for crash-related fault codes, and the post-repair scan confirms every system works after repairs.",
   "walk": [
    "First, check the estimate for a pre-repair scan and a post-repair scan. Without them, nobody has checked the car's computers before or after the work.",
    "Next, check for calibrations of any sensor near the damage. A rear bumper repair means the blind-spot and rear radar, and those have to be recalibrated.",
    "Then, ask the shop to add any missing operations to the supplement with the manufacturer's procedure, and ask the adjuster to approve them in writing.",
    "After that, ask the shop for the calibration report at pickup and keep it in the file. That's the proof the work was done.",
    "Finally, tell the client which safety systems were recalibrated. The pitfall is a \"finished\" car that goes home with a blind-spot warning light on."
   ],
   "ask": "The carrier's estimate replaces Angela's rear bumper but has no scans and no blind-spot radar calibration. What exactly do you ask for, and from whom?"
  }
 },
 "3::Diminished Value": {
  "p1": {
   "why": "A properly repaired car is still worth less once it has an accident history, and if nobody raises diminished value, the client never gets paid for that loss.",
   "talk": "Inherent diminished value is the resale value a car loses after it's properly repaired, because buyers pay less for a car with an accident history. It's usually claimed against the at-fault carrier, where the state allows it, since most first-party policies don't pay it. It doesn't apply to a total loss, because then the client is paid the car's pre-crash value. The strongest candidates are late-model, low-mileage cars with significant repairs.",
   "walk": [
    "First, identify the candidates: newer cars, low mileage, significant or structural repairs. Those are the files where the loss is real.",
    "Next, tell the client about it early. It's often forgotten, and a claim nobody raises doesn't get paid.",
    "Then, get an independent diminished-value appraisal after repairs. That appraisal, the estimate and the photos are your proof.",
    "After that, submit it in writing and negotiate. Carriers often use formulas that produce low numbers, so ask for their method in writing.",
    "Finally, remember diminished value is a PD damage, so include it before any PD release. The pitfall is a PD release signed before the diminished value claim is resolved."
   ],
   "ask": "Angela's car was totaled, so this doesn't apply to her. But if her 2022 RAV4 had been repaired for $24,000, frame damage included, would you raise diminished value? Why?"
  }
 },
 "3::Repair Completion & Payment": {
  "p1": {
   "why": "A repair isn't done when the shop finishes, it's done when the car is fixed, paid for and back with the client, and the rental is returned.",
   "talk": "Closing out a repair is its own checklist. The carrier pays the shop directly or issues a two-party check to the owner and the shop. The client inspects the car at pickup before she signs off, and the rental goes back within one business day of pickup. Anything left open, like diminished value or the deductible if collision was used, gets handled before the PD file closes.",
   "walk": [
    "First, confirm the shop's final bill matches the approved estimate plus supplements. If it doesn't, find out why before anyone gets paid.",
    "Next, arrange payment to the shop, direct or by a two-party check to the owner and the shop, because the repair isn't complete until it's paid for.",
    "Then, ask the client to inspect the car at pickup and report any problem before she signs off. Make sure she leaves with the calibration report and the warranty.",
    "After that, tell the rental company and the adjuster the return date. If she keeps the rental two extra days after pickup, those days are hers.",
    "Finally, log the completion in the CMS, keep the final invoice, payment record and calibration report in the file, and move to the closing items."
   ],
   "ask": "Your turn: the client picks up her repaired car Friday afternoon. Tell us when the rental should go back and exactly who you notify."
  }
 }
});
