import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import http from '@/services/http'

const toast = useToast()

export const userStore = defineStore('users', () => {
  // state
  const user = reactive({})
  const listFavorites = ref([])
  const listCart = reactive([])
  const isLoading = ref(false)

  // getters
  const totalFavorites = computed(() => listFavorites.value.length)
  const totalCart = computed(() => listCart.length)

  // actions
  // async function oauthLogin(provider) {
  //   try {
  //     const response = await http.get('oauth/' + provider)
  //     setToken(response.data.access_token)
  //     console.log(response.data)
  //     let res = (window.location.href = response.data)
  //     console.log(res)
  //   } catch (error) {
  //     console.log('Erro no oauth: ', error)
  //   }
  // }

  // async function handleLogin(user) {
  //   await http
  //     .post('/auth/login', user)
  //     .then((response) => {
  //       setToken(response.data.access_token)
  //       toast('Usuário autenticado com sucesso!', {
  //         autoClose: 1000,
  //         position: 'bottom-center',
  //         type: 'success'
  //       })
  //       history.back()
  //     })
  //     .catch((error) => {
  //       toast('Erro: Usuário ou senha incorreta!', {
  //         autoClose: 1000,
  //         position: 'bottom-center',
  //         type: 'error'
  //       })
  //       console.log(error.response.data)
  //     })
  // }

  async function getFavorites() {
    isLoading.value = true
    await http
      .get(`/products/favorites/`)
      .then((response) => {
        listFavorites.value = response.data
        console.log('Getting by getFavorites: ', response.data)
      })
      .catch((error) => {
        console.log('Error getting favorites', error?.response?.data)
        toast('Erro ao buscar favoritos', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => isLoading.value = false)
  }

  async function addFavorite(id) {
    isLoading.value = true
    await http
      .post(`/products/favorites`, { id })
      .then((response) => {
        listFavorites.value.push = response.data
        console.log('Adding by getFavorites: ', response.data)
      })
      .catch((error) => {
        console.log('Error adding favorites', error?.response?.data)
        toast('Erro ao adicionar produto', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => isLoading.value = false)
  }

  async function delFavorite(id) {
    let index = listFavorites.value.findIndex((obj) => obj.id === id)

    await http
      .delete(`/products/favorites/${id}`)
      .then((response) => {
        console.log('Deleting by getFavorites: ', response.data)
        listFavorites.value.splice(index, 1)
      })
      .catch((error) => {
        console.log('Error deleting favorites', error?.response?.data)
        toast('Erro ao remover favorito', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
  }

  async function addCart(id) {
    console.log(`Add to cart: ${id}`)
    isLoading.value = true
    await http
      .get(`/products/${id}`)
      .then((response) => {
        listCart.push(response.data[0])
        console.log('Adding to addCart: ', response.data)
        console.log('Response: ', response)
        toast('Produto adicionado ao Carrinho', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'success'
        })
      })
      .catch((error) => {
        console.log('Error adding cart', error?.response?.data)
        toast('Erro ao adicionar produto ao carrinho', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => isLoading.value = false)
  }

  async function delCart(id) {
    isLoading.value = true

    let index = listFavorites.value.findIndex((obj) => obj.id === id)

    await http
      .delete(`/products/favorites/${id}`)
      .then((response) => {
        console.log('Deleting by getFavorites: ', response)
        listFavorites.value.splice(index, 1)
      })
      .catch((error) => {
        console.log('Error deleting favorites', error?.response?.data)
        toast('Erro ao remover favorito', {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => isLoading.value = false)
  }

  // function setToken(tokenValue) {
  //   localStorage.setItem('access_token', tokenValue)
  // }

  return {
    user,
    listFavorites,
    listCart,
    totalFavorites,
    totalCart,
    isLoading,
    // oauthLogin,
    getFavorites,
    addFavorite,
    delFavorite,
    addCart,
    delCart
  }
})
