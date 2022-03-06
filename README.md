# Vite + Vue 3 + Typescript + Tailwind Starter

Simple, opinionated, **fully typed**, and **production-ready** project template for Vite.

![Editor screenshot](src/assets/editor_screenshot.png)

This template is **practical** and **batteries included** but not overly complex or bloated. Also explicit configuration over magic; it should be easy to understand how everything works, strip out anything you don't need, and fast to modify things to your needs.

Includes plenty of **examples and documentation** of how to do things but **minimal cruft** to delete to get you going.

Please [check out the homepage](https://vite-ts-tailwind-starter.vercel.app/) for full docs. A [detailed changelog](./CHANGES.md) is available. This repository is also [mirrored on GitLab](https://gitlab.com/uninen/vite-ts-tailwind-starter).

## Features

- Vue 3.2
- Pinia store (fully typed Vuex store is available up to version 1.13)
- Routing using [vue-router 4](https://router.vuejs.org/)
- TypeScript 4.6
- Tailwind CSS 3 w/ following plugins preinstalled:
  - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/line-clamp`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
  - `firefox`-variant
- PostCSS 8 w/ `postcss-nesting` plugin
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
- Using newest `script setup` syntax w/ Ref sugar (see the official [Script Setup documentation](https://vuejs.org/api/sfc-script-setup.html) and [Ref Sugar RFC](https://github.com/vuejs/rfcs/discussions/369) discussion)
- Vitest unit tests
- Cypress.io e2e tests (configured similarly to `vue-cli`)
- Cypress.io component tests
- GitHub workflows
  - Dependabot
  - Automated unit tests
  - Automated component tests
  - Automated e2e tests
- GitLab CI
  - Automated unit tests
  - Automated component tests 
  - Automated e2e tests
## Elsewhere

- Read my continuously updating learnings from Vite / Vue / TypeScript and other Web development topics from my [Today I Learned site](https://til.unessa.net/)
- [Follow @uninen](https://twitter.com/uninen) on Twitter

## Contributing

Contributions are welcome! Please follow the [code of conduct](./CODE_OF_CONDUCT.md) when interacting with others.