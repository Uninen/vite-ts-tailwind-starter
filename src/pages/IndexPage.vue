<script setup lang="ts">
const store = useStore()
</script>
<template>
  <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
    <HelloWorld msg="Hello World Component" />

    <h2>Template Project Features</h2>

    <p>
      This template is practical and batteries included but not overly complex or bloated. It includes explicit
      configuration over magic, making it easy to understand how everything works and modify things to your needs.
    </p>

    <ul>
      <li>
        Pinia store (fully typed Vuex store available in
        <a href="https://github.com/Uninen/vite-ts-tailwind-starter/tree/v1.13">template version 1.13</a>)
      </li>
      <li>
        Routing using vue-router. See <router-link to="/demo/">demo page</router-link>. (Also
        <a href="#" data-testid="pinia-anchor" @click="store.goToDemo">routable from the store</a>.)
      </li>
      <li>TypeScript with fully typed components configured in templates</li>
      <li>
        unplugin-vue-components Automatic package and component imports via <code>unplugin-auto-import</code> and
        <code>unplugin-vue-components</code>
      </li>
      <li>
        Tailwind CSS 3 with following plugins pre-installed:
        <ul>
          <li>@tailwindcss/aspect-ratio</li>
          <li>@tailwindcss/typography</li>
          <li>@tailwindcss/forms</li>
          <li>@egoist/tailwindcss-icons</li>
        </ul>
      </li>
      <li>
        <strong>PostCSS 8</strong> with <code>postcss-nesting</code> plugin and <code>cssnano</code> for minimizing
        production CSS
      </li>
      <li><strong>Eslint 9</strong> with flat config</li>
      <li>Prettier and EditorConfig</li>
      <li>Alias <code>@</code> to <code>project_root/src</code></li>
      <li>Predefined and fully typed global variables (VITE_APP_VERSION and VITE_APP_BUILD_EPOCH)</li>
      <li>
        Comprehensive testing setup:
        <ul>
          <li>Vitest for unit and component testing with code coverage</li>
          <li>Playwright for E2E testing</li>
        </ul>
      </li>
      <li>
        GitHub workflows for:
        <ul>
          <li>Renovatebot for dependency updates</li>
          <li>Automated unit + component tests</li>
          <li>Automated e2e tests</li>
          <li>Coverage reporting in PR comments</li>
        </ul>
      </li>
      <li>Vercel deployment configuration included</li>
    </ul>

    <h2>Project setup and usage</h2>

    <p>
      Using
      <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar">Vue extension for VSCode</a>
      is recommended to take full advantage of the new script setup sugar and full TypeScript support in Vue SFC
      templates. See
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
  </div>
</template>
