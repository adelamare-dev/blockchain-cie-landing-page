import type { HomeContent } from '../types';

// French home page content, in narrative order.
// The hero strings are approved copy and are reproduced verbatim. Rewording
// them is an editorial decision, not a code change.

export const home = {
  hero: {
    eyebrow: 'Blockchain & Cie : Studio d’ingénierie logicielle & IA',
    h1: 'Des logiciels et agents IA qui tiennent en production.',
    subtitle:
      "Blockchain & Cie audite, stabilise et construit vos systèmes logiciels et agents IA. Antoine Delamare en assure la direction technique, avec 10 ans d’expérience en pharmacie et traçabilité réglementée.",
    ctaPrimary: 'Parler de votre système',
    ctaSecondary: 'Choisir un parcours',
  },
  proofStrip: [
    {
      metric: '2 CVE corrigées',
      context: "Sur un ERP industriel en production (CVE-2023-30533, CVE-2024-29041).",
    },
    {
      metric: '~270 commits sur 9 dépôts',
      context: 'Sur une étude de faisabilité de traçabilité financée par l’ESA via Parametry.',
    },
    {
      metric: '175 commits, 77 % du dépôt',
      context: "Sur une stack d’agents IA en production, environ 5 mois.",
    },
    {
      metric: '~103 tests pytest',
      context: "Sur les contrats de configuration et les parcours d’agents en production.",
    },
  ],
  pathChoice: {
    title: 'Deux façons de travailler ensemble',
    cards: [
      {
        pathId: 'reliability',
        title: 'Fiabiliser un système existant',
        description:
          "Votre code fonctionne, mais personne n’ose plus y toucher. On audite, on stabilise, on transfère.",
        signals: [
          'Un repo généré par IA que vous devez remettre à niveau.',
          'Des incidents ou régressions qui reviennent.',
          "Une équipe qui doit adopter des pratiques de dev IA structurées.",
        ],
      },
      {
        pathId: 'build',
        title: 'Construire un système neuf',
        description:
          "Vous avez un besoin validé. On conçoit, on fabrique et on déploie, avec autonomie bornée quand un agent IA est impliqué.",
        signals: [
          'Un workflow métier à automatiser avec un agent IA.',
          'Un POC ou un MVP à livrer en semaines, pas en mois.',
          'Un projet dApp avec des smart contracts.',
        ],
      },
    ],
  },
  offersOverview: {
    title: 'Les 6 offres',
    intro:
      "3 offres pour fiabiliser, 2 pour construire, 1 pour la continuité. Chaque offre précise résultat attendu, livrables et critères d’éligibilité, pour que vous sachiez vite laquelle vous correspond. Le détail figure sur la page de chaque parcours.",
  },
  recentWork: {
    title: 'Réalisations récentes',
    intro:
      "Un ERP industriel remis en production. Une infrastructure d’agents IA chez un fournisseur cloud européen. Une étude de traçabilité financée par l’ESA. Détails anonymisés le cas échéant.",
  },
  method: {
    title: 'Méthode de travail',
    intro: 'Chaque mission suit la même logique : cadrage, diagnostic, intervention à périmètre verrouillé, transfert.',
    steps: [
      {
        title: 'Cadrage',
        description: "Un appel pour comprendre le système, le contexte et le résultat attendu.",
      },
      {
        title: 'Diagnostic',
        description: "Analyse du code ou du besoin, restituée en risques et priorités.",
      },
      {
        title: 'Intervention à périmètre verrouillé',
        description: "Le périmètre est fixé après diagnostic. Pas de dérive silencieuse en cours de mission.",
      },
      {
        title: 'Transfert',
        description: "Documentation, tests et passation à votre équipe en fin de mission.",
      },
    ],
  },
  regulated: {
    title: 'Environnements réglementés',
    intro:
      "10 ans en pharmacie, un secteur réglementé, avant le développement. Cette expérience nourrit le travail sur la traçabilité et la conformité.",
    points: [
      "Doctorat en pharmacie (PharmD), 7 ans de pratique officinale avant la reconversion.",
      "Habitude du contrôle qualité, de la documentation et de la responsabilité réglementaire.",
      "Blockchain & Cie ne garantit aucune certification ni conformité : le périmètre de chaque mission le précise.",
    ],
  },
  lead: {
    name: 'Antoine Delamare',
    role: 'Gérant et responsable technique',
    credentials: [
      'Docteur en pharmacie (PharmD)',
      'Français, espagnol, anglais',
      '100 % remote',
    ],
    bio:
      "Antoine dirige techniquement chaque mission. Avant le développement, 7 ans en pharmacie d’officine, secteur réglementé. Il travaille en remote, en français, anglais et espagnol, et reste responsable du résultat, même quand un spécialiste intervient sur un périmètre précis.",
    photoAlt: "Portrait d’Antoine Delamare",
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: "Combien coûte une mission ?",
        answer:
          "Le prix dépend du périmètre exact. Chaque offre précise sa durée indicative. Le chiffrage suit l’appel de cadrage ou le Sanity Check, et vous le validez avant tout engagement.",
      },
      {
        question: "Que se passe-t-il pendant l’appel ?",
        answer:
          "Vous décrivez le système et le résultat attendu. Antoine pose les questions techniques. À la fin de l’appel, vous savez quelle offre correspond à votre situation, ou si aucune ne convient.",
      },
      {
        question: "Travaillez-vous avec des équipes internes existantes ?",
        answer:
          "Oui. La plupart des missions se coordonnent avec votre équipe ou un contact produit, avec un transfert documenté en fin de mission.",
      },
      {
        question: 'Qui intervient concrètement sur ma mission ?',
        answer:
          "Antoine Delamare dirige techniquement chaque mission. Si besoin, des spécialistes interviennent sur un périmètre précis, sous sa responsabilité.",
      },
      {
        question: "Un agent IA peut-il agir sans supervision ?",
        answer:
          "Non. Les agents déployés ont une autonomie bornée et des règles de contrôle humain sur les décisions sensibles. Le périmètre exact est défini avec vous.",
      },
      {
        question: 'Travaillez-vous en dehors de la France ?',
        answer:
          "Oui, à distance, en français, anglais ou espagnol. Blockchain & Cie est une entité française.",
      },
      {
        question: "Que se passe-t-il après un Sanity Check si je ne continue pas ?",
        answer:
          "Le rapport de risque vous appartient, sans engagement de suite.",
      },
    ],
  },
  finalCta: {
    title: 'Un système à fiabiliser ou à construire ?',
    description: "Décrivez votre contexte pendant un appel. Vous repartez avec une recommandation claire : pas d’engagement, pas de diagnostic générique.",
    ctaPrimary: 'Parler de votre système',
    ctaSecondary: 'Écrire par email',
  },
} as const satisfies HomeContent;
