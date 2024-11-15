<template>
  <h1 class="p-2 text-white font-semibold">Meu perfil</h1>

  <Panel>
    <img src="@/assets/coffee-icon.png" class="mx-auto m-5" />
    <form method="post" class="flex flex-col">
      <label for="name">Nome</label>
      <input
        name="name"
        v-model="user.name"
        type="text"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="name">E-mail</label>
      <input
        name="email"
        v-model="user.email"
        type="email"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <hr />

      <label for="password">Senha</label>
      <input
        name="password"
        v-model="user.password"
        type="password"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="name">Confirmar senha</label>
      <input
        name="password_confirmation"
        v-model="user.password_confirmation"
        type="password"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <input
        type="button"
        class="my-2 mb-12 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold"
        value="Salvar"
      />
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
import { reactive } from 'vue'

// const store = userStore()

const user = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})
</script>
