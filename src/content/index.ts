/**
 * Locale content registry.
 *
 * Every locale exposes the same shape, so a page renders from `getContent(locale)`
 * without knowing which language it is in. Adding a locale means adding one entry
 * here and one folder next to it; TypeScript then reports every missing piece.
 */

import type { Locale } from '../i18n/config';
import type {
  HomeContent,
  LegalContent,
  MetaContent,
  Offer,
  PathsContent,
  Proof,
  UiContent,
} from './types';

import { home as frHome } from './fr/home';
import { legal as frLegal } from './fr/legal';
import { meta as frMeta } from './fr/meta';
import { offers as frOffers } from './fr/offers';
import { paths as frPaths } from './fr/paths';
import { proofs as frProofs } from './fr/proofs';
import { ui as frUi } from './fr/ui';

import { home as enHome } from './en/home';
import { legal as enLegal } from './en/legal';
import { meta as enMeta } from './en/meta';
import { offers as enOffers } from './en/offers';
import { paths as enPaths } from './en/paths';
import { proofs as enProofs } from './en/proofs';
import { ui as enUi } from './en/ui';

import { home as esHome } from './es/home';
import { legal as esLegal } from './es/legal';
import { meta as esMeta } from './es/meta';
import { offers as esOffers } from './es/offers';
import { paths as esPaths } from './es/paths';
import { proofs as esProofs } from './es/proofs';
import { ui as esUi } from './es/ui';

export interface LocaleContent {
  home: HomeContent;
  offers: readonly Offer[];
  proofs: readonly Proof[];
  paths: PathsContent;
  legal: LegalContent;
  ui: UiContent;
  meta: MetaContent;
}

const CONTENT: Record<Locale, LocaleContent> = {
  fr: {
    home: frHome,
    offers: frOffers,
    proofs: frProofs,
    paths: frPaths,
    legal: frLegal,
    ui: frUi,
    meta: frMeta,
  },
  en: {
    home: enHome,
    offers: enOffers,
    proofs: enProofs,
    paths: enPaths,
    legal: enLegal,
    ui: enUi,
    meta: enMeta,
  },
  es: {
    home: esHome,
    offers: esOffers,
    proofs: esProofs,
    paths: esPaths,
    legal: esLegal,
    ui: esUi,
    meta: esMeta,
  },
};

export function getContent(locale: Locale): LocaleContent {
  return CONTENT[locale];
}

/** Looks up one offer by id. Throws on an unknown id so a typo fails the build. */
export function getOffer(locale: Locale, id: Offer['id']): Offer {
  const offer = CONTENT[locale].offers.find((candidate) => candidate.id === id);
  if (!offer) {
    throw new Error(`Unknown offer "${id}" in locale "${locale}"`);
  }
  return offer;
}

/** Looks up one proof by id. Throws on an unknown id so a typo fails the build. */
export function getProof(locale: Locale, id: string): Proof {
  const proof = CONTENT[locale].proofs.find((candidate) => candidate.id === id);
  if (!proof) {
    throw new Error(`Unknown proof "${id}" in locale "${locale}"`);
  }
  return proof;
}

export type { Locale };
export * from './types';
