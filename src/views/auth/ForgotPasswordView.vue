<template>
  <PanelComponent class="mt-5">
    <div class="p-4 my-6 bg-amber-100 text-amber-950 border border-amber-800 rounded-lg">
      <h5>Se esqueceu a senha, informe seu e-mail cadastrado que enviaremos uma solicitação de troca de senha.</h5>
    </div>
    <form method="post" class="flex flex-col">
      <label for="email" class="text-orange-950">E-mail</label>
      <input
        type="email"
        name="email"
        required
        placeholder="Informe seu e-mail"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <buttom class="my-4 px-4 py-2 bg-yellow-950 text-white border border-t-amber-500 hover:bg-amber-900 rounded-lg text-center text-lg font-semibold">Recuperar minha senha</buttom>
    </form>
  </PanelComponent>
</template>

<script setup>
import PanelComponent from '@/components/PanelComponent.vue'
</script>
