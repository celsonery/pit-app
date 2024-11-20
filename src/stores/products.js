import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '@/services/http'

export const productsStore = defineStore('products', () => {
  // state
  const isLoading = ref(false)
  const listProducts = ref([])
  const productSelected = ref({})

  // getters
  const totalProducts = computed(() => listProducts.value.length)

  // actions
  async function getProducts() {
    productSelected.value = {}
    isLoading.value = true
    console.log('By products Store')
    await http
      .get('/products')
      .then((response) => {
        listProducts.value = response.data.data
        console.log('Getting products: ', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        isLoading.value = false
        console.log('Finalizada busca de produtos')
      })
  }

  async function getProduct(id) {
    isLoading.value = true
    console.log('By product store: ', id)
    await http
      .get(`/products/${id}`)
      .then((response) => {
        productSelected.value = response.data
        console.log('Getting by getProduct: ', response.data)
      })
      .catch((error) => {
        console.log('Error getting product', error?.response?.data)
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
