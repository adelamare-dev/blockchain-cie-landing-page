/**
 * Route table.
 *
 * Every page has a stable internal id that is independent from its public
 * slug. That id drives hreflang, breadcrumbs, the sitemap and the language
 * switcher, so renaming a localized slug never breaks an internal link.
 *
 * English and Spanish slugs are not literal translations. They follow local
 * search vocabulary, which is why `path-reliability` reads "ai-code-audit"
 * in English rather than a direct rendering of the French wording.
 */

import { DEFAULT_LOCALE, LOCALES, SITE_URL, type Locale } from './config';

export const ROUTE_IDS = [
  'home',
  'path-reliability',
  'path-build',
  'legal-notice',
  'privacy',
  'not-found',
] as const;

export type RouteId = (typeof ROUTE_IDS)[number];

/** Commercial pages, held to the project's Lighthouse thresholds. */
export const COMMERCIAL_ROUTE_IDS = [
  'home',
  'path-reliability',
  'path-build',
] as const satisfies readonly RouteId[];

/** The 404 page must never be indexed, so it stays out of the sitemap. */
const SITEMAP_EXCLUDED: readonly RouteId[] = ['not-found'];

/**
 * Slug per locale, without leading or trailing slash.
 * An empty string means the locale root, for example `/fr/`.
 */
const SLUGS: Record<RouteId, Record<Locale, string>> = {
  home: {
    fr: '',
    en: '',
    es: '',
  },
  'path-reliability': {
    fr: 'fiabiliser-un-systeme',
    en: 'ai-code-audit',
    es: 'auditoria-de-codigo-ia',
  },
  'path-build': {
    fr: 'construire-un-systeme',
    en: 'build-software-and-ai-agents',
    es: 'desarrollo-de-software-y-agentes-ia',
  },
  'legal-notice': {
    fr: 'mentions-legales',
    en: 'legal-notice',
    es: 'aviso-legal',
  },
  privacy: {
    fr: 'politique-de-confidentialite',
    en: 'privacy-policy',
    es: 'politica-de-privacidad',
  },
  'not-found': {
    fr: '404',
    en: '404',
    es: '404',
  },
};

/**
 * Absolute path of a route, prefixed by its locale.
 *
 * Trailing slashes are always emitted so the served URLs match Astro's
 * directory build output and no server-side redirect is needed.
 */
export function getPath(routeId: RouteId, locale: Locale): string {
  const slug = SLUGS[routeId][locale];
  return slug === '' ? `/${locale}/` : `/${locale}/${slug}/`;
}

/** Absolute URL, used for canonical, hreflang, sitemap and JSON-LD. */
export function getUrl(routeId: RouteId, locale: Locale): string {
  return `${SITE_URL}${getPath(routeId, locale)}`;
}

/** The three URLs of one page, used to emit reciprocal hreflang alternates. */
export function getAlternates(routeId: RouteId): Array<{ locale: Locale; url: string }> {
  return LOCALES.map((locale) => ({ locale, url: getUrl(routeId, locale) }));
}

/** Indexable routes, used by the sitemap and by route coverage tests. */
export function getSitemapEntries(): Array<{ routeId: RouteId; locale: Locale; url: string }> {
  return ROUTE_IDS.filter((routeId) => !SITEMAP_EXCLUDED.includes(routeId)).flatMap((routeId) =>
    LOCALES.map((locale) => ({ routeId, locale, url: getUrl(routeId, locale) })),
  );
}

/**
 * Resolves a path back to its route id.
 * Returns `null` for unknown paths, which lets tests detect orphan pages.
 */
export function resolvePath(path: string): { routeId: RouteId; locale: Locale } | null {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  for (const routeId of ROUTE_IDS) {
    for (const locale of LOCALES) {
      if (getPath(routeId, locale) === normalized) {
        return { routeId, locale };
      }
    }
  }
  return null;
}

/** Raw slug, used to build the dynamic page routes. */
export function getSlug(routeId: RouteId, locale: Locale): string {
  return SLUGS[routeId][locale];
}

export { DEFAULT_LOCALE, LOCALES, SITE_URL };
export type { Locale };
