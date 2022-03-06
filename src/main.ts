import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import './assets/index.postcss'

const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
