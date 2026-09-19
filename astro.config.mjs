// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://blockchain-cie.com',

  // Fully static output. The site has no application API and no server runtime.
  output: 'static',

  // `directory` emits `/fr/fiabiliser-un-systeme/index.html`, which keeps the
  // served URLs identical to the paths in `src/i18n/routes.ts` and avoids a
  // trailing-slash redirect on the web server.
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',

  i18n: {
    locales: ['fr', 'en', 'es'],
    defaultLocale: 'fr',
    routing: {
      // French is prefixed like every other locale, so no page is reachable
      // through two different URLs.
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  // The bare root redirects to French. Locale is never picked from the client
  // IP address or from Accept-Language.
  redirects: {
    '/': '/fr/',
  },

  // No third-party scripts and no remote fonts, so there is nothing to prefetch.
  prefetch: false,

  devToolbar: {
    enabled: false,
  },

  vite: {
    build: {
      // The stylesheet is small and blocks the largest contentful paint.
      // One bundled file beats several requests here.
      cssCodeSplit: false,
    },
  },
});
