# Blockchain & Cie

Static marketing site. Astro 7, TypeScript strict, native CSS, no server runtime
and no application API. Three locales at full parity: `fr`, `en`, `es`.

## Commands

`pnpm` is required. Never use `npm` in this repo.

```
pnpm dev        # dev server
pnpm check      # astro check
pnpm lint       # eslint
pnpm test       # vitest unit tests
pnpm test:watch  # vitest watch mode
pnpm test:e2e   # playwright
pnpm build      # static build to dist/
pnpm preview    # serve dist/
pnpm verify     # check + lint + test + build
```

Start the dev server in background mode: `astro dev --background`, then
`astro dev stop|status|logs`.

## Architecture

```
src/
  i18n/config.ts      locales, HTML lang, canonical origin
  i18n/routes.ts      route table: stable ids -> localized slugs
  content/types.ts    content contracts shared by all locales
  content/{fr,en,es}/ one data file per section, per locale
  content/index.ts    getContent(locale), getOffer, getProof
  lib/schema.ts       JSON-LD graph builders
  lib/links.ts        outbound booking and contact links
  layouts/            document shell
  components/         shared, home/, path/
  pages/              [locale]/ routes plus sitemap, robots, llms endpoints
  styles/             tokens.css then global.css
tests/                unit/ vitest gates, e2e/ playwright journeys
astro.config.mjs      i18n, / -> /fr/ redirect, static build output
```

### Routing and i18n

`src/i18n/routes.ts` is the single source of truth for URLs. Every page has a
stable `RouteId` mapped to one slug per locale, so renaming a public slug never
breaks an internal link, a canonical, an hreflang pair or the sitemap.

Slugs are not literal translations: they follow local search vocabulary.
Always build links with `getPath()` or `getUrl()`, never by string concatenation.

The French locale is prefixed like the others. `/` redirects to `/fr/`.

### Content

All copy lives in `src/content/<locale>/`, typed against `src/content/types.ts`.
The three locales must stay structurally identical: same offer ids in the same
order, same proof ids, same array lengths. `pnpm test` enforces this.

French is the authoring language. English and Spanish are reviewed adaptations.

### Styling

Cascade layers are declared once in `global.css`: `reset, tokens, base,
components, utilities`. Use the design tokens, never a hardcoded color or size.
No Tailwind, no CSS-in-JS, no `transition: all`.

Typography uses system font stacks only. No font file is shipped and no font
request is made, which is deliberate: it removes both the flash of unstyled
text and any font-driven layout shift.

`.surface-night` redefines the semantic color roles for dark sections, so nested
components need no conditional styling.

## Editorial constraints

These are enforced by `tests/unit/editorial-rules.test.ts`: violations fail
`pnpm test`, and so `pnpm verify`. A bare `astro build` does not run tests:

- No price, range or day rate. Anywhere. Including metadata and JSON-LD.
- No em dash or en dash. Use commas, periods, colons or parentheses.
- No comparative claim without a baseline, no absolute uniqueness claim.
- Never "autonomous agent" alone: write bounded autonomy, or with human oversight.
- Every published metric carries its context.
- No client is named while its authorization is pending. Proofs stay anonymized
  and carry a `provenance` record that is never rendered.

## Publication gate

`TODO_VERIFY()` is defined in `src/content/types.ts` and used for legal
values not yet checked against an official source. Company values were
verified against Pappers/RNE on 2026-09-19; no markers remain in
`src/content/*/legal.ts`.

`tests/unit/legal.test.ts` runs `legal content has no unverified markers` as
an active gate: it fails `pnpm test`, and so `pnpm verify`, on any marker.

## Accessibility

WCAG 2.2 AA. Interactive targets are at least 24px. The site must remain fully
readable and navigable with JavaScript disabled: the only script is a
progressive enhancement for the mobile menu, which works without it.
