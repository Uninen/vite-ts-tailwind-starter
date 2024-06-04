<script setup lang="ts">
const store = useStore()
</script>
<template>
  <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
    <HelloWorld msg="Hello World Component" />

    <h2>Template Project Features</h2>

    <p>
      The idea of this template is to bundle as many often used and useful features pre-configured as possible. If you
      don't need something, just remove it!
    </p>

    <ul>
      <li>
        Pinia store (fully typed Vuex store available in
        <a href="https://github.com/Uninen/vite-ts-tailwind-starter/tree/v1.13"> template version 1.13 </a>
        )
      </li>
      <li>
        Routing using vue-router. See <router-link to="/demo/"> demo page </router-link>. (Also
        <a href="#" data-testid="pinia-anchor" @click="store.goToDemo"> routable fom the store </a>
        .)
      </li>
      <li>TailwindCSS w/ JIT-mode, purge, plugins, and production minimization pre-configured</li>
      <li>Vue-friendly Eslint and Prettier configuration - use as is or tweak to your liking</li>
      <li>Alias <code>@</code> to <code>project_root/src</code></li>
      <li>Predefined and typed global variables</li>
      <li>Playwright e2e and component testswith coverage preconfigured</li>
      <li>Github Workflows preconfigured to run e2e and component tests automatically on every push</li>
    </ul>

    <h2>Project setup and usage</h2>

    <p>
      Using
      <a href="https://github.com/johnsoncodehk/volar">Volar extension for VSCode</a>
      is recommended to take full advance of the new script setup sugar and full TypeScript support in Vue SFC
      templates. (This is totally optional but recommended as it results much better DX!) See
      <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support">official IDE Support documentation</a>
      for more details.
    </p>

    <h4>Install dependencies</h4>

    <pre>pnpm i</pre>

    <h4>Run development server</h4>

    <pre>pnpm dev</pre>

    <h4>Run unit + component tests (Vitest)</h4>

    <pre>pnpm test</pre>

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
      <a href="https://vitejs.dev/guide/env-and-mode.html">official docs</a>). This template extends that object and
      adds custom typed variables which you can easily use and modify to your needs.
    </p>

    <p>
      See <code>vite.config.js</code> and <code>src/env.d.ts</code> for the configuration and
      <code>src/pages/BaseTemplate.vue</code> for usage example.
    </p>

    <h3>Code Coverage</h3>

    <p>
      Code coverage is provided from unit + component tests by
      <a href="https://vitest.dev/guide/coverage.html">Vitest and V8</a>.
    </p>

    <p>
      E2E coverage is a bit trickier to do because of the way Vite works. Typical Vite pipelines don't use babel at all
      which is needed above for automatically instrument the transpilated code. Vite is powered by eslint which has
      decided <a href="https://github.com/evanw/esbuild/issues/184"> code coverage being out of scope </a>.
    </p>

    <h2>Elsewhere</h2>

    <ul>
      <li>Follow <a href="https://twitter.com/uninen">@Uninen on Twitter</a></li>
      <li>
        Lots of continuously updating learnings from Vite / Vue / TypeScript and other Web development topics on my
        <a href="https://til.unessa.net/">Today I Learned</a> site
      </li>
    </ul>

    <h2>Contributing</h2>

    <p>
      Contributions are welcome! Please follow
      <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/"> the code of conduct </a>
      when interacting with others.
    </p>
  </div>
</template>
