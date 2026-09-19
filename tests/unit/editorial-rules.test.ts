import { describe, expect, it } from 'vitest';
import { LOCALES, type Locale } from '../../src/i18n/config';
import { getContent } from '../../src/content';

interface CollectedString {
  path: string;
  value: string;
}

/** Recursively collects every string value found in a nested object/array, with its access path. */
function collectStrings(value: unknown, path: string, out: CollectedString[]): void {
  if (typeof value === 'string') {
    out.push({ path, value });
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, `${path}[${index}]`, out));
    return;
  }
  if (value !== null && typeof value === 'object') {
    for (const [key, nested] of Object.entries(value)) {
      collectStrings(nested, path ? `${path}.${key}` : key, out);
    }
  }
}

const EM_DASH = '—';
const EN_DASH = '–';

const PRICE_PATTERN = /\d[\d\s.,]*\s*(€|EUR|euros?|TTC|HT)\b/i;
const TJM_PATTERN = /\bTJM\b/i;
const COMPARATIVE_CLAIM_PATTERN = /3\s*(x|×|fois|veces|times)\s*(plus|faster|más|mas)/i;
const ABSOLUTE_UNIQUENESS_PATTERN = /\b(le seul|la seule|the only|el único|la única)\b/i;
const AUTONOMOUS_AGENT_PATTERN = /\b(agent autonome|autonomous agent|agente autónomo)\b/i;
const BOUNDED_AUTONOMY_PATTERN = /\b(autonomie bornée|bounded autonomy|autonomía acotada)\b/i;
const TODO_VERIFY_MARKER = '[À VÉRIFIER:';

// Content keys scoped for the TODO_VERIFY check: legal content is allowed to
// carry the marker by design (see legal.test.ts), everything else must not.
const NON_LEGAL_KEYS = ['home', 'offers', 'proofs', 'paths', 'ui', 'meta'] as const;

function collectAllStringsForLocale(locale: Locale): CollectedString[] {
  const content = getContent(locale);
  const out: CollectedString[] = [];
  collectStrings(content, '', out);
  return out;
}

function collectNonLegalStringsForLocale(locale: Locale): CollectedString[] {
  const content = getContent(locale);
  const out: CollectedString[] = [];
  for (const key of NON_LEGAL_KEYS) {
    collectStrings(content[key], key, out);
  }
  return out;
}

describe('editorial rules', () => {
  it.each(LOCALES)('no string in locale "%s" contains an em dash or en dash', (locale) => {
    const strings = collectAllStringsForLocale(locale);
    for (const { path, value } of strings) {
      expect(
        value.includes(EM_DASH) || value.includes(EN_DASH),
        `locale "${locale}" at "${path}" contains an em/en dash: "${value}"`,
      ).toBe(false);
    }
  });

  it.each(LOCALES)('no string in locale "%s" mentions a price or TJM', (locale) => {
    const strings = collectAllStringsForLocale(locale);
    for (const { path, value } of strings) {
      expect(
        PRICE_PATTERN.test(value),
        `locale "${locale}" at "${path}" matches the price pattern: "${value}"`,
      ).toBe(false);
      expect(
        TJM_PATTERN.test(value),
        `locale "${locale}" at "${path}" mentions TJM: "${value}"`,
      ).toBe(false);
    }
  });

  it.each(LOCALES)('no string in locale "%s" makes a forbidden comparative claim', (locale) => {
    const strings = collectAllStringsForLocale(locale);
    for (const { path, value } of strings) {
      expect(
        COMPARATIVE_CLAIM_PATTERN.test(value),
        `locale "${locale}" at "${path}" matches the forbidden comparative claim pattern: "${value}"`,
      ).toBe(false);
    }
  });

  it.each(LOCALES)('no string in locale "%s" makes an absolute uniqueness claim', (locale) => {
    const strings = collectAllStringsForLocale(locale);
    for (const { path, value } of strings) {
      expect(
        ABSOLUTE_UNIQUENESS_PATTERN.test(value),
        `locale "${locale}" at "${path}" matches the absolute uniqueness pattern: "${value}"`,
      ).toBe(false);
    }
  });

  it.each(LOCALES)('no string in locale "%s" claims a bare "autonomous agent"', (locale) => {
    const strings = collectAllStringsForLocale(locale);
    for (const { path, value } of strings) {
      // The bounded-autonomy phrasing is allowed; strip it out before testing
      // for the bare "autonomous agent" claim so legitimate phrasing doesn't
      // trip the false positive from sharing the word "agent" nearby.
      const withoutAllowedPhrase = value.replace(BOUNDED_AUTONOMY_PATTERN, '');
      expect(
        AUTONOMOUS_AGENT_PATTERN.test(withoutAllowedPhrase),
        `locale "${locale}" at "${path}" makes a bare autonomous-agent claim: "${value}"`,
      ).toBe(false);
    }
  });

  it.each(LOCALES)('no content string outside legal.ts in locale "%s" contains the TODO_VERIFY marker', (locale) => {
    const strings = collectNonLegalStringsForLocale(locale);
    for (const { path, value } of strings) {
      expect(
        value.includes(TODO_VERIFY_MARKER),
        `locale "${locale}" at "${path}" contains a TODO_VERIFY marker outside legal content: "${value}"`,
      ).toBe(false);
    }
  });
});
