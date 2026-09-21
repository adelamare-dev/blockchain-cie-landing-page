import type { HomeContent } from '../types';

// Spanish home page content, adapted from the French source (not a literal translation).
// Structure mirrors home.ts in every other locale.

export const home = {
  hero: {
    eyebrow: 'Blockchain & Cie: Estudio de ingeniería de software e IA',
    h1: 'Software y agentes de IA que aguantan en producción.',
    subtitle:
      'Blockchain & Cie audita, estabiliza y construye sus sistemas de software y agentes de IA. Antoine Delamare dirige técnicamente cada misión, con 10 años de experiencia en farmacia y trazabilidad regulada.',
    ctaPrimary: 'Hablar de su sistema',
    ctaSecondary: 'Elegir un itinerario',
  },
  proofStrip: [
    {
      metric: '2 CVE corregidas',
      context: 'En un ERP industrial en producción (CVE-2023-30533, CVE-2024-29041).',
    },
    {
      metric: '~270 commits en 9 repositorios',
      context: 'En un estudio de viabilidad de trazabilidad financiado por la ESA a través de Parametry.',
    },
    {
      metric: '175 commits, 77 % del repositorio',
      context: 'En una infraestructura de agentes de IA en producción, unos 5 meses.',
    },
    {
      metric: '~103 pruebas pytest',
      context: 'Sobre los contratos de configuración y los flujos de agentes en producción.',
    },
  ],
  pathChoice: {
    title: 'Dos formas de trabajar juntos',
    cards: [
      {
        pathId: 'reliability',
        title: 'Dar fiabilidad a un sistema existente',
        description:
          'Su código funciona, pero nadie se atreve a tocarlo. Auditamos, estabilizamos y transferimos.',
        signals: [
          'Un repositorio generado con IA que necesita ponerse al día.',
          'Incidentes o regresiones que se repiten.',
          'Un equipo que debe adoptar prácticas de desarrollo con IA estructuradas.',
        ],
      },
      {
        pathId: 'build',
        title: 'Construir un sistema nuevo',
        description:
          'Tiene una necesidad validada. Diseñamos, fabricamos y desplegamos, con autonomía acotada cuando interviene un agente de IA.',
        signals: [
          'Un flujo de trabajo a automatizar con un agente de IA.',
          'Un POC o un MVP que entregar en semanas, no en meses.',
          'Un proyecto dApp con contratos inteligentes.',
        ],
      },
    ],
  },
  offersOverview: {
    title: 'Las 6 ofertas',
    intro:
      '3 ofertas para dar fiabilidad, 2 para construir, 1 para la continuidad. Cada oferta precisa el resultado, los entregables y los criterios de elegibilidad, para saber rápido cuál le corresponde. El detalle está en la página de cada itinerario.',
  },
  recentWork: {
    title: 'Trabajos recientes',
    intro:
      'Un ERP industrial devuelto a producción. Una infraestructura de agentes de IA en un proveedor cloud europeo. Un estudio de trazabilidad financiado por la ESA. Detalles anonimizados cuando corresponde.',
  },
  method: {
    title: 'Método de trabajo',
    intro: 'Cada misión sigue la misma lógica: definición del alcance, diagnóstico, intervención con alcance fijado, transferencia.',
    steps: [
      {
        title: 'Definición del alcance',
        description: 'Una llamada para entender el sistema, el contexto y el resultado esperado.',
      },
      {
        title: 'Diagnóstico',
        description: 'Análisis del código o de la necesidad, presentado en riesgos y prioridades.',
      },
      {
        title: 'Intervención con alcance fijado',
        description: 'El alcance se fija tras el diagnóstico. Sin desviaciones silenciosas durante la misión.',
      },
      {
        title: 'Transferencia',
        description: 'Documentación, pruebas y traspaso a su equipo al final de la misión.',
      },
    ],
  },
  regulated: {
    title: 'Entornos regulados',
    intro:
      '10 años en farmacia, sector regulado, antes del desarrollo. Esa experiencia nutre el trabajo sobre trazabilidad y cumplimiento.',
    points: [
      'Doctorado en farmacia (PharmD), 7 años de práctica en oficina de farmacia antes del cambio de carrera.',
      'Hábito de control de calidad, documentación y responsabilidad regulatoria.',
      'Blockchain & Cie no garantiza ninguna certificación ni conformidad: el alcance de cada misión lo precisa.',
    ],
  },
  lead: {
    name: 'Antoine Delamare',
    role: 'Gerente y responsable técnico',
    credentials: [
      'Doctor en farmacia (PharmD)',
      'Francés, español, inglés',
      '100 % remoto',
    ],
    bio:
      'Antoine dirige técnicamente cada misión. Antes del desarrollo, 7 años en farmacia de oficina, sector regulado. Trabaja en remoto en francés, inglés y español, y sigue siendo responsable del resultado, incluso cuando un especialista interviene en un alcance concreto.',
    photoAlt: 'Retrato de Antoine Delamare',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Cuánto cuesta una misión?',
        answer:
          'El precio depende del alcance exacto. Cada oferta precisa su duración indicativa. El presupuesto se define tras la llamada de alcance o el Sanity Check, y usted lo valida antes de cualquier compromiso.',
      },
      {
        question: '¿Qué ocurre durante la llamada?',
        answer:
          'Usted describe el sistema y el resultado esperado. Antoine hace las preguntas técnicas. Al final de la llamada, sabe qué oferta corresponde a su situación, o si ninguna le conviene.',
      },
      {
        question: '¿Trabajan con equipos internos existentes?',
        answer:
          'Sí. La mayoría de las misiones se coordinan con su equipo o un contacto de producto, con transferencia documentada al final.',
      },
      {
        question: '¿Quién interviene realmente en mi misión?',
        answer:
          'Antoine Delamare dirige técnicamente cada misión. Si hace falta, especialistas intervienen en un alcance concreto, bajo su responsabilidad.',
      },
      {
        question: '¿Puede un agente de IA actuar sin supervisión?',
        answer:
          'No. Los agentes desplegados tienen autonomía acotada y reglas de control humano sobre las decisiones sensibles. El alcance exacto se define con usted.',
      },
      {
        question: '¿Trabajan fuera de Francia?',
        answer:
          'Sí, en remoto, en francés, inglés o español. Blockchain & Cie es una entidad francesa.',
      },
      {
        question: '¿Qué ocurre tras un Sanity Check si no continúo?',
        answer:
          'El informe de riesgo le pertenece, sin compromiso de continuidad.',
      },
    ],
  },
  finalCta: {
    title: '¿Un sistema que necesita fiabilidad o construcción?',
    description: 'Describa su contexto durante una llamada. Obtiene una recomendación clara: sin compromiso, sin diagnóstico genérico.',
    ctaPrimary: 'Hablar de su sistema',
    ctaSecondary: 'Escribir por correo',
  },
} as const satisfies HomeContent;
