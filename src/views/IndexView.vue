<template>
  <SlideCarousel />
  <h1 class="ml-2 font-semibold text-white">Lista de Produtos</h1>
  <div v-if="isLoading" class="mt-10 h-screen w-full text-white mx-auto justify-center text-center">
    carregando...
  </div>
  <div
    v-else
    class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 p-2 md:p-4 mb-14"
  >
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
import { onBeforeMount, onMounted } from 'vue'
import SlideCarousel from '@/components/SlideCarousel.vue'

const router = useRouter()
const store = productsStore()
const { listProducts, isLoading } = storeToRefs(store)
const { getProducts } = store

function openDetails(id) {
  router.push(`/details/${id}`)
}

onMounted(() => {
  getProducts()
})

onBeforeMount(() => {
  const firstTime = localStorage.getItem('firstTime')

  if (!firstTime) {
    router.push({ name: 'demo'})
  }
})
</script>
