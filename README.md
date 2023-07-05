# Vite + Vue 3 + Typescript + Tailwind Starter

Simple, opinionated, **fully typed**, and **production-ready** project template for Vite.

This template is **practical** and **batteries included** but not overly complex or bloated. Also explicit configuration over magic; it should be easy to understand how everything works, strip out anything you don't need, and fast to modify things to your needs.

Includes plenty of **examples and documentation** of how to do things but **minimal cruft** to delete to get you going.

Please [check out the homepage](https://vite-ts-tailwind-starter.vercel.app/) for full docs. A [detailed changelog](./CHANGES.md) is available. This repository is also [mirrored on GitLab](https://gitlab.com/uninen/vite-ts-tailwind-starter).

## Features

- Vue 3
- Pinia store (fully typed Vuex store is available up to template version 1.13)
- Routing using [vue-router 4](https://router.vuejs.org/)
- TypeScript 5
  - Fully typed components configured in templates as well
- Automatic package and component imports w/ [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- Tailwind CSS 3 w/ following plugins and configuration preinstalled:
  - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
  - [@egoist/tailwindcss-icons](https://github.com/egoist/tailwindcss-icons)
- PostCSS 8 w/ `postcss-nesting` plugin and `cssnano` for minimizing production CSS
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
- Using newest `script setup` syntax (see the official [Script Setup documentation](https://vuejs.org/api/sfc-script-setup.html))
- Vitest unit + component tests
- GitHub workflows
  - Renovatebot for keeping up with dependencies
  - Automated unit + component tests
  - Automated e2e tests
  - Coverage reporting in PR comments ([example](https://github.com/Uninen/vite-ts-tailwind-starter/pull/225#issuecomment-1507477206))
- GitLab CI config available up to versions 2.x

## Elsewhere

- [Follow @uninen](https://twitter.com/uninen) on Twitter
- Read my continuously updating learnings from Vite / Vue / TypeScript and other Web development topics from my [Today I Learned site](https://til.unessa.net/)

## Contributing

Contributions are welcome! Please follow the [code of conduct](./CODE_OF_CONDUCT.md) when interacting with others.
