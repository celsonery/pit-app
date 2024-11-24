<template>
  <Panel class="mt-5">
    <div class="p-4 my-6 bg-amber-100 text-amber-950 border border-amber-800 rounded-lg">
      <h5>
        Insira o código que enviamos via e-mail.
      </h5>
    </div>
    <form method="post" class="flex flex-col">
      <label for="code" class="text-orange-950">Código</label>
      <input
        type="text"
        name="code"
        placeholder="Insira o código"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
        required
        minlength="6"
        maxlength="6"
        pattern="/^[0-9.]/i"
        v-model="code"
      />
      <span v-if="!!errors?.code" class="text-red-600 -mt-4">
          {{ errors.code[0] }}
      </span>

      <input
        @click.prevent.stop="sendRequest()"
        type="button"
        class="my-4 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
        :disabled="!enableButton"
        value="Validar código"
      />
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
import { computed, ref } from 'vue'
import { userStore } from '@/stores/user.js'

const code = ref('')
const errors = ref({})

const store = userStore()
const { forgotPasswordVerify } = store

const enableButton = computed(() => {
  return (code.value !== '' && code.value.length >= 6)
})

const sendRequest = () => {
  forgotPasswordVerify(code.value)
}
</script>
