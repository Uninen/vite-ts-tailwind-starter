<template>
  <header class="container px-4 mx-auto mt-6 prose-sm md:px-6 md:prose">
    <h1 class="!mb-0 font-sans text-4xl font-black">
      Vite + Vue 3 + TypeScript + Tailwind + Cypress Starter Template v{{
        VERSION
      }}
    </h1>
    <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700 md:pb-6">
      Opinionated, production ready template for Vite and Vue 3
    </p>
  </header>
  <main class="container mx-auto">
    <div class="p-4 mx-auto prose bg-white md:px-6 prose-indigo sm:rounded-md">
      <slot></slot>
    </div>
    <nav class="container text-2xl">
      <ul class="flex items-center justify-center mt-6 space-x-8 list-none">
        <li>
          <router-link class="hover:underline" to="/">Homepage</router-link>
        </li>
        <li>
          <router-link class="hover:underline" to="/about/">About</router-link>
        </li>
      </ul>
    </nav>
  </main>
  <footer class="container py-6 mx-auto mt-6 text-sm text-center text-gray-700">
    <p>
      Vite-ts-tailwind-starter by
      <a class="underline" href="https://twitter.com/uninen">@Uninen</a> &copy;
      2020-{{ thisYear }}.
      <template v-if="BUILD_DATE">
        Site built {{ BUILD_DATE.toLocaleDateString() }}.
      </template>
      <template v-else> Development mode. </template>
    </p>
  </footer>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'

const props = defineProps<{
  title?: string
}>()

// Note: these are static. If you need these to be reactive, use ref() or reactive()
useHead({
  bodyAttrs: {
    title: props.title,
  },
  meta: [
    {
      property: 'og:title',
      content: props.title,
    },
    {
      name: 'twitter:title',
      content: props.title,
    },
  ],
})

const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()
</script>
