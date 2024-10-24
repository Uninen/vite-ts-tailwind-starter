import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginPlaywright from 'eslint-plugin-playwright'
import security from 'eslint-plugin-security'
import pluginVue from 'eslint-plugin-vue'
// import autoImportGlobals from './.eslintrc-auto-import.json' with { type: 'json' }

export default [
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
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    },
    // languageOptions: autoImportGlobals,
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['tests/unit/**/*'],
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['tests/e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },

  skipFormatting,

  security.configs.recommended,
]
