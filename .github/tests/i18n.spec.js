// @ts-check
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:3000';

/**
 * Spot-check a sample of i18n keys per locale.
 * These are deliberately non-trivial strings that would not appear
 * in other locales — catches wrong-language text leaking through.
 */
const CHECKS = {
  en: [
    { key: 'nav.services',     text: 'Services' },
    { key: 'about.title',      text: 'Who I Am' },
    { key: 'services.title',   text: 'Advisory Services' },
    { key: 'contact.title',    text: 'Start an Engagement' },
    { key: 'hero.line2',       text: 'Redefined.' },
  ],
  ja: [
    { key: 'nav.services',     text: 'サービス' },
    { key: 'about.title',      text: '自己紹介' },
    { key: 'services.title',   text: 'アドバイザリーサービス' },
    { key: 'contact.title',    text: 'まずは話しましょう' },
    { key: 'hero.line2',       text: '再定義する。' },
    { key: 'svc.hiring.title', text: 'エンジニアリング採用' },
  ],
  ko: [
    { key: 'nav.services',     text: '서비스' },
    { key: 'about.title',      text: '자기소개' },
    { key: 'services.title',   text: '어드바이저리 서비스' },
    { key: 'contact.title',    text: '함께 시작해요' },
    { key: 'hero.line2',       text: '새롭게 정의하다.' },
    { key: 'svc.hiring.title', text: '엔지니어링 채용' },
  ],
};

const LANG_BTN = { en: 'EN', ja: 'JP', ko: 'KR' };

for (const [locale, checks] of Object.entries(CHECKS)) {
  test(`[${locale.toUpperCase()}] correct language renders for all spot-checked keys`, async ({ page }) => {
    await page.goto(BASE);

    // Switch language (EN is default — still click to be explicit)
    await page.locator(`.lang-btn[data-lang="${locale}"]`).click();

    for (const { key, text } of checks) {
      const el = page.locator(`[data-i18n="${key}"]`).first();
      await expect(el, `key "${key}" should contain "${text}"`).toContainText(text);
    }
  });
}

test('[JA] no Korean characters leak into Japanese locale', async ({ page }) => {
  await page.goto(BASE);
  await page.locator('.lang-btn[data-lang="ja"]').click();

  // Collect all visible text from i18n elements
  const texts = await page.locator('[data-i18n]').allTextContents();
  const korean = /[가-힯]/;

  // proof.uberstyle legitimately mentions Korean — skip that one
  const suspicious = texts.filter(t => korean.test(t) && !t.includes('韓国'));
  expect(suspicious, 'Korean characters should not appear in JP locale').toHaveLength(0);
});

test('[KO] no Japanese characters leak into Korean locale', async ({ page }) => {
  await page.goto(BASE);
  await page.locator('.lang-btn[data-lang="ko"]').click();

  const texts = await page.locator('[data-i18n]').allTextContents();
  const japanese = /[぀-ヿ一-鿿]/;

  const suspicious = texts.filter(t => japanese.test(t));
  expect(suspicious, 'Japanese characters should not appear in KO locale').toHaveLength(0);
});
