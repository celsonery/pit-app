<template>
  <h1 class="p-2 text-white font-semibold">Meus Favorites</h1>
  <div v-if="totalFavorites > 0">
    <PanelFavorites
      v-for="product in listFavorites"
      :key="product.id"
      :product="product"
      @click.prevent.stop="openDetails(product.id)"
    >
    </PanelFavorites>
  </div>

  <div v-else class="p-2 text-white">
    <p class="mx-auto">Nenhum produto nos seus favoritos</p>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PanelFavorites from '@/components/PanelFavorites.vue'

const router = useRouter()
const store = userStore()
const { listFavorites, totalFavorites } = storeToRefs(store)
const { getFavorites } = store

function openDetails(id) {
  router.push(`/details/${id}`)
}

onMounted(() => {
  getFavorites()
})
</script>
