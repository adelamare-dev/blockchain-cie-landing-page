import type { Offer } from '../types';

// The six offers, in English.
//
// Three belong to the reliability path, two to the build path, and the
// retainer is transverse: it appears on both without creating a third door.
// No price, range or day rate appears here or anywhere in the output.

export const offers = [
  {
    id: 'sanity-check',
    path: 'reliability',
    name: 'Repo Rescue: Sanity Check',
    descriptor: 'AI-generated code audit and hardening',
    outcome:
      "A prioritized risk report on your repo. You know what breaks, what's urgent and what's left to do before deciding.",
    triggers: [
      'A new developer takes several days to understand the code.',
      "Incidents keep coming back and nobody knows why.",
      "Dependencies haven't been updated in a long time.",
      'A fundraise or an external audit is coming up.',
    ],
    deliverables: [
      'Map of risk areas (security, dependencies, structure, tests).',
      'Fix list ranked P0, P1, P2.',
      'Architecture recommendation and technical debt note.',
      'Duration estimate if a Rescue Sprint is needed.',
      'Written report and a 30-minute debrief call.',
    ],
    duration: '1 to 2 days',
    clientInputs: [
      'Read access to the repository.',
      'A 30-minute scoping call.',
      'The list of friction points already identified internally.',
    ],
    eligibility: [
      'Project written in Node.js, TypeScript, React, Next.js, Vue.js, FastAPI or Python.',
      'Code that already runs, not an empty project.',
    ],
    outOfScope: [
      'Any fix beyond a few one-off urgent items.',
      'Full refactoring or new feature development.',
    ],
    proofId: 'erp-industriel',
  },
  {
    id: 'rescue-sprint',
    path: 'reliability',
    name: 'Repo Rescue: Rescue Sprint',
    descriptor: 'targeted codebase rescue with a locked scope',
    outcome:
      "A stabilized, tested and documented codebase, ready for your team. No surprises: the scope is locked after diagnosis.",
    triggers: [
      'A critical security flaw is still open.',
      'The same regressions come back with every update.',
      'No automated tests exist.',
      'Onboarding a new developer takes more than 3 days.',
    ],
    deliverables: [
      'Refactored structure with separated responsibilities.',
      'Security fixes (dependency audit, secret scanning, OWASP best practices).',
      'Automated tests and a CI/CD baseline.',
      'Architecture documentation (CLAUDE.md or AGENTS.md style).',
      'Local setup guide.',
      '60-minute knowledge transfer call.',
    ],
    duration: '5 to 10 days',
    clientInputs: [
      'Write access to the repository.',
      'Deployment rights on staging or production.',
      'A product contact available during the engagement.',
      'A kickoff meeting with the team.',
    ],
    eligibility: [
      'A Sanity Check or an equivalent diagnosis already happened.',
      'The rescue scope can be locked before the work starts.',
    ],
    outOfScope: [
      'New feature development beyond a small one-off item.',
      '24/7 on-call coverage or maintenance spanning several months.',
    ],
    proofId: 'erp-industriel',
  },
  {
    id: 'workflow-setup',
    path: 'reliability',
    name: 'AI-Driven Dev Workflow Setup',
    descriptor: 'setting up AI-assisted development practices',
    outcome:
      "Your team adopts clear conventions for coding with AI tools: documented context files and integrations that hold up. Generated code stays consistent from one developer to the next.",
    triggers: [
      'Productivity stalls despite using AI tools.',
      'AI-generated code quality varies too much between developers.',
      'Onboarding onto AI tools takes time with no clear method.',
      'No shared convention exists (no CLAUDE.md, no AGENTS.md).',
    ],
    deliverables: [
      'Audit of current AI-assisted development practices.',
      'CLAUDE.md / AGENTS.md templates adapted to your stack.',
      'Tool configuration (Claude Code or equivalent).',
      'Integration of relevant MCP tools for the team.',
      'Documentation of the agentic workflow (review, roles, sprint process).',
      '2-hour training session and a follow-up check-in 2 weeks later.',
    ],
    duration: '3 to 5 days',
    clientInputs: [
      "Access to the team's repository.",
      'Access to the development environment.',
      'List of current friction points.',
      'Team availability for the training session.',
    ],
    eligibility: [
      'A team of 2 to 10 developers already using AI tools day to day.',
    ],
    outOfScope: [
      'Building a custom AI agent (see AI Agent Deployment).',
      'Ongoing support beyond the included follow-up check-in.',
    ],
    proofId: null,
  },
  {
    id: 'agent-deployment',
    path: 'build',
    name: 'AI Agent Deployment',
    descriptor: 'deploying an AI agent in production, with bounded autonomy',
    outcome:
      "An AI agent in production on your business workflow, with bounded autonomy and human control. Supervised, tested, documented. Your team stops repeating the workflow by hand.",
    triggers: [
      'A team manually repeats a time-consuming workflow.',
      'An existing chatbot gives unsatisfying answers.',
      'You need to show investors a concrete automation.',
    ],
    deliverables: [
      'Protocol choice (WhatsApp, Matrix, API, MCP).',
      'Multi-provider AI model routing with automatic failover.',
      'Hardened Docker stack (isolation, secrets, restricted ports).',
      'Human control rules and guardrails.',
      'Monitoring, health checks and logs.',
      'Unit and integration tests.',
      'Operations and handoff documentation.',
      'Deployment on your cloud or self-hosted.',
    ],
    duration: '2 to 4 weeks',
    clientInputs: [
      'A clear definition of the business workflow to automate.',
      'Access to the API or account for the chosen channel (WhatsApp, etc.).',
      'Keys and budget for the AI model providers.',
      'Deployment target (cloud or existing infrastructure).',
    ],
    eligibility: [
      'A real, repeatable business workflow already exists.',
      'The organization accepts human control over sensitive decisions.',
    ],
    outOfScope: [
      'Training or hosting custom models.',
      'A full rebuild of an existing application unrelated to the agent.',
    ],
    proofId: 'cloud-europeen',
  },
  {
    id: 'poc-mvp-build',
    path: 'build',
    name: 'POC / MVP / dApp Build',
    descriptor: 'full build, from design to deployment',
    outcome:
      "A working, deployed product, ready for an investor demo or a real user test.",
    triggers: [
      'A validated idea (first signups or client interviews) to turn into a product.',
      'An investor demo deadline.',
      'A need to ship before competitors do.',
    ],
    deliverables: [
      'Architecture and technical stack choices.',
      'Frontend (React or Next.js, TypeScript, mobile-first).',
      'Backend (Node.js or Python/FastAPI).',
      'Smart contracts if the project is a dApp (Solidity, Hardhat, Wagmi/Viem).',
      'Database and API design.',
      'Unit and integration tests.',
      'CI/CD and Docker deployment.',
      'CLAUDE.md / AGENTS.md documentation for agentic traceability.',
      'Documentation and handoff.',
    ],
    duration: 'POC: 4 to 6 weeks. MVP: 3 to 4 months.',
    clientInputs: [
      'Product brief.',
      'Mockups or reference sites.',
      'Necessary access keys.',
      'Deployment target.',
    ],
    eligibility: [
      'The idea is validated (early users, interviews or equivalent).',
      'A decision-maker is available during the engagement.',
    ],
    outOfScope: [
      'Long-term maintenance (see AI Agent Retainer).',
      'Marketing, SEO or app store submission.',
    ],
    proofId: 'tracabilite-esa-parametry',
  },
  {
    id: 'retainer',
    path: 'continuity',
    name: 'AI Agent Retainer',
    descriptor: 'ongoing maintenance and improvement of AI agents in production',
    outcome:
      "Your AI agent stays stable and up to date, and gains new workflows every month, without a full-time hire.",
    triggers: [
      'The agent is in production but needs regular fixes.',
      'New use cases keep appearing over time.',
      'Dependencies and security need ongoing tracking.',
    ],
    deliverables: [
      'Fixes and regression resolution.',
      '1 to 3 new bounded workflows per month.',
      'Security review and dependency updates.',
      'Monthly performance report and recommendations.',
      'Asynchronous support within 24 business hours.',
    ],
    duration: 'monthly, 3-month minimum',
    clientInputs: [
      "Ongoing access to the agent's production environment.",
      "A contact available to validate the month's priorities.",
    ],
    eligibility: [
      'An agent is already in production, delivered through an Agent Deployment or an equivalent engagement.',
    ],
    outOfScope: [
      'Major new product modules, quoted separately.',
      "24/7 on-call coverage or taking over the client's infrastructure.",
    ],
    proofId: 'cloud-europeen',
  },
] as const satisfies readonly Offer[];

export type OfferId = (typeof offers)[number]['id'];
