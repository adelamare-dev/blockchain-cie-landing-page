import type { Proof } from '../types';

// Client proofs, anonymized by default. Adapted from the French source.
//
// No client is named while its authorization is still pending. Each proof
// carries its own provenance and authorization status, kept for audit and
// never rendered to the page. The provenance object is kept byte-identical
// to the French source (sourceDoc, reviewDate, authorizationStatus).
//
// Every figure quoted here is traceable to a reviewed internal record and
// ships with the context that makes it readable. Figures without that context
// do not belong on this page.

const reviewDate = '2026-09-18';

export const proofs = [
  {
    id: 'erp-industriel',
    label: 'ERP industrial, vuelta a producción',
    context: 'Pyme industrial del textil técnico, ERP interno construido con herramientas de IA.',
    problem:
      'El ERP funcionaba, pero nadie se atrevía a tocarlo. 2 vulnerabilidades de seguridad conocidas seguían abiertas y la aplicación dependía de librerías cargadas desde CDN externos.',
    intervention:
      'Auditoría y recuperación con alcance fijado. Corrección de las 2 CVE e incorporación local de las librerías cargadas desde CDN. Se añadió una suite de pruebas y documentación de arquitectura para transferir la base al equipo.',
    results: [
      {
        metric: '2 CVE corregidas (CVE-2023-30533, CVE-2024-29041)',
        context: 'Contaminación de prototipos en una librería de generación de archivos y path traversal en el servidor web, ambas referenciadas públicamente.',
      },
      {
        metric: '46 pruebas (Mocha + supertest)',
        context: 'Suite de pruebas automatizadas añadida en la release de estabilización.',
      },
      {
        metric: '0 dependencias de CDN externas restantes',
        context: 'Las librerías afectadas quedaron vendorizadas localmente y la aplicación sigue funcionando sin conexión.',
      },
    ],
    limits:
      'Esta prueba documenta una auditoría y una estabilización de código existente. No demuestra una recuperación de arquitectura completa ni un despliegue multientorno.',
    stack: ['Node.js', 'Express', 'Mocha', 'supertest'],
    pathId: 'reliability',
    clientNamed: false,
    provenance: {
      sourceDoc: 'business/career/cv.md',
      reviewDate,
      authorizationStatus: 'pending-verification',
    },
  },
  {
    id: 'cloud-europeen',
    label: 'Proveedor cloud europeo, infraestructura de agentes de IA',
    context: 'Proveedor cloud europeo con una oferta de infraestructura soberana.',
    problem:
      'Varias infraestructuras de agentes de IA funcionaban en paralelo sin un modelo de seguridad común, sin supervisión homogénea y con una exposición de red que había que reducir.',
    intervention:
      'Diseño y mantenimiento de la infraestructura de agentes en producción. Aislamiento sistemático de los contenedores (usuario no root, sistema de archivos de solo lectura, capacidades Linux reducidas). Enrutamiento multiproveedor de modelos con conmutación automática. Canales supervisados (WhatsApp, Telegram, Matrix, correo electrónico).',
    results: [
      {
        metric: '175 commits, 77 % del repositorio en unos 5 meses',
        context: 'Volumen de autoría sobre el repositorio principal de la infraestructura de agentes en producción.',
      },
      {
        metric: '~103 pruebas pytest',
        context: 'Cobertura de pruebas sobre los contratos de configuración, los flujos HTTP de extremo a extremo y una salvaguarda dedicada a separar el diálogo de la lógica de negocio.',
      },
      {
        metric: '22 herramientas expuestas al agente',
        context: 'Número de herramientas en tiempo de ejecución (canales de mensajería, sistemas de archivos, MCP) disponibles para el agente en el alcance desplegado.',
      },
    ],
    limits:
      'Esta prueba documenta una infraestructura de ejecución y seguridad de agentes. No documenta los resultados de negocio obtenidos por los clientes finales de esos agentes.',
    stack: ['Docker', 'Python', 'FastAPI', 'Node.js', 'MCP', 'Matrix E2EE'],
    pathId: 'build',
    clientNamed: false,
    provenance: {
      sourceDoc: 'business/career/cv.md',
      reviewDate,
      authorizationStatus: 'pending-verification',
    },
  },
  {
    id: 'tracabilite-esa-parametry',
    label: 'Trazabilidad del algodón, estudio de viabilidad ESA vía Parametry',
    context:
      'Estudio de viabilidad financiado por la Agencia Espacial Europea (ESA), realizado a través de Parametry: trazabilidad del algodón orgánico, de la parcela a la fibra.',
    problem:
      'El proyecto requería un sistema completo que conectara observación satelital, certificación y reporte de campo, sin marco técnico previo.',
    intervention:
      'Diseño y construcción de extremo a extremo. Panel cartográfico con captura de parcelas. Suite de contratos inteligentes para la certificación (token de identidad, certificados de transacción, oráculo de doble verificación). Backend con doble base de datos para las capas geoespaciales. Pipeline de Python para el procesamiento de datos satelitales. Agente de WhatsApp trilingüe para el registro de productores.',
    results: [
      {
        metric: '~270 commits en 9 repositorios de GitLab',
        context: 'Volumen de contribución en el conjunto de repositorios del proyecto, entre octubre de 2025 y agosto de 2026.',
      },
      {
        metric: '105 pruebas en la suite de contratos inteligentes',
        context: 'Cobertura de pruebas Hardhat sobre el token de identidad, los certificados de transacción y los oráculos de doble verificación.',
      },
      {
        metric: '~196 pruebas en el pipeline satelital',
        context: 'Cobertura de pruebas en Python sobre la cadena de procesamiento de datos satelitales y el cálculo de los puntajes de conformidad.',
      },
    ],
    limits:
      'Esta prueba documenta un estudio de viabilidad y una prueba de concepto de extremo a extremo. No documenta un despliegue en producción a gran escala ni una certificación regulatoria obtenida.',
    stack: ['React', 'Vite', 'Solidity', 'Hardhat', 'FastAPI', 'PostGIS', 'Python'],
    pathId: 'build',
    clientNamed: false,
    provenance: {
      sourceDoc: 'business/career/cv.md',
      reviewDate,
      authorizationStatus: 'pending-verification',
    },
  },
  {
    id: 'saas-ecriture-ia',
    label: 'SaaS de escritura asistida por IA, estabilización',
    context: 'SaaS de escritura de novelas asistida por IA, aplicación React/TypeScript en producción.',
    problem:
      'La aplicación se había construido rápidamente con herramientas de IA. Las llamadas de IA más pesadas fallaban de forma silenciosa; varias vulnerabilidades de seguridad de la configuración seguían abiertas.',
    intervention:
      'Beta test y estabilización durante varias semanas: conmutación entre modelos de IA en caso de fallo, gestión de tiempos de espera por capítulo, refuerzo de la política de seguridad del contenido y de las reglas de acceso a los datos.',
    results: [
      {
        metric: '86 commits, 20 ciclos de prueba',
        context: 'Volumen de intervención en 4 semanas de beta test y estabilización.',
      },
      {
        metric: '575 archivos estabilizados',
        context: 'Alcance de la aplicación React/TypeScript cubierto por la intervención.',
      },
      {
        metric: '14 errores corregidos',
        context: 'Entre ellos una condición de carrera en la autenticación y casos de generación incompleta.',
      },
    ],
    limits:
      'Prueba secundaria de cualificación y estabilización. No documenta el diseño inicial del producto ni sus resultados comerciales.',
    stack: ['React', 'TypeScript', 'Firebase', 'Netlify Functions'],
    pathId: 'reliability',
    clientNamed: false,
    provenance: {
      sourceDoc: 'business/career/cv.md',
      reviewDate,
      authorizationStatus: 'pending-verification',
    },
  },
] as const satisfies readonly Proof[];

export type ProofId = (typeof proofs)[number]['id'];
