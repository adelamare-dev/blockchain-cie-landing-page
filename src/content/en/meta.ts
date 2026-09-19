import type { MetaContent } from '../types';

// English SEO metadata, one entry per route.
// Titles stay at or under 60 characters and descriptions between 140 and 158,
// so neither gets truncated in search results. `pnpm test` enforces both.

export const meta = {
  home: {
    title: 'Blockchain & Cie: software and AI agents in production',
    description:
      'Blockchain & Cie audits, stabilizes and builds your software systems and AI agents. Antoine Delamare leads every engagement, remote, technical lead.',
  },
  pathReliability: {
    title: 'Fix a system that already exists: Blockchain & Cie',
    description:
      'Audit, rescue and stabilization of AI-generated code. Risk report, security fixes, tests and handoff to your team, with a scope locked after diagnosis.',
  },
  pathBuild: {
    title: 'Build something new: Blockchain & Cie',
    description:
      'AI agents in production, POC, MVP and dApp builds. Design, build and deploy a new system, tested and documented, with bounded autonomy for AI agents.',
  },
  legalNotice: {
    title: 'Legal notice: Blockchain & Cie',
    description:
      'Legal notice for Blockchain & Cie: publisher identity, legal form, registered office, hosting provider, intellectual property and site liability.',
  },
  privacy: {
    title: 'Privacy policy: Blockchain & Cie',
    description:
      'Privacy policy for Blockchain & Cie: cookie-free Umami audience measurement, transfer to Calendly on click, and your GDPR rights over your data.',
  },
  notFound: {
    title: 'Page not found: Blockchain & Cie',
    description:
      'This page no longer exists. Return to the Blockchain & Cie homepage, or go directly to the Fix and Build paths using the links provided below.',
  },
} as const satisfies MetaContent;
