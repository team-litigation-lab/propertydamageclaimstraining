#!/usr/bin/env node
/* Capture every page of each day's Canva deck, as the deck's own viewer shows it, to
   decks/capture/dayN/NN.png (1920 x 1080). Then build/deck_pages.py turns them into the
   course's slides:

     npm i -D playwright            # or use a global install (NODE_PATH=$(npm root -g))
     node build/capture_canva.cjs           # every day in PD_CANVA_DECKS (js/pd-canva.js)
     node build/capture_canva.cjs 1 3       # only Days 1 and 3
     python3 build/deck_pages.py --src decks/capture

   The decks are read from their view links, so they have to be shared ("anyone with the
   link can view"). HTTPS_PROXY is used when it's set.
   decks/capture/ is not committed (.gitignore) or published (.assetsignore). */
"use strict";
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "decks", "capture");
const W = 1920, H = 1080;

function decks(){
  const src = fs.readFileSync(path.join(ROOT, "js", "pd-canva.js"), "utf8");
  const out = {};
  for(const m of src.matchAll(/^\s*(\d+):\s*\{\s*id:\s*"([^"]+)",\s*token:\s*"([^"]+)"/gm)) out[+m[1]] = {id: m[2], token: m[3]};
  return out;
}

async function capture(browser, day, deck){
  const ctx = await browser.newContext({viewport: {width: W, height: H}, deviceScaleFactor: 1});
  // Canva's signed media links: some networks answer the browser's own requests for them with
  // "Signature invalid" while the same request from Playwright's client works, so fetch them there.
  let inflight = 0;
  await ctx.route(/^https:\/\/media\.canva\.com\//, async route => {
    inflight++;
    try{ await route.fulfill({response: await route.fetch()}); }
    catch(e){ await route.abort().catch(()=>{}); }
    finally{ inflight--; }
  });
  const page = await ctx.newPage();
  const url = (n)=> `https://www.canva.com/design/${deck.id}/${deck.token}/view?embed` + (n > 1 ? `#${n}` : "");
  const settle = async ()=>{
    // images in view loaded, no media request pending for a moment, fonts ready, entrance animations done
    for(let quiet = 0, t = 0; quiet < 4 && t < 60; t++){ await page.waitForTimeout(250); quiet = inflight ? 0 : quiet + 1; }
    await page.evaluate(()=>document.fonts && document.fonts.ready);
    await page.waitForFunction(()=>[...document.images].filter(i=>{ const r = i.getBoundingClientRect(); return r.width > 4 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth; }).every(i=>i.complete && i.naturalWidth > 0), null, {timeout: 20000}).catch(()=>{});
    await page.waitForTimeout(2000);
  };
  // the grey "image missing" placeholder Canva draws when a picture didn't load
  const missing = ()=> page.evaluate(()=>[...document.querySelectorAll("svg path")].filter(x=>(x.getAttribute("d")||"").startsWith("M8.75 10.5a1.75")).filter(x=>{ const r = x.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0 && r.left < innerWidth && r.right > 0; }).length);
  const hideControls = ()=> page.evaluate(()=>{
    const nb = document.querySelector('button[aria-label="Next page"]'); if(!nb) return;
    let x = nb; while(x.parentElement && x.parentElement !== document.body){ const r = x.parentElement.getBoundingClientRect(); if(r.width >= innerWidth - 1 && r.top > innerHeight * 0.75) { x = x.parentElement; break; } x = x.parentElement; }
    x.dataset.pdHidden = "1"; x.style.setProperty("visibility", "hidden", "important");
  });
  const showControls = ()=> page.evaluate(()=>document.querySelectorAll("[data-pd-hidden]").forEach(e=>{ e.style.removeProperty("visibility"); delete e.dataset.pdHidden; }));
  // "12 / 50" in the viewer's toolbar (not the slide, which can have numbers like 25/50/50 on it)
  const at = ()=> page.evaluate(()=>{
    let x = document.querySelector('button[aria-label="Next page"]');
    for(let i = 0; x && i < 6; i++, x = x.parentElement){ const m = (x.innerText||"").match(/^\s*(\d+)\s*\/\s*(\d+)\s*$/m); if(m) return {n: +m[1], of: +m[2]}; }
    return null;
  });

  await page.goto(url(1), {waitUntil: "load", timeout: 90000});
  await settle();
  const first = await at(); if(!first) throw new Error(`Day ${day}: couldn't read the page count`);
  const total = first.of, dir = path.join(OUT, `day${day}`);
  fs.rmSync(dir, {recursive: true, force: true}); fs.mkdirSync(dir, {recursive: true});
  await page.mouse.move(W/2, H/3);
  for(let n = 1; n <= total; n++){
    let tries = 0;
    for(;;){
      if(n > 1 && tries === 0){ await page.keyboard.press("ArrowRight"); await page.waitForFunction((k)=>location.hash === "#"+k, n, {timeout: 15000}).catch(()=>{}); }
      if(tries > 0){ await page.goto(url(n), {waitUntil: "load", timeout: 90000}); }
      await settle();
      const pos = await at(), gaps = await missing();
      if(pos && pos.n === n && !gaps) break;
      if(++tries > 4) throw new Error(`Day ${day} page ${n}: ${gaps ? gaps + " picture(s) didn't load" : "didn't reach the page"}`);
    }
    await hideControls();
    await page.screenshot({path: path.join(dir, `${String(n).padStart(2, "0")}.png`)});
    await showControls();
  }
  await ctx.close();
  console.log(`Day ${day}: ${total} pages -> decks/capture/day${day}/`);
  return total;
}

(async ()=>{
  const all = decks(), only = process.argv.slice(2).map(Number).filter(Boolean);
  const days = Object.keys(all).map(Number).filter(d=>!only.length || only.includes(d));
  if(!days.length) throw new Error("No decks found in js/pd-canva.js");
  const browser = await chromium.launch(process.env.HTTPS_PROXY ? {proxy: {server: process.env.HTTPS_PROXY}} : {});
  try{
    const results = await Promise.allSettled(days.map(d=>capture(browser, d, all[d])));
    let failed = 0;
    results.forEach((r, i)=>{ if(r.status === "rejected"){ failed++; console.error(`Day ${days[i]}: ${r.reason && r.reason.message}`); } });
    if(failed) process.exitCode = 1;
  } finally { await browser.close(); }
})();
