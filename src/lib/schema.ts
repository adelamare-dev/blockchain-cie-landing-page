/**
 * JSON-LD graph builders.
 *
 * The graph is generated at build time and mirrors what is visible on the page.
 * `@id` values are stable across locales so the same entity is never described
 * as three different organizations. No `Offer` node carries a price, because no
 * price is published anywhere on the site.
 */

import { HTML_LANG, SITE_URL, type Locale } from "../i18n/config";
import { getUrl, type RouteId } from "../i18n/routes";
import type { Offer } from "../content/types";

/** Stable entity ids. Locale-independent by design. */
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#antoine-delamare`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const CONTACT_EMAIL = "contact@blockchain-cie.com";

const SOCIAL_PROFILES = ["https://www.linkedin.com/in/adelamare/"];

/** Company descriptor, localized. */
const ORGANIZATION_DESCRIPTOR: Record<Locale, string> = {
  fr: "Studio d'ingénierie logicielle & IA",
  en: "Software & AI Engineering Studio",
  es: "Estudio de ingeniería de software e IA",
};

const PERSON_ROLE: Record<Locale, string> = {
  fr: "Gérant et responsable technique",
  en: "Managing director and technical lead",
  es: "Gerente y responsable técnico",
};

type JsonLdNode = Record<string, unknown>;

export function buildOrganization(locale: Locale): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Blockchain & Cie",
    description: ORGANIZATION_DESCRIPTOR[locale],
    url: SITE_URL,
    email: CONTACT_EMAIL,
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    sameAs: SOCIAL_PROFILES,
  };
}

export function buildPerson(locale: Locale): JsonLdNode {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Antoine Delamare",
    jobTitle: PERSON_ROLE[locale],
    image: `${SITE_URL}/photo.jpg`,
    email: CONTACT_EMAIL,
    worksFor: { "@id": ORGANIZATION_ID },
    sameAs: SOCIAL_PROFILES,
  };
}

export function buildWebSite(locale: Locale): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Blockchain & Cie",
    url: SITE_URL,
    inLanguage: HTML_LANG[locale],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildWebPage(params: {
  locale: Locale;
  routeId: RouteId;
  title: string;
  description: string;
}): JsonLdNode {
  const url = getUrl(params.routeId, params.locale);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: params.title,
    description: params.description,
    inLanguage: HTML_LANG[params.locale],
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}

/**
 * One `Service` node per offer.
 *
 * `serviceType` carries the localized descriptor while `name` keeps the stable
 * commercial name, so the same service is recognizable across the three locales.
 */
export function buildServices(
  locale: Locale,
  offers: readonly Offer[],
): JsonLdNode[] {
  return offers.map((offer) => ({
    "@type": "Service",
    "@id": `${SITE_URL}/#service-${offer.id}`,
    name: offer.name,
    serviceType: offer.descriptor,
    description: offer.outcome,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "Worldwide",
    availableLanguage: ["fr", "en", "es"],
  }));
}

export function buildBreadcrumbs(
  items: Array<{ name: string; url: string }>,
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Emitted only when the questions and answers are visible on the page.
 * Callers pass the same array they render, never a hidden one.
 */
export function buildFaq(
  items: ReadonlyArray<{ question: string; answer: string }>,
): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Wraps nodes into a single `@graph` document. */
export function buildGraph(nodes: JsonLdNode[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  });
}
