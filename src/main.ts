import '@/assets/base.postcss'
import router from '@/router'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './App.vue'

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
