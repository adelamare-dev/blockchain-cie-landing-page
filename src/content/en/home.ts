import type { HomeContent } from '../types';

// English home page content, in narrative order.
// Adapted (not translated word for word) for a B2B audience that expects
// direct, benefit-first phrasing. Every fact and figure matches the French
// source; only the framing is rewritten.

export const home = {
  hero: {
    eyebrow: 'Blockchain & Cie: Software & AI Engineering Studio',
    h1: 'Software and AI agents that hold up in production.',
    subtitle:
      "Blockchain & Cie audits, stabilizes and builds your software systems and AI agents. Antoine Delamare leads every engagement, with 10 years in pharmacy and regulated traceability behind him.",
    ctaPrimary: 'Talk about your system',
    ctaSecondary: 'Choose a path',
  },
  proofStrip: [
    {
      metric: '2 CVEs fixed',
      context: 'On an industrial ERP in production (CVE-2023-30533, CVE-2024-29041).',
    },
    {
      metric: '~270 commits across 9 repos',
      context: 'On a traceability feasibility study funded by ESA through Parametry.',
    },
    {
      metric: '175 commits, 77% of the repo',
      context: 'On an AI agent stack in production, over about 5 months.',
    },
    {
      metric: '~103 pytest tests',
      context: 'Covering configuration contracts and agent flows in production.',
    },
  ],
  pathChoice: {
    title: 'Two ways to work together',
    cards: [
      {
        pathId: 'reliability',
        title: 'Fix a system that already exists',
        description:
          "Your code works, but nobody wants to touch it anymore. We audit it, stabilize it and hand it back to your team.",
        signals: [
          'An AI-generated repo you need to bring up to standard.',
          'Incidents or regressions that keep coming back.',
          'A team that needs structured AI development practices.',
        ],
      },
      {
        pathId: 'build',
        title: 'Build something new',
        description:
          "You have a validated need. We design, build and deploy it, with bounded autonomy wherever an AI agent is involved.",
        signals: [
          'A business workflow to automate with an AI agent.',
          'A POC or MVP to ship in weeks, not months.',
          'A dApp project with smart contracts.',
        ],
      },
    ],
  },
  offersOverview: {
    title: 'The 6 offers',
    intro:
      "3 offers to fix, 2 to build, 1 for continuity. Each offer states the expected outcome, deliverables and eligibility criteria, so you can tell quickly which one fits. The details live on each path page.",
  },
  recentWork: {
    title: 'Recent work',
    intro:
      "An industrial ERP brought back into production. An AI agent infrastructure at a European cloud provider. A traceability study funded by ESA. Details anonymized where required.",
  },
  method: {
    title: 'How we work',
    intro: 'Every engagement follows the same logic: scoping, diagnosis, work within a locked scope, handoff.',
    steps: [
      {
        title: 'Scoping',
        description: 'A call to understand the system, the context and the expected outcome.',
      },
      {
        title: 'Diagnosis',
        description: 'Analysis of the code or the need, returned as risks and priorities.',
      },
      {
        title: 'Work within a locked scope',
        description: 'The scope is fixed after diagnosis. No silent drift once the engagement starts.',
      },
      {
        title: 'Handoff',
        description: 'Documentation, tests and a handover to your team at the end of the engagement.',
      },
    ],
  },
  regulated: {
    title: 'Regulated environments',
    intro:
      "10 years in pharmacy, a regulated sector, before development. That background shapes the work on traceability and compliance.",
    points: [
      'Doctor of pharmacy (PharmD), 7 years of pharmacy practice before the career change.',
      'A habit of quality control, documentation and regulatory accountability.',
      'Blockchain & Cie guarantees no certification or compliance outcome: the scope of each engagement states it explicitly.',
    ],
  },
  lead: {
    name: 'Antoine Delamare',
    role: 'Managing director and technical lead',
    credentials: [
      'Doctor of pharmacy (PharmD)',
      'French, Spanish, English',
      '100% remote',
    ],
    bio:
      "Antoine leads every engagement on the technical side. Before development, he spent 7 years in community pharmacy, a regulated sector. He works remotely in French, English and Spanish, and stays accountable for the outcome, even when a specialist covers a specific part.",
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'How much does an engagement cost?',
        answer:
          "The price depends on the exact scope. Each offer states an indicative duration. Pricing follows the scoping call or the Sanity Check, and you approve it before any commitment.",
      },
      {
        question: 'What happens during the call?',
        answer:
          "You describe the system and the expected outcome. Antoine asks the technical questions. By the end of the call, you know which offer fits your situation, or whether none does.",
      },
      {
        question: 'Do you work alongside existing internal teams?',
        answer:
          "Yes. Most engagements run alongside your team or a product contact, with a documented handoff at the end.",
      },
      {
        question: 'Who actually works on my engagement?',
        answer:
          "Antoine Delamare leads every engagement on the technical side. When needed, specialists cover a specific part of the scope under his responsibility.",
      },
      {
        question: 'Can an AI agent act without supervision?',
        answer:
          "No. Deployed agents run with bounded autonomy and human control rules on sensitive decisions. The exact scope is defined with you.",
      },
      {
        question: 'Do you work outside France?',
        answer:
          "Yes, remotely, in French, English or Spanish. Blockchain & Cie is a French entity.",
      },
      {
        question: "What happens after a Sanity Check if I don't continue?",
        answer:
          "The risk report belongs to you, with no obligation to continue.",
      },
    ],
  },
  finalCta: {
    title: 'A system to fix or to build?',
    description: 'Describe your context on a call. You leave with a clear recommendation: no commitment, no generic diagnosis.',
    ctaPrimary: 'Talk about your system',
    ctaSecondary: 'Write an email',
  },
} as const satisfies HomeContent;
