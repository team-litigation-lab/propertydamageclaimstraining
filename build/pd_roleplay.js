const ROLEPLAY_CATEGORIES = [
  {id:"client", icon:"🤝", label:"Client Communication", topics:[
    {id:"wheresmycar", label:"“Where's My Car?”", context:"Three days after the crash the client calls upset: she doesn't know where her car is, the tow yard called her about storage fees, and she has no way to get to work. The PD Specialist must calm her, explain the plan (claims, rental, moving the car) with dates, and tell her what to send — without promising values."},
    {id:"rentalends", label:"The Rental Ends Friday", context:"The rental company told the client her rental ends Friday. Her car was just declared a total loss and she hasn't found a replacement. The PD Specialist must explain the end-date rule, what extension is being requested and why, and what she'll pay if she keeps the car longer."},
    {id:"shouldtakeit", label:"“Should I Take It?”", context:"The carrier's corrected total-loss offer arrived and the client asks whether it's a good number and whether she should accept. The PD Specialist must explain the offer and the payoff split in plain words, give no opinion or advice, and set the attorney call for her decision."},
    {id:"upsidedown", label:"“I Owe More Than It's Worth”", context:"A different client's total-loss valuation is lower than his loan balance and he didn't buy GAP. He's panicking about still owing the lender. The PD Specialist must explain negative equity, check for GAP through the lender or dealer, and escalate to the attorney without making promises."},
    {id:"deductible", label:"“Why Do I Pay the Deductible?”", context:"Liability was denied, so the client's collision coverage is paying — minus a $1,000 deductible. She's angry she has to pay anything when the other driver caused it. The PD Specialist must explain the first-party path, subrogation and how the deductible is usually reimbursed."}
  ]},
  {id:"adjuster", icon:"🛡", label:"Adjusters & Coverage", topics:[
    {id:"liabilitystall", label:"Liability Still “Under Investigation”", context:"A week after the crash the at-fault adjuster still hasn't decided liability and won't authorize a rental. The PD Specialist must find out exactly what the adjuster is waiting for, supply the evidence (police report, citation, witness), get a decision date, and state the first-party plan meanwhile."},
    {id:"recordedstatement", label:"The Recorded Statement Ask", context:"The at-fault adjuster says they can't decide liability without a recorded statement from the client and asks for her cell number. The PD Specialist must decline direct contact, route the request to the attorney, and offer the written evidence instead."},
    {id:"takeitorleaveit", label:"Take-It-or-Leave-It Total Loss", context:"The total-loss adjuster says the valuation vendor is independent and the offer is final, and that the rental ends in three days either way. The PD Specialist must walk through the documented errors, ask for the valuation to be re-run, and request a rental extension because the offer was based on the wrong vehicle."},
    {id:"supplementdelay", label:"The Supplement Sits", context:"The body shop sent a supplement five days ago and the adjuster hasn't approved it or scheduled a reinspection; the rental is running. The PD Specialist must get a commitment date, ask for a rental extension, and escalate to the supervisor if needed."},
    {id:"releaseallclaims", label:"“Just Sign Our Standard Release”", context:"The adjuster sends a “Release of All Claims” for the PD payment and says it's their standard form and the BI language “doesn't matter.” The PD Specialist must refuse a release that includes bodily injury, request a PD-only release, and route it to the attorney."}
  ]},
  {id:"vendors", icon:"🚛", label:"Shops, Tow Yards, Rentals & Lenders", topics:[
    {id:"storagedispute", label:"The Tow Yard Won't Release the Car", context:"The tow yard won't release the client's car to her repair shop until someone pays $715 in tow and storage, and storage is still running at $65 a day. The PD Specialist must get the release requirements, arrange payment through the carrier (or the client's coverage), and schedule the move today."},
    {id:"rentalcounter", label:"“Your Insurance Didn't Authorize Anything”", context:"The client is at the rental counter and the agent says there's no authorization on file. The PD Specialist calls the branch: confirm the claim number and billing, find the reservation, and get the client on the road without her paying out of pocket."},
    {id:"shopsteering", label:"The Carrier Steers to Its Shop", context:"The adjuster tells the client her chosen shop “isn't in our program” and that repairs will be slower and not guaranteed unless she moves the car to their shop. The PD Specialist must protect the client's right to choose her shop and document the pressure."},
    {id:"lienholder", label:"The Payoff Letter Expired", context:"The settlement check is about to go out, but the lienholder's payoff letter expired five days ago. The PD Specialist calls the lender for an updated payoff, the per diem, the payment address and how the title will be released."}
  ]}
];
const ROLEPLAY_PERSONAS = [
  {id:"adjuster", label:"Crestline Mutual Adjuster", sub:"By-the-book / hard-line", desc:"Polite but firm; hides behind “the system” and “company policy,” uses rental cut-offs and deadlines, and only moves on documented facts."},
  {id:"client", label:"Stressed Client", sub:"Worried / frustrated", desc:"Without a car, worried about money and work; may be angry, confused, or ask for advice and guarantees; needs clear next steps and dates."},
  {id:"vendor", label:"Tow Yard / Rental / Lender Rep", sub:"Busy and procedural", desc:"Follows their own rules and paperwork; needs exact claim numbers, authorizations and payment details before doing anything."}
];

const CRISIS_SCENARIO_SETS = {
  pdSetup1: [
    {id:"daycall", title:"The Day-One Client Call",
     setup:"Angela Carter signed her retainer this morning. Her RAV4 is at A-1 Metro Towing ($65/day), she has no car, she has two kids to get to school, and Crestline hasn't decided liability.",
     stakes:"If the first call is vague, she'll call the other carrier herself — and storage keeps running.",
     script:`OPENING LINE (Angela, stressed): "Hi, it's Angela Carter. I don't even know where my car is right now, and the tow place left me a message about daily fees. How am I supposed to get my kids to school tomorrow?"
FOLLOW-UP PRESSURE: "Their insurance called me twice asking for a recorded statement. Should I just call them back and get it over with?"
CURVEBALL: "Honestly, how much do you think I'll get for the car? I still owe like twenty thousand on it."`,
     objective:{recommendation:"Lead with the plan and dates: the Crestline claim is open, a rental through her own Harbor Point coverage today (Crestline takes over once liability is accepted), the car moves to her chosen shop, and she should send photos, the odometer photo and her loan info. No statements to Crestline — everything goes through the firm. No value guesses.",
       risksTradeoffs:"Promising that Crestline will pay everything, or guessing the car's value, sets up disappointment. Letting her talk to Crestline risks a damaging recorded statement.",
       blufStatement:`"Here's the plan for today: I'm setting up a rental under your own policy so you're driving by this afternoon, and I'm moving your car out of the tow yard to stop those fees. Please don't talk to their insurance — send any calls to me."`}},
    {id:"statement", title:"The Recorded-Statement Push",
     setup:"You call Crestline to open the claim. The claims rep, Derek Lawson, says liability can't be decided without a recorded statement from Angela and asks for her cell.",
     stakes:"A represented client's statement is the attorney's decision; giving her number breaks the firm's control of the claim.",
     script:`OPENING LINE (Derek Lawson, friendly and quick): "Crestline Mutual, Derek Lawson. I've got the claim up — I just need a quick recorded statement from Ms. Carter. What's her cell? Five minutes, tops."
FOLLOW-UP PRESSURE: "Without her statement, liability stays open, and I can't authorize a rental."
CURVEBALL: "Can you at least tell me — did she stop suddenly on the yellow? My insured says she did."`,
     objective:{recommendation:"Decline direct contact and the statement (represented client; the attorney decides), send the LOR, offer the evidence instead — police report RPPD-26-091844, the Following Too Closely citation and witness Tom Nguyen — and ask what else he needs and his decision date.",
       risksTradeoffs:"Refusing without offering evidence can stall liability; arguing the facts yourself can create a statement.",
       blufStatement:`"Ms. Carter is represented, so all contact comes through us, and any statement request goes to our attorney. What I can send you today is the police report, the citation and an independent witness — when can you make the liability decision?"`}}
  ],
  pdCoverage2: [
    {id:"verify", title:"Verify the Expired Dec Page",
     setup:"The only at-fault dec page in the file shows Crestline's term 03/01/2026–09/01/2026; the crash was 09/18. You call Crestline to verify coverage.",
     stakes:"If the policy lapsed, Angela's own coverage becomes the path — today, not in two weeks.",
     script:`OPENING LINE (Crestline coverage rep, neutral): "Crestline Mutual policy services. How can I help?"
FOLLOW-UP PRESSURE: "I can't give out limits over the phone without the insured's authorization."
CURVEBALL: "The system shows the policy was renewed, but the payment posted on 09/19. I'd have to check with underwriting."`,
     objective:{recommendation:"Confirm the policy period in force on 09/18, the vehicle and the listed drivers (Kevin Hale); ask what's needed for a written limits disclosure; if a payment or lapse question exists, ask for the coverage position in writing, flag it to the attorney, and prepare the first-party path.",
       risksTradeoffs:"Accepting “there's coverage” without the date of loss in the question can leave the client with no recovery.",
       blufStatement:`"I need to confirm the policy was in force on September 18 — not just today. If there's any question about the payment date, please send the coverage position in writing so our attorney can review it."`}}
  ],
  pdRental3: [
    {id:"counter", title:"“No Authorization on File”",
     setup:"Angela is at the Metro Car Rental counter. The agent says there's no authorization and wants a $300 deposit plus a daily charge on her card.",
     stakes:"If Angela pays at the counter, she may wait weeks to be reimbursed.",
     script:`OPENING LINE (Metro Car Rental agent, busy): "Metro Car Rental, Harbor Blvd. I've got a Ms. Carter here but I don't see any insurance authorization. She'll have to put it on her card."
FOLLOW-UP PRESSURE: "The only thing I've got in that class is a standard SUV at fifty-eight a day."
CURVEBALL: "Does she want our damage waiver? It's eighteen a day."`,
     objective:{recommendation:"Give the carrier claim number and adjuster, ask the branch to search by claim number and direct bill, confirm the authorized rate/class, explain the upgrade difference and damage waiver are Angela's choice and cost, and get the reservation number.",
       risksTradeoffs:"Letting the client front the rental risks unpaid reimbursements; approving extras yourself commits her money.",
       blufStatement:`"This is an insurance replacement on Crestline claim CMI-26-0918-4471, direct bill at $45 a day. Please search by the claim number — Ms. Carter only pays if she chooses an upgrade or extras."`}},
    {id:"extension", title:"The Supplement and the Rental Extension",
     setup:"Riverside's supplement has sat with Crestline for 3 days. The rental is running and Derek Lawson says the rental will be cut off on Friday.",
     stakes:"Every day of delay is the carrier's delay — the client shouldn't pay for it.",
     script:`OPENING LINE (Derek Lawson, busy): "Derek Lawson. I saw the supplement — I haven't had time to review it. What do you need?"
FOLLOW-UP PRESSURE: "The rental's authorized through Friday. After that it's on her."
CURVEBALL: "If this supplement is as big as it looks, we're probably totaling it anyway."`,
     objective:{recommendation:"Get a review/reinspection date, request a rental extension because the delay is the approval (not the client), ask whether a total-loss evaluation is starting and when the valuation will come, and confirm everything in writing.",
       risksTradeoffs:"Accepting the Friday cut-off transfers the carrier's delay to the client.",
       blufStatement:`"The repair is waiting on your approval, not on Ms. Carter, so the rental needs to continue until the supplement is decided. Can you review it by tomorrow and confirm the extension in writing?"`}}
  ],
  pdTotal4: [
    {id:"negotiate", title:"The Total-Loss Negotiation",
     setup:"Crestline's offer is $27,221.63 (valuation VR-26-18840). LSH's counter is $34,110.16. You call Priya Shah, the total-loss adjuster.",
     stakes:"Each uncorrected error is Angela's money; the rental ends 10/08.",
     script:`OPENING LINE (Priya Shah, professional): "Priya Shah, total loss. I got your counter. Honestly, our valuation vendor is independent — I can't just override it."
FOLLOW-UP PRESSURE: "Your comps are dealer asking prices. Nobody pays sticker."
CURVEBALL: "I can fix the trim, but the mileage came from our inspector, so that stays. Final offer: add seven hundred."`,
     objective:{recommendation:"Walk the errors in order (trim/options, mileage with the odometer photo, the two bad comps, the unsupported condition and prior-damage deductions, the missing $356 fees), ask for the valuation to be re-run with correct inputs, trade only on points the documents don't support, request the rental extension (the offer wasn't based on the right vehicle), and take any number to the attorney and client.",
       risksTradeoffs:"Splitting the difference or accepting on the call gives away documented money and exceeds your authority.",
       blufStatement:`"I'm not asking you to override the vendor — I'm asking you to re-run it with the right car: an XLE Premium with 28,412 miles. The odometer photo and the window sticker are attached, and the fees are required by the state."`}}
  ],
  pdClose5: [
    {id:"release", title:"“It's Our Standard Release”",
     setup:"Crestline sent a “Release of All Claims” with bodily-injury language, an indemnity and a confidentiality clause, for one two-party check.",
     stakes:"Signing it could end Angela's injury claim.",
     script:`OPENING LINE (Derek Lawson, impatient): "Derek Lawson. I sent the release — it's our standard form. Just have her sign and I'll cut the check today."
FOLLOW-UP PRESSURE: "The BI part doesn't matter, it's just boilerplate."
CURVEBALL: "If you want a different form, it'll take another week."`,
     objective:{recommendation:"Refuse any release with bodily-injury language; request a PD-only release listing the vehicle and the car seat; ask for separate payments (payoff to Riverbank at the updated amount, the balance to Angela); route the indemnity and confidentiality clauses to the attorney; confirm in writing.",
       risksTradeoffs:"Speed isn't worth the BI claim; waiting a few days for the right form is.",
       blufStatement:`"We can't use a release that includes bodily injury. Please send your property-damage-only release with the vehicle and the car seat listed, and split the payment between Riverbank and Ms. Carter — I'll get it to our attorney the same day."`}}
  ]
};
