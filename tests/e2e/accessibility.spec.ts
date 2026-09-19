/**
 * Accessibility checks on the 3 commercial pages, per locale, without any
 * extra dependency: heading structure, image alt text, accessible link
 * names, the `lang` attribute, landmark uniqueness, keyboard reach to the
 * primary call to action, and the mobile menu's open/close behavior.
 */
import { test, expect, type Page } from '@playwright/test';
import { LOCALES, HTML_LANG } from '../../src/i18n/config';
import { getPath } from '../../src/i18n/routes';

const COMMERCIAL_ROUTE_IDS = ['home', 'path-reliability', 'path-build'] as const;

for (const locale of LOCALES) {
  for (const routeId of COMMERCIAL_ROUTE_IDS) {
    const path = getPath(routeId, locale);

    test.describe(`accessibility: ${routeId} (${locale})`, () => {
      test(`heading structure, alt text, link names and landmarks on ${path}`, async ({ page }) => {
        await page.goto(path);

        // --- Exactly one h1. ---
        const h1Count = await page.locator('h1').count();
        expect(h1Count, `${path} should have exactly one h1`).toBe(1);

        // --- Heading levels never skip a level going down. ---
        const headingLevels = await page.locator('h1, h2, h3, h4, h5, h6').evaluateAll((elements) =>
          elements.map((el) => Number(el.tagName.slice(1))),
        );
        let previousLevel = headingLevels[0] ?? 1;
        for (const level of headingLevels) {
          if (level > previousLevel) {
            expect(
              level - previousLevel,
              `heading level jumped from h${previousLevel} to h${level} on ${path}`,
            ).toBeLessThanOrEqual(1);
          }
          previousLevel = level;
        }

        // --- Every img has an alt attribute (possibly empty). ---
        const images = page.locator('img');
        const imageCount = await images.count();
        for (let i = 0; i < imageCount; i += 1) {
          const alt = await images.nth(i).getAttribute('alt');
          expect(alt, `image ${i} on ${path} should have an alt attribute`).not.toBeNull();
        }

        // --- Every link has a non-empty accessible name. ---
        const links = page.locator('a');
        const linkCount = await links.count();
        for (let i = 0; i < linkCount; i += 1) {
          const link = links.nth(i);
          const accessibleName = await link.evaluate((el) => {
            const ariaLabel = el.getAttribute('aria-label');
            if (ariaLabel && ariaLabel.trim() !== '') return ariaLabel.trim();
            return (el.textContent ?? '').trim();
          });
          expect(accessibleName, `link ${i} on ${path} should have a non-empty accessible name`).not.toBe('');
        }

        // --- html lang matches the expected locale. ---
        const htmlLang = await page.locator('html').getAttribute('lang');
        expect(htmlLang, `html lang on ${path} should match locale "${locale}"`).toBe(HTML_LANG[locale]);

        // --- A single <main> landmark exists. ---
        const mainCount = await page.locator('main').count();
        expect(mainCount, `${path} should have exactly one main landmark`).toBe(1);
      });

      test(`keyboard reaches the primary call to action on ${path}`, async ({ page }) => {
        await page.goto(path);

        // Path pages are long single-page layouts where the primary CTA is
        // the closing section, after the header nav, language switcher and
        // breadcrumb. The bound still catches a genuinely unreachable CTA
        // (removed, trapped focus) while accommodating that page length.
        const MAX_STOPS = 30;
        let reached = false;

        for (let i = 0; i < MAX_STOPS; i += 1) {
          await page.keyboard.press('Tab');
          const isCta = await page.evaluate(() => {
            const active = document.activeElement;
            return active?.getAttribute('data-analytics') === 'calendly_click';
          });
          if (isCta) {
            reached = true;
            break;
          }
        }

        expect(reached, `keyboard should reach the primary CTA on ${path} within ${MAX_STOPS} tab stops`).toBe(true);
      });
    });
  }
}

test.describe('mobile menu', () => {
  // A narrow viewport is enough to trigger the mobile layout's CSS
  // breakpoint. Full device emulation (`devices['Pixel 5']`) sets
  // `defaultBrowserType`, which Playwright refuses inside a describe block.
  test.use({ viewport: { width: 390, height: 844 } });

  for (const locale of LOCALES) {
    test(`mobile menu opens, exposes nav links and closes on Escape (${locale})`, async ({ page }: { page: Page }) => {
      const homePath = getPath('home', locale);
      await page.goto(homePath);

      const toggle = page.locator('.mobile-menu__toggle');
      await toggle.click();

      const panel = page.locator('.mobile-menu__panel');
      await expect(panel).toBeVisible();

      const navLinks = page.locator('.mobile-menu__link');
      const navLinkCount = await navLinks.count();
      expect(navLinkCount, `mobile menu on ${homePath} should expose nav links`).toBeGreaterThan(0);
      await expect(navLinks.first()).toBeVisible();

      await page.keyboard.press('Escape');
      const details = page.locator('.mobile-menu');
      await expect(details).not.toHaveJSProperty('open', true);
    });
  }
});
