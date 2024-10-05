<script setup lang="ts">
import ContactForm from './pages/IndexPage.vue'; // Import the form component

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
  <ContactForm />
</template>
