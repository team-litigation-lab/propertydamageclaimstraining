# Canva decks (downloads)

Put each day's deck here, downloaded from Canva, with the day in its name:

- `Property Damage Claims DAY 1.pdf` … `DAY 5.pdf` (Canva: **Share → Download → PDF Standard**), or
- a ZIP of the pages (Canva: **Share → Download → PNG**, all pages).

Then run `python3 build/deck_pages.py` (needs `pip install pymupdf pillow`). It writes one image per page to
`slides/dayN/` and lists the day in `js/deck-pages.js`; the course then shows the pages as that day's slides,
one step per page, in place of the Canva embed.

This folder isn't published with the site (see `.assetsignore`).
