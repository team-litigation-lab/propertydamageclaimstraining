#!/usr/bin/env python3
"""Turn each day's Canva deck, downloaded from Canva, into one image per page.

    pip install pymupdf pillow
    python3 build/deck_pages.py            # every deck in decks/
    python3 build/deck_pages.py 1 3        # only Days 1 and 3

Put the downloads in decks/ (the folder isn't published with the site). Each
file's name says its day, e.g. "Property Damage Claims DAY 1.pdf":
  - a PDF (Canva: Share -> Download -> PDF Standard), or
  - a ZIP of PNG/JPG pages (Canva: Share -> Download -> PNG, all pages).

For each day this writes slides/dayN/01.webp, 02.webp, ... (1920 px wide) and
lists the day in js/deck-pages.js. The course then shows the pages as the
day's slides, one step per page, in place of the Canva embed.
"""
import hashlib
import io
import json
import re
import sys
import zipfile
from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
DECKS = ROOT / "decks"
SLIDES = ROOT / "slides"
MANIFEST = ROOT / "js" / "deck-pages.js"
WIDTH = 1920
QUALITY = 82
IMAGE_EXT = (".png", ".jpg", ".jpeg", ".webp")


def day_of(name):
    m = re.search(r"day\s*[-_ ]?\s*(\d+)", name, re.I)
    return int(m.group(1)) if m else None


def natural_key(name):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", name)]


def pdf_pages(path):
    doc = pymupdf.open(path)
    for page in doc:
        zoom = WIDTH / page.rect.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        yield Image.frombytes("RGB", (pix.width, pix.height), pix.samples)


def zip_pages(path):
    with zipfile.ZipFile(path) as z:
        names = sorted((n for n in z.namelist() if n.lower().endswith(IMAGE_EXT) and not n.startswith("__MACOSX")), key=natural_key)
        for n in names:
            yield Image.open(io.BytesIO(z.read(n))).convert("RGB")


def load_manifest():
    if not MANIFEST.exists():
        return {}
    m = re.search(r"Object\.assign\(window\.PD_DECK_PAGES \|\| \{\}, (\{.*\})\);", MANIFEST.read_text(), re.S)
    return {int(k): v for k, v in json.loads(m.group(1)).items()} if m else {}


def write_manifest(data):
    body = json.dumps({str(k): data[k] for k in sorted(data)}, indent=2)
    MANIFEST.write_text(
        "/* Each day's Canva deck as one image per page (slides/dayN/NN.webp), written by build/deck_pages.py.\n"
        "   Don't edit by hand: download the deck from Canva into decks/ and run the script again. */\n"
        f"window.PD_DECK_PAGES = Object.assign(window.PD_DECK_PAGES || {{}}, {body});\n"
    )


def convert(day, src):
    out = SLIDES / f"day{day}"
    out.mkdir(parents=True, exist_ok=True)
    for old in out.glob("*.webp"):
        old.unlink()
    pages = pdf_pages(src) if src.suffix.lower() == ".pdf" else zip_pages(src)
    digest, size, n = hashlib.sha1(), None, 0
    for n, im in enumerate(pages, 1):
        if im.width != WIDTH:
            im = im.resize((WIDTH, round(im.height * WIDTH / im.width)), Image.LANCZOS)
        size = size or im.size
        buf = io.BytesIO()
        im.save(buf, "WEBP", quality=QUALITY, method=6)
        (out / f"{n:02d}.webp").write_bytes(buf.getvalue())
        digest.update(buf.getvalue())
    if not n:
        raise SystemExit(f"{src.name}: no pages found")
    total = sum(p.stat().st_size for p in out.glob("*.webp"))
    print(f"Day {day}: {n} pages from {src.name} -> slides/day{day}/ ({total / 1e6:.1f} MB)")
    return {"pages": n, "ext": "webp", "w": size[0], "h": size[1], "v": digest.hexdigest()[:10]}


def main():
    only = {int(a) for a in sys.argv[1:]}
    found = {}
    for f in sorted(DECKS.glob("*")):
        if f.suffix.lower() not in (".pdf", ".zip"):
            continue
        day = day_of(f.name)
        if day is None:
            print(f"Skipped {f.name}: the name doesn't say which day (e.g. \"... DAY 1.pdf\")")
            continue
        if day in found:
            raise SystemExit(f"Two decks for Day {day}: {found[day].name} and {f.name}")
        found[day] = f
    if only:
        found = {d: f for d, f in found.items() if d in only}
    if not found:
        raise SystemExit("No decks to convert in decks/")
    manifest = load_manifest()
    for day, f in sorted(found.items()):
        manifest[day] = convert(day, f)
    write_manifest(manifest)
    print(f"Updated {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
