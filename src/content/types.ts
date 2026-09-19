// Shared types for the site's localized content.
// One data file per locale implements these types, which keeps the French,
// English and Spanish trees structurally identical.

/**
 * Marks a legal value that has not been checked against an official source yet:
 * VAT number, share capital, hosting provider, publication director, RCS city.
 *
 * The marker is designed to be visible. Legal pages must not go live while it
 * still appears in the output, and `pnpm test` fails when it does.
 */
export const TODO_VERIFY = (label: string): string => `[À VÉRIFIER: ${label}]`;

// ---------------------------------------------------------------------------
// Paths and offers
// ---------------------------------------------------------------------------

/** The two commercial doors. The retainer is transverse and belongs to neither. */
export type PathId = 'reliability' | 'build';

/** Publication status of a proof, until the client authorization is settled. */
export type AuthorizationStatus = 'pending-verification' | 'authorized' | 'anonymized-only';

/** Internal trail for a sensitive content block. Never rendered to the page. */
export interface Provenance {
  sourceDoc: string;
  reviewDate: string;
  authorizationStatus: AuthorizationStatus;
}

export interface Offer {
  id: 'sanity-check' | 'rescue-sprint' | 'workflow-setup' | 'agent-deployment' | 'poc-mvp-build' | 'retainer';
  path: PathId | 'continuity';
  name: string;
  descriptor: string;
  outcome: string;
  triggers: string[];
  deliverables: string[];
  duration: string;
  clientInputs: string[];
  eligibility: string[];
  outOfScope: string[];
  proofId: string | null;
}

// ---------------------------------------------------------------------------
// Proofs
// ---------------------------------------------------------------------------

export interface ProofResult {
  metric: string;
  context: string;
}

export interface Proof {
  id: string;
  label: string;
  context: string;
  problem: string;
  intervention: string;
  results: ProofResult[];
  limits: string;
  stack: string[];
  pathId: PathId;
  clientNamed: false;
  provenance: Provenance;
}

// ---------------------------------------------------------------------------
// Home page
// ---------------------------------------------------------------------------

export interface Hero {
  eyebrow: string;
  h1: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ProofStripItem {
  metric: string;
  context: string;
}

export interface PathChoiceCard {
  pathId: PathId;
  title: string;
  description: string;
  signals: string[];
}

export interface PathChoiceSection {
  title: string;
  cards: PathChoiceCard[];
}

export interface SectionIntro {
  title: string;
  intro: string;
}

export interface MethodStep {
  title: string;
  description: string;
}

export interface RegulatedSection {
  title: string;
  intro: string;
  points: string[];
}

export interface LeadSection {
  name: string;
  role: string;
  credentials: string[];
  bio: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FinalCta {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface HomeContent {
  hero: Hero;
  proofStrip: ProofStripItem[];
  pathChoice: PathChoiceSection;
  offersOverview: SectionIntro;
  recentWork: SectionIntro;
  method: {
    title: string;
    intro: string;
    steps: MethodStep[];
  };
  regulated: RegulatedSection;
  lead: LeadSection;
  faq: {
    title: string;
    items: FaqItem[];
  };
  finalCta: FinalCta;
}

// ---------------------------------------------------------------------------
// Path pages
// ---------------------------------------------------------------------------

export interface PathIntent {
  title: string;
  outcome: string;
}

export interface PathMethod {
  title: string;
  intro: string;
  steps: MethodStep[];
  responsibilities: string[];
}

export interface PathFit {
  title: string;
  fitCriteria: string[];
  exclusions: string[];
}

export interface PathRetainer {
  title: string;
  description: string;
  offerId: 'retainer';
}

export interface PathCta {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondaryLabel: string;
  ctaSecondaryEmail: string;
}

export interface PathPage {
  id: PathId;
  intent: PathIntent;
  situations: string[];
  offerIds: Offer['id'][];
  method: PathMethod;
  proofId: string;
  fit: PathFit;
  retainer: PathRetainer;
  faq: {
    title: string;
    items: FaqItem[];
  };
  cta: PathCta;
}

export interface PathsContent {
  reliability: PathPage;
  build: PathPage;
}

// ---------------------------------------------------------------------------
// Legal
// ---------------------------------------------------------------------------

export interface LegalNoticeContent {
  title: string;
  updatedAt: string;
  sections: {
    title: string;
    body: string[];
  }[];
}

export interface PrivacyPolicyContent {
  title: string;
  updatedAt: string;
  sections: {
    title: string;
    body: string[];
  }[];
}

export interface LegalContent {
  legalNotice: LegalNoticeContent;
  privacyPolicy: PrivacyPolicyContent;
}

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------

export interface NavContent {
  reliability: string;
  build: string;
  recentWork: string;
  expertise: string;
  languageSelectorLabel: string;
  ctaCalendly: string;
}

export interface FooterContent {
  tagline: string;
  legalNoticeLabel: string;
  privacyPolicyLabel: string;
  rightsReserved: string;
}

export interface NotFoundContent {
  title: string;
  message: string;
  links: {
    label: string;
    href: 'home' | 'reliability' | 'build';
  }[];
}

export interface AriaLabels {
  skipLink: string;
  languageSwitcher: string;
  mainNav: string;
  breadcrumb: string;
  mobileMenuToggle: string;
}

/**
 * Field labels used to present an offer or a proof.
 *
 * These read as interface chrome rather than editorial copy, but they are
 * reader-facing and therefore localized like everything else.
 */
export interface PathLabels {
  situationsTitle: string;
  offersTitle: string;
  offerFields: {
    duration: string;
    triggers: string;
    deliverables: string;
    clientInputs: string;
    eligibility: string;
    outOfScope: string;
  };
  responsibilitiesTitle: string;
  proofTitle: string;
  proofFields: {
    problem: string;
    intervention: string;
    results: string;
    limits: string;
    stack: string;
  };
  fitCriteriaLabel: string;
  exclusionsLabel: string;
  retainerDeliverablesLabel: string;
}

export interface UiContent {
  skipLink: string;
  nav: NavContent;
  footer: FooterContent;
  notFound: NotFoundContent;
  aria: AriaLabels;
  breadcrumbHome: string;
  pathLabels: PathLabels;
  updatedAtLabel: string;
}

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------

export interface RouteMeta {
  title: string;
  description: string;
}

export interface MetaContent {
  home: RouteMeta;
  pathReliability: RouteMeta;
  pathBuild: RouteMeta;
  legalNotice: RouteMeta;
  privacy: RouteMeta;
  notFound: RouteMeta;
}
