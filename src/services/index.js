import axios from 'axios'
import AuthService from './auth.js'
import router from '@/router/index.js'

const API_ENVS = {
  development: 'http://127.0.0.1:8000/api',
  production: 'https://api-cafe.oregon.net.br'
}

const httpClient = axios.create({
  baseURL: API_ENVS.development,
  headers: {
    'Content-Type': 'application/json'
  }
})

httpClient.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

httpClient.interceptors.response.use((response) => response, (error) => {
  const canThrowAnError = error.request.status === 0 || error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error)
  }

  if (error.response.status === 401) {
    router.push({ name: 'login' })
  }

  return error
})

export default {
  auth: AuthService(httpClient)
}
