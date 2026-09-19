import type { UiContent } from "../types";

// Spanish interface strings: navigation, footer, 404 and accessible labels.

export const ui = {
  skipLink: "Ir al contenido principal",
  nav: {
    reliability: "Dar fiabilidad",
    build: "Construir",
    recentWork: "Trabajos",
    expertise: "Experiencia",
    languageSelectorLabel: "Idioma",
    ctaCalendly: "Hablar de su sistema",
  },
  footer: {
    tagline: "Estudio de ingeniería de software e IA",
    legalNoticeLabel: "Aviso legal",
    privacyPolicyLabel: "Política de privacidad",
    rightsReserved: "Todos los derechos reservados.",
  },
  notFound: {
    title: "Página no encontrada",
    message:
      "Esta página no existe o ya no está disponible. Puede que haya cambiado de dirección durante el rediseño del sitio.",
    links: [
      { label: "Volver al inicio", href: "home" },
      {
        label: "Dar fiabilidad a un sistema existente",
        href: "reliability",
      },
      { label: "Construir un sistema nuevo", href: "build" },
    ],
  },
  aria: {
    skipLink: "Ir al contenido principal",
    languageSwitcher: "Cambiar de idioma",
    mainNav: "Navegación principal",
    breadcrumb: "Ruta de navegación",
    mobileMenuToggle: "Abrir el menú",
  },
  breadcrumbHome: "Inicio",
  pathLabels: {
    situationsTitle: "¿Le suena alguna de estas situaciones?",
    offersTitle: "Las ofertas de este camino",
    offerFields: {
      duration: "Duración",
      triggers: "Motivos frecuentes",
      deliverables: "Entregables",
      clientInputs: "Lo que usted aporta",
      eligibility: "Elegibilidad",
      outOfScope: "Fuera de alcance",
    },
    responsibilitiesTitle: "Responsabilidades",
    proofTitle: "Una prueba concreta",
    proofFields: {
      problem: "Problema",
      intervention: "Intervención",
      results: "Resultados",
      limits: "Límites",
      stack: "Stack técnico",
    },
    fitCriteriaLabel: "Para quién es",
    exclusionsLabel: "Para quién no es",
    retainerDeliverablesLabel: "Entregables incluidos",
  },
  updatedAtLabel: "Última actualización:",
} as const satisfies UiContent;
