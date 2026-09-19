/**
 * robots.txt.
 *
 * Standard search crawlers and AI assistant crawlers that serve user-initiated
 * queries and citations are explicitly allowed. Crawlers whose stated purpose
 * is bulk model-training corpus collection are explicitly disallowed. Every
 * other crawler falls through to the trailing wildcard group.
 */
import type { APIRoute } from 'astro';
import { SITE_URL } from '../i18n/config';

// Search and AI-assistant crawlers that serve user-initiated queries and citations.
const ALLOWED_AGENTS = [
  'Googlebot',
  'Bingbot',
  'DuckDuckBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'Google-Extended',
];

// Crawlers whose stated purpose is bulk model-training corpus collection.
const DISALLOWED_AGENTS = ['GPTBot', 'CCBot', 'Bytespider', 'Amazonbot', 'Applebot-Extended', 'meta-externalagent'];

export const GET: APIRoute = () => {
  const allowedGroups = ALLOWED_AGENTS.map((agent) => `User-agent: ${agent}\nAllow: /`).join('\n\n');
  const disallowedGroups = DISALLOWED_AGENTS.map((agent) => `User-agent: ${agent}\nDisallow: /`).join('\n\n');

  const body = `# This policy is reviewed periodically. Before editing, re-check each
# crawler's user-agent name against its vendor's published documentation,
# since names and behaviors change over time.

${allowedGroups}

${disallowedGroups}

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
