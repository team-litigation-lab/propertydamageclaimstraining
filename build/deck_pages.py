#!/usr/bin/env python3
"""Turn each day's Canva deck, downloaded from Canva, into one image per page.

    pip install pymupdf pillow
    python3 build/deck_pages.py            # every deck in decks/
    python3 build/deck_pages.py 1 3        # only Days 1 and 3
    python3 build/deck_pages.py --src decks/capture    # pages captured by build/capture_canva.cjs

Put the downloads in decks/ (the folder isn't published with the site). Each
file's name says its day, e.g. "Property Damage Claims DAY 1.pdf":
  - a PDF (Canva: Share -> Download -> PDF Standard), or
  - a ZIP of PNG/JPG pages (Canva: Share -> Download -> PNG, all pages), or
  - a folder of page images named in order (01.png, 02.png, ...), e.g. from
    build/capture_canva.cjs, which captures the decks from their view links.

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
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
REDACTIONS = ROOT / "build" / "deck_redactions.json"
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


def folder_pages(path):
    for f in sorted((f for f in path.iterdir() if f.suffix.lower() in IMAGE_EXT), key=lambda f: natural_key(f.name)):
        yield Image.open(f).convert("RGB")


def load_redactions():
    if not REDACTIONS.exists():
        return {}
    data = json.loads(REDACTIONS.read_text())
    return {int(d): {int(p): boxes for p, boxes in pages.items()} for d, pages in data.items() if d.isdigit()}


def redact(im, boxes):
    """Blur each area beyond reading: pixelate to 1/14, then soften."""
    sx, sy = im.width / 1920, im.height / 1080
    for l, t, r, b in boxes:
        box = (round(l * sx), round(t * sy), round(r * sx), round(b * sy))
        part = im.crop(box)
        small = part.resize((max(1, part.width // 14), max(1, part.height // 14)), Image.BILINEAR)
        im.paste(small.resize(part.size, Image.BILINEAR).filter(ImageFilter.GaussianBlur(6)), box)
    return im


def load_manifest():
    if not MANIFEST.exists():
        return {}
    m = re.search(r"Object\.assign\(window\.PD_DECK_PAGES \|\| \{\}, (\{.*\})\);", MANIFEST.read_text(), re.S)
    return {int(k): v for k, v in json.loads(m.group(1)).items()} if m else {}


def write_manifest(data):
    body = json.dumps({str(k): data[k] for k in sorted(data)}, indent=2)
    # a new ?v= on the script tag, so browsers don't keep the old list
    ver = hashlib.sha1(body.encode()).hexdigest()[:8]
    for page in (ROOT / "index.html", ROOT / "build" / "build.py"):
        text = page.read_text()
        page.write_text(re.sub(r"js/deck-pages\.js\?v=[0-9A-Za-z]+", f"js/deck-pages.js?v={ver}", text))
    MANIFEST.write_text(
        "/* Each day's Canva deck as one image per page (slides/dayN/NN.webp), written by build/deck_pages.py.\n"
        "   Don't edit by hand: capture the deck again (build/capture_canva.cjs) or download it from Canva into decks/,\n"
        "   then run build/deck_pages.py. */\n"
        f"window.PD_DECK_PAGES = Object.assign(window.PD_DECK_PAGES || {{}}, {body});\n"
    )


def convert(day, src, redactions):
    out = SLIDES / f"day{day}"
    out.mkdir(parents=True, exist_ok=True)
    for old in out.glob("*.webp"):
        old.unlink()
    if src.is_dir():
        pages = folder_pages(src)
    elif src.suffix.lower() == ".pdf":
        pages = pdf_pages(src)
    else:
        pages = zip_pages(src)
    digest, size, n = hashlib.sha1(), None, 0
    for n, im in enumerate(pages, 1):
        if im.width != WIDTH:
            im = im.resize((WIDTH, round(im.height * WIDTH / im.width)), Image.LANCZOS)
        if n in redactions:
            im = redact(im, redactions[n])
        size = size or im.size
        buf = io.BytesIO()
        im.save(buf, "WEBP", quality=QUALITY, method=6)
        (out / f"{n:02d}.webp").write_bytes(buf.getvalue())
        digest.update(buf.getvalue())
    if not n:
        raise SystemExit(f"{src.name}: no pages found")
    total = sum(p.stat().st_size for p in out.glob("*.webp"))
    note = f", {len(redactions)} page(s) blurred in places" if redactions else ""
    print(f"Day {day}: {n} pages from {src.name} -> slides/day{day}/ ({total / 1e6:.1f} MB{note})")
    return {"pages": n, "ext": "webp", "w": size[0], "h": size[1], "v": digest.hexdigest()[:10]}


def main():
    args = sys.argv[1:]
    src = DECKS
    if "--src" in args:
        i = args.index("--src")
        src = Path(args[i + 1]).resolve()
        del args[i:i + 2]
    only = {int(a) for a in args}
    found = {}
    for f in sorted(src.glob("*")):
        if not (f.is_dir() or f.suffix.lower() in (".pdf", ".zip")):
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
        raise SystemExit(f"No decks to convert in {src}")
    manifest, redactions = load_manifest(), load_redactions()
    for day, f in sorted(found.items()):
        manifest[day] = convert(day, f, redactions.get(day, {}))
    write_manifest(manifest)
    print(f"Updated {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
