/**
 * Canonical i18n configuration.
 *
 * French is the authoring language. English and Spanish are reviewed
 * adaptations, not machine translations.
 *
 * Any locale added here must also exist in `astro.config.mjs` and in every
 * dictionary under `src/content/`, otherwise `pnpm check` fails.
 */

export const LOCALES = ['fr', 'en', 'es'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

/** Locale served to crawlers through `hreflang="x-default"`. */
export const X_DEFAULT_LOCALE: Locale = 'fr';

/** Value of the `lang` attribute and of the JSON-LD `inLanguage` field. */
export const HTML_LANG: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en',
  es: 'es',
};

/** Language switcher label, written in its own language. */
export const LOCALE_LABEL: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
};

export const SITE_URL = 'https://blockchain-cie.com';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
