/* Day 4 — hand-written spoken scripts for Presenter view, one per topic (the day's slides are its Canva deck).
   Same format as the EA/PA course: four beats — why (the punchline) · talk (plain spoken explanation)
   · walk (the points in order: First, Next, Then, After that, Finally) · ask (a question or action for the room). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "4::When Is It a Total Loss?": {
  "p1": {
   "why": "A total loss is about repair cost versus value, and once a car is totaled, the fight is over what it was worth.",
   "talk": "A car is a total loss when repairs cost too much compared with its actual cash value, or ACV. States set the rule, either a percentage threshold, 75 percent in our training state, or a formula where repairs plus salvage reach the ACV. A carrier can also total a car below the threshold, for example for frame or airbag damage. From then on, the claim is about paying the car's value, not fixing it.",
   "walk": [
    "First, get the repair total, estimate plus supplements, and the carrier's ACV. Miss a supplement and your math is wrong.",
    "Next, divide repairs by ACV and compare with the state threshold. Use the right ACV, because a low one makes a repairable car look totaled.",
    "Then, ask the adjuster for the total-loss decision and the valuation report in writing. Without the report, you can't check their number.",
    "After that, explain what a total loss means and what's next: valuation, payoff and title. Don't say \"they're totaling it\" before the carrier confirms, because you may have to take it back.",
    "Finally, have the client remove and photograph her personal items before the car goes to salvage. Once it's gone, so is the proof."
   ],
   "ask": "Your turn: repairs are $24,860, Crestline's ACV is $25,147, and ours at LSH is about $31,182. At 75 percent, is Angela's RAV4 a total loss either way, and where does that put the fight?"
  }
 },
 "4::Actual Cash Value (ACV)": {
  "p1": {
   "why": "ACV is what the car was worth the moment before the crash, not what the client paid and not what she owes.",
   "talk": "Actual cash value is the vehicle's market value immediately before the loss. We work it out from comparable vehicles with the same year, make, model, trim and options, similar mileage and condition, in the client's local market. In a total loss, the client is owed that ACV plus, where the state requires it, sales tax and title and registration fees. Clients often think of the purchase price or the loan balance, so part of our job is replacing those with the right number.",
   "walk": [
    "First, start from the vehicle's exact identity: year, make, model, trim, drivetrain, options and mileage. Get one wrong and every comparable is off.",
    "Next, find comparable vehicles for sale, or recently sold, near the client. Local matters, because that's the market she'll be replacing her car in.",
    "Then, adjust only for real differences, like mileage and options. A guess is easy for the adjuster to knock down.",
    "After that, add the tax and fees the state requires, and keep the window sticker, options list and maintenance records in the file.",
    "Finally, explain ACV to the client early. If she believes the loan balance is what she'll get, that surprise lands at the worst possible moment."
   ],
   "ask": "Angela paid $34,200 for the RAV4 in 2023, and she owes $19,850. What is she owed in a total loss, and how would you explain that to her in two sentences?"
  }
 },
 "4::Reading a Valuation Report": {
  "p1": {
   "why": "A valuation report is the carrier showing its work, and every number in it is only as good as the fact behind it.",
   "talk": "The valuation report is how the carrier got to its ACV: the loss vehicle's details, the comparables, the adjustments and the totals. The base value is the average of the adjusted comparables, and the settlement total is ACV plus tax and fees, minus a deductible only on a first-party claim. Every number traces back to a fact, so if the fact is wrong, the number is wrong. Our job is to check every line against what's in our file.",
   "walk": [
    "First, request the full valuation report, not just the total. You can't audit a number you can't see.",
    "Next, check the loss vehicle's details against the registration, the window sticker and the odometer photo. A wrong trim or inflated mileage here drags down every line after it.",
    "Then, check each comparable for trim, drivetrain, year, mileage and distance, and check every deduction, like condition or prior damage, for actual proof.",
    "After that, check tax, title and fees against the state's rules. If they're missing, that's the client's money left out of the total.",
    "Finally, list every error with the document that proves it, and keep the report and your audit side by side in the CMS. Negotiating the total without auditing the lines is just trading opinions."
   ],
   "ask": "Crestline's report, VR-26-18840, lists Angela's car as an XLE with 34,812 miles. Which two documents prove it's really an XLE Premium with 28,412 miles?"
  }
 },
 "4::Auditing the Valuation: The Common Errors": {
  "p1": {
   "why": "Most low valuations come from the same handful of errors, and every one of them has a document that corrects it.",
   "talk": "Auditing a valuation means matching errors to proof. The usual suspects are a wrong trim, missing options, wrong mileage, comps that don't compare, a condition deduction with nothing behind it, prior damage that really came from this crash, and tax, title and fees left off. Alone they look small, but a wrong trim, higher mileage and two deductions can add up to several thousand dollars.",
   "walk": [
    "First, prove trim and options with the window sticker, dealer invoice or a VIN decode, and mileage with the odometer photo, inspection report or service records. A lower trim or higher miles means a lower value.",
    "Next, reject any comp that doesn't match on year, trim, drivetrain, similar mileage and local market. One bad comp pulls the whole average down.",
    "Then, challenge each deduction: ask for the inspector's notes and photos behind a condition deduction, and use photos and the police report to show that \"prior\" damage came from this loss.",
    "After that, cite the state requirement for tax and fees, because they're the client's money, not a favor.",
    "Finally, write the audit line by line: the line, their number, the error, the proof and the correction. Stay precise and calm, because the adjuster will fix a documented error faster than an argument that \"it's worth more.\""
   ],
   "ask": "Your turn: which of these errors show up on Crestline's report for Angela's RAV4, and how much do the two deductions alone cost her?"
  }
 },
 "4::Building the Counter: Comparable Vehicles": {
  "p1": {
   "why": "A counter is only as strong as its comparables, and three good ones beat ten loose ones.",
   "talk": "A good comparable matches the loss vehicle on year, model, trim, drivetrain, options and mileage, and it's local and recent. For Angela that means a 2022 RAV4 XLE Premium AWD, not an XLE AWD and not an LE FWD. As rules of thumb, keep mileage within about 5,000 to 10,000 of hers, distance within about 50 to 100 miles, and listings or sales from the last 30 to 90 days. The adjuster will test every comp you send, so send only the ones that pass.",
   "walk": [
    "First, search local listings for the same year, model, trim and drivetrain. If the trim or drivetrain is off, it isn't a comp.",
    "Next, keep only the ones with similar mileage and the same packages. \"Close enough\" is how a counter gets picked apart.",
    "Then, save each listing with a screenshot, the VIN, price, mileage, dealer and date. Listings disappear, and a comp you can't prove is easy to ignore.",
    "After that, average the prices of the true comparables. If any of the carrier's own comps are real matches, use them too.",
    "Finally, show your exclusions: \"We excluded the Limited, a higher trim, and the 2020, a different year.\" Padding the average with a higher trim discredits the whole counter, and your credibility with it."
   ],
   "ask": "You found five listings: three 2022 XLE Premium AWDs, a 2022 Limited, and a 2020 XLE Premium. Which ones go in the counter, and why?"
  }
 },
 "4::Proving Options, Condition & Mileage": {
  "p1": {
   "why": "The carrier values what it can see in the file, so options, condition and mileage you can't prove simply don't count.",
   "talk": "If nothing in the file shows the moonroof or the weather package, the valuation won't either. Mileage is proven by the odometer photo, the inspection and service records, and recent major purchases like tires or brakes can support a value adjustment when there are receipts. This is where good intake pays off. Angela's odometer photo from 09/21 shows 28,412 miles, and that one photo does a lot of work in the counter.",
   "walk": [
    "First, ask the client for the window sticker, purchase documents or the dealer invoice. That's what proves the trim and the factory packages.",
    "Next, ask for maintenance records and receipts for recent work. They show care and mileage over time, and they can back up a value adjustment.",
    "Then, collect clear photos of the odometer, the interior and the exterior, plus any pre-loss photos the client has. Do it on Day 1, because once the car is at the salvage auction, you can't go back for an odometer photo.",
    "Finally, send the proof with the counter, labeled to match your audit line by line, like \"Exhibit B, odometer 28,412.\" When the adjuster can find the proof in seconds, the correction is much harder to refuse."
   ],
   "ask": "Crestline deducted $620 for \"interior below average.\" What do you send them, and what do you ask them to send you?"
  }
 },
 "4::Tax, Title & Fees": {
  "p1": {
   "why": "Tax, title and fees aren't extras, because in many states they're part of what the owner is owed so she can actually replace the car.",
   "talk": "Many states require a total-loss settlement to include sales tax and title and registration fees. Some states pay the tax only when the owner proves she bought a replacement, so know your state's rule. The deductible comes off only on a first-party collision claim. Angela's is a third-party claim, so her deductible is zero.",
   "walk": [
    "First, apply the state sales-tax rate to the ACV, and check the carrier's rate against the client's county or city rate. In our training state that's 8.25 percent, so on our counter ACV of $31,181.67 the tax is $2,572.49.",
    "Next, add the state title, registration and plate-transfer fees. For Angela that's $356.",
    "Then, subtract the deductible only on a first-party claim. Take one off a third-party claim and you've shorted the client.",
    "After that, show the math line by line in the counter, rounding to the cent only at the end of each line. For Angela, the total vehicle claim comes to $34,110.16.",
    "Finally, never accept a total that leaves the fees off. That $356 is the client's money."
   ],
   "ask": "Crestline's offer is $25,147 plus $2,074.63 in tax, for $27,221.63. What's missing, and what should the total be even on Crestline's own ACV?"
  }
 },
 "4::Loans, Lienholders & GAP": {
  "p1": {
   "why": "When the car is financed, the lender gets paid first and the client gets what's left, so the payoff has to be exact.",
   "talk": "If there's a loan, the lienholder is paid first from the settlement, up to the payoff, and the client gets the equity: the settlement total minus the payoff. Payoff letters expire, and after the good-through date the payoff grows by a daily amount, the per diem. If the loan is bigger than the ACV, that's negative equity, and the client either has GAP coverage or owes the difference.",
   "walk": [
    "First, request a 10-day payoff letter: the payoff amount, the good-through date, the per diem and where to send payment. Without it, you're guessing at the number the lender holds us to.",
    "Next, calculate the client's equity, settlement minus payoff. That's the number she actually cares about.",
    "Then, track the good-through date as a hard deadline in the CMS. If payment goes out later, get an updated payoff or add the per diem, or the lender rejects the payment as short.",
    "After that, ask the carrier to pay the lienholder directly and the client the balance. Then coordinate the title: the lienholder releases it to the carrier, and the client signs what's needed.",
    "Finally, if the loan is bigger than the ACV, treat it as a client crisis. Check for GAP right away and tell the attorney."
   ],
   "ask": "Your turn: Angela's payoff is $19,850.42, good through 10/15, then $3.10 a day. Payment goes out 10/20. What's the payoff, and what does Angela get from $33,534.63?"
  }
 },
 "4::The Negotiation Framework": {
  "p1": {
   "why": "PD negotiation is won with documents, not volume, because the side with the better proof usually gets the better number.",
   "talk": "We anchor with our documented counter and make the adjuster justify their numbers line by line. The adjuster is a professional counterpart, not an enemy, so we stay calm, specific and polite. That means the audit, the comps, the math and the proof are all ready before we pick up the phone. And remember the line we don't cross: we negotiate the numbers, but the client, advised by the attorney, decides whether to accept.",
   "walk": [
    "First, send the written counter, then call to walk the adjuster through it. They should have your proof in hand before the conversation starts.",
    "Next, lead with the biggest, clearest errors, like trim, mileage and fees. Starting on your strongest ground sets the tone for everything after.",
    "Then, ask for their basis, like which comps support that number and why the deduction, and use silence. Let the adjuster answer your why.",
    "After that, move only on points your documents don't support, and ask for something in return. Splitting the difference just to finish the call gives away the client's money.",
    "Finally, summarize every agreement in an email the same day, and take any final offer to the attorney and client. Never accept on the call, because that decision isn't ours to make."
   ],
   "ask": "Your turn: Priya Shah, the adjuster on Angela's valuation, offers to fix the trim but not the mileage. What do you say?"
  }
 },
 "4::Handling Adjuster Tactics": {
  "p1": {
   "why": "Adjuster tactics are predictable, and every one of them has a calm, factual answer that brings the conversation back to the documents.",
   "talk": "You'll hear the same moves: the system sets the value, we need a decision today, the rental ends in three days, let's split the difference. The answer is almost always a question or a fact from your audit. Time pressure is never a reason to accept a number without the attorney and the client, so keep a tactics cheat sheet next to your phone.",
   "walk": [
    "First, recognize the tactic. Naming it keeps you from just reacting.",
    "Next, respond with a question or a fact. If they say \"take it or leave it,\" ask which comparables support their number and point to ours: three 2022 XLE Premium AWDs within 41 miles.",
    "Then, redirect to the documents and the next step. If they say their system sets the value, ask them to correct the inputs, since the trim and mileage are wrong, and ask who can re-run it.",
    "After that, push back on a rental cut-off: the offer used the wrong vehicle, so it isn't a fair offer, and the rental should run until the corrected offer. Log any tactic that affects the client in the CMS.",
    "Finally, if the adjuster goes silent, follow up in writing with a date and escalate to the supervisor after two tries. Don't lose your temper, because that moves the conversation away from the documents."
   ],
   "ask": "Priya Shah says, \"Our valuation vendor is independent. We can't override it.\" What's your answer?"
  }
 },
 "4::Client Authority & Communicating the Offer": {
  "p1": {
   "why": "We negotiate and we explain, but only the client can accept a settlement, and only with the attorney's advice.",
   "talk": "When an offer comes in, the client needs the numbers in plain language: the total, the payoff, her equity, and what happens to the rental. Put the rental end date in the same message, because that's the client's most urgent concern. The decision itself is never ours. Written authority protects both the client and the firm.",
   "walk": [
    "First, summarize the offer in writing: ACV, tax, fees, the total, the payoff and the client's equity. Show the split, what goes to the lienholder and what comes to her.",
    "Next, explain what was corrected and what wasn't, in plain words. She should understand how the number was built, not just the number.",
    "Then, set a call with the attorney for the client's decision. Never say \"I'd take it\" or \"you should hold out,\" because that's advice, and advice comes from the attorney.",
    "After that, get written authority, by email or a signed form, before telling the carrier anything is accepted. Saying \"we accept\" before the client authorizes it is exactly the mistake written authority prevents.",
    "Finally, tell the client the next steps: the release, the title, payment timing and the rental end date."
   ],
   "ask": "Angela asks you, \"Is $33,534.63 good? Should I take it?\" What do you say, word for word?"
  }
 },
 "4::Rental, Personal Property & Other Items in a Total Loss": {
  "p1": {
   "why": "The car's value isn't the only thing on the claim, and anything we don't list before the release may be waived.",
   "talk": "In a total loss, the rental, tow, storage, personal property and aftermarket equipment are all part of the PD claim. They have to be settled before the PD release, and anything not listed may be waived, so we list everything first. The rental ends a set time after the offer, so we push for an extension when the offer was wrong. And after a moderate or severe crash, most car seat manufacturers and safety agencies say replace the seat.",
   "walk": [
    "First, keep a PD damages list: the vehicle, rental, tow, storage, personal property and any other items. That list is your checklist against the release.",
    "Next, ask specifically about car seats, phones, laptops, tools and sports gear, and submit receipts or values for each, because these are easy to miss.",
    "Then, confirm the tow yard's final bill and the rental company's final invoice. Tow and storage are paid directly to the yard, so get the final number right.",
    "After that, make sure the client removes her belongings, and the license plate if the state requires it, before salvage pickup. Once the car is gone, so is anything in it.",
    "Finally, match the damages list to the release on Day 5. If the release lists only the vehicle, the car seat claim disappears."
   ],
   "ask": "Your turn: Angela left her child's car seat in the RAV4, and it cost $289.99. How do you claim it, and what proof do you need?"
  }
 },
 "4::When You Can't Agree: Escalation & Appraisal": {
  "p1": {
   "why": "When a negotiation stalls, we escalate step by step and in writing instead of letting it drift.",
   "talk": "Escalation is a tool, not a threat, and we use it when the documents support us. It usually starts with a supervisor review. First-party policies usually have an appraisal clause, where each side hires an appraiser and an umpire settles the differences. Unreasonable handling may be reported to a regulator, and third-party disputes may end in small claims or a lawsuit, but those are the attorney's decisions, not ours.",
   "walk": [
    "First, request a supervisor review in writing, with your audit and the adjuster's responses attached. A supervisor can only act on what's in front of them.",
    "Next, document every unanswered request and every missed deadline. That record is what makes an escalation credible.",
    "Then, on a first-party claim, explain the appraisal clause to the attorney as an option. Whether to use it is the attorney's call.",
    "After that, escalate to the attorney with a short memo: the numbers, the gap and what's been tried. A short memo gets read and acted on.",
    "Finally, keep the client informed and mobile while you escalate, which means keeping the rental going. The pitfall is letting a stalled negotiation drift for weeks, and it's the client who pays for that wait."
   ],
   "ask": "After two calls, the adjuster has fixed only the fees. When do you escalate, and what goes in your memo?"
  }
 }
});
