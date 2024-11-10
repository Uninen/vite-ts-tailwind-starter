<script setup lang="ts">
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
</template>
