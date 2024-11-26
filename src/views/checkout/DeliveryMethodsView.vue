<template>
  <h1 class="p-2 text-white font-semibold">Fechamento do pedido</h1>
  <Panel>
    <h1 class="text-xl font-semibold">Forma de entrega</h1>

    <h3 class="my-4 text-lg font-medium">Selecione a forma de entrega</h3>

    <div class="flex justify-around my-6">
      <div class="p-1 w-[150px] h-[150px] rounded-lg text-center border border-amber-500 overflow-hidden">
        <input type="radio" name="delivery" id="delivery" v-model="delivery" value="Entrega à domicílio" />
        <label for="delivery">
          <div class="flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 mx-auto my-4">
              <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
              <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
            Entrega
          </div>
        </label>
      </div>

      <div class="p-1 w-[150px] h-[150px] rounded-lg text-center border border-amber-500 overflow-hidden">
        <input type="radio" name="delivery" id="pickup" v-model="delivery" value="Retirar na loja" />
        <label for="pickup">
          <div class="flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12 mx-auto my-4">
              <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
              <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
            </svg>
            Retirar na Loja
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
      :disabled="!delivery"
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
const { delivery } = storeToRefs(store)

const next = () => {
  router.push({ name: 'resume'})
}
</script>
