import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
// import { http } from '@/services'
// import { toast } from 'vue3-toastify'

export const userStore = defineStore('users', () => {
  // state
  const user = reactive({})
  const listFavorites = ref([])
  const listCart = ref([])

  // getters
  const totalFavorites = computed(() => listFavorites.value.length)
  const totalCart = computed(() => listCart.value.length)

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
  //     .catch((err) => {
  //       toast('Erro: Usuário ou senha incorreta!', {
  //         autoClose: 1000,
  //         position: 'bottom-center',
  //         type: 'error'
  //       })
  //       console.log(err.response.data)
  //     })
  // }

  // async function getFavorites() {
  //   try {
  //     const { data } = await http.get(`/products/favorites/`)
  //     listFavorites.value = data
  //     console.log('Getting by getFavorites: ', data)
  //   } catch (error) {
  //     console.log('Error getting favorites', error?.response?.data)
  //     toast('Erro ao buscar favoritos', {
  //       autoClose: 1000,
  //       position: 'bottom-center',
  //       type: 'error'
  //     })
  //   }
  // }

  // async function addFavorite(id) {
  //   try {
  //     const { data } = await http.post(`/products/favorites`, { id })
  //     listFavorites.value.push = data
  //     console.log('Adding by getFavorites: ', data)
  //   } catch (error) {
  //     console.log('Error adding favorites', error?.response?.data)
  //     toast('Erro ao adicionar produto', {
  //       autoClose: 1000,
  //       position: 'bottom-center',
  //       type: 'error'
  //     })
  //   }
  // }

  // async function delFavorite(id) {
  //   let index = listFavorites.value.findIndex((obj) => obj.id == id)
  //
  //   try {
  //     const { data } = await http.delete(`/products/favorites/${id}`)
  //     console.log('Deleting by getFavorites: ', data)
  //     listFavorites.value.splice(index, 1)
  //   } catch (error) {
  //     console.log('Error deleting favorites', error?.response?.data)
  //     toast('Erro ao remover favorito', {
  //       autoClose: 1000,
  //       position: 'bottom-center',
  //       type: 'error'
  //     })
  //   }
  // }
  //
  // async function addCart(id) {
  //   console.log(`Add to cart: ${id}`)
  //   try {
  //     const { data } = await http.get(`/products/${id}`)
  //     listCart.value.push = data
  //     console.log('Adding by addCart: ', data)
  //     toast('Produto adicionado ao Carrinho', {
  //       autoClose: 1000,
  //       position: 'bottom-center',
  //       type: 'success'
  //     })
  //   } catch (error) {
  //     console.log('Error adding cart', error?.response?.data)
  //     toast('Erro ao adicionar produto ao carrinho', {
  //       autoClose: 1000,
  //       position: 'bottom-center',
  //       type: 'error'
  //     })
  //   }
  // }
  //
  // async function delCart(id) {
  //   let index = listFavorites.value.findIndex((obj) => obj.id == id)
  //
  //   try {
  //     const { data } = await http.delete(`/products/favorites/${id}`)
  //     console.log('Deleting by getFavorites: ', data)
  //     listFavorites.value.splice(index, 1)
  //   } catch (error) {
  //     console.log('Error deleting favorites', error?.response?.data)
  //     toast('Erro ao remover favorito', {
  //       autoClose: 1000,
  //       position: 'bottom-center',
  //       type: 'error'
  //     })
  //   }
  // }

  // function setToken(tokenValue) {
  //   localStorage.setItem('access_token', tokenValue)
  // }

  return {
    user,
    listFavorites,
    listCart,
    totalFavorites,
    totalCart,
    // oauthLogin,
    // getFavorites,
    // handleLogin,
    // addFavorite,
    // delFavorite,
    // addCart,
    // delCart
  }
})
