<template>
  <h1 class="p-2 text-white font-semibold">Carrinho</h1>
  <div v-if="totalCart > 0">
    <PanelFavorites
      v-for="product in listCart"
      :key="product.id"
      :product="product"
      @click.prevent.stop="openDetails(product.id)"
    >
    </PanelFavorites>
  </div>

  <div v-else class="p-2 text-white">
    <p class="mx-auto">Nenhum produto nos seu Carrinho</p>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/users'

import PanelFavorites from '@/components/PanelFavorites.vue'
import { storeToRefs } from 'pinia'

const store = userStore()
const { listCart, totalCart } = storeToRefs(store)

</script>
