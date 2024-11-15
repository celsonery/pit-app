<template>
  <Panel class="mt-2">
    <img src="@/assets/coffee-icon.png" class="mx-auto" alt="cafeteria gourmet icon" />
    <form method="post" class="flex flex-col">
      <label for="name">Nome</label>
      <input
        name="name"
        v-model="user.name"
        type="text"
        placeholder="Informe seu nome"
        autocomplete="name"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="email">E-mail</label>
      <input
        name="email"
        v-model="user.email"
        type="email"
        placeholder="Informe seu e-mail"
        autocomplete="username"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="password">Senha</label>
      <input
        name="password"
        v-model="user.password"
        type="password"
        placeholder="Informe sua senha"
        autocomplete="current-password"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <label for="password_confirmation">Senha</label>
      <input
        name="password_confirmation"
        v-model="user.password_confirmation"
        type="password"
        placeholder="Confirme sua senha"
        autocomplete="new-password"
        class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
      />

      <input
        type="button"
        class="my-2 px-4 py-2 bg-yellow-950 text-white border border-t-amber-500 hover:bg-amber-900 rounded-lg text-center text-xl"
        value="Cadastrar"
      />

      <!--// Login with social networks //-->

<!--      <h3 class="flex items-center w-full py-3">-->
<!--        <span class="flex-grow bg-gray-200 rounded h-0.5"></span>-->
<!--        <span class="mx-3 text-lg font-medium">OU</span>-->
<!--        <span class="flex-grow bg-gray-200 rounded h-0.5"></span>-->
<!--      </h3>-->

<!--      <BtnGoogle @click.prevent="store.oauthLogin('google')" />-->
<!--      <BtnFacebook @click.prevent="store.oauthLogin('facebook')" />-->

      <div class="flex flex-col text-center">
        <router-link :to="{ name: 'login' }" class="my-2 hover:underline"
          >Já tem conta? Entre</router-link
        >
      </div>
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
// import BtnGoogle from '@/components/BtnGoogle.vue'
// import BtnFacebook from '@/components/BtnFacebook.vue'
// import { userStore } from '@/stores/users'
import { reactive } from 'vue'

// const store = userStore()

const user = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})
</script>
