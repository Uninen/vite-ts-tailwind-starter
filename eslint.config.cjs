const pluginVitest = require('@vitest/eslint-plugin')
const skipFormatting = require('@vue/eslint-config-prettier/skip-formatting')
const security = require('eslint-plugin-security')
const pluginVue = require('eslint-plugin-vue')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/test-results/**', '*.config.*'],
  },

  {
    name: 'app/rules',
    rules: {
      'no-var': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'comma-dangle': ['error', 'only-multiline'],
      'id-length': [2, { exceptions: ['i', 'j', '_'] }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },

  ...pluginVue.configs['flat/recommended'],

  {
    ...pluginVitest.configs.recommended,
    files: ['tests/unit/**/*'],
  },

  skipFormatting,

  security.configs.recommended,
]
