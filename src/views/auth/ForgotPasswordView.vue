<template>
  <Panel class="mt-5">
    <div class="p-4 my-6 bg-amber-100 text-amber-950 border border-amber-800 rounded-lg">
      <h5>
        Se esqueceu a senha, informe seu e-mail cadastrado que enviaremos uma solicitação de troca
        de senha.
      </h5>
    </div>
    <form method="post" class="flex flex-col">
      <label for="email" class="text-orange-950">E-mail</label>
      <input
        type="email"
        name="email"
        placeholder="Informe seu e-mail"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
        required
        minlength="3"
        maxlength="100"
        pattern="/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i"
        v-model="email"
      />
      <span v-if="!!errors?.email" class="text-red-600 -mt-4">
          {{ errors.email[0] }}
      </span>

      <input
        @click.prevent.stop="sendRequest()"
        type="button"
        class="my-4 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
        :disabled="!enableButton"
        value="Recuperar minha senha"
      />
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
import { computed, ref } from 'vue'
import { userStore } from '@/stores/user.js'

const email = ref('')
const errors = ref({})

const store = userStore()
const { forgotPassword } = store

const enableButton = computed(() => {
  return (email.value !== '' && email.value.length > 3)
})

const sendRequest = () => {
  forgotPassword(email.value)
}
</script>
