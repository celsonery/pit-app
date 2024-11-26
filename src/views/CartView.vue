<template>
  <h1 class="p-2 text-white font-semibold">Carrinho</h1>
  <div v-if="isLoading" class="mt-10 h-screen w-full text-white mx-auto justify-center text-center">
    carregando...
  </div>
  <div v-else class="h-screen w-full mb-24">
    <div class="h-fit w-full">
      <Panel>
        <h3 class="font-semibold">Produtos:</h3>
        <div v-if="totalCart > 0">
          <div class="bg-yellow-100 max-h-60 overflow-auto p-2">
            <table>
              <th>Item</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Valor</th>
              <tr v-for="(item, index) in listCart" :key="item.id">
                <td class="text-center m-1">{{ index + 1 }}</td>
                <td class="m-1 w-10 h-10">
                  <img
                    v-if="item.gtins[0].images[0]"
                    :src="`${api_url}/storage/images/products/${item.gtins[0].images[0].url}`"
                    :alt="item.name"
                    class="w-10"
                  />
                </td>
                <td class="w-full p-2 justify-end">{{ item.name }}</td>
                <td>
                  {{
                    item.gtins[0].price?.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })
                  }}
                </td>
                <td>
                  <div class="ml-2" @click.prevent.stop="delCart(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                      <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div class="flex justify-end my-2">
            <input
              @click.prevent.stop="clearCart()"
              type="button"
              value="Esvaziar carrinho"
              class="py-2 px-4 bg-amber-700 rounded-lg"
            />
          </div>

          <div class="flex justify-between my-4">
            <div>Total do carrinho:</div>
            <div class="font-semibold">{{ sumOrder?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }) }}</div>
          </div>
        </div>

        <div v-else class="my-6">Nenhum produto neste pedido!</div>
      </Panel>
    </div>

    <div v-if="totalCart > 0" class="bg-white p-4 absolute w-full bottom-12">
      <input
        @click.prevent.stop="toCheckout()"
        type="button"
        class="my-2 px-4 py-2 w-full bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold disabled:bg-amber-700 disabled:cursor-not-allowed"
        value="Finalizar compra"
      />
    </div>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user'
import { useRouter } from 'vue-router'

import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import Panel from '@/components/Panel.vue'

const router = useRouter()
const store = userStore()
const { listCart, totalCart, isLoading, sumOrder } = storeToRefs(store)

const api_url = import.meta.env.VITE_API_URL

const { delCart, clearCart } = store

const toCheckout = () => {
  router.push({ name: 'checkout'})
}

onMounted(() => {
  window.scrollTo({ top: 0 })
})
</script>
