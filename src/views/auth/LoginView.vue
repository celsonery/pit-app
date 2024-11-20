<template>
  <Panel class="mt-2">
    <img src="@/assets/coffee-icon.png" class="mx-auto" alt="cafeteria gourmet icon" />
    <form method="post" class="flex flex-col">
      <label for="email">E-mail</label>
      <input
        name="email"
        v-model="state.email.value"
        type="email"
        placeholder="Informe seu e-mail"
        autocomplete="username"
        :class="{ 'border-red-600': !!state.email.errorMessage }"
        class="px-4 py-2 rounded-lg bg-amber-100 border-2"
        :disabled="state.isLoading"
      />
      <span v-if="!!state.email.errorMessage" class="text-red-600">
        {{ state.email.errorMessage }}
      </span>

      <label for="password" class="mt-4">Senha</label>
      <input
        name="password"
        v-model="state.password.value"
        type="password"
        placeholder="Informe sua senha"
        autocomplete="current-password"
        :class="{ 'border-red-600': !!state.password.errorMessage }"
        class="px-4 py-2 rounded-lg bg-amber-100 border-2"
        :disabled="state.isLoading"
      />
      <span v-if="!!state.password.errorMessage" class="text-red-600">
        {{ state.password.errorMessage }}
      </span>

      <div class="flex content-center my-6">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          class="w-5 h-5 rounded-lg mr-2"
          :disabled="state.isLoading"
        />
        <label for="remember" class="text-orange-950">Lembrar-me</label>
      </div>

      <input
        type="button"
        @click.prevent="logar"
        class="my-2 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold"
        value="Entrar"
        :disabled="state.isLoading"
      />

      <div class="flex flex-col text-center">
        <router-link :to="{ name: 'forgot' }" class="my-2 hover:underline"
          >Esqueceu a senha?
        </router-link>
        <router-link :to="{ name: 'register' }" class="my-2 hover:underline"
          >Ainda não tem conta? Cadastrar-se
        </router-link>
      </div>
    </form>
  </Panel>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
import { reactive } from 'vue'
import services from '@/services/index.js'
import { useToast } from 'vue-toastification'
import { useField } from 'vee-validate'
import { validateEmptyAndLength3, validateValidEmail } from '@/utils/validators.js'

const { value: emailValue, errorMessage: emailErrorMessage } = useField('email', validateValidEmail)

const { value: passwordValue, errorMessage: passwordErrorMessage } = useField(
  'password',
  validateEmptyAndLength3
)

const state = reactive({
  hasErrors: false,
  isLoading: false,
  email: {
    value: emailValue,
    errorMessage: emailErrorMessage
  },
  password: {
    value: passwordValue,
    errorMessage: passwordErrorMessage
  }
})

const toast = useToast()

async function logar() {
  try {
    state.isLoading = true

    const { data, errors } = await services.auth.login({
      email: state.email.value,
      password: state.password.value
    })

    console.log(data, errors)

    if (!errors) {
      localStorage.setItem('access_token', data.access_token)
      history.back()
      return
    }

    if (errors.status === 401) {
      toast.error('Email ou senha inválidos!')
    }
  } catch (error) {
    state.isLoading = false
    state.hasErrors = !!error
    toast.error('Ocorreu um erro ao tentar realizar o login!')
  } finally {
    state.isLoading = false
  }
}
</script>
