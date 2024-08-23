<template>
  <PanelComponent class="mt-5">
    <img src="@/assets/coffee-icon.png" class="mx-auto" />
    <form method="post" class="flex flex-col">
      <label for="name" class="text-orange-950">Nome</label>
      <input
        type="text"
        name="name"
        required
        placeholder="Informe seu Nome"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="email" class="text-orange-950">E-mail</label>
      <input
        type="email"
        name="email"
        required
        placeholder="Informe seu e-mail"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="password" class="text-orange-950">Senha</label>
      <input
        type="password"
        name="password"
        placeholder="Informe sua senha"
        required
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="password-confimation" class="text-orange-950">Senha</label>
      <input
        type="password"
        name="password-confimation"
        placeholder="Confirme sua senha"
        required
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <buttom class="my-4 px-4 py-2 bg-yellow-950 text-white border border-t-amber-500 hover:bg-amber-900 rounded-lg text-center text-xl">Cadastrar</buttom>
    </form>
  </PanelComponent>
</template>

<script setup>
import PanelComponent from '@/components/PanelComponent.vue'
</script>
