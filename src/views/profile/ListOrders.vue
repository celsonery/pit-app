<template>
  <h3 class="font-semibold py-2">Meus pedidos:</h3>
  <div v-if="isLoading">carregando...</div>
  <div v-else>
    <div v-if="totalOrders > 0" class="max-h-48 overflow-auto">
      <div
        @click.prevent.stop="openOrderDetails(order.id)"
        v-for="order in listOrders"
        :key="order.id"
        class="flex flex-col bg-yellow-100 rounded-md p-2 my-1"
      >
        <div class="font-semibold">{{ order.id }}</div>
        <div class="flex justify-between">
          <div>{{ toBrDate(order.created_at) }}</div>
          <div class="font-semibold">
            {{ order.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mx-auto text-center my-6">Nenhum pedido realizado!</div>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useDateFormat } from '@vueuse/core'

const store = userStore()
const router = useRouter()
const { isLoading, listOrders, totalOrders } = storeToRefs(store)
const { getOrders } = store

function openOrderDetails(id) {
  router.push(`/orders/${id}`)
}

const toBrDate = ((date) => {
  return useDateFormat(date, 'DD/MM/YYYY HH:mm')
})

onMounted(() => {
  getOrders()
})
</script>
