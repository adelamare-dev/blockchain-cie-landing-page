import type { Offer } from '../types';

// The six offers, in French.
//
// Three belong to the reliability path, two to the build path, and the
// retainer is transverse: it appears on both without creating a third door.
// No price, range or day rate appears here or anywhere in the output.

export const offers = [
  {
    id: 'sanity-check',
    path: 'reliability',
    name: 'Repo Rescue: Sanity Check',
    descriptor: 'audit et fiabilisation de code généré par IA',
    outcome:
      "Un rapport de risque priorisé sur votre repo. Vous savez ce qui casse, ce qui est urgent et ce qu’il reste à faire avant de décider.",
    triggers: [
      "Un nouveau développeur met plusieurs jours à comprendre le code.",
      'Des incidents reviennent sans que personne ne sache pourquoi.',
      "Les dépendances n’ont pas été mises à jour depuis longtemps.",
      'Une levée de fonds ou un audit externe approche.',
    ],
    deliverables: [
      'Cartographie des zones à risque (sécurité, dépendances, structure, tests).',
      'Liste de correctifs classée P0, P1, P2.',
      "Recommandation d’architecture et note de dette technique.",
      "Estimation de durée si une reprise (Rescue Sprint) est nécessaire.",
      'Rapport écrit et appel de restitution de 30 minutes.',
    ],
    duration: '1 à 2 jours',
    clientInputs: [
      'Accès en lecture au repository.',
      "Un appel de cadrage de 30 minutes.",
      'La liste des points de friction déjà identifiés en interne.',
    ],
    eligibility: [
      'Projet écrit en Node.js, TypeScript, React, Next.js, Vue.js, FastAPI ou Python.',
      'Un code déjà en fonctionnement, pas un projet vide.',
    ],
    outOfScope: [
      'Toute correction au-delà de quelques urgences ponctuelles.',
      'Refactorisation complète ou développement de nouvelles fonctionnalités.',
    ],
    proofId: 'erp-industriel',
  },
  {
    id: 'rescue-sprint',
    path: 'reliability',
    name: 'Repo Rescue: Rescue Sprint',
    descriptor: 'reprise ciblée de codebase à périmètre verrouillé',
    outcome:
      "Un codebase stabilisé, testé et documenté, transférable à votre équipe. Pas de surprise : le périmètre est verrouillé après diagnostic.",
    triggers: [
      'Une faille de sécurité critique reste ouverte.',
      'Les mêmes régressions reviennent à chaque mise à jour.',
      "Aucun test automatisé n’existe.",
      "Onboarding d’un nouveau développeur : plus de 3 jours.",
    ],
    deliverables: [
      'Structure refactorée avec responsabilités séparées.',
      'Correctifs de sécurité (audit de dépendances, scan de secrets, bonnes pratiques OWASP).',
      'Tests automatisés et base CI/CD.',
      'Documentation d’architecture (type CLAUDE.md ou AGENTS.md).',
      "Guide d’installation locale.",
      'Appel de transfert de connaissances de 60 minutes.',
    ],
    duration: '5 à 10 jours',
    clientInputs: [
      'Accès en écriture au repository.',
      'Droits de déploiement sur staging ou production.',
      'Un contact produit disponible pendant la mission.',
      "Réunion de lancement avec l’équipe.",
    ],
    eligibility: [
      "Un Sanity Check ou un diagnostic équivalent a eu lieu.",
      'Le périmètre de reprise peut être verrouillé avant le démarrage.',
    ],
    outOfScope: [
      'Développement de nouvelles fonctionnalités au-delà d’un petit item ponctuel.',
      'Astreinte 24/7 ou maintenance de plusieurs mois.',
    ],
    proofId: 'erp-industriel',
  },
  {
    id: 'workflow-setup',
    path: 'reliability',
    name: 'AI-Driven Dev Workflow Setup',
    descriptor: "mise en place de pratiques de développement assisté par IA",
    outcome:
      "Votre équipe adopte des conventions claires pour coder avec des outils IA : fichiers de contexte documentés et intégrations durables. Le code généré gagne en régularité d’un développeur à l’autre.",
    triggers: [
      'La productivité stagne malgré l’usage d’outils IA.',
      'Le code généré par IA varie trop en qualité d’un développeur à l’autre.',
      "L’onboarding sur les outils IA prend du temps sans méthode.",
      "Aucune convention commune n’existe (pas de CLAUDE.md, pas de AGENTS.md).",
    ],
    deliverables: [
      "Audit des pratiques actuelles de développement assisté par IA.",
      'Modèles CLAUDE.md / AGENTS.md adaptés à votre stack.',
      "Configuration des outils (Claude Code ou équivalent).",
      "Intégration d’outils MCP pertinents pour l’équipe.",
      'Documentation du workflow agentique (revue, rôles, process de sprint).',
      'Session de formation de 2 heures et point de suivi 2 semaines après.',
    ],
    duration: '3 à 5 jours',
    clientInputs: [
      "Accès au repository de l’équipe.",
      "Accès à l’environnement de développement.",
      'Liste des points de friction actuels.',
      "Disponibilité de l’équipe pour la formation.",
    ],
    eligibility: [
      'Équipe de 2 à 10 développeurs utilisant déjà des outils IA au quotidien.',
    ],
    outOfScope: [
      "Développement d’un agent IA sur mesure (voir AI Agent Deployment).",
      "Accompagnement continu au-delà du point de suivi inclus.",
    ],
    proofId: null,
  },
  {
    id: 'agent-deployment',
    path: 'build',
    name: 'AI Agent Deployment',
    descriptor: 'déploiement d’un agent IA en production, avec autonomie bornée',
    outcome:
      "Un agent IA en production sur votre workflow métier, avec autonomie bornée et contrôle humain. Supervisé, testé, documenté. Votre équipe arrête de répéter le workflow à la main.",
    triggers: [
      'Une équipe répète manuellement un workflow chronophage.',
      'Un chatbot existant donne des réponses insatisfaisantes.',
      "Besoin de démontrer une automatisation concrète à des investisseurs.",
    ],
    deliverables: [
      'Choix du protocole (WhatsApp, Matrix, API, MCP).',
      "Routage multi-fournisseurs de modèles IA avec bascule de secours.",
      'Stack Docker durcie (isolation, secrets, ports restreints).',
      'Règles de contrôle humain et garde-fous.',
      "Supervision, contrôles de santé et journaux.",
      "Tests unitaires et d’intégration.",
      "Documentation d’exploitation et de transfert.",
      "Déploiement sur votre cloud ou en auto-hébergé.",
    ],
    duration: '2 à 4 semaines',
    clientInputs: [
      'Définition claire du workflow métier à automatiser.',
      "Accès à l’API ou au compte du canal choisi (WhatsApp, etc.).",
      "Clés et budget pour les fournisseurs de modèles IA.",
      'Cible de déploiement (cloud ou infrastructure existante).',
    ],
    eligibility: [
      'Un workflow métier réel et répétable existe déjà.',
      "L’organisation accepte un contrôle humain sur les décisions sensibles.",
    ],
    outOfScope: [
      "Entraînement ou hébergement de modèles sur mesure.",
      'Reconstruction complète d’une application existante sans lien avec l’agent.',
    ],
    proofId: 'cloud-europeen',
  },
  {
    id: 'poc-mvp-build',
    path: 'build',
    name: 'POC / MVP / dApp Build',
    descriptor: 'fabrication complète, du design au déploiement',
    outcome:
      "Un produit fonctionnel et déployé, prêt pour une démonstration investisseurs ou un test utilisateur réel.",
    triggers: [
      "Une idée validée (premiers signups ou entretiens clients) à transformer en produit.",
      "Une échéance de démonstration investisseurs.",
      'Besoin de sortir un produit avant la concurrence.',
    ],
    deliverables: [
      'Architecture et choix de stack technique.',
      "Frontend (React ou Next.js, TypeScript, mobile-first).",
      "Backend (Node.js ou Python/FastAPI).",
      "Smart contracts si le projet est une dApp (Solidity, Hardhat, Wagmi/Viem).",
      "Conception de base de données et API.",
      "Tests unitaires et d’intégration.",
      "CI/CD et déploiement Docker.",
      "Documentation CLAUDE.md / AGENTS.md pour la traçabilité agentique.",
      'Documentation et transfert.',
    ],
    duration: 'POC : 4 à 6 semaines. MVP : 3 à 4 mois.',
    clientInputs: [
      'Brief produit.',
      'Maquettes ou sites de référence.',
      "Clés d’accès nécessaires.",
      'Cible de déploiement.',
    ],
    eligibility: [
      "L’idée est validée (premiers utilisateurs, entretiens ou équivalent).",
      'Un porteur de décision est disponible pendant la mission.',
    ],
    outOfScope: [
      'Maintenance de long terme (voir AI Agent Retainer).',
      "Marketing, SEO ou soumission aux stores d’applications.",
    ],
    proofId: 'tracabilite-esa-parametry',
  },
  {
    id: 'retainer',
    path: 'continuity',
    name: 'AI Agent Retainer',
    descriptor: 'maintenance et amélioration continue d’agents IA en production',
    outcome:
      "Votre agent IA reste stable et à jour, et gagne de nouveaux workflows chaque mois, sans embauche à temps plein.",
    triggers: [
      "L’agent est en production mais a besoin de correctifs réguliers.",
      'De nouveaux cas d’usage apparaissent au fil du temps.',
      "Les dépendances et la sécurité doivent être suivies dans la durée.",
    ],
    deliverables: [
      'Correctifs et résolution de régressions.',
      "1 à 3 nouveaux workflows bornés par mois.",
      "Revue de sécurité et mise à jour des dépendances.",
      'Rapport mensuel de performance et recommandations.',
      'Support asynchrone sous 24h en jour ouvré.',
    ],
    duration: 'mensuel, 3 mois minimum',
    clientInputs: [
      "Accès continu à l’environnement de production de l’agent.",
      "Un point de contact disponible pour valider les priorités du mois.",
    ],
    eligibility: [
      'Un agent est déjà en production, livré via un Agent Deployment ou une mission équivalente.',
    ],
    outOfScope: [
      'Nouveaux modules produits majeurs, chiffrés séparément.',
      "Astreinte 24/7 ou prise en charge de l’infrastructure du client.",
    ],
    proofId: 'cloud-europeen',
  },
] as const satisfies readonly Offer[];

export type OfferId = (typeof offers)[number]['id'];
