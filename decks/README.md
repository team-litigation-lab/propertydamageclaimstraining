# Canva decks

Each day's slides in the course are its Canva deck's pages (`slides/dayN/`, listed in `js/deck-pages.js`).
When a deck changes in Canva, update the course's copy:

1. `node build/capture_canva.cjs 2` captures Day 2's pages from its view link (the links are in
   `PD_CANVA_DECKS` in `js/pd-canva.js`) into `decks/capture/day2/`. Leave out the day to capture every deck.
2. `python3 build/deck_pages.py --src decks/capture 2` converts them (1920 px WebP), blurs the areas listed in
   `build/deck_redactions.json`, and updates `js/deck-pages.js` and its `?v=` in `index.html` and `build/build.py`.
3. Check the pages with sample documents on them (see `build/deck_redactions.json`), then commit and push.

Instead of step 1, a deck downloaded from Canva (**Share → Download → PDF Standard**, or PNG with all pages as a
ZIP) can go in this folder with the day in its name (`Property Damage Claims DAY 2.pdf`); then run step 2
without `--src`.

Needs `npm i -D playwright` (or a global install) and `pip install pymupdf pillow`. This folder isn't
published with the site (`.assetsignore`), and `decks/capture/` isn't committed (`.gitignore`).
