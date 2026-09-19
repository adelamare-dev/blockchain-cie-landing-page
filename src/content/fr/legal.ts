import type { LegalContent } from "../types";

// French legal notice and privacy policy.
//
// Checked against official records (Pappers/RNE, 2026-09-19): company name,
// legal form, SIREN, SIRET, VAT number, share capital, RCS city, registered
// office, incorporation date, director, contact address.

const updatedAt = "2026-09-18";

export const legal = {
  legalNotice: {
    title: "Mentions légales",
    updatedAt,
    sections: [
      {
        title: "Éditeur du site",
        body: [
          "Le site https://blockchain-cie.com est édité par Blockchain & Cie, EURL au capital social de 1 000 €.",
          "Siège social : 49 grand rue, 29510 Edern, France.",
          "SIREN : 983 173 428. SIRET : 983 173 428 00019.",
          "Immatriculée au RCS de Quimper (983 173 428 R.C.S. Quimper).",
          "Numéro de TVA intracommunautaire : FR71983173428.",
          "Société créée en janvier 2024.",
        ],
      },
      {
        title: "Directeur de la publication",
        body: ["Antoine Delamare, gérant de Blockchain & Cie."],
      },
      {
        title: "Contact",
        body: ["contact@blockchain-cie.com"],
      },
      {
        title: "Hébergement",
        body: [
          "Le site est hébergé par Hetzner Online GmbH, Industriestraße 25, 91710 Gunzenhausen, Allemagne.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        body: [
          "L’ensemble des contenus présents sur ce site (textes, illustrations, mise en page, code source) est la propriété de Blockchain & Cie, sauf mention contraire.",
          "Toute reproduction, représentation ou diffusion, en tout ou partie, sans autorisation préalable est interdite.",
        ],
      },
      {
        title: "Responsabilité",
        body: [
          "Blockchain & Cie s’efforce de fournir des informations exactes et à jour sur ce site. Elle ne peut être tenue responsable des erreurs ou omissions, ni de l’indisponibilité temporaire du service.",
          "Le contenu de ce site n’engage aucune promesse de certification, de conformité réglementaire ou de sécurité garantie.",
        ],
      },
    ],
  },
  privacyPolicy: {
    title: "Politique de confidentialité",
    updatedAt,
    sections: [
      {
        title: "Responsable du traitement",
        body: [
          "Blockchain & Cie, EURL immatriculée sous le SIREN 983173428, siège social 49 grand rue, 29510 Edern, France.",
          "Contact : contact@blockchain-cie.com.",
        ],
      },
      {
        title: "Mesure d’audience",
        body: [
          "Ce site utilise Umami, un outil de mesure d’audience hébergé en Union européenne, sans cookie et sans collecte de donnée personnelle identifiable.",
          "Aucune adresse IP complète n’est conservée, aucun profilage individuel n’est réalisé.",
        ],
      },
      {
        title: "Transfert vers des services tiers",
        body: [
          "Le bouton d’appel principal redirige vers un lien raccourci Bitly, qui redirige ensuite vers Calendly pour la prise de rendez-vous.",
          "Ce transfert n’a lieu qu’au clic volontaire sur le bouton. Bitly et Calendly appliquent leurs propres politiques de confidentialité.",
        ],
      },
      {
        title: "Vos droits",
        body: [
          "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement et d’opposition sur vos données personnelles.",
          "Pour exercer ces droits, contactez contact@blockchain-cie.com.",
        ],
      },
    ],
  },
} as const satisfies LegalContent;
