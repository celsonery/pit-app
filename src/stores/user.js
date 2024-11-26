import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import http from '@/services/http'
import router from '@/router/index.js'

const toast = useToast()

export const userStore = defineStore('users', () => {
  // state
  const user = ref({})
  const listFavorites = ref([])
  const listCart = ref([])
  const isLoading = ref(false)
  const listOrders = ref([])
  const sumOrder = ref(0)
  const orderSelected = ref({})
  const passwordToken = ref()
  const payment = ref()
  const delivery = ref()

  // getters
  const totalFavorites = computed(() => listFavorites.value.length)
  const totalCart = computed(() => listCart.value.length)
  const totalOrders = computed(() => listOrders.value.length)

  // actions
  const setUser = (userReceive) => {
    user.value = userReceive
  }

  const delUser = () => {
    user.value = {}
    listFavorites.value = []
    listCart.value = []
    listOrders.value = []
    sumOrder.value = 0
    orderSelected.value = {}
    passwordToken.value = ''
    payment.value = ''
    delivery.value = ''
    localStorage.removeItem('access_token')
  }

  const handlerLogin = async (user) => {
    isLoading.value = true

    await http
      .post(`/auth/login`, { ...user })
      .then((response) => {
        setUser(response.data.user)
        localStorage.setItem('access_token', response.data.user.access_token)
        toast('Usuário autenticado com sucesso!', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'success'
        })
        router.push({ name: 'index' })
      })
      .catch((error) => {
        if (error.status === 401) {
          toast('Usuário ou senha incorretas', {
            autoClose: 1000,
            position: 'bottom-center',
            type: 'error'
          })
        } else {
          toast('Erro inesperado!', {
            autoClose: 1000,
            position: 'bottom-center',
            type: 'error'
          })
        }
      })
      .finally(() => (isLoading.value = false))
  }

  const handlerLogout = async () => {
    await http
      .post(`/auth/logout`)
      .then(() => {
        delUser()
        router.push({ name: 'index' })
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
  }

  const handlerUpdate = async (userData) => {
    await http.put('/user/', { userData })
      .then(() => {
        toast('Usuário atualizado com sucesso!', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'success'
        })
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
  }

  const forgotPassword = async (email) => {
    isLoading.value = true
    await http.post('/auth/password/create', { email })
      .then(() => {
        router.push({ name: 'verify'})
      })
      .catch(error => {
        console.log(error)
        toast('Erro ao verificar código!', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  const forgotPasswordVerify = async (token) => {
    isLoading.value = true
    await http.get(`/auth/password/find/${token}`)
      .then(response => {
        passwordToken.value = response.data[0].token
        router.push({ name: 'reset'})
      })
      .catch(error => {
        console.log(error)
        toast('Erro ao alterar senha!', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  const forgotPasswordReset = async (password, password_confirmation) => {
    isLoading.value = true
    await http.post(`/auth/password/reset/`, {
      'password': password,
      'password_confirmation': password_confirmation,
      'token': passwordToken.value,
    })
      .then(() => {
        passwordToken.value = ''
        toast('Senha alterado com sucesso, efetue o login!', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'success'
        })
        router.push({ name: 'login'})
      })
      .catch(error => {
        console.log(error)
        toast('Erro ao solicitar reset de senha!', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  const getFavorites = async () => {
    isLoading.value = true
    await http
      .get(`/products/favorites/`)
      .then((response) => {
        listFavorites.value = response.data
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => (isLoading.value = false))
  }

  const addFavorite = async (id) => {
    isLoading.value = true
    await http
      .post(`/products/favorites`, { id })
      .then((response) => {
        listFavorites.value.push = response.data
        toast('Produto adicionado aos favoritos!', {
          autoClose: 300,
          position: 'bottom-center',
          type: 'success'
        })
      })
      .catch((error) => {
        if (error.status === 401) {
          router.push({ name: 'login'})
        } else {
          toast('Erro inesperado!', {
            autoClose: 1000,
            position: 'bottom-center',
            type: 'error'
          })
        }
      })
      .finally(() => (isLoading.value = false))
  }

  const delFavorite = async (id) => {
    let index = listFavorites.value.findIndex((obj) => obj.id === id)

    await http
      .delete(`/products/favorites/${id}`)
      .then(() => {
        listFavorites.value.splice(index, 1)
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
  }

  const addCart = async (id) => {
    isLoading.value = true
    await http
      .get(`/products/${id}`)
      .then((response) => {
        listCart.value.push(response.data[0])
        sumOrder.value += response.data[0].gtins[0].price
        toast('Produto adicionado ao Carrinho', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'success'
        })
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => (isLoading.value = false))
  }

  const delCart = async (index) => {
    sumOrder.value -= listCart.value[index].gtins[0].price
    listCart.value.splice(index, 1)
  }

  const clearCart = () => {
    listCart.value = []
    sumOrder.value = 0
  }

  const getOrders = async () => {
    isLoading.value = true
    await http
      .get(`/orders/`)
      .then((response) => {
        listOrders.value = response.data
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => (isLoading.value = false))
  }

  const getOrder = async (id) => {
    isLoading.value = true
    await http
      .get(`/orders/${id}`)
      .then((response) => {
        console.log(response.data)
        orderSelected.value = response.data
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => (isLoading.value = false))
  }

  const createOrder = async () => {
    isLoading.value = true
    await http
      .post(`/orders/`, {
        "order": listCart.value
      })
      .then((response) => {
        console.log(response.data)
        listCart.value = []
        sumOrder.value = 0
        toast('Pedido realizada com sucesso! Verifique no campo pedidos no seu perfil.', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'success'
        })
        router.push({ name: 'profile'})
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => (isLoading.value = false))
  }

  const getUser = async () => {
    isLoading.value = true
    await http
      .get(`/auth/user`)
      .then((response) => {
        user.value = response.data.user
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => (isLoading.value = false))
  }

  return {
    user,
    listFavorites,
    listCart,
    listOrders,
    orderSelected,
    sumOrder,
    totalFavorites,
    totalCart,
    totalOrders,
    isLoading,
    payment,
    delivery,
    setUser,
    handlerLogin,
    handlerLogout,
    handlerUpdate,
    forgotPassword,
    forgotPasswordVerify,
    forgotPasswordReset,
    getFavorites,
    addFavorite,
    delFavorite,
    addCart,
    delCart,
    clearCart,
    getUser,
    getOrders,
    getOrder,
    createOrder
  }
})
