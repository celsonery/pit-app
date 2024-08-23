<template>
  <PanelComponent class="mt-5">
    <img src="@/assets/coffee-icon.png" class="mx-auto" />
    <form method="post" class="flex flex-col">
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

      <div class="flex content-center my-4">
        <input type="checkbox" id="remember" name="remember" class="w-5 h-5 rounded-lg mr-2" />
        <label for="remember" class="text-orange-950">Lembrar-me</label>
      </div>

      <buttom class="my-4 px-4 py-2 bg-yellow-950 text-white border border-t-amber-500 hover:bg-amber-900 rounded-lg text-center text-lg font-semibold">Entrar</buttom>

      <div class="flex flex-col text-center">
        <router-link to="/forgot" class="my-2 hover:underline">Esqueceu a senha?</router-link>
        <router-link to="/register" class="my-2 hover:underline">Criar nova conta?</router-link>
      </div>
    </form>
  </PanelComponent>
</template>

<script setup>
import PanelComponent from '@/components/PanelComponent.vue'
</script>
