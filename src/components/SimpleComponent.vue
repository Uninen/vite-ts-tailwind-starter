<template>
  <div>
    <p>Hello</p>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

console.log('hello')
</script>
