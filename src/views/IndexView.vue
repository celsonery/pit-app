<template>
  <Carousel />

  <h1 class="ml-2 font-semibold text-white">Lista de Produtos</h1>
  <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 p-2 md:p-4 mb-14">
    <PanelProduct
      v-for="product in listProducts"
      :key="product.id"
      :product="product"
      @click.prevent="openDetails(product.id)"
    >
    </PanelProduct>
  </div>
</template>

<script setup>
import { productsStore } from '../stores/products.js'
import { storeToRefs } from 'pinia'
import PanelProduct from '@/components/PanelProduct.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import Carousel from '@/components/Carousel.vue'

const router = useRouter()
const store = productsStore()
const { listProducts } = storeToRefs(store)
// const { getProducts } = store

function openDetails(id) {
  router.push(`/details/${id}`)
}

onMounted(() => {
  // getProducts()
})
</script>
