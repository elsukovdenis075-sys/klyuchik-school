import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://127.0.0.1:8767/";

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

async function shot(name) {
  const file = path.join(outDir, name);
  await page.screenshot({ path: file, fullPage: false });
  return file;
}

await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(base, { waitUntil: "domcontentloaded", timeout: 60000 });
await shot("fix-hero-1440.png");

await page.locator("#pricing .title-fun").scrollIntoViewIfNeeded();
await page.waitForTimeout(200);
await shot("fix-pricing-individual-1440.png");

const familyCards = page.locator("#pricing-family .price-card--family");
const familyCount = await familyCards.count();
for (let i = 0; i < familyCount; i++) {
  await familyCards.nth(i).scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await shot(`fix-family-card-${i + 1}-1440.png`);
}

await page.locator("#signup").scrollIntoViewIfNeeded();
await page.waitForTimeout(200);
await shot("fix-form-1440.png");

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(base, { waitUntil: "domcontentloaded" });
await shot("fix-hero-390.png");

await page.locator("#pricing .title-fun").scrollIntoViewIfNeeded();
await shot("fix-pricing-individual-390.png");

const familyMobile = page.locator("#pricing-family .price-card--family");
const familyMobileCount = await familyMobile.count();
for (let i = 0; i < familyMobileCount; i++) {
  await page.goto(`${base}#pricing`, { waitUntil: "domcontentloaded" });
  await familyMobile.nth(i).scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  await shot(`fix-family-card-${i + 1}-390.png`);
}

await page.locator("#signup").scrollIntoViewIfNeeded();
await page.waitForTimeout(150);
await shot("fix-form-390.png");

const overflow = {};
for (const w of [360, 390, 768, 1440]) {
  await page.setViewportSize({ width: w, height: 900 });
  await page.goto(base, { waitUntil: "domcontentloaded" });
  overflow[w] = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  }));
}

const stickyVisible = await page.evaluate(() => {
  const bar = document.getElementById("sticky-cta");
  if (!bar) return null;
  const s = getComputedStyle(bar);
  return s.display !== "none" && !bar.classList.contains("sticky-cta--hidden") && bar.offsetParent !== null;
});

await browser.close();
console.log(
  JSON.stringify({
    overflow,
    stickyVisibleOnMainSite: stickyVisible,
    familyCards: familyCount,
    files: [
      "fix-hero-1440.png",
      "fix-pricing-individual-1440.png",
      "fix-family-card-1-1440.png",
      "fix-family-card-2-1440.png",
      "fix-family-card-3-1440.png",
      "fix-form-1440.png",
      "fix-hero-390.png",
      "fix-pricing-individual-390.png",
      "fix-family-card-1-390.png",
      "fix-family-card-2-390.png",
      "fix-family-card-3-390.png",
      "fix-form-390.png",
    ],
  })
);
