<template>
  <Panel class="mt-2">
    <img src="@/assets/coffee-icon.png" class="mx-auto" alt="cafeteria gourmet icon" />
    <form method="post" class="flex flex-col">
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

      <div class="flex content-center my-2">
        <input type="checkbox" id="remember" name="remember" class="w-5 h-5 rounded-lg mr-2" />
        <label for="remember" class="text-orange-950">Lembrar-me</label>
      </div>

      <input
        type="button"
        @click.prevent="logar"
        class="my-2 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold"
        value="Entrar"
      />

      <!--// Login with social networks //-->
<!--      <h3 class="flex items-center w-full py-3">-->
<!--        <span class="flex-grow bg-gray-200 rounded h-0.5"></span>-->
<!--        <span class="mx-3 text-lg font-medium">OU</span>-->
<!--        <span class="flex-grow bg-gray-200 rounded h-0.5"></span>-->
<!--      </h3>-->

<!--      <BtnGoogle @click.prevent="store.oauthLogin('google')"/>-->
<!--      <BtnFacebook @click.prevent="store.oauthLogin('facebook')"/>-->

      <div class="flex flex-col text-center">
        <router-link :to="{ name: 'forgot' }" class="my-2 hover:underline"
          >Esqueceu a senha?</router-link
        >
        <router-link :to="{ name: 'register' }" class="my-2 hover:underline"
          >Ainda não tem conta? Cadastrar-se</router-link
        >
      </div>
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
// import BtnGoogle from '@/components/BtnGoogle.vue'
// import BtnFacebook from '@/components/BtnFacebook.vue'
import { reactive } from 'vue'
import { userStore } from '@/stores/users.js'

const store = userStore()

const user = reactive({
  email: '',
  password: ''
})

function logar() {
  store.handleLogin(user)
}
</script>
