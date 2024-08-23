import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const productsStore = defineStore('products', () => {
  // state
  const listProducts = ref([])
  const productSelected = ref({})

  // getters
  const totalProducts = computed(() => listProducts.value.length)

  // actions
  function getProducts() {
    console.log('By products Store')
  }

  return { listProducts, productSelected, totalProducts, getProducts }
})
