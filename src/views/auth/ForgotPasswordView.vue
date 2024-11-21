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
      />
      <span v-if="!!errors?.email" class="text-red-600 -mt-4">
          {{ errors.email[0] }}
      </span>

      <buttom
        :disabled="enableButton"
        class="my-4 px-4 py-2 bg-yellow-950 text-white border border-t-amber-500 hover:bg-amber-900 rounded-lg text-center text-lg font-semibold disabled:bg-amber-700 disabled:cursor-not-allowed"
      >
        Recuperar minha senha
      </buttom>
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
import { computed, ref } from 'vue'

const email = ref('')
const errors = ref({})

const enableButton = computed(() => {
  return email.value !== ''
})
</script>
