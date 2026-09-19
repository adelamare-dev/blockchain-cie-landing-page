import type { MetaContent } from '../types';

// Spanish SEO metadata, one entry per route.
// Titles stay at or under 60 characters and descriptions between 140 and 158,
// so neither gets truncated in search results. `pnpm test` enforces both.

export const meta = {
  home: {
    title: 'Blockchain & Cie: software y agentes IA en producción',
    description:
      'Blockchain & Cie audita, estabiliza y construye sus sistemas de software y agentes de IA. Antoine Delamare dirige cada misión en remoto, con enfoque técnico.',
  },
  pathReliability: {
    title: 'Dar fiabilidad a un sistema: Blockchain & Cie',
    description:
      'Auditoría, recuperación y estabilización de código generado con IA. Informe de riesgo, correcciones de seguridad, pruebas y transferencia a su equipo.',
  },
  pathBuild: {
    title: 'Construir un sistema nuevo: Blockchain & Cie',
    description:
      'Agentes de IA en producción, POC, MVP y dApp. Diseño, fabricación y despliegue de un sistema nuevo, probado y documentado, con autonomía acotada.',
  },
  legalNotice: {
    title: 'Aviso legal: Blockchain & Cie',
    description:
      'Aviso legal de Blockchain & Cie: editor del sitio, forma jurídica, domicilio social, alojamiento, propiedad intelectual y responsabilidad del sitio.',
  },
  privacy: {
    title: 'Política de privacidad: Blockchain & Cie',
    description:
      'Política de privacidad de Blockchain & Cie: medición de audiencia Umami sin cookies, transferencia a Calendly al hacer clic y derechos RGPD.',
  },
  notFound: {
    title: 'Página no encontrada: Blockchain & Cie',
    description:
      'Esta página ya no existe. Vuelva al inicio de Blockchain & Cie o acceda a los itinerarios Fiabilizar y Construir desde los enlaces de ayuda.',
  },
} as const satisfies MetaContent;
