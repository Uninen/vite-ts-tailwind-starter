<template>
  <header class="container px-4 mx-auto mt-6 prose-sm md:px-6 md:prose">
    <h1>Vite + Vue 3 + TypeScript + Tailwind + Cypress Starter Template v{{ VERSION }}</h1>
    <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
      Opinionated, production ready template for Vite and Vue 3
    </p>
    <div
      class="github-ribbon"
      style="
        position: absolute;
        right: 0px;
        top: 0px;
        width: 150px;
        height: 150px;
        overflow: hidden;
        z-index: 99999;
      "
    >
      <a
        style="
          display: inline-block;
          width: 200px;
          overflow: hidden;
          padding: 6px 0px;
          text-align: center;
          transform: rotate(45deg);
          text-decoration: none;
          color: rgb(255, 255, 255);
          position: inherit;
          top: 45px;
          right: -40px;
          border-width: 1px 0px;
          border-style: dotted;
          border-color: rgba(255, 255, 255, 0.7);
          font: 700 13px 'Helvetica Neue', Helvetica, Arial, sans-serif;
          box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 3px 0px;
          background-color: rgb(170, 0, 0);
        "
        href="https://github.com/Uninen/vite-ts-tailwind-starter"
        >Fork me on GitHub</a
      >
    </div>
  </header>

  <main class="container mx-auto">
    <div class="p-4 mx-auto prose bg-white md:px-6 prose-indigo sm:rounded-md">
      <HelloWorld msg="Hello World Component" />

      <h2>Template Project Features</h2>

      <img src="@/assets/editor_screenshot.png" alt="" />

      <p>
        The idea of this template is to bundle as many often used and useful features pre-configured
        as possible. If you don't need something, just remove it!
      </p>

      <ul>
        <li>Pinia store (fully typed Vuex store available in version 1.13)</li>
        <li>Routing using vue-router</li>
        <li>TailwindCSS w/ JIT-mode, purge, plugins, and production minimization pre-configured</li>
        <li>Vue-friendly Eslint and Prettier configuration - use as is or tweak to your liking</li>
        <li>Alias <code>@</code> to <code>project_root/src</code></li>
        <li>Predefined and typed global variables</li>
        <li>Cypress.io e2e and component tests preconfigured (similarly to vue-cli)</li>
        <li>
          Github Workflows and Gitlab CI preconfigured to run e2e and component tests automatically
          on every push
        </li>
      </ul>

      <h2>Project setup and usage</h2>

      <p>
        Using
        <a href="https://github.com/johnsoncodehk/volar">Volar extension for VSCode</a>
        is recommended to take full advance of the new script setup sugar and full TypeScript
        support in Vue SFC templates. (This is totally optional but recommended as it results much
        better DX!) See
        <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          >official IDE Support documentation</a
        >
        for more details.
      </p>

      <h4>Install dependencies</h4>

      <pre>yarn</pre>

      <h4>Run development server</h4>

      <pre>yarn dev</pre>

      <h4>Open Cypress test runner</h4>

      <p class="text-gray-500">
        Note: the development server needs to be running when using the Cypress test runner.
      </p>

      <pre>yarn test</pre>

      <h4>Build for production</h4>

      <pre>yarn build</pre>

      <h4>Other</h4>

      <p>See <code>package.json</code> for all available commands.</p>

      <h2>Notes and further documentation</h2>

      <h3>Typed Vuex Actions</h3>

      <p>
        If you need more than one parameter in the typed Vuex actions, use `payload` object instead
        of multiple parameters. For example:
      </p>
      <pre>
[Action.updateItem](
  { commit }: AugmentedActionContext,
  payload: {
    id: string
    obj: Partial&lt;MyItem&gt;
  }
): Promise&lt;void&gt;</pre
      >

      <h3>Typed ENV Variables</h3>

      <p>
        Vite exposes a special <code>meta.env</code> object for ENV variables (see
        <a href="https://vitejs.dev/guide/env-and-mode.html">official docs</a>). This template
        extends that object and adds custom typed variables which you can easily use and modify to
        your needs.
      </p>

      <p>
        See <code>vite.config.js</code> and <code>src/env.d.ts</code> for the configuration and
        <code>src/pages/BaseTemplate.vue</code> for usage example.
      </p>

      <h3>Custom `firefox` variant for Tailwind</h3>

      <p>
        FireFox is important browser to the open Web. One of the very few things it still doesn't do
        is
        <a href="https://caniuse.com/css-backdrop-filter"><em>backdrop-filter</em> CSS property</a>.
        The included <code>tailwind.config.js</code> has a custom plugin that allows you to use a
        <strong>'firefox' variant</strong> in your Tailwind markup to target FireFox. The setup uses
        Tailwind JIT mode and PurgeCSS so this doesn't add any weight to your CSS if you don't use
        it. But, it's there if you happen to need it!
      </p>

      <p>Here's an example markup for a div that has a different background opacity for FireFox:</p>

      <pre>
&lt;div class="bg-black bg-opacity-20 firefox:bg-opacity-80 backdrop-filter backdrop-blur-lg"&gt;
    Foo
&lt;/div&gt;</pre
      >

      <h3>Code Coverage</h3>

      <p>
        TL;DR: due to Vite and esbuild design decisions and ongoing work in this area, code coverage
        is not yet added to this template.
      </p>

      <p>
        I have a fully configured Vue 3 + TypeScript + Cypress + Coverage reporting + GitLab and
        GitHub CI `vue-cli` template project available at
        <a href="https://gitlab.com/uninen/vue-cli-template"
          >https://gitlab.com/uninen/vue-cli-template</a
        >. That's a real world example of proper coverage configuration that works automatically in
        CI. But. This setup doesn't work with Vite.
      </p>

      <p>
        Typical Vite pipelines doesn't use babel at all which is needed above for automatically
        instrument the transpilated code. Vite is powered by eslint which has decided
        <a href="https://github.com/evanw/esbuild/issues/184"> code coverage being out of scope </a
        >. There's a
        <a href="https://github.com/vitejs/vite/issues/1955">
          ticket tracking proper Jest integration w/ Vite
        </a>
        which would probably sort code coverage as well. For now, you should either build whatever
        custom pipeline you need manually. If you have a smart solution for this, PRs welcome!
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

  <footer class="container py-6 mx-auto text-sm text-center text-gray-700">
    <p>
      Vite-ts-tailwind-starter by
      <a class="underline" href="https://twitter.com/uninen">@Uninen</a> &copy; 2020-{{ thisYear }}.
      <template v-if="BUILD_DATE"> Site built {{ BUILD_DATE.toLocaleDateString() }}. </template>
      <template v-else> Development mode. </template>
    </p>
  </footer>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

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
