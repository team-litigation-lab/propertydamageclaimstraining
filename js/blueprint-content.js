/* 🛠 The Property Damage Claims course's Trainer blueprint (lsh-blueprint.js draws it; lsh-blueprint-course.js
   wires them in). Both decks live here: the Trainee blueprint is the 🧭 Orientation deck
   (js/pd-orientation.js opens it), drawn on the same cover and the same slide layout as the
   Trainer blueprint, and published at /blueprint.pdf.
   A slide is { icon, title, points: [...], where, tip }. Change the wording here; the page and the PDF are made
   from it each time, stamped with the deployed build. README → Blueprints. */
window.LSH_BLUEPRINT = {
  product: 'Property Damage Claims Training',
  site: 'LSH Property Damage Claims Training (5-Day)',
  file: 'LSH_PD',
  trainee: {
    sub: 'Your guide to the portal: the 5-day Property Damage Claims Training, day by day',
    slides: [
      { icon: '👋', title: 'Welcome to the program', points: [
          "Five days to work like a confident Property Damage Specialist — built around one realistic claim, Angela Carter's rear-ended 2022 RAV4, from Day 1 to Day 5.",
          'Learn: short topics across the five days.',
          'Practice: hands-on Skill Builders and live calls.',
          'Prove: a Knowledge Check each day — and a certificate at the end.',
          "You'll need Chrome or Edge on a computer, a headset with a microphone for the live calls, and a stable connection."],
        where: 'The portal opens from the LSH Training Portal; your dashboard is where you land.',
        tip: 'Your progress saves to your account automatically, so you can pick up on any computer.' },
      { icon: '🗺', title: 'Your 5-day roadmap', points: [
          'Five days, each with its topics and its Skill Builders, listed on your dashboard.',
          'Days open one at a time — each builds on the one before.',
          "Finishing a day's Skill Builders unlocks tomorrow.",
          'Every day you have finished stays open: press Review to go back to it any time.'],
        where: 'Your dashboard — the day cards, in order.',
        tip: 'Read the Claim File before Day 1: every lesson and exercise works that one claim.' },
      { icon: '🖥', title: 'How every day works', points: [
          '1. Lesson slides: one topic at a time, every slide the same size. Longer topics continue on a second page — watch for the PAGE 1 / 2 badge. Your place is saved.',
          '2. Quick Checks: short questions between topics. Pick, change your mind, then Check Answer.',
          '3. Skill Builders: do the real task. Graded with written feedback, and it auto-saves as you type.',
          '4. Knowledge Check: pass at 70% to mark the day complete ✓.',
          '5. The next day opens when you finish the Skill Builders.'],
        where: 'Your dashboard → Start (or Review) on a day.',
        tip: 'Didn\'t pass the Knowledge Check? That is a "not yet", not a "no" — you can still move on, and retake it any time. Your best score counts.' },
      { icon: '📷', title: 'Live sessions with your trainer', points: [
          "Your trainer presents the day's slides in Google Meet. They are the same slides you have in the portal — nothing extra to install.",
          'At each checkpoint your trainer pauses for discussion. Answer out loud — a first answer is never wrong, it is where the learning starts.',
          'Longer topics have a second page (PAGE 1 / 2). On your own, use Next or the ← → keys, 🔊 Listen, or ⛶ Full screen.',
          'Missed something live? Every slide stays in your portal — reopen the day any time and pick up exactly where you left off.'],
        where: 'Google Meet for the session; the same day in your portal afterwards.',
        tip: 'Keep the portal open on the day your trainer is presenting, so you can follow and re-read at your own pace.' },
      { icon: '📚', title: 'Your dashboard at a glance', points: [
          'Progress track: Days 1–5, ✓ = passed, 🔒 = not open yet.',
          'Day cards: Start or Review a day, with 💬 trainer feedback appearing on the card.',
          'Under the lessons, your scores band: completion, quiz average, days done, 💬 your feedback and your ranking.',
          'Resume takes you back to where you left off, and the certificate downloads from here when it is earned.',
          'The competency profile: eight skills that grow as your work is graded.'],
        where: 'Your dashboard — every sign-in lands on it.',
        tip: 'Check the day cards for 💬 at the end of each day: that is your trainer\'s feedback waiting.' },
      { icon: '🧭', title: 'Getting around', points: [
          '🎲 Tasks: surprise tasks from your trainer — acknowledge, plan and resolve before the timer ends. Graded.',
          "Claim File: Angela Carter's PD claim, the working file. Read it first. 📁 Documents holds every dec page, invoice, estimate, valuation and release, with its CMS upload category.",
          "🧪 Practice: every practice tool, the same way for each day — 🧠 Skill Builders on the claim documents, 🗣 Communication (the Call Simulator's Property Damage calls and live roleplay) and 🗂 Systems (the CMS).",
          'My Notes and Handouts: your private notes, downloadable as a PDF, and printable checklists and Excel templates for each day.',
          '🎯 Focus and 💬 Feedback: your trainer\'s priorities for you, and your say on what is working.'],
        where: 'The top bar. On a phone, everything is under ☰ Menu; Search finds any topic or tool.',
        tip: "Each day's tools open with that day, so you never have to hunt for the right one." },
      { icon: '🚗', title: 'The claim: Angela Carter — 2022 Toyota RAV4', points: [
          "Stopped at a red light, rear-ended by a driver looking at his GPS in his mother's Explorer.",
          'Her RAV4 is at a tow yard at $65 a day, she has no car, and the other insurer wants a recorded statement.',
          'Every lesson, Skill Builder, call and CMS exercise works this one claim.',
          'Read the Claim File before Day 1, then open the documents in 📁 Documents.',
          'The documents contain real-world errors — a transposed VIN, an expired dec page, a wrong valuation. Catching them is the job.',
          'Treat everything as confidential, like a real client file.'],
        where: 'Claim File and 📁 Documents in the top bar.',
        tip: 'Keep 📁 Documents open in a second tab while you work a Skill Builder.' },
      { icon: '🧪', title: 'Skill Builders: how grading works', points: [
          'First try is free: your first submission of each exercise never uses an attempt.',
          'Repeat attempts are shared across the whole program — use them wisely. Your trainer can reset them.',
          'Auto-saves: close the tab or switch devices — your work is still there.',
          'Feedback, not just a score: every graded submission shows strengths, what to change ("not this way — here\'s the better way") and next steps.',
          "Nonsense or copy-paste answers aren't graded."],
        where: '🧪 Practice in the top bar; each day\'s tools open with that day.',
        tip: 'Use the free first try to see what the grader is looking for, then do it properly.' },
      { icon: '📞', title: 'Live calls and roleplays', points: [
          '🎧 Use a headset. The caller speaks; you answer out loud (Chrome or Edge) or type.',
          "🔊 Can't hear the caller? Check your volume and press ↻ Replay.",
          '🙋 Hands-free mode listens automatically after the caller finishes.',
          '📞 Hang Up ends the call and gives you your evaluation.'],
        where: '🧪 Practice → 🗣 Communication, inside the day.',
        tip: 'Take the call somewhere quiet: background noise is what costs most people their score.' },
      { icon: '💬', title: 'Feedback, focus and your growth', points: [
          "Trainer feedback: your trainer writes feedback on each day's work — it lights up on the day card and in 🎯 Focus.",
          "🎯 Focus: your trainer's priorities for you, plus suggestions from your own work. Tick items off as you go.",
          'Competency profile: eight skills — accuracy, judgment, risk, efficiency, communication, composure, knowledge and real-time task handling.',
          'The profile grows as your work is graded, so it shows where you are strongest and what to build.'],
        where: '🎯 Focus in the top bar · the competency profile on your dashboard.',
        tip: 'Read the feedback on the day it arrives: it is far easier to act on while the task is fresh.' },
      { icon: '🏅', title: 'Earning your certificate', points: [
          'Pass all 5 Knowledge Checks (70% or better) and your Certificate of Completion unlocks — download it as a PDF from your dashboard.',
          'It shows your name exactly as you registered it, so check your spelling.',
          'Signed by your trainer, the Training Head and the General Manager.',
          '"With Distinction" for a 90% or better average.'],
        where: 'Your dashboard — the certificate sits beside Resume.',
        tip: 'Name spelt wrong? Tell your trainer before the end of the program, not after the certificate is issued.' },
      { icon: '🔒', title: 'Ground rules', points: [
          'Confidentiality first — never paste real client or firm information into any tool.',
          "AI is a tool, not the answer — its use depends on each attorney's preferences; always review its output.",
          'Your own work — the feedback only helps if it is your thinking.',
          'Stuck? Ask your trainer, or use 💬 Feedback to tell us what is unclear.'],
        where: 'Everywhere in the program.',
        tip: 'When a document and the claim file disagree, raise it rather than picking one — that is the judgment being graded.' },
      { icon: '🚀', title: "Let's begin", points: [
          '1. Sign in: last name, first name and your batch code.',
          "2. Read the Claim File: Angela Carter's PD claim.",
          '3. Open Day 1 from your dashboard and press Start.',
          'Questions before we start?'],
        where: 'The LSH Training Portal → this program → your dashboard.',
        tip: 'Stuck on anything? Message your trainer with your name, your batch and a screenshot — that is everything they need.' }
    ]
  },
  trainer: {
    sub: 'Running the 5-day Property Damage Claims course: the trainer side of the portal',
    slides: [
      { icon: '🔑', title: 'Signing in as a trainer', points: [
          'Admin sign-in with the admin password. The server checks it, and every request after it needs your signed session.',
          'Your top bar adds 🧭 Orientation, the Facilitator Guide, 👁 Trainee view and 🏠 Main Portal (back to the Training Portal\'s Training Directory).',
          'Admin is your trainer dashboard: Trainee Audit, 📁 Batch Folders, Rankings, SOP Reference, Trainer Cues, Content Studio, Trainee Feedback, 📋 Activities, 🗣 Feedback Style and 🕘 Attendance.',
          'Every day is open to you, so you can preview it before you teach it.'],
        where: 'Admin sign-in · Admin in the top bar.',
        tip: 'Trainees open the course from the Training Portal; you approve them here.' },
      { icon: '✅', title: 'Trainees and the Trainee Audit', points: [
          'Approve new trainees, or reject them. Revoke a trainee to close their access.',
          'Each trainee\'s day, Knowledge Check scores and Skill Builder work, by batch.',
          'Generate an AI review of their work, and reset a tool\'s attempts when they need another try.'],
        where: 'Admin → Trainee Audit.',
        tip: 'Approve the class before the first session, so nobody waits at the start.' },
      { icon: '💬', title: 'Day feedback', points: [
          'Write each day\'s feedback for a trainee, or let ✨ Suggest wording (AI) pre-fill it for you to edit.',
          'Save each day, or send all the drafts together. Trainees read it under 💬 Feedback.',
          'Trainee Feedback shows what trainees said about each day.'],
        where: 'Admin → Trainee Audit → a trainee · Admin → Trainee Feedback.',
        tip: 'One thing they did well, one thing to change: short and specific.' },
      { icon: '🎲', title: 'Surprise tasks and roleplays', points: [
          'Send a 🎲 Surprise Task built on the day\'s lessons and Angela Carter\'s claim. It\'s graded, and you can end it from Admin.',
          'Assign a 🔥 Live Roleplay: clients, adjusters, tow yards, rental counters and lenders.',
          'Both show up on the trainee\'s screen straight away.'],
        where: 'Admin → Trainee Audit → a trainee.',
        tip: 'Use a surprise task to check what the class found hard that morning.' },
      { icon: '🚗', title: 'The Claim File and the documents', points: [
          'Every lesson, Skill Builder and call works one claim: Angela Carter\'s 2022 RAV4.',
          '📁 Documents: 21 claim documents, 4 templates and 5 handouts, all marked as mock documents.',
          'Signed in as a trainer, documents show their 🔑 audit key: the errors planted in them. Trainees never see it.'],
        where: 'Top bar → Claim File · 📁 Documents.',
        tip: 'Use the 🔑 keys to check what a trainee caught and what they missed.' },
      { icon: '🧪', title: 'Practice and the Skill Builders', points: [
          '🧪 Practice: every day has a 🧠 Skill Builder, 🗣 Communication (a call and a roleplay) and 🗂 Systems (the CMS).',
          'Skill Builders are auto-graded against keys taken from the documents; written parts use the 100-point AI rubric.',
          'The Call Simulator\'s Property Damage pack: 16 calls across five lines, each ending with the note it needs.'],
        where: 'Top bar → 🧪 Practice.',
        tip: 'Assign the day\'s Skill Builder right after its lesson, while it\'s fresh.' },
      { icon: '🖥', title: 'Presenter view and the decks', points: [
          'Each day\'s slides are its Canva deck, one page per step, with speaker notes and a scenario for the room.',
          'Share only the slides window in Google Meet; your console shows the notes and the script.',
          'Resizing, full screen or a reconnect never reloads the deck or sends it back to page 1.'],
        where: 'A day → 🖥 Presenter view · Admin → Trainer Cues.',
        tip: 'Open it 15 minutes early, and share the slides window, not your screen.' },
      { icon: '📋', title: 'SOP Reference and Trainer Cues', points: [
          'SOP Reference: each day\'s session plan, run of show and script.',
          'Trainer Cues: the cues and the four-beat script for each topic, and the speaker notes PDF.',
          'The Facilitator Guide (top bar): how the course runs and what to say when.'],
        where: 'Admin → SOP Reference · Trainer Cues · top bar → Facilitator Guide.',
        tip: 'Read the next day\'s run of show the evening before.' },
      { icon: '🗂', title: 'Batch Folders, Rankings and Content Studio', points: [
          '📁 Batch Folders: each class in its own folder. Archive a finished batch to clear the list.',
          'Rankings: the class side by side, by progress and scores.',
          'Content Studio: each day\'s lessons, what\'s published and what\'s a draft; add or expand topics and publish them.'],
        where: 'Admin → 📁 Batch Folders · Rankings · Content Studio.',
        tip: 'Preview a change in 👁 Trainee view before the class sees it.' },
      { icon: '📝', title: 'Activities and the feedback style', points: [
          '📋 Activities: publish each day\'s activities and review the submissions.',
          'AI review drafts are written in the facilitator\'s voice; you edit them and send them.',
          '🗣 Feedback Style learns how you write feedback, from your own reviews.'],
        where: 'Admin → 📋 Activities · 🗣 Feedback Style.',
        tip: 'The more of your own reviews it learns from, the more the drafts sound like you.' },
      { icon: '🕘', title: 'Attendance, Trainee view and Orientation', points: [
          '🕘 Attendance: Time In fills in by itself when a trainee opens the course; tag each status and add notes.',
          'It stays in step with the attendance Google Sheet, through the Training Portal.',
          '👁 Trainee view shows the portal exactly as trainees see it.',
          '🧭 Orientation is the deck to share with trainees on day one. The blueprints themselves live on the Main Portal\'s 🧭 Blueprint page, never inside the program.'],
        where: 'Admin → 🕘 Attendance · 👁 Trainee view · 🧭 Orientation.',
        tip: 'The Trainee blueprint PDF republishes itself after every update; nothing to do by hand.' }
    ]
  }
};

/* The Handouts card describes this course: the shared engine still carries the EA/PA course's wording
   ("Ten days … Executive & Personal Assistant", a 10-day roadmap). Done here, not in index.html, so a
   rebuild of the page keeps it. The Trainee blueprint needs none of this any more — its slides are
   written for this course above. */
(function () {
  const days = () => (typeof DAYS !== 'undefined' ? DAYS.length : 5);
  const fix = (s) => String(s)
    .replace(/Ten days to work like a strategic, trusted Executive &amp; Personal Assistant to an attorney — built around one realistic client, from Day 1 to Day 10\./,
      'Five days to work like a confident Property Damage Specialist — built around one realistic claim, Angela Carter\'s rear-ended 2022 RAV4, from Day 1 to Day 5.')
    .replace(/short topics across 10 days/g, `short topics across ${days()} days`)
    .replace(/Your 10-day roadmap/g, `Your ${days()}-day roadmap`)
    .replace(/Days 1–10 ·/g, `Days 1–${days()} ·`)
    .replace(/How the portal works — the 10-day roadmap, how each day runs, grading, certificate and ground rules\./,
      `How the portal works: the ${days()}-day roadmap, how each day runs, the Claim File, practice, grading, the certificate and the ground rules.`);
  const wrap = (name, each) => {
    const f = window[name];
    if (typeof f !== 'function' || f.__lbpFix) return;
    window[name] = function () { const r = f.apply(this, arguments); return each(r); };
    window[name].__lbpFix = true;
  };
  function apply() {
    wrap('renderHandouts', fix);
  }
  apply();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else setTimeout(apply, 0);
})();
