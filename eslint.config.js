// ESLint flat config.
//
// Each block is scoped by file type on purpose. Without the explicit `files`
// keys, the base JavaScript and TypeScript configs claim `.astro` files too and
// their parser chokes on the TypeScript inside component frontmatter, which
// reports every component as a parse error instead of linting it.

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  {
    // `___*` holds the archived previous site and is git-ignored. ESLint does
    // not read .gitignore, so the same exclusion is repeated here.
    ignores: [
      'dist/**',
      '.astro/**',
      '.venv/**',
      'node_modules/**',
      'test-results/**',
      'playwright-report/**',
      '___*/**',
    ],
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ...js.configs.recommended,
  },

  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.{ts,mts,cts}'],
  })),

  ...astro.configs.recommended,

  // The Astro parser needs to be told which parser handles the TypeScript in
  // component frontmatter. Without this it falls back to plain JavaScript and
  // reports every type annotation as a parse error.
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  {
    files: ['**/*.{ts,mts,cts,astro}'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    rules: {
      // Unused arguments are allowed when prefixed with an underscore, which
      // keeps signatures readable where a parameter exists only to satisfy a
      // callback shape.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
];
