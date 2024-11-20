import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import { http } from '@/services/'

export const productsStore = defineStore('products', () => {
  // state
  const listProducts = ref([])
  const productSelected = ref({})

  // getters
  const totalProducts = computed(() => listProducts.value.length)

  // actions
  // async function getProducts() {
  //   console.log('By products Store')
  //   try {
  //     const { data } = await http.get('/products')
  //         listProducts.value = data.data
  //         console.log('Getting products: ', data.data)
  //   } catch (error) {
  //     console.log("Error getting products: ", error?.response?.data)
  //   }
  // }
  //
  // async function getProduct(id) {
  //   console.log("By product store: ", id)
  //   try {
  //     const { data } = await http.get(`/products/${id}`)
  //     productSelected.value = data
  //     console.log('Getting by getProduct: ', data)
  //   } catch (error) {
  //     console.log("Error getting product", error?.response?.data)
  //   }
  // }

  return {
    listProducts,
    productSelected,
    totalProducts,
    // getProducts,
    // getProduct
  }
})
