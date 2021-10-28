# Changelog

## 1.9.0 (2021-10-28)
- Fix: removed unnecessary code ([#193](https://github.com/Uninen/vite-ts-tailwind-starter/issues/193))
- Chore: bump deps.

## 1.8.0 (2021-10-05)
- Feat: added configuration and example for Cypress component testing. Thank You [@ItsNothingPersonal](https://github.com/ItsNothingPersonal) for the contribution. (#188)
- Tooling: replaced `.prettierrc` with `eslint-config-prettier` to consolidate tool configurations.
- Tooling: removed `space-before-function-paren`eslint configuration (which now changes default formatting to always include a space before function parenthesis) as Prettier won't respect it since version 2.0. [Read this blog post](https://joshuatz.com/posts/2020/prettier-function-parenthesis-spacing-opinionated-is-key/) if you want to keep the old behavior.
- Docs: documented the [GitLab mirror](https://gitlab.com/uninen/vite-ts-tailwind-starter).
- Docs: tweaked the project markup and layout.
- Chore: removed the (partially outdated) Cypress example tests. If you need examples, better to study for example the [official kitchen sink example repo](https://github.com/cypress-io/cypress-example-kitchensink) that has up to date examples.

## 1.7.2 (2021-09-26)

- Fix: fixed and documented an issue w/ `import.meta.env` types
- Chore: bump deps.

## 1.7.1 (2021-09-25)

- Fix: fixed IntelliSense for `import.meta.env` types
- Docs: documented `import.meta.env`
- Chore: bump deps.

## 1.7.0 (2021-09-22)
- Feat: added proper TypeScript support for Cypress. Thank You [@ItsNothingPersonal](https://github.com/ItsNothingPersonal) for the contribution. (#182)
- Chore: bump deps. (Includes new `@vitejs/plugin-vue` which adds support for TS in template expressions.)

## 1.6.0 (2021-09-17)
- Feat: upgraded TypeScript to 4.4
- Docs: documented code coverage situation under Vite, added more general docs to homepage.
- Fix: fixed eslint configuration issue.
- Chore: bump deps.

## 1.5.1 (2021-08-17)
- Chore: bump deps; upgraded Vite to 2.5 and Cypress to 8.3.

## 1.5.0 (2021-08-12)
- Feat: Upgraded to Vue 3.2 w/ new `script setup` sugar. This is now pre-configured in Vite settings. (Make sure to use Volar extension to take full advantage of it!)
- Chore: bump deps.

## 1.4.1 (2021-08-04)
- Chore: Renamed master branch from trunk to main to be more developer-friendly. 

## 1.4.0 (2021-08-04)
- Feat: Added `vue-router` (it's easier to remove things than to add them in) and a couple of demo pages.
- Feat: Added `vercel.json` that works with `vue-router`. You can now publish this template on Vercel and everything Just Works.
- Feat: Added `VITE_APP_BUILD_EPOCH` (generated build time as `new Date().getTime()`)
- Feat: added `yarn preview` command.
- Feat: added Tailwind Firefox-variant (documented on the Index page).
- Feat: Cypress version from 7.x to 8.x
- Docs: Added documentation about using Vuex actions, and added recommendation of Volar.
- Docs: added a screenshot of typed Vue templates under Volar.
- Refactor: Changed `_APP_VERSION` to `VITE_APP_VERSION`
- Fix: fixed Vuex devtools compatibility.
- Chore: bumped deps.

## 1.3.1 (2021-07-02)
- Chore: bumped deps.

## 1.3.0 (2021-06-14)
- Feat: upgraded Vue to 3.1.
- Chore: bumped deps.

## 1.2.0 (2021-05-30)
- Feat: upgraded Vue to 3.1 beta. (If you prefer to use a safer option, just change the requirement in `package.json`.)
- Chore: bumped deps.

## 1.1.2 (2021-04-08)
- Fix: fixed Cypress version in GitLab CI conf.

## 1.1.1 (2021-04-07)
- Chore: bumped deps.

## 1.1.0 (2021-03-16)
- Feat: added [Tailwind JIT compiler](https://github.com/tailwindlabs/tailwindcss-jit).
- Chore: upgraded Vite to 2.1.
- Chore: bumped deps.

## 1.0.2 (2021-03-10)
- Chore: bumped deps.

## 1.0.1 (2021-03-01)
- Chore: bumped deps.

## 1.0.0 (2021-02-22)

- Feat: added an example of `_APP_VERSION` using version from `package.json`
- Docs: tweaked README.
- Chore: upgraded Tailwind from PostCSS 7 compatibility build to latest PostCSS 8.
- Chore: upgraded Vite from beta to latest 2.0.
- Chore: changed dependabot interval to monthly.

## 0.9.0 (2021-02-08)

- Feat: added a fully typed example of Vuex 4 store (It's much easier to strip out if you don't need it than to build manually every time you do.)
- Feat: added `@tailwindcss/line-clamp` plugin.
- Feat: added `_APP_VERSION` constant that can be defined build time.
- Refactor: moved to the new [script setup syntax](https://github.com/vuejs/rfcs/pull/227). (At the time of this change Vetur doesn't understand this syntax yet so you might want to use Volar instead.)
- Chore: bumped deps.

## 0.8.0 (2021-01-28)

- Feat: added an alias for referring `<project_root>/src` with just `@`.
- Chore: bumped deps.

## 0.7.0 (2021-01-21)

- Feat: upgraded Cypress and GitLab Cypress image to 6.3.0.
- Feat: added [postcss-nesting](https://github.com/jonathantneal/postcss-nesting) plugin.
- Chore: bumped deps.

## 0.6.2 (2021-01-18)

- Chore: bumped deps.

## 0.6.1 (2021-01-08)

- Fix: moved non-browser packages to dev dependencies.
- Chore: bumped deps.

## 0.6.0 (2021-01-07)

- Feat: upgraded Vite to 2.0 Beta.
- Fix: fixed GitHub actions.

## 0.5.3 (2020-12-28)

- Chore: bumped deps.

## 0.5.2 (2020-12-21)

- Chore: bumped deps.

## 0.5.1 (2020-12-15)

- Chore: bumped deps.

## 0.5.0 (2020-12-07)

- Feat: added `vite.config.js`.
- Chore: bumped deps.
- Fix: repackaged TailwindCSS compatibility version as per new docs.

## 0.4.2 (2020-11-23)

- Chore: bumped deps.

## 0.4.1 (2020-11-19)

- Fix: fixed Tailwind package.

## 0.4.0 (2020-11-18)

- Upgraded to Tailwind 2.0
- Added `@tailwindcss/aspect-ratio` and `@tailwindcss/forms` plugins

## 0.3.0 (2020-11-17)

- Added pre-configured GitLab CI, moved project to GitLab
- Renamed master branch to trunk
- Bumped deps

## 0.2.0 (2020-10-24)

- Added commented out tailwind UI config

## 0.1.0 (2020-09-28)

- Added changelog
- Added Cypress.io tests

## 0.0.0 (2020-09-15)

- Initial version
