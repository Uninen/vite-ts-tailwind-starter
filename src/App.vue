<script setup lang="ts">
// See vite.config.ts for details about automatic imports
const route = useRoute()

useHead({
  title: () => route.meta.title || 'Vite + Vue Template',
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title,
    },
    {
      name: 'twitter:title',
      content: () => route.meta.title,
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
    />
    <div class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5">
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose">
        <h1>Vite + Vue 3 + TypeScript + Tailwind + Playwright Starter Template v{{ VERSION }}</h1>
        <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
          Opinionated, production ready template for Vite and Vue 3. MIT licensed,
          <a href="https://github.com/Uninen/vite-ts-tailwind-starter">available on GitHub</a>.
        </p>
      </header>
      <main>
        <router-view />
      </main>
      <footer class="py-6 text-sm text-center text-gray-700">
        <p>
          Vite-ts-tailwind-starter by
          <a class="underline" href="https://twitter.com/uninen">@Uninen</a> &copy; 2020-{{ thisYear }}.
          <template v-if="BUILD_DATE"> Site built {{ BUILD_DATE.toLocaleDateString() }}. </template>
          <template v-else> Development mode. </template>
        </p>
      </footer>
    </div>
  </div>
</template>
