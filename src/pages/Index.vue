<template>
  <BaseTemplate title="Vite-TS-Tailwind Starter">
    <HelloWorld opt msg="Hello World Component" />

    <hr />

    <h2>Features</h2>

    <img src="@/assets/editor_screenshot.png" alt="" />

    <p>
      The idea of this template is to bundle as many often used and useful features pre-configured
      as possible. If you don't need something, just remove it!
    </p>

    <ul>
      <li>Fully typed Vuex store</li>
      <li>Routing using vue-router</li>
      <li>TailwindCSS w/ JIT-mode, purge, and plugins pre-configured</li>
      <li>Vue-friendly Eslint and Prettier configuration - use as is or tweak to your liking</li>
      <li>Alias <code>@</code> to <code>project_root/src</code></li>
      <li>Predefined and typed global variables</li>
      <li>Cypress.io e2e tests (configured similarly to vue-cli)</li>
      <li>Github Workflows and Gitlab CI preconfigured to run tests automatically on every push</li>
    </ul>

    <h2>Project setup and usage</h2>

    <p>
      Using <a href="https://github.com/johnsoncodehk/volar">Volar extension for VSCode</a> is
      recommended to take full advance of the new script setup sugar and full TypeScript support in
      Vue SFC templates. (This is totally optional but recommended as it results much better DX!)
      See
      <a href="https://v3.vuejs.org/api/sfc-tooling.html#ide-support"
        >official IDE Support documentation</a
      >
      for more details.
    </p>

    <h4>Install dependencies:</h4>

    <pre>yarn</pre>

    <h4>Run development server:</h4>

    <pre>yarn dev</pre>

    <h4>Open Cypress test runner:</h4>

    <pre>yarn test</pre>

    <h4>Build:</h4>

    <pre>yarn build</pre>

    <p>See <code>package.json</code> for all available commands.</p>

    <h2>Generic Notes</h2>

    <h3>Typed Vuex Actions</h3>

    <p>
      If you need more than one parameter in the typed Vuex actions, use `payload` object instead of
      multiple parameters. For example:
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

    <h3>Custom `firefox` variant for Tailwind</h3>

    <p>
      FireFox is important browser to the open Web. One of the very few things it still doesn't do
      is
      <a href="https://caniuse.com/css-backdrop-filter"><em>backdrop-filter</em> CSS property</a>.
      The included <code>tailwind.config.js</code> has a custom plugin that allows you to use a
      <strong>'firefox' variant</strong> in your Tailwind markup to target FireFox. The setup uses
      Tailwind JIT mode and PurgeCSS so this doesn't add any weight to your CSS if you don't use it.
      But, it's there if you happen to need it!
    </p>

    <p>Here's an example markup for a div that has a different background opacity for FireFox:</p>

    <pre>
&lt;div class="bg-black bg-opacity-20 firefox:bg-opacity-80 backdrop-filter backdrop-blur-lg"&gt;
    Foo
&lt;/div&gt;</pre
    >

    <h3>Code Coverage</h3>

    <p>
      I have a fully configured Vue 3 + TypeScript + Cypress + Coverage reporting + GitLab and
      GitHub CI (currently unmaintained) template project that uses `vue-cli` available at
      <a href="https://gitlab.com/uninen/vue-cli-template"
        >https://gitlab.com/uninen/vue-cli-template</a
      >. That's a nice POC that proper coverage configuration is possible and it works automatically
      in CI. But. This setup doesn't work with Vite.
    </p>

    <p>
      Typical Vite pipelines doesn't use babel at all which is needed above for automatically
      instrument the transpilated code. Vite is powered by eslint which has decided
      <a href="https://github.com/evanw/esbuild/issues/184"> code coverage being out of scope </a>.
      There's a
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
        development topics on my <a href="https://til.unessa.net/">Today I Learned</a> site
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
  </BaseTemplate>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>
