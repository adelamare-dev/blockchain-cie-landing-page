import type { PathsContent } from "../types";

// French path pages: reliability and build.
// The retainer closes both pages as a continuity option after a first mission.

export const paths = {
  reliability: {
    id: "reliability",
    intent: {
      title: "Fiabiliser un système existant",
      outcome:
        "Votre équipe reprend un système audité, stabilisé et documenté, sans dépendre d’une seule personne.",
    },
    situations: [
      "Un repo construit avec des outils IA fonctionne, mais personne n’ose le modifier.",
      "Un développeur met plusieurs jours à comprendre une base de code avant de contribuer.",
      "Des incidents en production reviennent sans cause claire.",
      "Une équipe utilise des outils IA au quotidien sans convention commune.",
      "Une échéance (levée de fonds, audit, mise en production) impose de sécuriser le code rapidement.",
    ],
    offerIds: ["sanity-check", "rescue-sprint", "workflow-setup"],
    method: {
      title: "Méthode",
      intro:
        "La reprise suit un ordre fixe, pour éviter les surprises des deux côtés.",
      steps: [
        {
          title: "Cadrage",
          description:
            "Un appel pour comprendre le contexte, les contraintes et ce qui a déjà été tenté.",
        },
        {
          title: "Diagnostic",
          description:
            "Audit du code existant, restitué en rapport de risque priorisé.",
        },
        {
          title: "Intervention à périmètre verrouillé",
          description:
            "Le périmètre de la reprise est fixé après le diagnostic, pas avant.",
        },
        {
          title: "Transfert",
          description:
            "Documentation, tests et passation à votre équipe.",
        },
      ],
      responsibilities: [
        "Antoine Delamare dirige techniquement la mission de bout en bout.",
        "Le périmètre verrouillé après diagnostic engage les deux parties.",
        "Toute extension de périmètre est discutée et validée avant d’être engagée.",
      ],
    },
    proofId: "erp-industriel",
    fit: {
      title: "Pour qui, et pas pour qui",
      fitCriteria: [
        "Un code existant tourne déjà, même imparfaitement.",
        "Un sponsor peut valider le périmètre.",
        "La stack est en Node.js, TypeScript, React, Next.js, Vue.js, FastAPI ou Python.",
      ],
      exclusions: [
        "Un projet encore à l’idée, sans code à auditer.",
        "Une demande de certification ou de conformité réglementaire officielle.",
      ],
    },
    retainer: {
      title: "Après la reprise",
      description:
        "Une fois le système stabilisé, un Retainer mensuel prend le relais : correctifs, nouveaux workflows bornés et mises à jour de sécurité, sans embauche dédiée.",
      offerId: "retainer",
    },
    faq: {
      title: "Questions fréquentes sur ce parcours",
      items: [
        {
          question:
            "Dois-je commencer par le Sanity Check avant le Rescue Sprint ?",
          answer:
            "C’est recommandé. Le Sanity Check fixe un périmètre clair avant toute intervention ; le rapport reste utile même sans suite.",
        },
        {
          question: "Le code sera-t-il totalement réécrit ?",
          answer:
            "Non. La reprise cible les zones à risque identifiées au diagnostic, pas une réécriture complète.",
        },
        {
          question:
            "Mon équipe peut-elle continuer seule après la mission ?",
          answer:
            "C’est l’objectif du transfert : documentation, tests et appel de passation inclus dans chaque offre du parcours.",
        },
        {
          question:
            "Travaillez-vous sur une stack que vous ne connaissez pas encore ?",
          answer:
            "Le Sanity Check vérifie rapidement la compatibilité avant tout engagement plus long.",
        },
      ],
    },
    cta: {
      title: "Un système à fiabiliser ?",
      description:
        "Décrivez votre repo et vos points de friction pendant un appel. Vous repartez avec une recommandation claire, sans engagement.",
      ctaPrimary: "Parler de votre système",
      ctaSecondaryLabel: "Écrire par email",
      ctaSecondaryEmail: "contact@blockchain-cie.com",
    },
  },
  build: {
    id: "build",
    intent: {
      title: "Construire un système neuf",
      outcome:
        "Vous obtenez un produit ou un agent IA fonctionnel, testé, déployé et documenté, que votre équipe peut reprendre.",
    },
    situations: [
      "Une équipe répète manuellement un workflow métier chronophage.",
      "Un chatbot existant donne des réponses insuffisantes.",
      "Une idée validée doit devenir un produit démontrable rapidement.",
      "Un projet dApp nécessite des smart contracts et un frontend Web3.",
      "Une démonstration investisseurs approche et le produit doit être fonctionnel.",
    ],
    offerIds: ["agent-deployment", "poc-mvp-build"],
    method: {
      title: "Méthode",
      intro:
        "La construction suit le même cadrage que la fiabilisation, adapté à un système neuf.",
      steps: [
        {
          title: "Cadrage",
          description:
            "Un appel pour définir le workflow, le produit et le résultat attendu.",
        },
        {
          title: "Diagnostic",
          description:
            "Choix d’architecture et de stack, en fonction du besoin réel, pas d’un standard par défaut.",
        },
        {
          title: "Intervention à périmètre verrouillé",
          description:
            "Construction du système à périmètre fixé, tests et déploiement inclus.",
        },
        {
          title: "Transfert",
          description:
            "Documentation technique et passation, pour que votre équipe reprenne la main.",
        },
      ],
      responsibilities: [
        "Antoine Delamare dirige techniquement la mission de bout en bout.",
        "Tout agent IA déployé fonctionne avec une autonomie bornée et un contrôle humain sur les décisions sensibles.",
        "Le périmètre verrouillé après cadrage engage les deux parties.",
      ],
    },
    proofId: "tracabilite-esa-parametry",
    fit: {
      title: "Pour qui, et pas pour qui",
      fitCriteria: [
        "Un besoin ou un workflow métier réel, déjà identifié.",
        "Un sponsor capable de valider le périmètre et le déploiement.",
        "L’organisation accepte un contrôle humain sur les décisions sensibles d’un agent IA.",
      ],
      exclusions: [
        "Entraînement ou hébergement de modèles IA sur mesure.",
        "Projet crypto spéculatif sans besoin logiciel démontré.",
      ],
    },
    retainer: {
      title: "Après le déploiement",
      description:
        "Une fois le système en production, un Retainer mensuel prend le relais : maintenance, nouveaux workflows bornés et sécurité, sans embauche dédiée.",
      offerId: "retainer",
    },
    faq: {
      title: "Questions fréquentes sur ce parcours",
      items: [
        {
          question: "Combien de temps pour un POC ou un MVP ?",
          answer:
            "Un POC se construit en 4 à 6 semaines, un MVP en 3 à 4 mois. La durée exacte dépend du périmètre défini au cadrage.",
        },
        {
          question:
            "L’agent IA peut-il agir seul sur des décisions sensibles ?",
          answer:
            "Non. Chaque agent déployé fonctionne avec une autonomie bornée et des règles de contrôle humain, définies avec vous.",
        },
        {
          question: "Fabriquez-vous aussi des smart contracts ?",
          answer:
            "Oui, quand le projet est une dApp. Solidity, Hardhat et les librairies Web3 courantes sont dans le périmètre couvert.",
        },
        {
          question:
            "Que se passe-t-il si le périmètre change en cours de mission ?",
          answer:
            "Le périmètre est verrouillé après cadrage. Toute évolution est discutée et validée avant d’être engagée.",
        },
      ],
    },
    cta: {
      title: "Un système à construire ?",
      description:
        "Décrivez votre besoin et votre échéance pendant un appel. Vous repartez avec une recommandation claire, sans engagement.",
      ctaPrimary: "Parler de votre système",
      ctaSecondaryLabel: "Écrire par email",
      ctaSecondaryEmail: "contact@blockchain-cie.com",
    },
  },
} as const satisfies PathsContent;
