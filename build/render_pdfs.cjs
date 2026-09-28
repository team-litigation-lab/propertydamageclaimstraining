// Prints the mock claim documents to PDF (called by build/make_documents.py).
// Usage: node build/render_pdfs.cjs <folder of .html pages> <documents folder>
// Needs Playwright (`npm i playwright`) and its Chromium.
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const [SRC, OUT] = process.argv.slice(2);
if (!SRC || !OUT) { console.error('usage: node build/render_pdfs.cjs <src> <out>'); process.exit(2); }
const walk = (d) => fs.readdirSync(d).flatMap(n => { const p = path.join(d, n); return fs.statSync(p).isDirectory() ? walk(p) : [p]; });
const HEADER = `<div style="width:100%;font:700 8px Arial,sans-serif;letter-spacing:.08em;color:#B54A3F;text-align:center;">TRAINING — MOCK DOCUMENT · FICTIONAL PEOPLE, COMPANIES AND NUMBERS · LSH PROPERTY DAMAGE CLAIMS TRAINING</div>`;
const FOOTER = `<div style="width:100%;font:8px Arial,sans-serif;color:#5B6178;display:flex;justify-content:space-between;padding:0 14mm;"><span>Mock document for LSH training — not a real claim file</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`;
(async () => {
    const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
    const page = await browser.newPage();
    const files = walk(SRC).filter(f => f.endsWith('.html'));
    for (const f of files) {
        const rel = path.relative(SRC, f).replace(/\.html$/, '.pdf');
        const out = path.join(OUT, rel);
        fs.mkdirSync(path.dirname(out), { recursive: true });
        await page.goto('file://' + f, { waitUntil: 'load' });
        await page.emulateMedia({ media: 'print' });
        await page.pdf({ path: out, format: 'Letter', printBackground: true, displayHeaderFooter: true, headerTemplate: HEADER, footerTemplate: FOOTER, margin: { top: '16mm', bottom: '16mm', left: '12mm', right: '12mm' } });
    }
    await browser.close();
    console.log(`Rendered ${files.length} PDFs into ${OUT}`);
})().catch(e => { console.error(e); process.exit(1); });
