import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { POSITION } from 'vue-toastification'

import App from './App.vue'
import router from './router'

import 'vue-toastification/dist/index.css'
import './assets/custom.css'
import services from '@/services/index.js'

const app = createApp(App)
app.use(createPinia())

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (to.matched.some((record) => record.meta.auth)) {
    if (token) {
      try {
        await services.auth.user()
        next()
      } catch (error) {
        localStorage.removeItem('access_token')
        next('/login')
      }
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_CENTER })
app.mount('#app')
