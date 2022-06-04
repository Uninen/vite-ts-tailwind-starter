<template>
  <div>
    <p>Hello</p>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

// If this is not used, the test will work
const store = useStore()

console.log('hello')
</script>
