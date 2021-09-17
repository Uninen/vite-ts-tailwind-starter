<template>
  <header class="container max-w-screen-sm py-8 mx-auto">
    <h1 class="mb-0 font-sans text-4xl font-black">
      Vite + Vue 3 + TypeScript + Tailwind + Cypress Starter Template v{{ APP_VERSION }}
    </h1>
    <p class="pt-2 text-xl text-gray-500">
      Opinionated, production ready template for Vite and Vue.
    </p>
  </header>
  <main class="container mx-auto">
    <div class="mx-auto prose prose-indigo">
      <hr />
      <slot></slot>

      <hr />
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
      <a class="underline" href="https://twitter.com/uninen">@Uninen</a> &copy; 2020-{{ thisYear }}.
      <template v-if="BUILD_TIME"> Site built {{ BUILD_TIME.toLocaleDateString() }}. </template>
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
    class: 'home summer',
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

const BUILD_TIME = new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
const APP_VERSION = import.meta.env.VITE_APP_VERSION
const thisYear = new Date().getFullYear()
</script>
