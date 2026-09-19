import type { Offer } from '../types';

// The six offers, in Spanish.
//
// Three belong to the reliability path, two to the build path, and the
// retainer is transverse: it appears on both without creating a third door.
// No price, range or day rate appears here or anywhere in the output.
// Offer names stay in English on purpose; only the descriptor is localized.

export const offers = [
  {
    id: 'sanity-check',
    path: 'reliability',
    name: 'Repo Rescue: Sanity Check',
    descriptor: 'auditoría y estabilización de código generado con IA',
    outcome:
      'Un informe de riesgo priorizado sobre su repositorio. Sabrá qué falla, qué es urgente y qué queda por hacer antes de decidir.',
    triggers: [
      'Un nuevo desarrollador tarda varios días en entender el código.',
      'Incidentes que se repiten sin que nadie sepa por qué.',
      'Las dependencias no se actualizan desde hace tiempo.',
      'Se acerca una ronda de inversión o una auditoría externa.',
    ],
    deliverables: [
      'Mapa de zonas de riesgo (seguridad, dependencias, estructura, pruebas).',
      'Lista de correcciones clasificadas en P0, P1, P2.',
      'Recomendación de arquitectura y nota de deuda técnica.',
      'Estimación de duración si una recuperación (Rescue Sprint) es necesaria.',
      'Informe escrito y llamada de presentación de 30 minutos.',
    ],
    duration: '1 a 2 días',
    clientInputs: [
      'Acceso de lectura al repositorio.',
      'Una llamada de definición del alcance de 30 minutos.',
      'La lista de puntos de fricción ya identificados internamente.',
    ],
    eligibility: [
      'Proyecto escrito en Node.js, TypeScript, React, Next.js, Vue.js, FastAPI o Python.',
      'Un código ya en funcionamiento, no un proyecto vacío.',
    ],
    outOfScope: [
      'Cualquier corrección más allá de algunas urgencias puntuales.',
      'Refactorización completa o desarrollo de nuevas funcionalidades.',
    ],
    proofId: 'erp-industriel',
  },
  {
    id: 'rescue-sprint',
    path: 'reliability',
    name: 'Repo Rescue: Rescue Sprint',
    descriptor: 'recuperación específica de código con alcance fijado',
    outcome:
      'Un código estabilizado, probado y documentado, transferible a su equipo. Sin sorpresas: el alcance se fija tras el diagnóstico.',
    triggers: [
      'Queda abierta una vulnerabilidad de seguridad crítica.',
      'Las mismas regresiones aparecen en cada actualización.',
      'No existe ninguna prueba automatizada.',
      'La incorporación de un nuevo desarrollador tarda más de 3 días.',
    ],
    deliverables: [
      'Estructura refactorizada con responsabilidades separadas.',
      'Correcciones de seguridad (auditoría de dependencias, escaneo de secretos, buenas prácticas OWASP).',
      'Pruebas automatizadas y base de CI/CD.',
      'Documentación de arquitectura (tipo CLAUDE.md o AGENTS.md).',
      'Guía de instalación local.',
      'Llamada de transferencia de conocimiento de 60 minutos.',
    ],
    duration: '5 a 10 días',
    clientInputs: [
      'Acceso de escritura al repositorio.',
      'Permisos de despliegue en staging o producción.',
      'Un contacto de producto disponible durante la misión.',
      'Reunión de arranque con el equipo.',
    ],
    eligibility: [
      'Ya hay un Sanity Check o un diagnóstico equivalente.',
      'El alcance de la recuperación puede fijarse antes de empezar.',
    ],
    outOfScope: [
      'Desarrollo de nuevas funcionalidades más allá de un elemento puntual menor.',
      'Guardia 24/7 o mantenimiento de varios meses.',
    ],
    proofId: 'erp-industriel',
  },
  {
    id: 'workflow-setup',
    path: 'reliability',
    name: 'AI-Driven Dev Workflow Setup',
    descriptor: 'implantación de prácticas de desarrollo asistido por IA',
    outcome:
      'Su equipo adopta convenciones claras para programar con herramientas de IA: archivos de contexto documentados e integraciones duraderas. El código generado gana en regularidad de un desarrollador a otro.',
    triggers: [
      'La productividad se estanca a pesar del uso de herramientas de IA.',
      'El código generado con IA varía demasiado en calidad entre desarrolladores.',
      'La incorporación a las herramientas de IA lleva tiempo sin un método claro.',
      'No existe ninguna convención común (ni CLAUDE.md ni AGENTS.md).',
    ],
    deliverables: [
      'Auditoría de las prácticas actuales de desarrollo asistido por IA.',
      'Plantillas CLAUDE.md / AGENTS.md adaptadas a su stack.',
      'Configuración de las herramientas (Claude Code o equivalente).',
      'Integración de herramientas MCP relevantes para el equipo.',
      'Documentación del flujo agéntico (revisión, roles, proceso de sprint).',
      'Sesión de formación de 2 horas y seguimiento a las 2 semanas.',
    ],
    duration: '3 a 5 días',
    clientInputs: [
      'Acceso al repositorio del equipo.',
      'Acceso al entorno de desarrollo.',
      'Lista de los puntos de fricción actuales.',
      'Disponibilidad del equipo para la formación.',
    ],
    eligibility: [
      'Equipo de 2 a 10 desarrolladores que ya usan herramientas de IA a diario.',
    ],
    outOfScope: [
      'Desarrollo de un agente de IA a medida (ver AI Agent Deployment).',
      'Acompañamiento continuo más allá del seguimiento incluido.',
    ],
    proofId: null,
  },
  {
    id: 'agent-deployment',
    path: 'build',
    name: 'AI Agent Deployment',
    descriptor: 'despliegue de un agente de IA en producción, con autonomía acotada',
    outcome:
      'Un agente de IA en producción sobre su flujo de trabajo, con autonomía acotada y control humano. Supervisado, probado, documentado. Su equipo deja de repetir el flujo de trabajo a mano.',
    triggers: [
      'Un equipo repite manualmente un flujo de trabajo que consume mucho tiempo.',
      'Un chatbot existente da respuestas insatisfactorias.',
      'Necesidad de demostrar una automatización concreta a inversores.',
    ],
    deliverables: [
      'Elección del protocolo (WhatsApp, Matrix, API, MCP).',
      'Enrutamiento multiproveedor de modelos de IA con conmutación de respaldo.',
      'Stack Docker reforzada (aislamiento, secretos, puertos restringidos).',
      'Reglas de control humano y salvaguardas.',
      'Supervisión, comprobaciones de salud y registros.',
      'Pruebas unitarias y de integración.',
      'Documentación de operación y transferencia.',
      'Despliegue en su nube o en autoalojamiento.',
    ],
    duration: '2 a 4 semanas',
    clientInputs: [
      'Definición clara del flujo de trabajo a automatizar.',
      'Acceso a la API o a la cuenta del canal elegido (WhatsApp, etc.).',
      'Claves y presupuesto para los proveedores de modelos de IA.',
      'Destino de despliegue (nube o infraestructura existente).',
    ],
    eligibility: [
      'Ya existe un flujo de trabajo real y repetible.',
      'La organización acepta un control humano sobre las decisiones sensibles.',
    ],
    outOfScope: [
      'Entrenamiento u hospedaje de modelos a medida.',
      'Reconstrucción completa de una aplicación existente sin relación con el agente.',
    ],
    proofId: 'cloud-europeen',
  },
  {
    id: 'poc-mvp-build',
    path: 'build',
    name: 'POC / MVP / dApp Build',
    descriptor: 'fabricación completa, del diseño al despliegue',
    outcome:
      'Un producto funcional y desplegado, listo para una demostración a inversores o una prueba con usuarios reales.',
    triggers: [
      'Una idea validada (primeros registros o entrevistas con clientes) a convertir en producto.',
      'Un plazo de demostración a inversores.',
      'Necesidad de lanzar un producto antes que la competencia.',
    ],
    deliverables: [
      'Arquitectura y elección del stack técnico.',
      'Frontend (React o Next.js, TypeScript, mobile-first).',
      'Backend (Node.js o Python/FastAPI).',
      'Contratos inteligentes si el proyecto es una dApp (Solidity, Hardhat, Wagmi/Viem).',
      'Diseño de base de datos y API.',
      'Pruebas unitarias y de integración.',
      'CI/CD y despliegue con Docker.',
      'Documentación CLAUDE.md / AGENTS.md para la trazabilidad agéntica.',
      'Documentación y transferencia.',
    ],
    duration: 'POC: 4 a 6 semanas. MVP: 3 a 4 meses.',
    clientInputs: [
      'Brief de producto.',
      'Maquetas o sitios de referencia.',
      'Claves de acceso necesarias.',
      'Destino de despliegue.',
    ],
    eligibility: [
      'La idea está validada (primeros usuarios, entrevistas o equivalente).',
      'Un responsable de decisión está disponible durante la misión.',
    ],
    outOfScope: [
      'Mantenimiento a largo plazo (ver AI Agent Retainer).',
      'Marketing, SEO o publicación en tiendas de aplicaciones.',
    ],
    proofId: 'tracabilite-esa-parametry',
  },
  {
    id: 'retainer',
    path: 'continuity',
    name: 'AI Agent Retainer',
    descriptor: 'mantenimiento y mejora continua de agentes de IA en producción',
    outcome:
      'Su agente de IA se mantiene estable y actualizado, y gana nuevos flujos de trabajo cada mes, sin necesidad de contratar a tiempo completo.',
    triggers: [
      'El agente está en producción pero necesita correcciones periódicas.',
      'Aparecen nuevos casos de uso con el tiempo.',
      'Las dependencias y la seguridad deben seguirse en el tiempo.',
    ],
    deliverables: [
      'Correcciones y resolución de regresiones.',
      '1 a 3 nuevos flujos de trabajo acotados al mes.',
      'Revisión de seguridad y actualización de dependencias.',
      'Informe mensual de rendimiento y recomendaciones.',
      'Soporte asíncrono en menos de 24 horas en día laborable.',
    ],
    duration: 'mensual, 3 meses mínimo',
    clientInputs: [
      'Acceso continuo al entorno de producción del agente.',
      'Un punto de contacto disponible para validar las prioridades del mes.',
    ],
    eligibility: [
      'Ya hay un agente en producción, entregado mediante un Agent Deployment o una misión equivalente.',
    ],
    outOfScope: [
      'Nuevos módulos de producto de gran alcance, presupuestados aparte.',
      'Guardia 24/7 o asunción de la infraestructura del cliente.',
    ],
    proofId: 'cloud-europeen',
  },
] as const satisfies readonly Offer[];

export type OfferId = (typeof offers)[number]['id'];
