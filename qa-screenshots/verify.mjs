import { chromium } from "playwright";

const base = process.env.KLYUCHIK_PREVIEW || "http://127.0.0.1:8767/";
const widths = [
  { name: "mobile", w: 390, h: 844 },
  { name: "desktop", w: 1440, h: 900 },
];

const browser = await chromium.launch();
const results = { links: [], scroll: {}, validation: {}, overlap: {}, animations: {} };

for (const vp of widths) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
  await page.goto(base, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(400);

  const links = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll("a[href]").forEach((a) => {
      const r = a.getBoundingClientRect();
      const st = getComputedStyle(a);
      if (st.display === "none" || st.visibility === "hidden" || a.hidden) return;
      if (r.width < 2 || r.height < 2) return;
      const href = a.getAttribute("href") || "";
      out.push({
        text: (a.textContent || "").trim().slice(0, 50),
        href,
        id: a.id || "",
        cls: a.className?.toString().slice(0, 40) || "",
      });
    });
    return out;
  });

  const bad = links.filter(
    (l) =>
      l.href === "#" ||
      l.href === "" ||
      (l.href === "#signup" && l.text.length < 2) ||
      (l.href.startsWith("#") && l.href === "#" && l.id !== "logo")
  );
  results.links.push({ viewport: vp.name, total: links.length, bad, familyCtas: links.filter((l) => l.cls.includes("price-card__cta")) });

  const steps = 8;
  let overlapHits = 0;
  let paleBlocks = 0;
  for (let i = 0; i <= steps; i++) {
    await page.evaluate((p) => window.scrollTo(0, (document.documentElement.scrollHeight * p) / 8), i / steps);
    await page.waitForTimeout(350);
    const check = await page.evaluate(() => {
      const sticky = document.getElementById("sticky-cta");
      const stickyBox =
        sticky && !sticky.hidden && getComputedStyle(sticky).display !== "none"
          ? sticky.getBoundingClientRect()
          : null;
      const targets = [
        ...document.querySelectorAll("#signup input, #signup select, #signup button, #signup .signup-consent"),
        ...document.querySelectorAll(".price-card__cta"),
      ];
      let overlap = 0;
      if (stickyBox && stickyBox.height > 0) {
        for (const el of targets) {
          const r = el.getBoundingClientRect();
          if (r.width < 2) continue;
          const hit =
            r.bottom > stickyBox.top &&
            r.top < stickyBox.bottom &&
            r.right > stickyBox.left &&
            r.left < stickyBox.right;
          if (hit) overlap++;
        }
      }
      const pale = [...document.querySelectorAll(".reveal-on-scroll")].filter((el) => {
        const o = getComputedStyle(el).opacity;
        return parseFloat(o) < 0.45 && el.getBoundingClientRect().height > 40;
      }).length;
      return { overlap, pale };
    });
    overlapHits += check.overlap;
    paleBlocks = Math.max(paleBlocks, check.pale);
  }
  results.scroll[vp.name] = { overlapHits, maxPaleRevealInView: paleBlocks };

  if (vp.name === "mobile") {
    await page.evaluate(() => {
      document.querySelector("#signup")?.scrollIntoView({ block: "center" });
    });
    await page.waitForTimeout(200);
    results.overlap.mobileForm = await page.evaluate(() => {
      const sticky = document.getElementById("sticky-cta");
      const sb =
        sticky && getComputedStyle(sticky).display !== "none" ? sticky.getBoundingClientRect() : null;
      const submit = document.getElementById("signup-submit-btn");
      if (!submit || !sb || sb.height < 1) return { stickyShown: !!sb, overlapsSubmit: false };
      const r = submit.getBoundingClientRect();
      return {
        stickyShown: true,
        overlapsSubmit: r.bottom > sb.top && r.top < sb.bottom,
      };
    });
  }

  await page.close();
}

const vPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
await vPage.goto(base, { waitUntil: "domcontentloaded" });
await vPage.locator("#signup").scrollIntoViewIfNeeded();

const validation = {};
validation.emptySubmit = await vPage.evaluate(() => {
  const form = document.getElementById("signup-form");
  form?.reset();
  const ev = new Event("submit", { bubbles: true, cancelable: true });
  const prevented = !form.dispatchEvent(ev);
  const parent = form.querySelector('[name="parent"]');
  return {
    prevented,
    parentInvalid: parent ? !parent.checkValidity() : null,
    parentVisible: parent?.validationMessage || "",
  };
});

await vPage.fill('[name="parent"]', "Тест");
await vPage.fill('[name="contact"]', "");
validation.noContact = await vPage.evaluate(() => {
  const c = document.querySelector('[name="contact"]');
  return { valid: c?.checkValidity(), msg: c?.validationMessage };
});

await vPage.fill('[name="contact"]', "+7 900");
validation.noConsent = await vPage.evaluate(() => {
  const consent = document.querySelector('[name="consent"]');
  consent.checked = false;
  const form = document.getElementById("signup-form");
  return { consentValid: consent?.checkValidity() };
});

const familyHrefs = await vPage.evaluate(() =>
  [...document.querySelectorAll("#pricing-family .price-card__cta")].map((a) => ({
    href: a.getAttribute("href"),
    text: a.textContent?.trim(),
  }))
);
validation.familyCtas = familyHrefs;

await vPage.close();
await browser.close();

results.validation = validation;
console.log(JSON.stringify(results, null, 2));
