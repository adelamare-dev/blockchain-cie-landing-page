import type { PathsContent } from "../types";

// English path pages: reliability and build.
// The retainer closes both pages as a continuity option after a first engagement.

export const paths = {
  reliability: {
    id: "reliability",
    intent: {
      title: "Fix a system that already exists",
      outcome:
        "Your team takes over a system audited, stabilized and documented, without depending on a single person.",
    },
    situations: [
      "An AI-built repo works, but nobody wants to modify it.",
      "A developer takes several days to understand the codebase before contributing.",
      "Production incidents keep coming back with no clear cause.",
      "A team uses AI tools daily with no shared convention.",
      "A deadline (fundraise, audit, production release) forces you to secure the code quickly.",
    ],
    offerIds: ["sanity-check", "rescue-sprint", "workflow-setup"],
    method: {
      title: "Method",
      intro:
        "The rescue follows a fixed order, to avoid surprises on either side.",
      steps: [
        {
          title: "Scoping",
          description:
            "A call to understand the context, the constraints and what's already been tried.",
        },
        {
          title: "Diagnosis",
          description:
            "Audit of the existing code, returned as a prioritized risk report.",
        },
        {
          title: "Work within a locked scope",
          description:
            "The scope of the rescue is fixed after diagnosis, not before.",
        },
        {
          title: "Handoff",
          description:
            "Documentation, tests and knowledge transfer to your team.",
        },
      ],
      responsibilities: [
        "Antoine Delamare leads the engagement technically from start to finish.",
        "The scope locked after diagnosis is binding for both parties.",
        "Any scope extension is discussed and approved before it starts.",
      ],
    },
    proofId: "erp-industriel",
    fit: {
      title: "Who this is for, and who it is not",
      fitCriteria: [
        "Existing code already runs, even imperfectly.",
        "A sponsor can approve the scope.",
        "The stack is Node.js, TypeScript, React, Next.js, Vue.js, FastAPI or Python.",
      ],
      exclusions: [
        "A project still at the idea stage, with no code to audit.",
        "A request for official certification or regulatory compliance.",
      ],
    },
    retainer: {
      title: "After the rescue",
      description:
        "Once the system is stabilized, a monthly Retainer takes over: fixes, new bounded workflows and security updates, without a dedicated hire.",
      offerId: "retainer",
    },
    faq: {
      title: "Frequently asked questions about this path",
      items: [
        {
          question:
            "Should I start with the Sanity Check before the Rescue Sprint?",
          answer:
            "Recommended. The Sanity Check sets a clear scope before any work starts; the report stays useful even if you don't continue.",
        },
        {
          question: "Will the code be completely rewritten?",
          answer:
            "No. The rescue targets the risk areas identified during diagnosis, not a full rewrite.",
        },
        {
          question:
            "Can my team carry on alone after the engagement?",
          answer:
            "That's the goal of the handoff: documentation, tests and a handover call included in every offer on this path.",
        },
        {
          question:
            "Do you work with a stack you don't already know?",
          answer:
            "The Sanity Check quickly confirms compatibility before any longer commitment.",
        },
      ],
    },
    cta: {
      title: "A system to fix?",
      description:
        "Describe your repo and your friction points on a call. You leave with a clear recommendation, no commitment.",
      ctaPrimary: "Talk about your system",
      ctaSecondaryLabel: "Write an email",
      ctaSecondaryEmail: "contact@blockchain-cie.com",
    },
  },
  build: {
    id: "build",
    intent: {
      title: "Build something new",
      outcome:
        "You get a working product or AI agent, tested, deployed and documented, ready for your team to take over.",
    },
    situations: [
      "A team manually repeats a time-consuming business workflow.",
      "An existing chatbot gives poor answers.",
      "A validated idea needs to become a demonstrable product fast.",
      "A dApp project needs smart contracts and a Web3 frontend.",
      "An investor demo is coming up and the product needs to work.",
    ],
    offerIds: ["agent-deployment", "poc-mvp-build"],
    method: {
      title: "Method",
      intro:
        "Building follows the same scoping approach as fixing, adapted to a new system.",
      steps: [
        {
          title: "Scoping",
          description:
            "A call to define the workflow, the product and the expected outcome.",
        },
        {
          title: "Diagnosis",
          description:
            "Architecture and stack choices, driven by the actual need, not a default standard.",
        },
        {
          title: "Work within a locked scope",
          description:
            "The system is built within a fixed scope, tests and deployment included.",
        },
        {
          title: "Handoff",
          description:
            "Technical documentation and handover, so your team can take the lead.",
        },
      ],
      responsibilities: [
        "Antoine Delamare leads the engagement technically from start to finish.",
        "Any AI agent deployed runs with bounded autonomy and human control over sensitive decisions.",
        "The scope locked after scoping is binding for both parties.",
      ],
    },
    proofId: "tracabilite-esa-parametry",
    fit: {
      title: "Who this is for, and who it is not",
      fitCriteria: [
        "A real business need or workflow, already identified.",
        "A sponsor able to approve the scope and the deployment.",
        "The organization accepts human control over an AI agent's sensitive decisions.",
      ],
      exclusions: [
        "Training or hosting custom AI models.",
        "A speculative crypto project with no demonstrated software need.",
      ],
    },
    retainer: {
      title: "After deployment",
      description:
        "Once the system is in production, a monthly Retainer takes over: maintenance, new bounded workflows and security, without a dedicated hire.",
      offerId: "retainer",
    },
    faq: {
      title: "Frequently asked questions about this path",
      items: [
        {
          question: "How long does a POC or an MVP take?",
          answer:
            "A POC takes 4 to 6 weeks, an MVP takes 3 to 4 months. The exact duration depends on the scope defined at kickoff.",
        },
        {
          question:
            "Can the AI agent act alone on sensitive decisions?",
          answer:
            "No. Every deployed agent runs with bounded autonomy and human control rules, defined with you.",
        },
        {
          question: "Do you also build smart contracts?",
          answer:
            "Yes, when the project is a dApp. Solidity, Hardhat and common Web3 libraries are in scope.",
        },
        {
          question:
            "What happens if the scope changes during the engagement?",
          answer:
            "The scope is locked after kickoff. Any change is discussed and approved before it starts.",
        },
      ],
    },
    cta: {
      title: "A system to build?",
      description: "Describe your need and your deadline on a call. You leave with a clear recommendation, no commitment.",
      ctaPrimary: "Talk about your system",
      ctaSecondaryLabel: "Write an email",
      ctaSecondaryEmail: "contact@blockchain-cie.com",
    },
  },
} as const satisfies PathsContent;
