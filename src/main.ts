import { createApp } from 'vue'
import BaseTemplate from '@/pages/BaseTemplate.vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { store } from './store'
import './assets/index.postcss'

const head = createHead()
const app = createApp(App)

app.component('BaseTemplate', BaseTemplate)

app.use(store)
app.use(router)
app.use(head)

app.mount('#app')
