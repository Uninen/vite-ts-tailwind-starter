import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'

const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
