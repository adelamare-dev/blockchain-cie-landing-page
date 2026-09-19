import { describe, expect, it } from 'vitest';
import { LOCALES, type Locale } from '../../src/i18n/config';
import { getContent } from '../../src/content';

const TODO_VERIFY_MARKER = '[À VÉRIFIER:';
const SIREN = '983 173 428';
const SIRET = '983 173 428 00019';
const REGISTERED_TOWN = 'Edern';

function countMarkers(text: string, marker: string): number {
  return text.split(marker).length - 1;
}

function legalTextForLocale(locale: Locale): string {
  const { legal } = getContent(locale);
  const chunks: string[] = [];
  for (const document of [legal.legalNotice, legal.privacyPolicy]) {
    chunks.push(document.title);
    for (const section of document.sections) {
      chunks.push(section.title, ...section.body);
    }
  }
  return chunks.join('\n');
}

describe('legal content presence', () => {
  it.each(LOCALES)('legal content exists for locale "%s" with non-empty sections', (locale) => {
    const { legal } = getContent(locale);
    for (const document of [legal.legalNotice, legal.privacyPolicy]) {
      expect(document.sections.length, `legal document in "${locale}" should have at least one section`).toBeGreaterThan(
        0,
      );
      for (const section of document.sections) {
        expect(section.title, `legal section in "${locale}" should have a non-empty title`).not.toBe('');
        expect(
          section.body.length,
          `legal section "${section.title}" in "${locale}" should have at least one body paragraph`,
        ).toBeGreaterThan(0);
        for (const paragraph of section.body) {
          expect(
            paragraph,
            `legal section "${section.title}" in "${locale}" should not have an empty body paragraph`,
          ).not.toBe('');
        }
      }
    }
  });
});

describe('verified legal identifiers', () => {
  it.each(LOCALES)('legal notice in locale "%s" contains the verified SIREN, SIRET and town', (locale) => {
    const { legal } = getContent(locale);
    const text = legal.legalNotice.sections.flatMap((section) => section.body).join('\n');
    expect(text.includes(SIREN), `legal notice in "${locale}" should contain "${SIREN}"`).toBe(true);
    expect(text.includes(SIRET), `legal notice in "${locale}" should contain "${SIRET}"`).toBe(true);
    expect(text.includes(REGISTERED_TOWN), `legal notice in "${locale}" should contain "${REGISTERED_TOWN}"`).toBe(
      true,
    );
  });
});

describe('TODO_VERIFY parity', () => {
  it('the count of TODO_VERIFY markers is identical across all locales', () => {
    const counts = LOCALES.map((locale) => ({
      locale,
      count: countMarkers(legalTextForLocale(locale), TODO_VERIFY_MARKER),
    }));
    const reference = counts[0];
    for (const entry of counts.slice(1)) {
      expect(
        entry.count,
        `locale "${entry.locale}" has ${entry.count} TODO_VERIFY markers, expected ${reference.count} to match locale "${reference.locale}"`,
      ).toBe(reference.count);
    }
  });

  // Publication gate: every legal value must be confirmed against an official
  // source (Pappers/RNE 2026-09-19 for company data, spec for the host). This
  // test blocks the build if a TODO_VERIFY marker ever comes back.
  it('legal content has no unverified markers', () => {
    for (const locale of LOCALES) {
      const count = countMarkers(legalTextForLocale(locale), TODO_VERIFY_MARKER);
      expect(count, `legal content in "${locale}" should have zero TODO_VERIFY markers`).toBe(0);
    }
  });
});
