<template>
  <PanelComponent class="mt-2">
    <img src="@/assets/coffee-icon.png" class="mx-auto" />
    <form method="post" class="flex flex-col">
      <input-component
        name="email"
        label="E-mail"
        type="email"
        placeholder="Informe seu e-mail"
      />

      <input-component
        name="password"
        label="Senha"
        type="password"
        placeholder="Informe sua senha"
      />

      <div class="flex content-center my-2">
        <input type="checkbox" id="remember" name="remember" class="w-5 h-5 rounded-lg mr-2" />
        <label for="remember" class="text-orange-950">Lembrar-me</label>
      </div>

      <buttom class="my-2 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold">Entrar</buttom>

      <h3 class="flex items-center w-full py-3">
        <span class="flex-grow bg-gray-200 rounded h-0.5"></span>
        <span class="mx-3 text-lg font-medium">OU</span>
        <span class="flex-grow bg-gray-200 rounded h-0.5"></span>
      </h3>

      <BtnGoogleComponent />
      <BtnFacebookComponent />

      <div class="flex flex-col text-center">
        <router-link to="/forgot" class="my-2 hover:underline">Esqueceu a senha?</router-link>
        <router-link to="/register" class="my-2 hover:underline">Ainda não tem conta? Cadastrar-se</router-link>
      </div>

    </form>
  </PanelComponent>
</template>

<script setup>
import PanelComponent from '@/components/PanelComponent.vue'
import BtnGoogleComponent from '@/components/BtnGoogleComponent.vue'
import BtnFacebookComponent from '@/components/BtnFacebookComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
</script>
