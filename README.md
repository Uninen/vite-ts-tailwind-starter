# Vite Typescript + Tailwind Starter

Simple, opinionated, and **production-ready** project template for Vite.

See [changelog](./CHANGES.md) for latest changes.

## Features

- Vue 3
- Vuex 4 store (fully typed)
- TypeScript
- Tailwind CSS w/ JIT compiler + following plugins preinstalled
  - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/line-clamp`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
- PostCSS 8 w/ `postcss-nesting` plugin
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- Define `_APP_VERSION` from `package.json` version at build time
- Using new `script setup` syntax (see [Vue rfc #227](https://github.com/vuejs/rfcs/pull/227))
- Cypress.io e2e tests (configured similarly to `vue-cli`)
- GitHub workflows
  - Dependabot
  - Automated e2e tests
- GitLab CI
## Project setup and usage

Install dependencies:

```
yarn
```

Run development server:

```
yarn dev
```

Open Cypress test runner:

```
yarn test
```

Run Cypress tests in headless mode:

```
yarn test:ci
```

## Contributing

Contributions are welcome! Please follow the [code of conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) when interacting with others.

---

[Follow @uninen](https://twitter.com/uninen) on Twitter
