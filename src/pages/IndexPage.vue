<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute()

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: 'og:title',
      content: route.meta.title,
    },
    {
      name: 'twitter:title',
      content: route.meta.title,
    },
  ],
})

const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()
</script>

<template>
  <div class="relative py-8">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose">
        <h1>Vite + Vue 3 + TypeScript + Tailwind + Playwright Starter Template v{{ VERSION }}</h1>
        <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
          Opinionated, production ready template for Vite and Vue 3. MIT licensed,
          <a href="https://github.com/Uninen/vite-ts-tailwind-starter">available on GitHub</a>.
        </p>
      </header>
      <main>
        <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
          <HelloWorld msg="Hello World Component" />

          <h2>Template Project Features</h2>

          <p>
            The idea of this template is to bundle as many often used and useful features
            pre-configured as possible. If you don't need something, just remove it!
          </p>

          <ul>
            <li>Pinia store (fully typed Vuex store available in version 1.13)</li>
            <li>Routing using vue-router</li>
            <li>
              TailwindCSS w/ JIT-mode, purge, plugins, and production minimization pre-configured
            </li>
            <li>
              Vue-friendly Eslint and Prettier configuration - use as is or tweak to your liking
            </li>
            <li>Alias <code>@</code> to <code>project_root/src</code></li>
            <li>Predefined and typed global variables</li>
            <li>Playwright e2e and component tests preconfigured</li>
            <li>
              Github Workflows preconfigured to run e2e and component tests automatically on every
              push
            </li>
          </ul>

          <h2>Project setup and usage</h2>

          <p>
            Using
            <a href="https://github.com/johnsoncodehk/volar">Volar extension for VSCode</a>
            is recommended to take full advance of the new script setup sugar and full TypeScript
            support in Vue SFC templates. (This is totally optional but recommended as it results
            much better DX!) See
            <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
              >official IDE Support documentation</a
            >
            for more details.
          </p>

          <h4>Install dependencies</h4>

          <pre>pnpm i</pre>

          <h4>Run development server</h4>

          <pre>pnpm dev</pre>

          <h4>Run uni tests (Vitest)</h4>

          <pre>pnpm test</pre>

          <h4>Run component tests (Playwright)</h4>

          <pre>pnpm test-ct</pre>

          <h4>Run e2e tests (Playwright)</h4>

          <pre>pnpm test-e2e</pre>

          <h4>Build for production</h4>

          <pre>pnpm build</pre>

          <h4>Other</h4>

          <p>See <code>package.json</code> for all available commands.</p>

          <h2>Notes and further documentation</h2>

          <h3>Typed ENV Variables</h3>

          <p>
            Vite exposes a special <code>meta.env</code> object for ENV variables (see
            <a href="https://vitejs.dev/guide/env-and-mode.html">official docs</a>). This template
            extends that object and adds custom typed variables which you can easily use and modify
            to your needs.
          </p>

          <p>
            See <code>vite.config.js</code> and <code>src/env.d.ts</code> for the configuration and
            <code>src/pages/BaseTemplate.vue</code> for usage example.
          </p>

          <h3>Custom `firefox` variant for Tailwind</h3>

          <p>
            FireFox is important browser to the open Web. One of the very few things it still
            doesn't do is
            <a href="https://caniuse.com/css-backdrop-filter"
              ><em>backdrop-filter</em> CSS property</a
            >. The included <code>tailwind.config.js</code> has a custom plugin that allows you to
            use a <strong>'firefox' variant</strong> in your Tailwind markup to target FireFox. The
            setup uses Tailwind JIT mode and PurgeCSS so this doesn't add any weight to your CSS if
            you don't use it. But, it's there if you happen to need it!
          </p>

          <p>
            Here's an example markup for a div that has a different background opacity for FireFox:
          </p>

          <pre>
&lt;div class="bg-black bg-opacity-20 firefox:bg-opacity-80 backdrop-filter backdrop-blur-lg"&gt;
    Foo
&lt;/div&gt;</pre
          >

          <h3>Code Coverage</h3>

          <p>
            TL;DR: due to Vite and esbuild design decisions and ongoing work in this area, code
            coverage is not yet added to this template.
          </p>

          <p>
            I have a fully configured Vue 3 + TypeScript + Cypress + Coverage reporting + GitLab and
            GitHub CI `vue-cli` template project available at
            <a href="https://gitlab.com/uninen/vue-cli-template"
              >https://gitlab.com/uninen/vue-cli-template</a
            >. That's a real world example of proper coverage configuration that works automatically
            in CI. But. This setup doesn't work with Vite.
          </p>

          <p>
            Typical Vite pipelines don't use babel at all which is needed above for automatically
            instrument the transpilated code. Vite is powered by eslint which has decided
            <a href="https://github.com/evanw/esbuild/issues/184">
              code coverage being out of scope </a
            >. Vitest can be configured to produce code coverage as well but that only counts unit
            tests.
          </p>

          <h2>Elsewhere</h2>

          <ul>
            <li>Follow <a href="https://twitter.com/uninen">@Uninen on Twitter</a></li>
            <li>
              Lots of continuously updating learnings from Vite / Vue / TypeScript and other Web
              development topics on my
              <a href="https://til.unessa.net/">Today I Learned</a> site
            </li>
          </ul>

          <h2>Contributing</h2>

          <p>
            Contributions are welcome! Please follow
            <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/">
              the code of conduct
            </a>
            when interacting with others.
          </p>
        </div>
      </main>
      <footer class="py-6 text-sm text-center text-gray-700">
        <p>
          Vite-ts-tailwind-starter by
          <a class="underline" href="https://twitter.com/uninen">@Uninen</a> &copy; 2020-{{
            thisYear
          }}.
          <template v-if="BUILD_DATE"> Site built {{ BUILD_DATE.toLocaleDateString() }}. </template>
          <template v-else> Development mode. </template>
        </p>
      </footer>
    </div>
  </div>
</template>
