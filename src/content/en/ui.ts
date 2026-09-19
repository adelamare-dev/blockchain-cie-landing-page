import type { UiContent } from "../types";

// English interface strings: navigation, footer, 404 and accessible labels.

export const ui = {
  skipLink: "Skip to main content",
  nav: {
    reliability: "Fix",
    build: "Build",
    recentWork: "Recent work",
    expertise: "Expertise",
    languageSelectorLabel: "Language",
    ctaCalendly: "Talk about your system",
  },
  footer: {
    tagline: "Software & AI Engineering Studio",
    legalNoticeLabel: "Legal notice",
    privacyPolicyLabel: "Privacy policy",
    rightsReserved: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    message:
      "This page no longer exists, or never did. It may have moved during the site redesign.",
    links: [
      { label: "Back to home", href: "home" },
      {
        label: "Fix a system that already exists",
        href: "reliability",
      },
      { label: "Build something new", href: "build" },
    ],
  },
  aria: {
    skipLink: "Skip to main content",
    languageSwitcher: "Change language",
    mainNav: "Main navigation",
    breadcrumb: "Breadcrumb",
    mobileMenuToggle: "Open menu",
  },
  breadcrumbHome: "Home",
  pathLabels: {
    situationsTitle: "Do any of these situations sound familiar?",
    offersTitle: "The offers on this path",
    offerFields: {
      duration: "Duration",
      triggers: "Triggers",
      deliverables: "Deliverables",
      clientInputs: "What you provide",
      eligibility: "Eligibility",
      outOfScope: "Out of scope",
    },
    responsibilitiesTitle: "Responsibilities",
    proofTitle: "A concrete proof",
    proofFields: {
      problem: "Problem",
      intervention: "Intervention",
      results: "Results",
      limits: "Limits",
      stack: "Tech stack",
    },
    fitCriteriaLabel: "Who this is for",
    exclusionsLabel: "Who this is not for",
    retainerDeliverablesLabel: "Included deliverables",
  },
  updatedAtLabel: "Last updated:",
} as const satisfies UiContent;
