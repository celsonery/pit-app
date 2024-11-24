<template>
  <h1 class="p-2 text-white font-semibold">Meus Favorites</h1>
  <div v-if="isLoading" class="mt-10 h-screen w-full text-white mx-auto justify-center text-center">
    carregando...
  </div>

  <div v-else class="h-screen w-full mb-24">
    <div v-if="totalFavorites > 0">
      <PanelFavorites
        v-for="product in listFavorites"
        :key="product.id"
        :product="product"
        @click.prevent.stop="openDetails(product.id)"
      >
      </PanelFavorites>
    </div>

    <div v-else class="h-screen w-full p-2 text-white">
      <p class="mx-auto">Nenhum produto nos seus favoritos</p>
    </div>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import PanelFavorites from '@/components/PanelFavorites.vue'

const router = useRouter()
const store = userStore()
const { listFavorites, totalFavorites, isLoading } = storeToRefs(store)
const { getFavorites } = store

function openDetails(id) {
  router.push(`/details/${id}`)
}

onMounted(() => {
  getFavorites()
})
</script>
