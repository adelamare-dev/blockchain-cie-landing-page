/**
 * SEO checks on the 3 commercial pages, per locale: canonical, reciprocal
 * hreflang, x-default, title/description, a single valid JSON-LD graph with
 * Organization and Person nodes, absence of any price-like string, and a
 * working no-JavaScript render.
 */
import { test, expect, type Page } from '@playwright/test';
import { LOCALES, X_DEFAULT_LOCALE, HTML_LANG } from '../../src/i18n/config';
import { getAlternates, getPath, getUrl } from '../../src/i18n/routes';

const COMMERCIAL_ROUTE_IDS = ['home', 'path-reliability', 'path-build'] as const;

// Matches a price-like string: digits followed by a currency marker, or the
// abbreviation for "taxes included" / "before tax" in French commercial copy.
const PRICE_PATTERN = /\d[\d\s.,]*\s*(€|EUR|euros?|TTC|HT)\b/i;
const DAY_RATE_PATTERN = /\bTJM\b/;

for (const locale of LOCALES) {
  for (const routeId of COMMERCIAL_ROUTE_IDS) {
    const path = getPath(routeId, locale);
    const canonicalUrl = getUrl(routeId, locale);

    test.describe(`seo: ${routeId} (${locale})`, () => {
      test(`canonical, hreflang, title, description, JSON-LD and pricing on ${path}`, async ({ page }) => {
        await page.goto(path);

        // --- Canonical is self-referential and absolute. ---
        const canonicalHref = await page.locator('link[rel="canonical"]').getAttribute('href');
        expect(canonicalHref, `canonical on ${path} should be self-referential`).toBe(canonicalUrl);
        expect(() => new URL(canonicalHref ?? '')).not.toThrow();

        // --- hreflang alternates exist for all 3 locales and are reciprocal. ---
        const expectedAlternates = getAlternates(routeId);
        for (const { locale: altLocale, url: altUrl } of expectedAlternates) {
          const href = await page
            .locator(`link[rel="alternate"][hreflang="${HTML_LANG[altLocale]}"]`)
            .getAttribute('href');
          expect(href, `hreflang alternate for "${altLocale}" on ${path} should point at ${altUrl}`).toBe(altUrl);
        }

        // --- x-default alternate exists and points at the French URL. ---
        const xDefaultHref = await page.locator('link[rel="alternate"][hreflang="x-default"]').getAttribute('href');
        const frenchUrl = getUrl(routeId, X_DEFAULT_LOCALE);
        expect(xDefaultHref, `x-default alternate on ${path} should point at the French URL`).toBe(frenchUrl);

        // --- Title and meta description are present and non-empty. ---
        const title = await page.title();
        expect(title.trim(), `title on ${path} should be non-empty`).not.toBe('');

        const description = await page.locator('meta[name="description"]').getAttribute('content');
        expect(description?.trim(), `meta description on ${path} should be non-empty`).not.toBe('');

        // --- Exactly one JSON-LD script, valid JSON, with @context and @graph. ---
        const jsonLdScripts = page.locator('script[type="application/ld+json"]');
        expect(await jsonLdScripts.count(), `${path} should have exactly one JSON-LD script`).toBe(1);

        const jsonLdText = await jsonLdScripts.first().textContent();
        let parseError: unknown = null;
        let parsed: { '@context'?: unknown; '@graph'?: unknown[] } = {};
        try {
          parsed = JSON.parse(jsonLdText ?? '');
        } catch (error) {
          parseError = error;
        }
        expect(parseError, `JSON-LD on ${path} should parse as valid JSON`).toBeNull();

        expect(parsed['@context'], `JSON-LD on ${path} should have an @context`).toBeTruthy();
        expect(Array.isArray(parsed['@graph']), `JSON-LD on ${path} should have an @graph array`).toBe(true);

        const graph = parsed['@graph'] as Array<Record<string, unknown>>;
        const hasOrganization = graph.some((node) => node['@type'] === 'Organization');
        const hasPerson = graph.some((node) => node['@type'] === 'Person');
        expect(hasOrganization, `JSON-LD @graph on ${path} should contain an Organization node`).toBe(true);
        expect(hasPerson, `JSON-LD @graph on ${path} should contain a Person node`).toBe(true);

        // --- No price-like string anywhere in the rendered HTML. ---
        const bodyText = await page.locator('body').innerText();
        expect(PRICE_PATTERN.test(bodyText), `${path} should not contain a price-like string`).toBe(false);
        expect(DAY_RATE_PATTERN.test(bodyText), `${path} should not contain the word TJM`).toBe(false);
      });

      test(`renders main content with JavaScript disabled on ${path}`, async ({ browser }) => {
        const context = await browser.newContext({ javaScriptEnabled: false });
        const noJsPage: Page = await context.newPage();

        await noJsPage.goto(path);

        await expect(noJsPage.locator('h1')).toBeVisible();
        await expect(noJsPage.locator('a[data-analytics="calendly_click"]').first()).toBeVisible();

        await context.close();
      });
    });
  }
}
