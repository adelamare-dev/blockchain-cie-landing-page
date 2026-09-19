/**
 * llms.txt.
 *
 * Concise, English-language summary for AI assistants and crawlers: company
 * identity, the two commercial paths and the six offer names, the human
 * author, and canonical links for all three locales. No pricing of any kind
 * is included anywhere on the site, so none appears here either.
 */
import type { APIRoute } from 'astro';
import { LOCALES } from '../i18n/config';
import { getUrl } from '../i18n/routes';
import { getContent } from '../content';
import { CONTACT_EMAIL } from '../lib/links';

export const GET: APIRoute = () => {
  const { offers } = getContent('en');
  const offerNames = offers.map((offer) => `- ${offer.name}`).join('\n');
  const homeLinks = LOCALES.map((locale) => `- ${locale}: ${getUrl('home', locale)}`).join('\n');

  const body = `# Blockchain & Cie

> Software & AI Engineering Studio.

Blockchain & Cie audits, stabilizes and builds software systems and AI agents
for production use. Work is organized around two commercial paths:

- Reliability: auditing and fixing existing systems, including AI-generated code.
- Build: designing and shipping new systems, including production AI agents.

## Offers

${offerNames}

## Author

Antoine Delamare is the managing director and technical lead. He directs
every mission end to end, remotely.

## Site

${homeLinks}

## Contact

${CONTACT_EMAIL}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
