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
| **Deck pages** (a day's deck, one slide per page) | Every day's slides are its Canva deck's pages, one step each (Day 1: 50, Day 2: 59, Day 3: 34, Day 4: 46, Day 5: 40), as images in `slides/dayN/` listed in `js/deck-pages.js`. Next → / ← Previous, ← → and a click on the slide turn them; in **Presenter view** Next → turns the slide the room sees, the live copy follows, and the notes panel shows that page's speaker notes and scenario (`js/deck-notes/dayN.js`; a page without notes offers the day's topic scripts); in the slides window, a click or ← → does the same. Audio mode reads each page's speaker notes. Saved positions move to the same place in the new list. **When a deck changes in Canva:** `node build/capture_canva.cjs [day…]` captures its pages from the view link in `PD_CANVA_DECKS` (Playwright; writes `decks/capture/dayN/`, not committed), then `python3 build/deck_pages.py --src decks/capture [day…]` (`pip install pymupdf pillow`) converts them and updates the list and its `?v=`. A PDF or PNG ZIP downloaded from Canva into `decks/` (day in the name) works too. **Real people's details** on the sample documents in the decks (names, addresses, phone numbers, emails, VINs, plates, policy and claim numbers) are blurred by the converter, per `build/deck_redactions.json` (day → page → areas); after a deck's pages are added, removed or reordered, check those pages again. `decks/` isn't published with the site. |
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

## 🕘 Attendance

Trainers take each day's attendance in **Admin → 🕘 Attendance** (`js/attendance.js`). Trainees don't see it. It's the same file in every LSH course repo (EA-PA-TRAINING, Case-Management-Training, propertydamageclaimstraining, Foundational-Training); change it in all of them. The LSH Training Portal's admin **🕘 Attendance** page shows and edits the same records, for every program.

- **By batch:** one section per batch (newest first), listing its approved, active trainees, with a count of each status.
- **The day:** today's date in Eastern time (EST, or EDT in summer). ◀ ▶ step through the training days, and the date picker opens any day. The batch's **Day N** counts its days already logged; the trainer can change it.
- **Each trainee's row:** Name; **Training** (the lesson, "Day N: title": for the batch it starts as the day most of the batch is on, from their progress, and it can be changed for the batch or one trainee); **Time In / Time Out** in Eastern time (typed, or ⏱ Now; **Time In fills in on its own** the first time a trainee opens the course each day, marked "auto" until a trainer sets one, and saved when a trainer tags that trainee; trainers always tag the status); **Status**, tagged from the attendance sheet's dropdown in its colors (Present, Late, Late with Notif, Early Out - POC Approved, Undertime - POC Approved, Undertime - No Approval, NCNS, Sick Leave, RL, EOP, Absent with Notif; **✓ Mark the rest Present** tags everyone not yet tagged); and Notes.
- **Saving:** each change saves as you go. A save re-reads the day and writes only the rows changed on that screen, so two trainers can take one batch's attendance at the same time.
- **📊 Summary** (per batch): each trainee's count of every status over the batch's logged days, with the last 10 days as colored squares. **⬇ CSV** downloads a day (every batch) or a batch's history.
- **Google Sheet:** the LSH Training Portal keeps the attendance Google Sheet's **Platform Attendance** tab in step, both ways: everything here (automatic Time Ins included) goes to the sheet every 15 minutes, and edits made in the sheet to Training, Time In, Time Out, Status or Notes come back here straight away. See the Training Portal's README.
- **Storage:** `attendance:<batch key>:<YYYY-MM-DD>` (`_none` for no batch) = `{batch, date, day, training, rows:{<trainee id>:{name, training, timeIn, timeOut, status, note, at, by}}}`, under the Worker's `pd:` prefix. The Worker's `/api/checkin` records the automatic Time In: `checkin:<YYYY-MM-DD>:<trainee id>` = `{timeIn, at, name, batch, training}` is the automatic Time In (each trainee's own key, so a room signing in at once never overwrites one another; its KV metadata carries the same for the portal; kept 40 days). Only admins can read or write these records.

## 📉 Staying under Cloudflare's monthly request limit

The Cloudflare account is on **Workers Paid**: **10 million requests a month** for every Worker and Pages Function on the account, shared by every LSH site (this course's Worker, meaning everything under `/api/` and `/version`, plus the other courses, the CMS and the Training Portal). Static files (the page, `js/`, images, documents) don't count. Before the account reaches the limit, the EA/PA course's **Request budget** workflow (EA-PA-TRAINING, `.github/workflows/request-budget.yml`) switches the sites' servers off, this one included, until the next billing month. Usage is under **Workers & Pages** in the Cloudflare dashboard.

So an open page asks the server sparingly (`POLL` in `index.html`, the same as the EA/PA course), and not at all while its tab is in the background. When it's back, whatever came due runs then; a quick look at another tab (Google Meet) asks nothing:

| What | How often | Before |
|---|---|---|
| A trainee's access and the day's task (`startApprovalPolling`) | every minute: their record, read once (and the day's task on the dashboard) | every 45 s, the record read twice, also in the background |
| A Skill Builders attempt reset (`liveTick`) | every minute (the minute check above counts) | every 10 s |
| Trainer feedback and Focus items | every 2 minutes | every 45 s |
| Waiting for approval | every 15 s | every 8 s |
| Admin: Trainee Audit, Rankings, Trainee Feedback | every minute, every record in one request | every 30 s, one request per trainee |
| A new version (`/version`) | every 3 minutes (a new build is confirmed 20 s later) | every 45 s, also in the background |
| The facilitator voice for AI feedback | every 10 minutes, only while the tab is in view | every 10 minutes |

That's about 3 requests a minute for an open trainee page (it was about 12), and about 2 for an admin on the Trainee Audit, however many trainees there are (it was about 2 per trainee).

Lists of records (the Trainee Audit, Trainee Feedback, attendance, and every day's add-on lessons and activities when the page opens) are read with `/api/storage/get-many` (up to 100 keys; for each key, the same rules and `pd:` prefix as `/api/storage/get`), not one request per record. A trainee is signed out as revoked only when the server answers that their record is gone or not approved: a server that doesn't answer (offline, or over a limit) no longer signs anyone out.

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
- server requests (`requests.cjs`): `get-many` gives a trainee only their own and public records and an Admin every one, reads under the `pd:` prefix, and refuses more than 100 keys. With the checks sped up, a trainee's page loads every day's content in one request, reads their record and the day's task about once per check, checks for a new version rarely, and asks nothing while the tab is in the background (catching up when it's back) or on a quick switch to another tab and back. A server that doesn't answer doesn't sign the trainee out; a revoke does. The Trainee Audit and Trainee Feedback read every record in two requests.

To run them locally:

```
node .github/scripts/check-site.mjs
node .github/scripts/check-data.mjs
node .github/scripts/server.mjs 8787 &
node .github/scripts/smoke.cjs http://localhost:8787/
node .github/scripts/requests.cjs http://localhost:8787/
```

The smoke and requests tests need Playwright.

## Deploy (Cloudflare Workers)

1. In Cloudflare → Workers & Pages → Create, import this repository (leave the root directory as the repository root). The Worker is `propertydamageclaimstraining` (the `name` in `wrangler.json` must match the Worker name in Cloudflare), so the course is at `https://propertydamageclaimstraining.legalsupporthelp.workers.dev/`.
2. KV: the Worker binds the same `LSH_KV` namespace as EA/PA and CM. **All PD keys are stored under a `pd:` prefix**, so PD trainees, progress and settings never mix with EA/PA (no prefix) or CM (`cm:`). To use a separate namespace, change the `id` in `wrangler.json`.
3. Secrets (the same as the CM course):
   - `ADMIN_PASSPHRASE`: admin sign-in; turns on secure mode.
   - `GEMINI_API_KEY10`: the PD course's own Gemini key, for AI grading and roleplays. If it isn't set, the Worker falls back to `GEMINI_API_KEY`.
   - `SESSION_SECRET`: optional.
4. To have the Training Portal's **Progress & Feedback** page list PD trainees, add the program to `PROGRAMS` in the portal's `functions/api/program-progress.js` with key prefix `pd:`, 5 days and the course address.
