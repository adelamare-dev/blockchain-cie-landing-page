# Blockchain & Cie

Marketing site for Blockchain & Cie, a software and AI engineering studio.

Static Astro build, three locales (French, English, Spanish) at full parity,
no server runtime.

## Requirements

- Node 22.12 or later
- pnpm 12 (`npm` is not used in this repo)

## Getting started

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`. The root redirects to `/fr/`.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server |
| `pnpm check` | Astro and TypeScript diagnostics |
| `pnpm lint` | ESLint over TypeScript and Astro files |
| `pnpm test` | Vitest unit tests |
| `pnpm test:watch` | Vitest in watch mode |
| `pnpm test:e2e` | Playwright end-to-end tests |
| `pnpm build` | Static build into `dist/` |
| `pnpm preview` | Serve the built output |
| `pnpm verify` | check, lint, test and build in sequence |

Run `pnpm verify` before every deploy. A failure there is a blocker.

## Project layout

```
src/
  i18n/          route table and locale configuration
  content/       all copy, one folder per locale
  lib/           JSON-LD builders and outbound links
  layouts/       document shell
  components/    shared, home/, path/
  pages/         routes, sitemap, robots, llms.txt
  styles/        design tokens and global foundations
tests/
  unit/          routes, content parity, metadata, editorial rules, legal
  e2e/           navigation, accessibility, SEO
astro.config.mjs   locales, / -> /fr/ redirect, static build
eslint.config.js   flat ESLint config (JS, TS, Astro)
```

## URLs

`src/i18n/routes.ts` maps a stable route id to one slug per locale and drives
canonicals, hreflang, breadcrumbs and the sitemap.

| Route | French | English | Spanish |
| --- | --- | --- | --- |
| home | `/fr/` | `/en/` | `/es/` |
| reliability path | `/fr/fiabiliser-un-systeme/` | `/en/ai-code-audit/` | `/es/auditoria-de-codigo-ia/` |
| build path | `/fr/construire-un-systeme/` | `/en/build-software-and-ai-agents/` | `/es/desarrollo-de-software-y-agentes-ia/` |
| legal notice | `/fr/mentions-legales/` | `/en/legal-notice/` | `/es/aviso-legal/` |
| privacy | `/fr/politique-de-confidentialite/` | `/en/privacy-policy/` | `/es/politica-de-privacidad/` |

Slugs follow local search vocabulary rather than literal translation. Build
links with the `getPath()` and `getUrl()` helpers so a slug change propagates.

## Editing content

Copy lives in `src/content/<locale>/`, typed against `src/content/types.ts`.
French is the authoring language; English and Spanish are reviewed adaptations.

The three locales must stay structurally identical. `pnpm test` fails on a
mismatch, and also enforces the editorial rules: no price anywhere, no em dash,
no unsourced comparative or uniqueness claim, every metric carries its context.

## Before going live

Legal values were verified against official records (Pappers/RNE, 2026-09-19)
and the test `legal content has no unverified markers` in
`tests/unit/legal.test.ts` is now an active gate: any `TODO_VERIFY()` marker
reintroduced in legal content fails the build.

Before deploying, re-check the legal page against the current Kbis and the
hosting contract, per spec 17.2 of the external project spec.

## Deployment

The build is fully static. `pnpm build` produces `dist/`, which is uploaded to
the target server. `dist/` is not committed.

## License

See `LICENSE`.
