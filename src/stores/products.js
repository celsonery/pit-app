import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const productsStore = defineStore('products', () => {
  // state
  const listProducts = ref([])
  const productSelected = ref({})

  // getters
  const totalProducts = computed(() => listProducts.value.length)

  // actions
  async function getProducts() {
    console.log('By products Store')
    try {
      await axios.get('http://10.0.10.200:8000/api/products')
        .then((response) => {
          listProducts.value = response.data.data
          console.log('Getting with axios: ', response.data.data)
        })
    } catch (error) {
      console.log("Error getting with axios: ", error)
    }
  }

  async function getProduct(id) {
    console.log("By product store: ", id)
    try {
      await axios.get(`http://10.0.10.200:8000/api/products/${id}`)
        .then((response) => {
          productSelected.value = response.data
          console.log('Getting by getProduct: ', response.data)
        })
    } catch (error) {
      console.log("Error getting product", error)
    }
  }

  return { listProducts, productSelected, totalProducts, getProducts, getProduct }
})
