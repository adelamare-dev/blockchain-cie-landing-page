import type { LegalContent } from "../types";

// Spanish legal notice and privacy policy.
//
// The French version is the legally binding one. This Spanish version is
// informative only, and both sections say so explicitly.
//
// Verified values kept identical to the French source (Pappers/RNE,
// 2026-09-19): company name, legal form, SIREN, SIRET, VAT number, share
// capital, RCS city, registered office, incorporation date, director,
// contact address.

const updatedAt = "2026-09-18";

export const legal = {
  legalNotice: {
    title: "Aviso legal",
    updatedAt,
    sections: [
      {
        title: "Aviso informativo",
        body: [
          "Esta versión en español se ofrece a título informativo. La versión francesa de este aviso legal prevalece en caso de divergencia.",
        ],
      },
      {
        title: "Editor del sitio",
        body: [
          "El sitio https://blockchain-cie.com está editado por Blockchain & Cie, EURL con un capital social de 1 000 €.",
          "Domicilio social: 49 grand rue, 29510 Edern, Francia.",
          "SIREN: 983 173 428. SIRET: 983 173 428 00019.",
          "Inscrita en el RCS de Quimper (983 173 428 R.C.S. Quimper).",
          "Número de IVA intracomunitario: FR71983173428.",
          "Sociedad constituida en enero de 2024.",
        ],
      },
      {
        title: "Director de publicación",
        body: ["Antoine Delamare, gerente de Blockchain & Cie."],
      },
      {
        title: "Contacto",
        body: ["contact@blockchain-cie.com"],
      },
      {
        title: "Alojamiento",
        body: [
          "El sitio está alojado por Hetzner Online GmbH, Industriestraße 25, 91710 Gunzenhausen, Alemania.",
        ],
      },
      {
        title: "Propiedad intelectual",
        body: [
          "Todos los contenidos presentes en este sitio (textos, ilustraciones, maquetación, código fuente) son propiedad de Blockchain & Cie, salvo indicación contraria.",
          "Queda prohibida toda reproducción, representación o difusión, total o parcial, sin autorización previa.",
        ],
      },
      {
        title: "Responsabilidad",
        body: [
          "Blockchain & Cie procura ofrecer información exacta y actualizada en este sitio. No puede ser considerada responsable de errores, omisiones o de la indisponibilidad temporal del servicio.",
          "El contenido de este sitio no supone ninguna promesa de certificación, conformidad regulatoria o seguridad garantizada.",
        ],
      },
    ],
  },
  privacyPolicy: {
    title: "Política de privacidad",
    updatedAt,
    sections: [
      {
        title: "Aviso informativo",
        body: [
          "Esta versión en español se ofrece a título informativo. La versión francesa de esta política de privacidad prevalece en caso de divergencia.",
        ],
      },
      {
        title: "Responsable del tratamiento",
        body: [
          "Blockchain & Cie, EURL inscrita con el SIREN 983173428, domicilio social 49 grand rue, 29510 Edern, Francia.",
          "Contacto: contact@blockchain-cie.com.",
        ],
      },
      {
        title: "Medición de audiencia",
        body: [
          "Este sitio utiliza Umami, una herramienta de medición de audiencia alojada en la Unión Europea, sin cookies y sin recopilación de datos personales identificables.",
          "No se conserva ninguna dirección IP completa ni se realiza ningún perfilado individual.",
        ],
      },
      {
        title: "Transferencia hacia servicios de terceros",
        body: [
          "El botón de llamada principal redirige a un enlace corto de Bitly, que a su vez redirige a Calendly para la reserva de cita.",
          "Esta transferencia solo ocurre tras el clic voluntario en el botón. Bitly y Calendly aplican sus propias políticas de privacidad.",
        ],
      },
      {
        title: "Sus derechos",
        body: [
          "De conformidad con el RGPD, dispone de un derecho de acceso, rectificación, supresión y oposición sobre sus datos personales.",
          "Para ejercer estos derechos, contacte con contact@blockchain-cie.com.",
        ],
      },
    ],
  },
} as const satisfies LegalContent;
