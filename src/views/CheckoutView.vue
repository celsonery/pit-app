<template>
  <h1 class="p-2 text-white font-semibold">Fechamento do pedido</h1>
  <Panel>
    <h1 class="text-xl font-semibold">Forma de pagamento</h1>

      <h3 class="my-4 text-lg font-medium">Selecione a forma de pagmento</h3>

      <div class="flex my-6">
        <div class="p-1 w-[100px] h-[150px] rounded-lg text-center border border-amber-500 overflow-hidden">
          <input type="radio" name="payment" id="credit" v-model="payment" value="Cartão Crédito/Débito" />
          <label for="credit">
            <div class="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 mx-auto my-4">
                  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                  <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
                </svg>
              Cartão
            </div>
          </label>
        </div>

        <div class="p-1 mx-2 w-[100px] h-[150px] rounded-lg text-center border border-amber-500 overflow-hidden">
          <input type="radio" name="payment" id="pix" v-model="payment" value="Pix" />
          <label for="pix">
            <div class="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 mx-auto my-4">
                <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
              </svg>
              Pix
            </div>
          </label>
        </div>

        <div class="p-1 w-[100px] h-[150px] rounded-lg text-center border border-amber-500 overflow-hidden">
          <input type="radio" name="payment" id="money" v-model="payment" value="Dinheiro" />
          <label for="money">
            <div class="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 my-4 mx-auto">
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
              </svg>
              Dinheiro
            </div>
          </label>
        </div>
      </div>
  </Panel>
  <div class="fixed bottom-0 w-full z-50 mb-14 py-6 text-center">
    <input
      @click.prevent.stop="next()"
      type="button"
      class="py-2 px-4 rounded-lg mx-auto w-11/12 bg-white text-yellow-950 font-semibold text-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
      value="Próximo >>"
      :disabled="!payment"
    />
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user.js'
import Panel from '@/components/Panel.vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = userStore()
const { payment } = storeToRefs(store)

const next = () => {
  router.push({ name: 'delivery'})
}
</script>
