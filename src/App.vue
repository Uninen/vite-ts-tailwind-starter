<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

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
</script>
<template>
  <HeaderComponent />
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>
