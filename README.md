# LSH Property Damage Claims Training (5-Day)

The Property Damage (PD) version of the LSH training portal, for PD Specialists at personal-injury law firms. It runs on the same engine as the EA/PA and Case Management portals (sign-in and approvals, lessons as slides, Knowledge Checks, the random Task simulator, AI-graded practice, Live Roleplay, Presenter view, SOP run of show, feedback, rankings, certificates and admin tools). All the content is property damage, built around one running claim.

It is a separate training module with its own repository and its own Cloudflare Worker, like the Case Management course. Live at https://propertydamageclaimstraining.legalsupporthelp.workers.dev/ and listed on the LSH Training Portal's Training Index as **Property Damage Claims Training**. It started in a folder of EA-PA-TRAINING and moved here.

## The running claim: Angela Carter

On Friday 09/18/2026, Angela was stopped at a red light when Kevin Hale, driving his mother's Ford Explorer, rear-ended her 2022 RAV4 XLE Premium. Her car went to a tow yard at $65 a day. Crestline Mutual (the at-fault carrier) wants a recorded statement and hasn't decided liability. Over five days the trainee takes the claim from the intake sheet to the final payment:

- opening the claims;
- a rental under her own coverage, then under Crestline's;
- moving the car out of storage;
- a $9,480 estimate that becomes $24,860 after teardown, and a total loss;
- a wrong valuation ($27,221.63), countered at $34,110.16 and agreed at $33,534.63;
- a "Release of All Claims" to mark up, an expired payoff letter, and the close-out.

The facts are in `build/pd_casefile.js` (the Claim File page). The AI grader reads the same file.

## What's in it

| Area | Where |
|---|---|
| **Day slides: the Canva decks** | `js/pd-canva.js`: each day's slides are that day's Canva deck, embedded in the slideshow in place of the written Task Overview and topic slides, and the first thing a day shows — 🎨 Day N Slides → (Day 1: Meet the Claim) → Quick Checks → Skill Builders → Trainer Checkpoint → Knowledge Check. Opening a day goes straight to the deck (the "Before you start" overview is under 📋 Objectives); positions saved under the old slide list are moved to the deck once. The decks are embedded, never linked: there's no "Open in Canva" link anywhere in the course. The embed uses Canva's own embed settings, with no sandbox: a sandboxed frame shows the first page, but its player can't turn the pages. On the deck, ← → turn its pages; Next moves on. To swap a deck, paste the design ID and view token from its share link into `PD_CANVA_DECKS`. |
| **Deck pages** (a day's deck, one slide per page) | Once a day's deck is downloaded from Canva (**Share → Download → PDF Standard**, or PNG with all pages as a ZIP) into `decks/` with the day in its name (`Property Damage Claims DAY 1.pdf`), `python3 build/deck_pages.py` (needs `pip install pymupdf pillow`) writes one image per page to `slides/dayN/` and lists the day in `js/deck-pages.js`. That day's slides are then its pages, one step each, in place of the Canva embed: Next → / ← Previous, ← → and a click on the slide turn them; in **Presenter view** Next → turns the slide the room sees, the live copy follows, and the notes panel shows that page's speaker notes and scenario (`js/deck-notes/dayN.js`; a page without notes offers the day's topic scripts); in the slides window, a click or ← → does the same. Audio mode reads each page's speaker notes. Saved positions move to the same place in the new list. `decks/` isn't published with the site. When a deck changes in Canva, download it again and re-run the script. |
| **Days 1–5 lessons** (65 topics, 15 Quick Checks, 75 Knowledge Check questions) | `build/day1.js` – `build/day5.js`. The topics no longer show as slides (the Canva decks do), but they still feed the Quick Checks, Knowledge Checks, the day's Objectives and the trainer's talking points in Presenter view |
| **Skill Builders** (one per day, 4 parts each) | registry in `build/pd_practice_tools.js`; the exercises are in `js/pd-skillbuilders.js` |
| **📁 Documents** (21 claim documents, 4 templates, 5 handouts — all mock PDFs) | generated into `documents/` by `build/make_documents.py`; every page is marked *TRAINING — MOCK DOCUMENT*. Metadata and trainer audit keys in `js/pd-documents.js` |
| **🧪 Practice** | `js/pd-practice.js`: every day has three columns — 🧠 Skill Builder, 🗣 Communication (Call Simulator line + roleplay), 🗂 Systems (the CMS) |
| **🔥 Live Roleplay** | `build/pd_roleplay.js`: 14 situations with clients, adjusters, tow yards, rental counters and lenders, plus a live call inside each Skill Builder |
| **📞 Call Simulator** | the LSH Training Portal's shared Call Simulator, Property Damage pack (Training-Portal `simulators/call-pack-pd.js`), opened with `?program=PD` |
| **Trainer scripts** (Presenter view, Admin → Trainer Cues, Speaker Notes PDF) | `js/slide-scripts/day1.js`–`day5.js`, hand-written in the EA/PA course's format: one script per topic with four beats — ① the why, ② talk it through, ③ walk through it (First, Next, Then, Finally), ④ ask the room — plus the topic's scenario. `js/pd-scripts.js` shows them: on the Canva deck step, Presenter view steps through the topics with Next → / ← Previous (then on to the Quick Checks), while the deck itself moves in the slides window. |
| **Deck speaker notes** (per Canva page) | `js/deck-notes/dayN.js`: the speaker notes for every page of a day's Canva deck, edited from the deck's own notes, with a scenario for the room on every page (`window.DECK_NOTES[day] = [{page, title, notes, scenario}]`). When a day has them, Presenter view follows the deck page by page (Next → / ← Previous, a page picker), and Admin → Trainer Cues and the Speaker Notes PDF list them; days without them use the topic scripts. Day 1: all 50 pages. The `notes` text can be pasted back into Canva's notes panel as is. |
| Portal features (Presenter view, SOP, top bar) | `js/pd-updates.js`, a PD copy of the CM course's `js/cm-updates.js`. In the slides window the Canva deck stays live: a resize, full screen or a reconnecting presenter doesn't reload it or send it back to page 1, and ← → pressed there turn its pages. The console's live copy shows a note instead of a second deck. |
| 🏠 Main Portal (admins) | `js/portal-link.js`, the same file in every LSH course repo: while an admin is signed in, **🏠 Main Portal** in the top bar and **← Back to Main Portal** on the Admin screen open the LSH Training Portal's Training Directory (`https://cm-training-activity.pages.dev/programs.html`). Change it in all the course repos. |

### The days

| Day | Topic | Skill Builder |
|---|---|---|
| 1 | PD claims foundations and setting up the claim | **Claim Setup Challenge**: audit the intake packet (a transposed VIN, an expired at-fault dec page, the storage clock), choose the claims and actions for today, make the first carrier call and write the claim setup note, then the day-one client call and the CMS file |
| 2 | Coverage: reading the policy and spotting coverages | **Coverage Spotter**: match each loss to the coverage that pays it, verify both dec pages, five "what if" files (hit-and-run, uninsured, excluded driver, limits too low), and a coverage memo to the attorney and the BI Case Manager |
| 3 | Rental, storage, inspections and repairs | **Rental, Storage & Repair Desk**: rental math (who pays which days), who pays each charge, the storage bill, a line-by-line estimate review (aftermarket parts, labor rate, missing scans and radar calibration), and the email to the adjuster |
| 4 | Total loss, valuation and negotiation | **Total Loss Valuation & Counter**: audit the valuation, pick the true comparables, build the counter (ACV, tax, fees, payoff, equity), write the counter letter, then negotiate live |
| 5 | Releases, payment, subrogation and closing | **Release Review & Close-Out**: mark up a "Release of All Claims" to PD-only, route the payment with an expired payoff letter, run the closing checklist, and write the closing note and BI handoff |

Auto-graded parts check against keys taken from the documents. Every key scores 100% when answered correctly; this was tested with `window.__pdUI`. Written parts use the portal's 100-point AI rubric with PD-specific criteria.

### Call Simulator: Property Damage pack

There are 16 calls across five lines. Each one ends with the note that kind of call requires, graded with the call:

| Line | Calls |
|---|---|
| 📋 Claim Setup | Open the third-party PD claim · open the first-party rental claim · Angela's PD intake call |
| 🛡 Coverage & Liability | Verify the at-fault policy (expired dec page) · spot the client's coverage (her agent) · liability still under investigation |
| 🚙 Rental, Tow & Shop | Rental authorization after liability · the rental counter · the tow-yard release · the supplement stall |
| 💵 Negotiation & Total Loss | Negotiate the total loss · "My rental ends Thursday" · the payoff call |
| ✍️ Settlement & Close | The "standard release" · "Should I take it?" · the subrogation follow-up |

The course opens it at `https://cm-training-activity.pages.dev/simulators/call.html?program=PD` with the trainee's name and batch. Until the Training-Portal change that adds the pack is deployed, that page shows the other programs' calls. Admins can change the address in **🧰 Tools → Admin: tool addresses**.

## Building

`index.html` is generated from the **Case Management course's** `index.html` (Case-Management-Training, last built from its `main` at `f02d92c`). That page is itself generated from the EA/PA portal, so the chain is EA/PA → CM → PD. To pick up engine changes:

```
python3 build/make_documents.py                                     # only if the claim documents changed (needs Node + Playwright: it prints the PDFs)
python3 build/build.py ../Case-Management-Training/index.html      # path to the CM course's index.html
```

`build.py` rewords the CM page for PD, then inserts the PD content from `build/`. Every edit checks that its anchor exists, so the script stops with an error if the CM page changed that part. When that happens, update the anchor in `build.py` and run it again. Carry new features from the CM course's `js/cm-updates.js` and `js/cm-skillbuilders.js` into `js/pd-updates.js` and `js/pd-skillbuilders.js` by hand. `js/daily-activities.js` is the same file as in the CM course.

**Content source:** the topics, Quick Checks and Knowledge Checks were written for this build from standard PI-firm PD claims practice; the slides trainees see are the Canva decks (Day 1 is the deck titled "Property Damage Claims DAY 1"; Days 2–5 are still to be confirmed from the decks). The decks couldn't be opened from the build environment, so before the first live batch, check that each day's deck is the right one and that the Quick Checks and Knowledge Check questions in `build/day1.js`–`day5.js` match what the deck teaches.

## Checks

`.github/workflows/checks.yml` runs on every pull request and every push to `main`:

- JavaScript syntax, local files and JSON (`check-site.mjs`)
- every claim document and handout exists, and every document packet points at a real document (`check-data.mjs`)
- `wrangler deploy --dry-run`
- a browser smoke test that signs in and renders every slide, Knowledge Check, page and Skill Builder part at desktop and phone width (`smoke.cjs`)

To run them locally:

```
node .github/scripts/check-site.mjs
node .github/scripts/check-data.mjs
node .github/scripts/server.mjs 8787 &
node .github/scripts/smoke.cjs http://localhost:8787/
```

The smoke test needs Playwright.

## Deploy (Cloudflare Workers)

1. In Cloudflare → Workers & Pages → Create, import this repository (leave the root directory as the repository root). The Worker is `propertydamageclaimstraining` (the `name` in `wrangler.json` must match the Worker name in Cloudflare), so the course is at `https://propertydamageclaimstraining.legalsupporthelp.workers.dev/`.
2. KV: the Worker binds the same `LSH_KV` namespace as EA/PA and CM. **All PD keys are stored under a `pd:` prefix**, so PD trainees, progress and settings never mix with EA/PA (no prefix) or CM (`cm:`). To use a separate namespace, change the `id` in `wrangler.json`.
3. Secrets (the same as the CM course):
   - `ADMIN_PASSPHRASE`: admin sign-in; turns on secure mode.
   - `GEMINI_API_KEY10`: the PD course's own Gemini key, for AI grading and roleplays. If it isn't set, the Worker falls back to `GEMINI_API_KEY`.
   - `SESSION_SECRET`: optional.
4. To have the Training Portal's **Progress & Feedback** page list PD trainees, add the program to `PROGRAMS` in the portal's `functions/api/program-progress.js` with key prefix `pd:`, 5 days and the course address.
