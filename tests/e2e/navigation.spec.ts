/**
 * Navigation flows: skip link, path pages, language switching, offers and
 * outbound links. Runs once per locale so a broken translation or a slug
 * change is caught for that locale specifically.
 */
import { test, expect } from '@playwright/test';
import { LOCALES, type Locale } from '../../src/i18n/config';
import { getContent } from '../../src/content';
import { getPath } from '../../src/i18n/routes';
import { CALENDLY_URL, CONTACT_EMAIL } from '../../src/lib/links';

for (const locale of LOCALES) {
  test.describe(`navigation (${locale})`, () => {
    test(`skip link, path pages, language switching, offers and links work in ${locale}`, async ({ page }) => {
      const content = getContent(locale);
      const homePath = getPath('home', locale);

      await page.goto(homePath);

      // --- Skip link: reachable by keyboard, moves focus to #main. ---
      await page.keyboard.press('Tab');
      const skipLink = page.locator('.skip-link');
      await expect(skipLink).toBeFocused();
      await page.keyboard.press('Enter');
      const main = page.locator('#main');
      await expect(main).toBeFocused();

      // --- Reliability path page. ---
      const reliabilityPath = getPath('path-reliability', locale);
      await page.goto(homePath);
      await clickNavLink(page, content.ui.nav.reliability);
      await expect(page).toHaveURL(new RegExp(`${reliabilityPath}$`));
      await expect(page.locator('h1')).toBeVisible();

      // --- Back, then build path page. ---
      await page.goto(homePath);
      const buildPath = getPath('path-build', locale);
      await clickNavLink(page, content.ui.nav.build);
      await expect(page).toHaveURL(new RegExp(`${buildPath}$`));
      await expect(page.locator('h1')).toBeVisible();

      // --- Switching language from a path page lands on the equivalent page. ---
      const otherLocales = LOCALES.filter((candidate) => candidate !== locale);
      for (const targetLocale of otherLocales) {
        await page.goto(getPath('path-reliability', locale));
        await switchLanguage(page, targetLocale);
        const expectedPath = getPath('path-reliability', targetLocale);
        await expect(page).toHaveURL(new RegExp(`${escapeRegExp(expectedPath)}$`));
      }

      // --- Offer names: all 6 appear across the 2 path pages. ---
      const allOfferNames = content.offers.map((offer) => offer.name);
      await page.goto(reliabilityPath);
      const reliabilityBody = await page.locator('body').innerText();
      await page.goto(buildPath);
      const buildBody = await page.locator('body').innerText();
      const combinedText = `${reliabilityBody}\n${buildBody}`;
      for (const name of allOfferNames) {
        expect(combinedText.includes(name), `offer "${name}" should appear across the path pages`).toBe(true);
      }

      // --- Retainer offer appears on both path pages. ---
      const retainerName = content.offers.find((offer) => offer.id === 'retainer')!.name;
      expect(reliabilityBody.includes(retainerName), 'retainer offer should appear on the reliability page').toBe(
        true,
      );
      expect(buildBody.includes(retainerName), 'retainer offer should appear on the build page').toBe(true);

      // --- Calendly link: correct URL, no target="_blank". ---
      const calendlyLinks = page.locator(`a[href="${CALENDLY_URL}"]`);
      const calendlyCount = await calendlyLinks.count();
      expect(calendlyCount, 'a Calendly link should exist on the build path page').toBeGreaterThan(0);
      for (let i = 0; i < calendlyCount; i += 1) {
        await expect(calendlyLinks.nth(i)).not.toHaveAttribute('target', '_blank');
      }

      // --- Mailto link for the contact address exists. ---
      const mailtoLink = page.locator(`a[href="mailto:${CONTACT_EMAIL}"]`);
      expect(await mailtoLink.count(), 'a mailto link for the contact address should exist').toBeGreaterThan(0);
    });
  });
}

/** Escapes a string for safe use inside a `RegExp` constructor. */
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// The header's desktop nav/switcher and the `<details>` mobile menu are
// mutually exclusive past this width (see SiteHeader.astro's `62rem` media
// query). Deciding from the configured viewport is deterministic; probing
// visibility at runtime can race with layout and hang the mobile click.
const DESKTOP_BREAKPOINT_PX = 992;

/**
 * Clicks a primary nav link by its accessible name. The desktop nav is used
 * directly; on narrow viewports it is not rendered, so the mobile menu must
 * be opened first.
 */
async function clickNavLink(page: import('@playwright/test').Page, name: string): Promise<void> {
  const viewport = page.viewportSize();
  const isDesktop = (viewport?.width ?? 0) >= DESKTOP_BREAKPOINT_PX;

  if (isDesktop) {
    await page.locator('.site-header__nav').getByRole('link', { name, exact: true }).click();
    return;
  }

  await page.locator('.mobile-menu__toggle').click();
  await page.locator('.mobile-menu__panel').getByRole('link', { name, exact: true }).click();
}

/**
 * Clicks the language switcher entry for `targetLocale`. The desktop
 * switcher is used directly; on narrow viewports the mobile menu must be
 * opened first since the desktop switcher is not rendered.
 */
async function switchLanguage(page: import('@playwright/test').Page, targetLocale: Locale): Promise<void> {
  const viewport = page.viewportSize();
  const isDesktop = (viewport?.width ?? 0) >= DESKTOP_BREAKPOINT_PX;

  // `hreflang` uniquely identifies the switcher entry regardless of its
  // visible/hidden text nodes, unlike a text-content filter.
  if (isDesktop) {
    const desktopSwitcher = page.locator(`.site-header__actions .lang-switcher__link[hreflang="${targetLocale}"]`);
    await desktopSwitcher.click();
    return;
  }

  const toggle = page.locator('.mobile-menu__toggle');
  await toggle.click();
  const mobileSwitcher = page.locator(`.mobile-menu__langs .lang-switcher__link[hreflang="${targetLocale}"]`);
  await mobileSwitcher.click();
}
