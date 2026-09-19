import type { MetaContent } from '../types';

// French SEO metadata, one entry per route.
// Titles stay at or under 60 characters and descriptions between 140 and 158,
// so neither gets truncated in search results. `pnpm test` enforces both.

export const meta = {
  home: {
    title: 'Blockchain & Cie : logiciels et agents IA en production',
    description:
      "Blockchain & Cie audite, stabilise et construit vos systèmes logiciels et agents IA. Antoine Delamare dirige chaque mission, direction technique et remote.",
  },
  pathReliability: {
    title: 'Fiabiliser un système existant : Blockchain & Cie',
    description:
      "Audit, reprise et stabilisation de code généré par IA. Rapport de risque, correctifs de sécurité, tests et transfert à votre équipe, périmètre verrouillé.",
  },
  pathBuild: {
    title: 'Construire un système neuf : Blockchain & Cie',
    description:
      "Agents IA en production, POC, MVP et dApp. Conception, fabrication et déploiement d’un système neuf, testé et documenté, avec autonomie bornée pour l’IA.",
  },
  legalNotice: {
    title: 'Mentions légales : Blockchain & Cie',
    description:
      "Mentions légales de Blockchain & Cie : éditeur, forme juridique, siège social, hébergement, propriété intellectuelle et responsabilité du site.",
  },
  privacy: {
    title: 'Politique de confidentialité : Blockchain & Cie',
    description:
      "Politique de confidentialité de Blockchain & Cie : mesure d’audience Umami sans cookie, transfert vers Calendly au clic, et droits RGPD sur vos données.",
  },
  notFound: {
    title: 'Page introuvable : Blockchain & Cie',
    description:
      "Cette page n’existe plus. Retrouvez l’accueil de Blockchain & Cie ou accédez directement aux parcours Fiabiliser et Construire depuis les liens de secours.",
  },
} as const satisfies MetaContent;
