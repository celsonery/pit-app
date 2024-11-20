<template>
  <h1 class="p-2 text-white font-semibold">Carrinho</h1>
  <div v-if="isLoading" class="mt-10 h-screen w-full text-white mx-auto justify-center text-center">
    carregando...
  </div>
  <div v-else class="h-screen w-full">
    <div v-if="totalCart > 0">
      <PanelFavorites
        v-for="product in listCart"
        :key="product.id"
        :product="product"
        @click.prevent.stop="openDetails(product.id)"
      >
      </PanelFavorites>
    </div>

    <div v-else class="h-screen w-full p-2 text-white">
      <p class="mx-auto">Nenhum produto nos seu Carrinho</p>
    </div>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user'

import PanelFavorites from '@/components/PanelFavorites.vue'
import { storeToRefs } from 'pinia'

const store = userStore()
const { listCart, totalCart, isLoading } = storeToRefs(store)
</script>
