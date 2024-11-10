<script setup lang="ts">
const store = useStore()
</script>
<template>
  <footer>
    <p>
      vite-ts-tailwind-starter v{{ store.appMeta.version }} by <a href="https://twitter.com/uninen">@Uninen</a> &copy;
      2020-{{ new Date().getFullYear() }}.
      <template v-if="store.appMeta.builtAt"> Site built {{ store.appMeta.builtAt.toLocaleDateString() }}. </template>
      <template v-else> Development mode. </template>
    </p>
  </footer>
</template>
