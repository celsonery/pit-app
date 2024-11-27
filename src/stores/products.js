import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import http from '@/services/http'

const toast = useToast()

export const productsStore = defineStore('products', () => {
  // state
  const isLoading = ref(false)
  const listProducts = ref([])
  const productSelected = ref({})

  // getters
  const totalProducts = computed(() => listProducts.value.length)

  // actions
  async function getProducts(search = '') {
    productSelected.value = {}
    isLoading.value = true
    let url = search !== '' ? `/products?search=${search}` : '/products'
    console.log(url)
    await http
      .get(url)
      .then((response) => {
        listProducts.value = response.data.data
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  async function getProduct(id) {
    isLoading.value = true
    await http
      .get(`/products/${id}`)
      .then((response) => {
        productSelected.value = response.data
      })
      .catch((error) => {
        toast(error.message, {
          autoClose: 1000,
          position: 'bottom-center',
          type: 'error'
        })
      })
      .finally(() => isLoading.value = false)
  }

  return {
    listProducts,
    productSelected,
    totalProducts,
    isLoading,
    getProducts,
    getProduct
  }
})
