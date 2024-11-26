<template>
  <div class="h-fit">
    <Panel>
      <h1 class="text-red-600 font-black text-3xl md:text-5xl text-center my-8">A T E N Ç Ã O</h1>
      <p class="text-2xl my-6 text-center">
        Este aplicativo é apenas esperimental para um trabalho de faculdade, não se trata de um
        aplicativo real.
      </p>
      <p class="text-2xl text-center">Os dados inseridos são fictícios e sem nenhum valor!</p>

      <div class="mt-48">
        <form>
          <div class="flex items-start my-6" >
            <input type="checkbox" name="check" id="check" v-model="check" value="Estou ciente" class="w-7 h-7 mr-2 rounded-lg" />
            <label for="check" class="text-lg">Confirmar que estou ciente</label>
          </div>
          <input
            @click.prevent.stop="firstTimeCheck()"
            type="button"
            class="py-4 px-4 w-full bg-gray-700 rounded-lg bottom-6 text-xl font-bold text-white disabled:bg-gray-300 disabled:text-gray-400"
            value="Continuar"
            :disabled="!check"
          />
        </form>
      </div>
    </Panel>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Panel from '@/components/Panel.vue'
import { ref } from 'vue'

const router = useRouter()
const check = ref(false)

const firstTimeCheck = () => {
  localStorage.setItem('firstTime', 1)
  router.push({ name: 'index' })
}
</script>
