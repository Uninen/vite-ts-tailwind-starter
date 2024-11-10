# Vite + Vue 3 + Typescript + Tailwind Starter

Oopinionated, **fully typed**, and **production-ready** project template for Vite.

The goal of this template is to be **practical** and **batteries included** starting point for both quick experiments and projects designed for production quality.

Includes plenty of **examples and documentation** of how to do things but **minimal cruft** to delete to get you going.

Please [check out the homepage](https://vite-ts-tailwind-starter.vercel.app/) for full docs. A [detailed changelog](./CHANGES.md) is available.

## Features

- **Vue 3** with [Pinia](https://pinia.vuejs.org/) store and [vue-router](https://router.vuejs.org/) routing
- **Automatic imports** via [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- **Tailwind CSS** with the official `aspect-ratio`, `typography` and `forms` plugins, plus **automatic icons** using [@egoist/tailwindcss-icons](https://github.com/egoist/tailwindcss-icons)
- **Comprehensive tooling** configs for TypeScript, PostCSS 8 (w/ `postcss-nesting` plugin and `cssnano`), Eslint 9, Prettier, EditorConfig and recommended settings and configs for VSCode
- **Full testing setup** using Vitest (components) and Playwright (e2e) together with Github Actions for CI/CD including [code coverage reporting](https://github.com/Uninen/vite-ts-tailwind-starter/pull/279#issuecomment-2435516534) in PRs.

### Code Features / Opinions

- Project root aliased as `@` (`import { myUtilsThing } from @/utils/mylib`)
- Router instance available in the store: `this.router.push('/')`
- Any of 100000+ Iconify icons available as Tailwind classes: `<span class="i-mdi-home"></span>`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time and stored to the store as `store.appMeta.version`
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time and stored to the store as `store.appMeta.buildTime`

### Very Fast (TM) To Reset

1. Delete `src/components/HelloWorld.vue` and `src/components/__tests__/HelloWorld.spec.ts`
2. Delete the content from `@/pages/IndexPage.vue`
3. Delete demo styles from `@/assets/base.postcss`
4. Profit!11

## Elsewhere

- [Follow @uninen](https://twitter.com/uninen) on Twitter
- Read my continuously updating learnings from Vite / Vue / TypeScript and other Web development topics from my [Today I Learned site](https://til.unessa.net/)

## Contributing

Contributions are welcome! Please follow the [code of conduct](./CODE_OF_CONDUCT.md) when interacting with others.
