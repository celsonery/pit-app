<template>
  <h1 class="p-2 text-white font-semibold">Meus pedidos</h1>

  <div v-if="isLoading" class="mt-10 h-screen w-full text-white mx-auto justify-center text-center">
    carregando...
  </div>

  <div v-else class="h-fit w-full">
    <Panel>
      <div class="flex justify-between my-2">
        <div>
          Pedido: <strong>{{ orderSelected.id }}</strong>
        </div>
        <div>
          TOTAL:
          <strong>{{
            orderSelected.total?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }}</strong>
        </div>
      </div>
      <div
        :class="orderSelected?.bgcolor"
        class="w-fit my-4 py-1 px-2 rounded-lg border border-gray-300 bg-opacity-75"
      >
        {{ orderSelected.status }}
      </div>
      <h3 class="font-semibold">Produtos:</h3>
      <div v-if="orderSelected.gtins[0]" class="bg-yellow-100 max-h-60 overflow-auto p-2">
        <table>
          <th>Item</th>
          <th>Foto</th>
          <th>Nome</th>
          <th>Valor</th>
          <tr v-for="(item, index) in orderSelected.gtins" :key="item.id">
            <td class="text-center m-1">{{ index + 1 }}</td>
            <td class="m-1 w-10 h-10">
              <img
                v-if="item.images[0]"
                :src="`http://127.0.0.1:8000/storage/images/products/${item.images[0].url}`"
                :alt="item.id"
                class="w-10"
              />
            </td>
            <td class="w-full p-2 justify-end">{{ item.product.name }}</td>
            <td>
              {{ item.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
            </td>
          </tr>
        </table>
      </div>
      <div v-else class="my-6">Nenhum produto neste pedido!</div>
      <div class="mt-8">
        Pedido realizado em: <strong>{{ toBrDate(orderSelected.created_at) }}</strong>
      </div>
    </Panel>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { userStore } from '@/stores/user.js'
import Panel from '@/components/Panel.vue'
import { storeToRefs } from 'pinia'
import { useDateFormat } from '@vueuse/core'

const route = useRoute()
const store = userStore()

const { orderSelected, isLoading } = storeToRefs(store)
const { getOrder } = store

const toBrDate = (date) => {
  return useDateFormat(date, 'DD/MM/YYYY HH:mm')
}
// Hooks
onBeforeMount(async () => {
  window.scrollTo({ top: 0 })
  await getOrder(route.params.id)
})
</script>
