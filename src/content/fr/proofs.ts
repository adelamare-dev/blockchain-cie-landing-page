import type { Proof } from '../types';

// Client proofs, anonymized by default.
//
// No client is named while its authorization is still pending. Each proof
// carries its own provenance and authorization status, kept for audit and
// never rendered to the page.
//
// Every figure quoted here is traceable to a reviewed internal record and
// ships with the context that makes it readable. Figures without that context
// do not belong on this page.

const reviewDate = '2026-09-18';

export const proofs = [
  {
    id: 'erp-industriel',
    label: 'ERP industriel, retour en production',
    context: 'PME industrielle du textile technique, ERP interne construit avec des outils IA.',
    problem:
      "L’ERP fonctionnait mais personne n’osait plus y toucher. 2 failles de sécurité connues restaient ouvertes et l’application dépendait de librairies chargées depuis des CDN externes.",
    intervention:
      "Audit puis reprise à périmètre verrouillé. Correction des 2 CVE et rapatriement local des librairies chargées depuis des CDN. Ajout d’une suite de tests et de documentation d’architecture pour le transfert à l’équipe.",
    results: [
      {
        metric: '2 CVE corrigées (CVE-2023-30533, CVE-2024-29041)',
        context: 'Prototype pollution dans une librairie de génération de fichiers et traversée de chemin dans le serveur web, toutes deux publiquement référencées.',
      },
      {
        metric: '46 tests (Mocha + supertest)',
        context: "Suite de tests automatisés ajoutée lors de la release de stabilisation.",
      },
      {
        metric: '0 dépendance CDN externe restante',
        context: "Les librairies concernées sont vendorisées localement, l’application reste fonctionnelle hors ligne.",
      },
    ],
    limits:
      "Cette preuve documente un audit et une stabilisation de code existant. Elle ne démontre pas une reprise d’architecture complète ni un déploiement multi-environnement.",
    stack: ['Node.js', 'Express', 'Mocha', 'supertest'],
    pathId: 'reliability',
    clientNamed: false,
    provenance: {
      sourceDoc: 'business/career/cv.md',
      reviewDate,
      authorizationStatus: 'pending-verification',
    },
  },
  {
    id: 'cloud-europeen',
    label: 'Fournisseur cloud européen, infrastructure d’agents IA',
    context: 'Fournisseur cloud européen proposant une offre d’infrastructure souveraine.',
    problem:
      "Plusieurs stacks d’agents IA tournaient en parallèle sans modèle de sécurité commun, sans supervision homogène et avec une exposition réseau à resserrer.",
    intervention:
      "Conception et maintenance de la stack d’agents en production. Isolation systématique des conteneurs (utilisateur non-root, système de fichiers en lecture seule, capacités Linux réduites). Routage multi-fournisseurs de modèles avec bascule automatique. Canaux supervisés (WhatsApp, Telegram, Matrix, email).",
    results: [
      {
        metric: '175 commits, 77 % du dépôt sur environ 5 mois',
        context: "Volume d’autorship sur le dépôt principal de la stack d’agents en production.",
      },
      {
        metric: '~103 tests pytest',
        context: 'Couverture de test sur les contrats de configuration, les parcours HTTP bout en bout et un garde-fou dédié à la séparation dialogue/logique métier.',
      },
      {
        metric: '22 outils exposés à l’agent',
        context: "Nombre d’outils runtime (canaux de messagerie, systèmes de fichiers, MCP) disponibles à l’agent dans le périmètre déployé.",
      },
    ],
    limits:
      "Cette preuve documente une infrastructure d’exécution et de sécurisation d’agents. Elle ne documente pas les résultats métier obtenus par les clients finaux de ces agents.",
    stack: ['Docker', 'Python', 'FastAPI', 'Node.js', 'MCP', 'Matrix E2EE'],
    pathId: 'build',
    clientNamed: false,
    provenance: {
      sourceDoc: 'business/career/cv.md',
      reviewDate,
      authorizationStatus: 'pending-verification',
    },
  },
  {
    id: 'tracabilite-esa-parametry',
    label: 'Traçabilité coton, étude de faisabilité ESA via Parametry',
    context:
      "Étude de faisabilité financée par l’Agence spatiale européenne (ESA), menée via Parametry : traçabilité du coton biologique, de la parcelle à la fibre.",
    problem:
      "Le projet demandait un système complet reliant observation satellite, certification et remontée de terrain, sans référentiel technique existant.",
    intervention:
      "Conception et construction de bout en bout. Tableau de bord cartographique avec capture de parcelles. Suite de contrats intelligents pour la certification (jeton d’identité, certificats de transaction, oracle à double vérification). Backend double base de données pour les couches géospatiales. Pipeline Python de traitement des données satellite. Agent WhatsApp trilingue pour l’enregistrement des producteurs.",
    results: [
      {
        metric: '~270 commits sur 9 dépôts GitLab',
        context: "Volume de contribution sur l’ensemble des dépôts du projet, entre octobre 2025 et août 2026.",
      },
      {
        metric: '105 tests sur la suite de contrats intelligents',
        context: "Couverture de test Hardhat sur le jeton d’identité, les certificats de transaction et les oracles à double vérification.",
      },
      {
        metric: '~196 tests sur le pipeline satellite',
        context: 'Couverture de test Python sur la chaîne de traitement des données satellite et le calcul des scores de conformité.',
      },
    ],
    limits:
      "Cette preuve documente une étude de faisabilité et une preuve de concept bout en bout. Elle ne documente pas un déploiement en production à grande échelle ni une certification réglementaire obtenue.",
    stack: ['React', 'Vite', 'Solidity', 'Hardhat', 'FastAPI', 'PostGIS', 'Python'],
    pathId: 'build',
    clientNamed: false,
    provenance: {
      sourceDoc: 'business/career/cv.md',
      reviewDate,
      authorizationStatus: 'pending-verification',
    },
  },
  {
    id: 'saas-ecriture-ia',
    label: 'SaaS d’écriture assistée par IA, stabilisation',
    context: "SaaS d’écriture de romans assistée par IA, application React/TypeScript en production.",
    problem:
      "L’application avait été construite rapidement avec des outils IA. Les appels IA lourds échouaient silencieusement et plusieurs failles de sécurité de configuration restaient ouvertes.",
    intervention:
      "Bêta-test et stabilisation sur plusieurs semaines : bascule entre modèles IA en cas d’échec, gestion des délais d’attente par chapitre, durcissement de la politique de sécurité du contenu et des règles d’accès aux données.",
    results: [
      {
        metric: '86 commits, 20 cycles de test',
        context: "Volume d’intervention sur 4 semaines de bêta-test et de stabilisation.",
      },
      {
        metric: '575 fichiers stabilisés',
        context: "Périmètre de l’application React/TypeScript couvert par l’intervention.",
      },
      {
        metric: '14 bugs corrigés',
        context: "Dont une situation de compétition sur l’authentification et des cas de génération incomplète.",
      },
    ],
    limits:
      "Preuve secondaire de qualification et de stabilisation. Elle ne documente pas la conception initiale du produit ni ses résultats commerciaux.",
    stack: ['React', 'TypeScript', 'Firebase', 'Netlify Functions'],
    pathId: 'reliability',
    clientNamed: false,
    provenance: {
      sourceDoc: 'business/career/cv.md',
      reviewDate,
      authorizationStatus: 'pending-verification',
    },
  },
] as const satisfies readonly Proof[];

export type ProofId = (typeof proofs)[number]['id'];
