import type { PathsContent } from "../types";

// Spanish path pages: reliability and build.
// The retainer closes both pages as a continuity option after a first mission.

export const paths = {
  reliability: {
    id: "reliability",
    intent: {
      title: "Dar fiabilidad a un sistema existente",
      outcome:
        "Su equipo retoma un sistema auditado, estabilizado y documentado, sin depender de una sola persona.",
    },
    situations: [
      "Un repositorio construido con herramientas de IA funciona, pero nadie se atreve a modificarlo.",
      "Un desarrollador tarda varios días en entender una base de código antes de poder contribuir.",
      "Los incidentes en producción se repiten sin una causa clara.",
      "Un equipo usa herramientas de IA a diario sin una convención común.",
      "Un plazo (ronda de inversión, auditoría, puesta en producción) exige asegurar el código con rapidez.",
    ],
    offerIds: ["sanity-check", "rescue-sprint", "workflow-setup"],
    method: {
      title: "Método",
      intro:
        "La recuperación sigue un orden fijo, para evitar sorpresas de ambos lados.",
      steps: [
        {
          title: "Definición del alcance",
          description:
            "Una llamada para entender el contexto, las restricciones y lo que ya se ha intentado.",
        },
        {
          title: "Diagnóstico",
          description:
            "Auditoría del código existente, entregada como informe de riesgo priorizado.",
        },
        {
          title: "Intervención con alcance fijado",
          description:
            "El alcance de la recuperación se fija tras el diagnóstico, no antes.",
        },
        {
          title: "Transferencia",
          description:
            "Documentación, pruebas y traspaso a su equipo.",
        },
      ],
      responsibilities: [
        "Antoine Delamare dirige técnicamente la misión de principio a fin.",
        "El alcance fijado tras el diagnóstico compromete a ambas partes.",
        "Toda ampliación de alcance se discute y valida antes de ponerse en marcha.",
      ],
    },
    proofId: "erp-industriel",
    fit: {
      title: "Para quién, y para quién no",
      fitCriteria: [
        "Un código existente ya funciona, aunque sea de forma imperfecta.",
        "Un responsable puede validar el alcance.",
        "El stack es Node.js, TypeScript, React, Next.js, Vue.js, FastAPI o Python.",
      ],
      exclusions: [
        "Un proyecto aún en fase de idea, sin código que auditar.",
        "Una solicitud de certificación o conformidad regulatoria oficial.",
      ],
    },
    retainer: {
      title: "Después de la recuperación",
      description:
        "Una vez estabilizado el sistema, un Retainer mensual se ocupa de correcciones, nuevos flujos de trabajo acotados y actualizaciones de seguridad, sin contratación dedicada.",
      offerId: "retainer",
    },
    faq: {
      title: "Preguntas frecuentes sobre este itinerario",
      items: [
        {
          question:
            "¿Debo empezar por el Sanity Check antes del Rescue Sprint?",
          answer:
            "Recomendado. El Sanity Check fija un alcance claro antes de cualquier intervención; el informe sigue siendo útil aunque no continúe.",
        },
        {
          question: "¿Se reescribirá todo el código?",
          answer:
            "No. La recuperación se centra en las zonas de riesgo identificadas en el diagnóstico, no en una reescritura completa.",
        },
        {
          question: "¿Mi equipo podrá continuar solo tras la misión?",
          answer:
            "Ese es el objetivo de la transferencia: documentación, pruebas y llamada de traspaso incluidas en cada oferta de este itinerario.",
        },
        {
          question: "¿Trabajan con un stack que todavía no conocen?",
          answer:
            "El Sanity Check verifica rápidamente la compatibilidad antes de cualquier compromiso mayor.",
        },
      ],
    },
    cta: {
      title: "¿Un sistema que necesita fiabilidad?",
      description:
        "Describa su repositorio y sus puntos de fricción durante una llamada. Obtiene una recomendación clara, sin compromiso.",
      ctaPrimary: "Hablar de su sistema",
      ctaSecondaryLabel: "Escribir por correo",
      ctaSecondaryEmail: "contact@blockchain-cie.com",
    },
  },
  build: {
    id: "build",
    intent: {
      title: "Construir un sistema nuevo",
      outcome:
        "Obtiene un producto o un agente de IA funcional, probado, desplegado y documentado, listo para que su equipo lo retome.",
    },
    situations: [
      "Un equipo repite manualmente un flujo de trabajo que consume mucho tiempo.",
      "Un chatbot existente da respuestas insuficientes.",
      "Una idea validada debe convertirse rápidamente en un producto demostrable.",
      "Un proyecto dApp requiere contratos inteligentes y un frontend Web3.",
      "Se acerca una demostración a inversores y el producto debe estar funcional.",
    ],
    offerIds: ["agent-deployment", "poc-mvp-build"],
    method: {
      title: "Método",
      intro:
        "La construcción sigue la misma definición de alcance que la fiabilización, adaptada a un sistema nuevo.",
      steps: [
        {
          title: "Definición del alcance",
          description:
            "Una llamada para definir el flujo de trabajo, el producto y el resultado esperado.",
        },
        {
          title: "Diagnóstico",
          description:
            "Elección de arquitectura y stack, en función de la necesidad real, no de un estándar por defecto.",
        },
        {
          title: "Intervención con alcance fijado",
          description:
            "Construcción del sistema a alcance fijado, pruebas y despliegue incluidos.",
        },
        {
          title: "Transferencia",
          description:
            "Documentación técnica y traspaso, para que su equipo retome el control.",
        },
      ],
      responsibilities: [
        "Antoine Delamare dirige técnicamente la misión de principio a fin.",
        "Todo agente de IA desplegado funciona con autonomía acotada y control humano sobre las decisiones sensibles.",
        "El alcance fijado tras la definición compromete a ambas partes.",
      ],
    },
    proofId: "tracabilite-esa-parametry",
    fit: {
      title: "Para quién, y para quién no",
      fitCriteria: [
        "Una necesidad o un flujo de trabajo real, ya identificado.",
        "Un responsable capaz de validar el alcance y el despliegue.",
        "La organización acepta un control humano sobre las decisiones sensibles de un agente de IA.",
      ],
      exclusions: [
        "Entrenamiento u hospedaje de modelos de IA a medida.",
        "Proyecto cripto especulativo sin una necesidad de software demostrada.",
      ],
    },
    retainer: {
      title: "Después del despliegue",
      description:
        "Una vez el sistema en producción, un Retainer mensual se ocupa de mantenimiento, nuevos flujos de trabajo acotados y seguridad, sin contratación dedicada.",
      offerId: "retainer",
    },
    faq: {
      title: "Preguntas frecuentes sobre este itinerario",
      items: [
        {
          question: "¿Cuánto tiempo lleva un POC o un MVP?",
          answer:
            "Un POC se construye en 4 a 6 semanas, un MVP en 3 a 4 meses. La duración exacta depende del alcance definido al inicio.",
        },
        {
          question:
            "¿Puede el agente de IA actuar solo en decisiones sensibles?",
          answer:
            "No. Cada agente desplegado funciona con autonomía acotada y reglas de control humano, definidas con usted.",
        },
        {
          question: "¿También fabrican contratos inteligentes?",
          answer:
            "Sí, cuando el proyecto es una dApp. Solidity, Hardhat y las librerías Web3 habituales están en el alcance cubierto.",
        },
        {
          question:
            "¿Qué ocurre si el alcance cambia durante la misión?",
          answer:
            "El alcance se fija tras la definición inicial. Cualquier cambio se discute y valida antes de ponerse en marcha.",
        },
      ],
    },
    cta: {
      title: "¿Un sistema que construir?",
      description:
        "Describa su necesidad y su plazo durante una llamada. Obtiene una recomendación clara, sin compromiso.",
      ctaPrimary: "Hablar de su sistema",
      ctaSecondaryLabel: "Escribir por correo",
      ctaSecondaryEmail: "contact@blockchain-cie.com",
    },
  },
} as const satisfies PathsContent;
