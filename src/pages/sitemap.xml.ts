/**
 * XML sitemap.
 *
 * One `<url>` entry per indexable route/locale pair, each carrying reciprocal
 * `xhtml:link rel="alternate"` hreflang entries for all locales plus an
 * `x-default` alternate pointing at the French URL. Entries are derived from
 * `getSitemapEntries()`, which already excludes the 404 route.
 */
import type { APIRoute } from 'astro';
import { HTML_LANG, X_DEFAULT_LOCALE } from '../i18n/config';
import { getAlternates, getSitemapEntries, getUrl, type RouteId } from '../i18n/routes';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrlEntry(routeId: RouteId, url: string): string {
  const alternates = getAlternates(routeId);
  const xDefaultUrl = getUrl(routeId, X_DEFAULT_LOCALE);

  const alternateLinks = alternates
    .map(
      ({ locale: alternateLocale, url: alternateUrl }) =>
        `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[alternateLocale]}" href="${escapeXml(alternateUrl)}" />`,
    )
    .join('\n');

  const xDefaultLink = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefaultUrl)}" />`;

  return ['  <url>', `    <loc>${escapeXml(url)}</loc>`, alternateLinks, xDefaultLink, '  </url>'].join('\n');
}

export const GET: APIRoute = () => {
  const entries = getSitemapEntries();

  const urlEntries = entries.map(({ routeId, url }) => buildUrlEntry(routeId, url)).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
