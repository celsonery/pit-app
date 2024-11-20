import axios from 'axios'
// import router from '@/router/index.js'

const API_ENVS = {
  development: 'http://127.0.0.1:8000/api',
  production: 'https://api-cafe.oregon.net.br'
}

const axiosInstance = axios.create({
  baseURL: API_ENVS.development,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// axiosInstance.interceptors.response.use((response) => response, (error) => {
//   const canThrowAnError = error.request.status === 0 || error.request.status === 500
//
//   if (canThrowAnError) {
//     throw new Error(error)
//   }
//
//   if (error.response.status === 401) {
//     router.push({ name: 'login' })
//   }
//
//   return error
// })
export default axiosInstance
