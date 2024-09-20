<template>
  <CarouselComponent />

  <h1 class="ml-2 font-semibold text-white">Lista de Produtos</h1>
  <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 p-2 md:p-4 mb-14">
    <PanelProductComponent
      v-for="product in listProducts"
      :key="product.id"
      :product="product"
      @click.prevent="openDetails(product.id)"
    >
    </PanelProductComponent>
  </div>
</template>

<script setup>
// imports
import { productsStore } from '../stores/products.js'
import { storeToRefs } from 'pinia'
import PanelProductComponent from '@/components/PanelProductComponent.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

// state
const router = useRouter()
const store = productsStore()
const { listProducts } = storeToRefs(store)
const { getProducts } = store

// methods
function openDetails(id) {
  router.push(`/details/${id}`)
}

onMounted(() => {
  getProducts()
})
</script>
