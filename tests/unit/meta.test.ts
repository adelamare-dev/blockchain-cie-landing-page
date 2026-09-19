import { describe, expect, it } from 'vitest';
import { LOCALES } from '../../src/i18n/config';
import { getContent } from '../../src/content';
import type { MetaContent } from '../../src/content/types';

const META_KEYS: (keyof MetaContent)[] = [
  'home',
  'pathReliability',
  'pathBuild',
  'legalNotice',
  'privacy',
  'notFound',
];

describe('meta title and description length', () => {
  it.each(LOCALES.flatMap((locale) => META_KEYS.map((key) => [locale, key] as const)))(
    'meta "%s"/"%s" has a title at most 60 chars and a description between 140 and 158 chars',
    (locale, key) => {
      const entry = getContent(locale).meta[key];

      expect(entry.title, `meta "${key}" title in "${locale}" should be non-empty`).not.toBe('');
      expect(
        entry.title.length,
        `meta "${key}" title in "${locale}" is ${entry.title.length} chars ("${entry.title}"), expected at most 60`,
      ).toBeLessThanOrEqual(60);

      expect(
        entry.description.length,
        `meta "${key}" description in "${locale}" is ${entry.description.length} chars ("${entry.description}"), expected between 140 and 158`,
      ).toBeGreaterThanOrEqual(140);
      expect(
        entry.description.length,
        `meta "${key}" description in "${locale}" is ${entry.description.length} chars ("${entry.description}"), expected between 140 and 158`,
      ).toBeLessThanOrEqual(158);
    },
  );
});

describe('meta uniqueness within a locale', () => {
  it.each(LOCALES)('titles are unique within locale "%s"', (locale) => {
    const meta = getContent(locale).meta;
    const titles = META_KEYS.map((key) => meta[key].title);
    const duplicates = titles.filter((title, index) => titles.indexOf(title) !== index);
    expect(duplicates, `locale "${locale}" has duplicate meta titles: ${duplicates.join(', ')}`).toHaveLength(0);
  });

  it.each(LOCALES)('descriptions are unique within locale "%s"', (locale) => {
    const meta = getContent(locale).meta;
    const descriptions = META_KEYS.map((key) => meta[key].description);
    const duplicates = descriptions.filter((description, index) => descriptions.indexOf(description) !== index);
    expect(
      duplicates,
      `locale "${locale}" has duplicate meta descriptions: ${duplicates.join(', ')}`,
    ).toHaveLength(0);
  });
});
