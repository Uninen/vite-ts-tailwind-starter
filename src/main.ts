import router from '@/router'
import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './App.vue'

import '@/assets/base.css'

const head = createHead()
const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')
