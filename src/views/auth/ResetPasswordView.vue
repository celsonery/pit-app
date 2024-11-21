<template>
  <Panel class="mt-5">
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
      />
      <span v-if="!!errors?.password" class="text-red-600 -mt-4">
        {{ errors.password[0] }}
      </span>

      <buttom
        :disabled="enableButton"
        class="my-4 px-4 py-2 bg-yellow-950 text-white border border-t-amber-500 hover:bg-amber-900 rounded-lg text-center text-xl disabled:bg-amber-700 disabled:cursor-not-allowed"
      >
        Atualizar senha
      </buttom>
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
import { computed, ref } from 'vue'

const errors = ref({})
const password = ref('')
const password_confirmation = ref('')

const enableButton = computed(() => {
  return password.value !== password_confirmation.value
})
</script>
