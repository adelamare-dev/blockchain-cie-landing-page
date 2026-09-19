import { describe, expect, it } from 'vitest';
import { LOCALES } from '../../src/i18n/config';
import { getContent } from '../../src/content';
import type { Offer, Proof } from '../../src/content/types';

const CONTENT_KEYS = ['home', 'offers', 'proofs', 'paths', 'legal', 'ui', 'meta'] as const;

describe('content registry shape', () => {
  it.each(LOCALES)('getContent("%s") returns all 7 content keys', (locale) => {
    const content = getContent(locale);
    for (const key of CONTENT_KEYS) {
      expect(content[key], `getContent("${locale}").${key} should be defined`).toBeDefined();
    }
  });
});

describe('offer parity across locales', () => {
  it('offers arrays have the same length and same ids in the same order across all locales', () => {
    const [first, ...rest] = LOCALES.map((locale) => getContent(locale).offers);
    const referenceIds = first.map((offer) => offer.id);
    rest.forEach((offers, index) => {
      const locale = LOCALES[index + 1];
      expect(offers.length, `offers length for locale "${locale}" should match locale "${LOCALES[0]}"`).toBe(
        first.length,
      );
      expect(
        offers.map((offer) => offer.id),
        `offer id order for locale "${locale}" should match locale "${LOCALES[0]}"`,
      ).toEqual(referenceIds);
    });
  });

  it.each(LOCALES)('every offer in locale "%s" has required non-empty fields', (locale) => {
    const offers = getContent(locale).offers;
    for (const offer of offers) {
      expect(offer.name, `offer "${offer.id}" in "${locale}" should have a non-empty name`).not.toBe('');
      expect(offer.descriptor, `offer "${offer.id}" in "${locale}" should have a non-empty descriptor`).not.toBe('');
      expect(offer.outcome, `offer "${offer.id}" in "${locale}" should have a non-empty outcome`).not.toBe('');
      expect(offer.duration, `offer "${offer.id}" in "${locale}" should have a non-empty duration`).not.toBe('');

      const arrayFields: (keyof Offer)[] = ['triggers', 'deliverables', 'clientInputs', 'eligibility', 'outOfScope'];
      for (const field of arrayFields) {
        const value = offer[field] as string[];
        expect(
          Array.isArray(value) && value.length > 0,
          `offer "${offer.id}" in "${locale}" should have a non-empty "${field}" array`,
        ).toBe(true);
      }
    }
  });

  it('offer names are byte-identical across all locales', () => {
    const reference = getContent(LOCALES[0]).offers;
    for (const offer of reference) {
      for (const locale of LOCALES.slice(1)) {
        const other = getContent(locale).offers.find((candidate) => candidate.id === offer.id);
        expect(other, `offer "${offer.id}" should exist in locale "${locale}"`).toBeDefined();
        expect(
          other?.name,
          `offer "${offer.id}" name in locale "${locale}" should be byte-identical to "${LOCALES[0]}" ("${offer.name}")`,
        ).toBe(offer.name);
      }
    }
  });
});

describe('proof parity across locales', () => {
  it('proofs arrays have the same length and same ids across all locales', () => {
    const [first, ...rest] = LOCALES.map((locale) => getContent(locale).proofs);
    const referenceIds = [...first.map((proof) => proof.id)].sort();
    rest.forEach((proofs, index) => {
      const locale = LOCALES[index + 1];
      expect(proofs.length, `proofs length for locale "${locale}" should match locale "${LOCALES[0]}"`).toBe(
        first.length,
      );
      expect(
        [...proofs.map((proof) => proof.id)].sort(),
        `proof ids for locale "${locale}" should match locale "${LOCALES[0]}"`,
      ).toEqual(referenceIds);
    });
  });

  it.each(LOCALES)('every proof in locale "%s" has clientNamed === false', (locale) => {
    const proofs = getContent(locale).proofs;
    for (const proof of proofs) {
      expect(proof.clientNamed, `proof "${proof.id}" in "${locale}" should have clientNamed === false`).toBe(false);
    }
  });

  it('provenance is identical across locales for each proof id', () => {
    const reference = getContent(LOCALES[0]).proofs;
    for (const proof of reference) {
      for (const locale of LOCALES.slice(1)) {
        const other = getContent(locale).proofs.find((candidate) => candidate.id === proof.id);
        expect(other, `proof "${proof.id}" should exist in locale "${locale}"`).toBeDefined();
        expect(
          other?.provenance,
          `provenance for proof "${proof.id}" in locale "${locale}" should match locale "${LOCALES[0]}"`,
        ).toEqual(proof.provenance);
      }
    }
  });

  it.each(LOCALES)('every proof result in locale "%s" has non-empty metric and context', (locale) => {
    const proofs = getContent(locale).proofs;
    for (const proof of proofs) {
      expect(proof.results.length, `proof "${proof.id}" in "${locale}" should have at least one result`).toBeGreaterThan(
        0,
      );
      proof.results.forEach((result, index) => {
        expect(
          result.metric,
          `proof "${proof.id}" result[${index}] in "${locale}" should have a non-empty metric`,
        ).not.toBe('');
        expect(
          result.context,
          `proof "${proof.id}" result[${index}] in "${locale}" should have a non-empty context`,
        ).not.toBe('');
      });
    }
  });
});

describe('cross-references between offers, proofs and paths', () => {
  it.each(LOCALES)('every offer.proofId in locale "%s" refers to an existing proof', (locale) => {
    const { offers, proofs } = getContent(locale);
    const proofIds = new Set(proofs.map((proof: Proof) => proof.id));
    for (const offer of offers) {
      if (offer.proofId !== null) {
        expect(
          proofIds.has(offer.proofId),
          `offer "${offer.id}" in "${locale}" references unknown proofId "${offer.proofId}"`,
        ).toBe(true);
      }
    }
  });

  it.each(LOCALES)('every path.proofId and path.offerIds entry in locale "%s" resolves', (locale) => {
    const { offers, proofs, paths } = getContent(locale);
    const proofIds = new Set(proofs.map((proof: Proof) => proof.id));
    const offerIds = new Set(offers.map((offer: Offer) => offer.id));

    for (const pathKey of ['reliability', 'build'] as const) {
      const path = paths[pathKey];
      expect(
        proofIds.has(path.proofId),
        `path "${pathKey}" in "${locale}" references unknown proofId "${path.proofId}"`,
      ).toBe(true);

      for (const offerId of path.offerIds) {
        expect(
          offerIds.has(offerId),
          `path "${pathKey}" in "${locale}" references unknown offerId "${offerId}"`,
        ).toBe(true);
      }
    }
  });

  it.each(LOCALES)('both paths include the retainer as a continuity option in locale "%s"', (locale) => {
    const { paths } = getContent(locale);
    for (const pathKey of ['reliability', 'build'] as const) {
      expect(
        paths[pathKey].retainer.offerId,
        `path "${pathKey}" in "${locale}" should reference the "retainer" offer as its continuity option`,
      ).toBe('retainer');
    }
  });

  it.each(LOCALES)('the retainer offer has path === "continuity" in locale "%s"', (locale) => {
    const { offers } = getContent(locale);
    const retainer = offers.find((offer: Offer) => offer.id === 'retainer');
    expect(retainer, `locale "${locale}" should define a "retainer" offer`).toBeDefined();
    expect(retainer?.path, `retainer offer in "${locale}" should have path === "continuity"`).toBe('continuity');
  });
});

describe('FAQ coverage', () => {
  it.each(LOCALES)('home FAQ in locale "%s" has at least 4 items with non-empty question and answer', (locale) => {
    const { home } = getContent(locale);
    expect(home.faq.items.length, `home FAQ in "${locale}" should have at least 4 items`).toBeGreaterThanOrEqual(4);
    home.faq.items.forEach((item, index) => {
      expect(item.question, `home FAQ item[${index}] in "${locale}" should have a non-empty question`).not.toBe('');
      expect(item.answer, `home FAQ item[${index}] in "${locale}" should have a non-empty answer`).not.toBe('');
    });
  });

  it.each(LOCALES)('path FAQs in locale "%s" have at least 4 items with non-empty question and answer', (locale) => {
    const { paths } = getContent(locale);
    for (const pathKey of ['reliability', 'build'] as const) {
      const items = paths[pathKey].faq.items;
      expect(
        items.length,
        `path "${pathKey}" FAQ in "${locale}" should have at least 4 items`,
      ).toBeGreaterThanOrEqual(4);
      items.forEach((item, index) => {
        expect(
          item.question,
          `path "${pathKey}" FAQ item[${index}] in "${locale}" should have a non-empty question`,
        ).not.toBe('');
        expect(
          item.answer,
          `path "${pathKey}" FAQ item[${index}] in "${locale}" should have a non-empty answer`,
        ).not.toBe('');
      });
    }
  });
});

describe('home hero content', () => {
  it.each(LOCALES)('home hero in locale "%s" has non-empty eyebrow, h1, subtitle and CTAs', (locale) => {
    const { home } = getContent(locale);
    const fields = ['eyebrow', 'h1', 'subtitle', 'ctaPrimary', 'ctaSecondary'] as const;
    for (const field of fields) {
      expect(home.hero[field], `home hero "${field}" in "${locale}" should be non-empty`).not.toBe('');
    }
  });
});
