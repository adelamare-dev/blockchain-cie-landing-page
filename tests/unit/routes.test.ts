import { describe, expect, it } from 'vitest';
import { LOCALES, SITE_URL } from '../../src/i18n/config';
import {
  ROUTE_IDS,
  getAlternates,
  getPath,
  getSitemapEntries,
  getSlug,
  getUrl,
  resolvePath,
  type RouteId,
} from '../../src/i18n/routes';

describe('route paths', () => {
  it.each(ROUTE_IDS.flatMap((routeId) => LOCALES.map((locale) => [routeId, locale] as const)))(
    'resolves a path for route "%s" in locale "%s"',
    (routeId, locale) => {
      const path = getPath(routeId, locale);
      expect(path, `getPath(${routeId}, ${locale}) should return a non-empty string`).toBeTruthy();
    },
  );

  it.each(ROUTE_IDS.flatMap((routeId) => LOCALES.map((locale) => [routeId, locale] as const)))(
    'path for "%s"/"%s" starts with /<locale>/ and ends with /',
    (routeId, locale) => {
      const path = getPath(routeId, locale);
      expect(path.startsWith(`/${locale}/`), `path "${path}" for ${routeId}/${locale} should start with /${locale}/`).toBe(
        true,
      );
      expect(path.endsWith('/'), `path "${path}" for ${routeId}/${locale} should end with /`).toBe(true);
    },
  );

  it.each(LOCALES)('home path for locale "%s" is exactly /<locale>/', (locale) => {
    const path = getPath('home', locale);
    expect(path, `home path for ${locale} should be exactly /${locale}/`).toBe(`/${locale}/`);
  });
});

describe('getUrl', () => {
  it.each(ROUTE_IDS.flatMap((routeId) => LOCALES.map((locale) => [routeId, locale] as const)))(
    'returns an absolute https URL on the canonical origin for "%s"/"%s"',
    (routeId, locale) => {
      const url = getUrl(routeId, locale);
      expect(url.startsWith(SITE_URL), `URL "${url}" for ${routeId}/${locale} should start with ${SITE_URL}`).toBe(
        true,
      );
      expect(() => new URL(url)).not.toThrow();
      const parsed = new URL(url);
      expect(parsed.protocol, `URL "${url}" for ${routeId}/${locale} should use https`).toBe('https:');
    },
  );
});

describe('resolvePath round-trip', () => {
  it.each(ROUTE_IDS.flatMap((routeId) => LOCALES.map((locale) => [routeId, locale] as const)))(
    'round-trips "%s"/"%s" back to the same route id and locale',
    (routeId, locale) => {
      const path = getPath(routeId, locale);
      const resolved = resolvePath(path);
      expect(resolved, `resolvePath("${path}") should not be null for a known route`).not.toBeNull();
      expect(resolved?.routeId, `resolvePath("${path}") should resolve back to route id "${routeId}"`).toBe(routeId);
      expect(resolved?.locale, `resolvePath("${path}") should resolve back to locale "${locale}"`).toBe(locale);
    },
  );

  it('returns null for an unknown path', () => {
    expect(resolvePath('/xx/this-path-does-not-exist/')).toBeNull();
    expect(resolvePath('/fr/this-path-does-not-exist/')).toBeNull();
  });
});

describe('slug uniqueness', () => {
  it.each(LOCALES)('slugs are unique within locale "%s"', (locale) => {
    const slugs = ROUTE_IDS.map((routeId) => getSlug(routeId, locale));
    const seen = new Map<string, RouteId[]>();
    ROUTE_IDS.forEach((routeId, index) => {
      const slug = slugs[index];
      const list = seen.get(slug) ?? [];
      list.push(routeId);
      seen.set(slug, list);
    });
    for (const [slug, routeIds] of seen) {
      expect(
        routeIds.length,
        `slug "${slug}" in locale "${locale}" is shared by routes: ${routeIds.join(', ')}`,
      ).toBe(1);
    }
  });
});

describe('getAlternates', () => {
  it.each(ROUTE_IDS)('returns exactly 3 reciprocal alternates for route "%s"', (routeId) => {
    const alternates = getAlternates(routeId);
    expect(alternates, `getAlternates(${routeId}) should return exactly 3 entries`).toHaveLength(3);

    const localesSeen = alternates.map((alt) => alt.locale).sort();
    expect(localesSeen, `getAlternates(${routeId}) should cover all 3 locales exactly once`).toEqual(
      [...LOCALES].sort(),
    );

    for (const alt of alternates) {
      const reciprocal = getAlternates(routeId).find((other) => other.locale === alt.locale);
      expect(
        reciprocal?.url,
        `alternate for locale "${alt.locale}" on route "${routeId}" should be reciprocal`,
      ).toBe(getUrl(routeId, alt.locale));

      // Every alternate's own set of alternates must contain the original URL for every other locale.
      for (const original of alternates) {
        const ownAlternates = getAlternates(routeId);
        const found = ownAlternates.some((entry) => entry.url === original.url);
        expect(
          found,
          `alternates for route "${routeId}" should include URL "${original.url}" (locale "${original.locale}")`,
        ).toBe(true);
      }
    }
  });
});

describe('sitemap', () => {
  it('excludes the 404 route', () => {
    const entries = getSitemapEntries();
    const has404 = entries.some((entry) => entry.routeId === 'not-found');
    expect(has404, 'sitemap entries should not include the "not-found" route').toBe(false);
  });

  it('contains exactly (ROUTE_IDS.length - 1) * 3 entries', () => {
    const entries = getSitemapEntries();
    const expected = (ROUTE_IDS.length - 1) * LOCALES.length;
    expect(entries.length, `sitemap should contain ${expected} entries (excluding not-found, times ${LOCALES.length} locales)`).toBe(
      expected,
    );
  });
});

describe('slug formatting', () => {
  const nonHomeRouteIds = ROUTE_IDS.filter((routeId) => routeId !== 'home');

  it.each(nonHomeRouteIds.flatMap((routeId) => LOCALES.map((locale) => [routeId, locale] as const)))(
    'slug for "%s"/"%s" has no uppercase letters, spaces or underscores',
    (routeId, locale) => {
      const slug = getSlug(routeId, locale);
      expect(slug, `slug "${slug}" for ${routeId}/${locale} should contain no uppercase letters`).toBe(
        slug.toLowerCase(),
      );
      expect(slug, `slug "${slug}" for ${routeId}/${locale} should contain no spaces`).not.toMatch(/\s/);
      expect(slug, `slug "${slug}" for ${routeId}/${locale} should contain no underscores`).not.toMatch(/_/);
    },
  );
});
