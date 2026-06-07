#!/usr/bin/env node
/**
 * check-i18n.js
 * Validates that all translation keys in `en` are present in `ja` and `ko`.
 * Exits with code 1 if any keys are missing.
 */

const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.resolve(__dirname, '../../main.js'), 'utf8');

// Extract the translations object via regex + eval in a sandbox
const match = src.match(/const translations = (\{[\s\S]*?\n\}\s*;)/);
if (!match) {
  console.error('ERROR: Could not find translations object in main.js');
  process.exit(1);
}

let translations;
try {
  // eslint-disable-next-line no-eval
  eval('translations = ' + match[1]);
} catch (e) {
  console.error('ERROR: Failed to parse translations:', e.message);
  process.exit(1);
}

const locales = ['ja', 'ko'];
const enKeys = Object.keys(translations.en);
let failed = false;

for (const locale of locales) {
  const localeKeys = Object.keys(translations[locale] || {});
  const missing = enKeys.filter(k => !localeKeys.includes(k));

  if (missing.length > 0) {
    console.error(`\n❌ [${locale}] Missing ${missing.length} key(s):`);
    missing.forEach(k => console.error(`   - ${k}  (EN: "${translations.en[k].slice(0, 60)}")`));
    failed = true;
  } else {
    console.log(`✅ [${locale}] All ${enKeys.length} keys present`);
  }
}

// Also check for extra keys in ja/ko not in en (stale keys)
for (const locale of locales) {
  const localeKeys = Object.keys(translations[locale] || {});
  const stale = localeKeys.filter(k => !enKeys.includes(k));
  if (stale.length > 0) {
    console.warn(`\n⚠️  [${locale}] ${stale.length} stale key(s) not in EN:`);
    stale.forEach(k => console.warn(`   - ${k}`));
  }
}

if (failed) {
  console.error('\nFAILED: Fix missing translations before merging.');
  process.exit(1);
}

console.log('\nPASSED: All locales have complete translation coverage.');
