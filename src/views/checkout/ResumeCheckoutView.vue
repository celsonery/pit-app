<template>
  <h1 class="p-2 text-white font-semibold">Fechamento do pedido</h1>
  <Panel>
    <h1 class="text-xl font-semibold">Resumo do pedido</h1>

    <h3 class="mt-4 text-lg font-medium">Forma de pagamento</h3>
    <div class="p-2 rounded-lg border border-gray-300 text-amber-950">
      {{ payment }}
    </div>
    <h3 class="mt-4 text-lg font-medium">Forma de entrega</h3>
    <div class="p-2 rounded-lg border border-gray-300 text-amber-950">
      {{ delivery }}
    </div>
    <h3 class="mt-4 text-lg font-medium">Itens no pedido</h3>
    <div class="p-2 rounded-lg border border-gray-300">
      <div v-if="totalCart > 0">
        <div class="max-h-60 overflow-auto">
          <div class="flex justify-between">
            <div class="font-semibold">Nome</div>
            <div class="font-semibold">Valor</div>
          </div>
          <div v-for="item in listCart" :key="item.id" class="flex justify-between pt-1 text-amber-900">
            <div>{{ item.name }}</div>
            <div>{{ item.gtins[0].price?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }) }}</div>
          </div>
        </div>
      </div>

      <div v-else class="my-6">Nenhum produto neste pedido!</div>
    </div>
    <h3 class="mt-4 text-lg font-medium">Resumo</h3>

    <div class="p-2 rounded-lg border border-gray-300">
      <div class="flex justify-between my-2 text-amber-900">
        <div>Total descontos:</div>
        <div class="font-semibold">R$ 0,00</div>
      </div>

      <div class="flex justify-between my-2 text-amber-900">
        <div>Total frete:</div>
        <div class="font-semibold">R$ 0,00</div>
      </div>

      <div class="flex justify-between my-4 font-semibold text-xl">
        <div>Total do carrinho:</div>
        <div class="text-red-600 font-black">
          {{
            sumOrder?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })
          }}
        </div>
      </div>
    </div>
    <div class="mb-28">&nbsp;</div>
  </Panel>

  <div class="fixed bottom-0 w-full z-50 mb-14 py-6 text-center">
    <input
      @click.prevent.stop="confirmar()"
      type="button"
      class="py-2 px-4 rounded-lg mx-auto w-11/12 bg-red-600 text-white font-semibold text-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
      value="Confirmar pedido"
    />
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user.js'
import Panel from '@/components/Panel.vue'
import { storeToRefs } from 'pinia'

const store = userStore()
const { payment, delivery, listCart, totalCart, sumOrder } = storeToRefs(store)
const { createOrder } = store

const confirmar = () => {
  console.log('Confirmar compra...')
  createOrder()
}
</script>
