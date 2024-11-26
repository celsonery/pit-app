<template>
  <Panel class="mt-5">
    <div class="p-4 my-6 bg-amber-100 text-amber-950 border border-amber-800 rounded-lg">
      <h5>
        Informe uma nova senha.
      </h5>
    </div>

    <form method="post" class="flex flex-col">
      <label for="password" class="text-orange-950">Senha</label>
      <input
        type="password"
        name="password"
        placeholder="Informe sua senha"
        required
        minlength="3"
        maxlength="100"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
        v-model="password"
      />

      <label for="password_confirmation" class="text-orange-950">Confirme</label>
      <input
        type="password"
        name="password_confirmation"
        required
        minlength="3"
        maxlength="100"
        placeholder="Confirme sua senha"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
        v-model="password_confirmation"
      />
      <span v-if="!!errors?.password" class="text-red-600 -mt-4">
        {{ errors.password[0] }}
      </span>

      <input
        @click.prevent.stop="sendRequest()"
        type="button"
        :disabled="!enableButton"
        class="my-4 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
        value="Atualizar senha"
      />
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
import { computed, ref } from 'vue'
import { userStore } from '@/stores/user.js'

const errors = ref({})
const password = ref('')
const password_confirmation = ref('')

const store = userStore()
const { forgotPasswordReset } = store

const enableButton = computed(() => {
  return (
    password.value === password_confirmation.value &&
    password.value !== '' &&
    password_confirmation.value !== '' &&
    password.value.length > 3 &&
    password_confirmation.value.length > 3
  )
})

const sendRequest = () => {
  forgotPasswordReset(password.value, password_confirmation.value)
}
</script>
