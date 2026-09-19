import type { LegalContent } from "../types";

// English legal notice and privacy policy.
//
// Informative only: the French version is the legally binding one. Checked
// values (company name, legal form, SIREN, SIRET, VAT number, share capital,
// RCS city, registered office, incorporation date, director, contact address)
// match the French file exactly. Source: Pappers/RNE, 2026-09-19.

const updatedAt = "2026-09-18";

export const legal = {
  legalNotice: {
    title: "Legal notice",
    updatedAt,
    sections: [
      {
        title: "Site publisher",
        body: [
          "This English version is informative. The French legal notice is the legally binding one.",
          "The site https://blockchain-cie.com is published by Blockchain & Cie, an EURL with share capital of €1,000.",
          "Registered office: 49 grand rue, 29510 Edern, France.",
          "SIREN: 983 173 428. SIRET: 983 173 428 00019.",
          "Registered with the RCS of Quimper (983 173 428 R.C.S. Quimper).",
          "Intra-community VAT number: FR71983173428.",
          "Company incorporated in January 2024.",
        ],
      },
      {
        title: "Publication director",
        body: ["Antoine Delamare, managing director of Blockchain & Cie."],
      },
      {
        title: "Contact",
        body: ["contact@blockchain-cie.com"],
      },
      {
        title: "Hosting",
        body: [
          "The site is hosted by Hetzner Online GmbH, Industriestraße 25, 91710 Gunzenhausen, Germany.",
        ],
      },
      {
        title: "Intellectual property",
        body: [
          "All content on this site (text, illustrations, layout, source code) is the property of Blockchain & Cie, unless stated otherwise.",
          "Any reproduction, representation or distribution, in whole or in part, without prior authorization is prohibited.",
        ],
      },
      {
        title: "Liability",
        body: [
          "Blockchain & Cie makes an effort to provide accurate and current information on this site. It cannot be held liable for errors, omissions, or temporary unavailability of the service.",
          "Nothing on this site constitutes a promise of certification, regulatory compliance, or guaranteed security.",
        ],
      },
    ],
  },
  privacyPolicy: {
    title: "Privacy policy",
    updatedAt,
    sections: [
      {
        title: "Data controller",
        body: [
          "This English version is informative. The French privacy policy is the legally binding one.",
          "Blockchain & Cie, an EURL registered under SIREN 983173428, registered office 49 grand rue, 29510 Edern, France.",
          "Contact: contact@blockchain-cie.com.",
        ],
      },
      {
        title: "Audience measurement",
        body: [
          "This site uses Umami, an audience measurement tool hosted in the European Union, with no cookies and no collection of identifiable personal data.",
          "No full IP address is retained, and no individual profiling is performed.",
        ],
      },
      {
        title: "Transfer to third-party services",
        body: [
          "The main call-to-action button redirects to a shortened Bitly link, which then redirects to Calendly for booking.",
          "This transfer happens only when you click the button. Bitly and Calendly apply their own privacy policies.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "Under the GDPR, you have the right to access, rectify, erase and object to the processing of your personal data.",
          "To exercise these rights, contact contact@blockchain-cie.com.",
        ],
      },
    ],
  },
} as const satisfies LegalContent;
