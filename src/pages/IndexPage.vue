<script setup lang="ts">
// See vite.config.ts for details about automatic imports
const store = useStore()
</script>
<template>
  <header>
    <h1>Vite + Vue 3 + TypeScript + Tailwind + Playwright Starter Template v{{ store.appMeta.version }}</h1>
    <p>
      Opinionated, production ready template for Vite and Vue 3. MIT licensed,
      <a href="https://github.com/Uninen/vite-ts-tailwind-starter">available on GitHub</a>.
    </p>
  </header>

  <main>
    <HelloWorld msg="Hello World Component" />

    <h2>Project setup and usage</h2>

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
      See <code>vite.config.ts</code> and <code>src/env.d.ts</code> for the configuration and
      <code>src/App.vue</code> for usage example.
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
        Read continuously updating learnings from Vite / Vue / TypeScript and other Web development topics on my
        <a href="https://til.unessa.net/">Today I Learned</a> site
      </li>
    </ul>

    <h2>Contributing</h2>

    <p>
      Contributions are welcome! Please follow the
      <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/">code of conduct</a>
      when interacting with others.
    </p>
  </main>
  <footer>
    <p>
      vite-ts-tailwind-starter v{{ store.appMeta.version }} by <a href="https://twitter.com/uninen">@Uninen</a> &copy;
      2020-{{ new Date().getFullYear() }}.
      <template v-if="store.appMeta.builtAt"> Site built {{ store.appMeta.builtAt.toLocaleDateString() }}. </template>
      <template v-else> Development mode. </template>
    </p>
  </footer>
</template>
