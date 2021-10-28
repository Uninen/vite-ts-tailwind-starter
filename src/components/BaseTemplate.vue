<template>
  <header class="container px-4 mx-auto mt-6 prose-sm md:px-6 md:prose">
    <h1 class="!mb-0 font-sans text-4xl font-black">
      Vite + Vue 3 + TypeScript + Tailwind + Cypress Starter Template v{{ VERSION }}
    </h1>
    <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700 md:pb-6">
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
      <slot></slot>
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
