<template>
  <div class="px-8 prose">
    <h1>{{ msg }}</h1>
    <button class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="increment">
      count is: {{ count }}
    </button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

import { useStore, Mutation } from '@/store/index'

const store = useStore()
const count = computed(() => store.state.count)
const props = defineProps<{
  msg: string
}>()

function increment() {
  store.commit(Mutation.INCREMENT, 1)
}
</script>
