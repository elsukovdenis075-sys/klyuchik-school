import { chromium } from "playwright";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const base = process.env.KLYUCHIK_PREVIEW || "http://127.0.0.1:8767/";
const root = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(root, "..");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

const more = { anchors: [], detailsOpens: null, diplomas: [], photos: [], reviewLinks: [] };

await page.goto(base, { waitUntil: "domcontentloaded" });
await page.locator("#funnel-more summary").click();
await page.waitForTimeout(300);

const ids = [
  "fit",
  "methods",
  "photos",
  "docs",
  "directions",
  "referral",
  "photos",
];
for (const id of ids) {
  const r = await page.evaluate((sectionId) => {
    const t = document.getElementById(sectionId);
    if (!t) return { id: sectionId, found: false };
    t.scrollIntoView({ block: "start" });
    const r0 = t.getBoundingClientRect();
    const details = document.getElementById("funnel-more");
    return {
      id: sectionId,
      found: true,
      detailsOpen: details?.open,
      inView: r0.top < innerHeight * 0.95 && r0.bottom > 40,
    };
  }, id);
  more.anchors.push(r);
  await page.waitForTimeout(120);
}

for (const h of ["#methods", "#docs"]) {
  await page.goto(`${base}${h}`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(400);
  const st = await page.evaluate(() => ({
    open: document.getElementById("funnel-more")?.open,
    hash: location.hash,
    targetTop: document.querySelector(location.hash || "#x")?.getBoundingClientRect().top,
  }));
  more.detailsOpens = more.detailsOpens || {};
  more.detailsOpens[h] = st;
}

await page.goto(base, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(500);
await page.evaluate(() => {
  const d = document.getElementById("funnel-more");
  if (d) d.open = true;
  document.getElementById("docs")?.scrollIntoView({ block: "center" });
});
await page.waitForSelector("#credentials-grid .daisy-petal", { timeout: 15000 });
const diplomaCount = await page.locator("#credentials-grid .daisy-petal").count();
for (let i = 0; i < diplomaCount; i++) {
  await page.evaluate((idx) => {
    document.querySelectorAll("#credentials-grid .daisy-petal")[idx]?.click();
  }, i);
  await page.waitForTimeout(150);
  const d = await page.evaluate(() => {
    const lb = document.getElementById("daisy-lightbox");
    const img = document.getElementById("daisy-lightbox-img");
    const tg = document.getElementById("daisy-lightbox-tg");
    return {
      open: lb && !lb.hidden,
      src: img?.src || "",
      ok: img?.naturalWidth > 20,
      tgHidden: tg?.hidden,
      tgHref: tg?.getAttribute("href") || "",
    };
  });
  more.diplomas.push({ i, ...d });
  await page.locator("#daisy-lightbox-close").click();
  await page.waitForTimeout(100);
}

await page.goto(`${base}#photos`, { waitUntil: "domcontentloaded" });
await page.locator("#funnel-more").evaluate((el) => (el.open = true));
const photoCount = await page.locator("#photo-gallery .daisy-petal").count();
for (let i = 0; i < Math.min(photoCount, 5); i++) {
  await page.locator("#photo-gallery .daisy-petal").nth(i).click();
  await page.waitForTimeout(120);
  const p = await page.evaluate(() => {
    const img = document.getElementById("daisy-lightbox-img");
    const tg = document.getElementById("daisy-lightbox-tg");
    return {
      ok: img?.naturalWidth > 20,
      tgHref: tg?.hidden ? null : tg?.href,
    };
  });
  more.photos.push({ i, ...p });
  await page.locator("#daisy-lightbox-close").click();
}

more.reviewLinks = await page.evaluate(() =>
  [...document.querySelectorAll("#reviews-showcase a[href]")].map((a) => ({
    href: a.href,
    bad: !a.href.includes("t.me/"),
  }))
);

const legal = {};
for (const p of ["oferta.html", "privacy.html", "consent.html"]) {
  await page.goto(`${base}${p}`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(300);
  legal[p] = await page.evaluate(() => ({
    title: document.title,
    replaceCount: (document.body.innerText.match(/REPLACE_/g) || []).length,
    status: document.querySelector(".legal-page__body") ? "ok" : "missing-body",
    homeLink: document.querySelector('a[href="index.html"]')?.getAttribute("href"),
  }));
}

await browser.close();

// file exists check for credential images
const cfg = JSON.parse(readFileSync(path.join(siteRoot, "config.json"), "utf8"));
const missingFiles = (cfg.credentials || [])
  .map((c) => c.file)
  .filter((f) => {
    try {
      readFileSync(path.join(siteRoot, f));
      return false;
    } catch {
      return true;
    }
  });

console.log(JSON.stringify({ more, legal, missingCredentialFiles: missingFiles }, null, 2));
