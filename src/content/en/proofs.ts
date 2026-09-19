import type { Proof } from '../types';

// Client proofs, anonymized by default.
//
// No client is named while its authorization is still pending. Each proof
// carries its own provenance and authorization status, kept for audit and
// never rendered to the page.
//
// Every figure quoted here traces back to a reviewed internal record and
// ships with the context that makes it readable. Figures without that context
// do not belong on this page.

const reviewDate = '2026-09-18';

export const proofs = [
  {
    id: 'erp-industriel',
    label: 'Industrial ERP, back in production',
    context: 'Industrial technical textile SME, internal ERP built with AI tools.',
    problem:
      "The ERP worked, but nobody wanted to touch it anymore. 2 known security flaws were still open, and the application depended on libraries loaded from external CDNs.",
    intervention:
      "Audit, then a rescue within a locked scope. Fixed both CVEs and vendored the CDN-loaded libraries locally. Added a test suite and architecture documentation to hand the codebase to the team.",
    results: [
      {
        metric: '2 CVEs fixed (CVE-2023-30533, CVE-2024-29041)',
        context: 'Prototype pollution in a file-generation library and path traversal in the web server, both publicly listed.',
      },
      {
        metric: '46 tests (Mocha + supertest)',
        context: 'Automated test suite added with the stabilization release.',
      },
      {
        metric: '0 remaining external CDN dependencies',
        context: 'The affected libraries are vendored locally; the application keeps working offline.',
      },
    ],
    limits:
      "This proof documents an audit and a stabilization of existing code. It does not demonstrate a full architecture overhaul or a multi-environment deployment.",
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
    label: 'European cloud provider, AI agent infrastructure',
    context: 'European cloud provider offering a sovereign infrastructure product.',
    problem:
      "Several AI agent stacks ran in parallel with no shared security model, no consistent monitoring, and network exposure that needed tightening.",
    intervention:
      "Designed and maintained the agent stack in production. Systematic container isolation (non-root user, read-only filesystem, reduced Linux capabilities). Multi-provider model routing with automatic failover. Supervised channels (WhatsApp, Telegram, Matrix, email).",
    results: [
      {
        metric: '175 commits, 77% of the repo over about 5 months',
        context: 'Authorship volume on the main repository of the production agent stack.',
      },
      {
        metric: '~103 pytest tests',
        context: 'Test coverage on configuration contracts, end-to-end HTTP flows and a dedicated guardrail separating dialogue from business logic.',
      },
      {
        metric: '22 tools exposed to the agent',
        context: 'Number of runtime tools (messaging channels, filesystems, MCP) available to the agent within the deployed scope.',
      },
    ],
    limits:
      "This proof documents an execution and hardening infrastructure for agents. It does not document the business outcomes achieved by the end clients of those agents.",
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
    label: 'Cotton traceability, ESA feasibility study through Parametry',
    context:
      'Feasibility study funded by the European Space Agency (ESA), run through Parametry: tracing organic cotton from field to fiber.',
    problem:
      "The project needed a full system linking satellite observation, certification and field reporting, with no existing technical reference.",
    intervention:
      "Designed and built end to end. A mapping dashboard with plot capture. A smart contract suite for certification (identity token, transaction certificates, dual-verification oracle). A dual-database backend for geospatial layers. A Python pipeline for satellite data processing. A trilingual WhatsApp agent for producer registration.",
    results: [
      {
        metric: '~270 commits across 9 GitLab repos',
        context: 'Contribution volume across every repository of the project, between October 2025 and August 2026.',
      },
      {
        metric: '105 tests on the smart contract suite',
        context: 'Hardhat test coverage on the identity token, the transaction certificates and the dual-verification oracles.',
      },
      {
        metric: '~196 tests on the satellite pipeline',
        context: 'Python test coverage on the satellite data processing chain and the compliance score computation.',
      },
    ],
    limits:
      "This proof documents a feasibility study and an end-to-end proof of concept. It does not document a large-scale production deployment or an obtained regulatory certification.",
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
    label: 'AI-assisted writing SaaS, stabilization',
    context: 'AI-assisted novel-writing SaaS, a React/TypeScript application in production.',
    problem:
      "The application had been built fast with AI tools. Heavy AI calls failed silently; several configuration security flaws were still open.",
    intervention:
      "Beta testing and stabilization over several weeks: fallback between AI models on failure, per-chapter timeouts, hardened content security policy and data access rules.",
    results: [
      {
        metric: '86 commits, 20 test cycles',
        context: 'Volume of work across 4 weeks of beta testing and stabilization.',
      },
      {
        metric: '575 files stabilized',
        context: 'Scope of the React/TypeScript application covered by the engagement.',
      },
      {
        metric: '14 bugs fixed',
        context: 'Including an authentication race condition and cases of incomplete generation.',
      },
    ],
    limits:
      "Secondary proof of qualification and stabilization work. It does not document the initial product design or its commercial results.",
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
