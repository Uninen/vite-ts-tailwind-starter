<template>
  <BaseTemplate title="Vite-TS-Tailwind Starter">
    <HelloWorld opt msg="Hello Vue 3 + Vite + Tailwind CSS" />

    <hr />

    <h2>Custom `firefox` variant for Tailwind</h2>

    <p>
      FireFox is important browser to the open Web. One of the very few things it still doesn't do
      is
      <a href="https://caniuse.com/css-backdrop-filter"><em>backdrop-filter</em> CSS property</a>.
      The included <code>tailwind.config.js</code> has a custom plugin that allows you to use a
      <strong>'firefox' variant</strong> in your Tailwind markup to target FireFox. The setup uses
      Tailwind JIT mode and PurgeCSS so this doesn't add any weight to your CSS if you don't use it.
      But, it's there if you happen to need it!
    </p>

    <p>Here's an example where a div has a different background opacity for FireFox:</p>

    <pre>
        &lt;div class="bg-black bg-opacity-20 firefox:bg-opacity-80 backdrop-filter backdrop-blur-lg"&gt;Foo&lt;/div&gt;
    </pre>

    <hr />

    <p><router-link to="/about/">About Page</router-link></p>
  </BaseTemplate>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>
