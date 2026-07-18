import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import boundaries from 'eslint-plugin-boundaries';
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'vite.config.ts',
      'eslint.config.js',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react,
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      boundaries,
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        typescript: {
          // всегда указывайте путь к tsconfig.json, если он не в корне
          project: './tsconfig.app.json',
        },
      },
      'boundaries/ignore': ['src/app/**/*.tsx', 'src/app/**/*.ts'],
      'boundaries/elements': [
        { type: 'shared', pattern: 'src/shared/*' },
        { type: 'entities', pattern: 'src/entities/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'widgets', pattern: 'src/widgets/*' },
        { type: 'pages', pattern: 'src/pages/*' },
        { type: 'app', pattern: 'src/app/*' },
      ],
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      'boundaries/dependencies': [
        'error', // или 2
        {
          default: 'disallow',
          rules: [
            {
              from: { type: 'features' },
              allow: [{ to: { type: 'shared' } }, { to: { type: 'entities' } }],
            },
            {
              from: { type: 'entities' },
              allow: [{ to: { type: 'shared' } }],
            },
            {
              from: { type: 'widgets' },
              allow: [
                { to: { type: 'shared' } },
                { to: { type: 'features' } },
                { to: { type: 'entities' } },
              ],
            },
            {
              from: { type: 'pages' },
              allow: [
                { to: { type: 'widgets' } },
                { to: { type: 'features' } },
                { to: { type: 'entities' } },
                { to: { type: 'shared' } },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/shared/store/hooks.ts', 'src/shared/api/baseApi.ts'],
    rules: {
      'boundaries/dependencies': 'off',
    },
  },
];

