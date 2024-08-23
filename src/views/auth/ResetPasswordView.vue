<template>
  <PanelComponent class="mt-5">
    <form method="post" class="flex flex-col">
      <label for="password" class="text-orange-950">Senha</label>
      <input
        type="password"
        name="password"
        placeholder="Informe sua senha"
        required
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="password_confirmation" class="text-orange-950">Confirme</label>
      <input
        type="password"
        name="password_confirmation"
        required
        placeholder="Confirme sua senha"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <buttom class="my-4 px-4 py-2 bg-yellow-950 text-white border border-t-amber-500 hover:bg-amber-900 rounded-lg text-center text-xl">Atualizar senha</buttom>
    </form>
  </PanelComponent>
</template>

<script setup>
import PanelComponent from '@/components/PanelComponent.vue'
</script>
