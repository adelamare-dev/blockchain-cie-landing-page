import type { UiContent } from "../types";

// French interface strings: navigation, footer, 404 and accessible labels.

export const ui = {
  skipLink: "Aller au contenu principal",
  nav: {
    reliability: "Fiabiliser",
    build: "Construire",
    recentWork: "Réalisations",
    expertise: "Expertise",
    languageSelectorLabel: "Langue",
    ctaCalendly: "Parler de votre système",
  },
  footer: {
    tagline: "Studio d’ingénierie logicielle & IA",
    legalNoticeLabel: "Mentions légales",
    privacyPolicyLabel: "Politique de confidentialité",
    rightsReserved: "Tous droits réservés.",
  },
  notFound: {
    title: "Page introuvable",
    message:
      "Cette page n’existe pas ou plus. Elle a peut-être changé d’adresse pendant la refonte du site.",
    links: [
      { label: "Retour à l’accueil", href: "home" },
      {
        label: "Fiabiliser un système existant",
        href: "reliability",
      },
      { label: "Construire un système neuf", href: "build" },
    ],
  },
  aria: {
    skipLink: "Aller au contenu principal",
    languageSwitcher: "Changer de langue",
    mainNav: "Navigation principale",
    breadcrumb: "Fil d’Ariane",
    mobileMenuToggle: "Ouvrir le menu",
  },
  breadcrumbHome: "Accueil",
  pathLabels: {
    situationsTitle: "Reconnaissez-vous une de ces situations ?",
    offersTitle: "Les offres de ce parcours",
    offerFields: {
      duration: "Durée",
      triggers: "Déclencheurs",
      deliverables: "Livrables",
      clientInputs: "Ce que vous fournissez",
      eligibility: "Éligibilité",
      outOfScope: "Hors périmètre",
    },
    responsibilitiesTitle: "Responsabilités",
    proofTitle: "Une preuve concrète",
    proofFields: {
      problem: "Problème",
      intervention: "Intervention",
      results: "Résultats",
      limits: "Limites",
      stack: "Stack technique",
    },
    fitCriteriaLabel: "Pour qui",
    exclusionsLabel: "Pas pour qui",
    retainerDeliverablesLabel: "Livrables inclus",
  },
  updatedAtLabel: "Dernière mise à jour :",
} as const satisfies UiContent;
