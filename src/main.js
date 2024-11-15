import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify'

import App from './App.vue'
import router from './router'

import 'vue3-toastify/dist/index.css'
import './assets/custom.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Vue3Toastify)
app.mount('#app')
