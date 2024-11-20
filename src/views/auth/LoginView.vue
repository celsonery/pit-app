<template>
  <Panel class="mt-2">
    <img src="@/assets/coffee-icon.png" class="mx-auto" alt="cafeteria gourmet icon" />
    <form method="post" class="flex flex-col">
      <label for="email">E-mail</label>
      <input
        name="email"
        v-model="state.email"
        type="email"
        placeholder="Informe seu e-mail"
        autocomplete="username"
        :class="{ 'border-red-600': !!errors.email }"
        class="px-4 py-2 rounded-lg bg-amber-100 border-2"
        :disabled="state.isLoading"
        required
        minlength="3"
        maxlength="100"
      />
      <span v-if="!!errors.email" class="text-red-600">
        {{ errors.email }}
      </span>

      <div class="flex flex-col relative">
        <label for="password" class="mt-4">Senha</label>
        <input
          name="password"
          v-model="state.password"
          :type="viewPass ? 'password' : 'text'"
          placeholder="Informe sua senha"
          autocomplete="current-password"
          :class="{ 'border-red-600': !!errors.password }"
          class="px-4 py-2 rounded-lg bg-amber-100 border-2"
          :disabled="state.isLoading"
          required
          minlength="3"
          maxlength="100"
        />

        <button @click.prevent.stop="viewPass = !viewPass" class="absolute right-0 bottom-3 w-10">
          <svg
            v-if="viewPass"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5 text-amber-800"
          >
            <path
              fill-rule="evenodd"
              d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
              clip-rule="evenodd"
            />
            <path
              d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5 text-amber-800"
          >
            <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path
              fill-rule="evenodd"
              d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <span v-if="!!errors?.password" class="text-red-600">
          {{ errors.password }}
        </span>
      </div>
      <div class="flex content-center my-6">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          v-model="state.remember_me"
          class="w-5 h-5 rounded-lg mr-2"
          :disabled="state.isLoading"
        />
        <label for="remember" class="text-orange-950">Lembrar-me</label>
      </div>

      <input
        type="button"
        @click.prevent="logar"
        class="my-2 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold disabled:bg-amber-700 disabled:cursor-not-allowed"
        value="Entrar"
        :disabled="state.isLoading || !enableButton"
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
import { computed, reactive, ref } from 'vue'
import { useToast } from 'vue-toastification'
// import { useField } from 'vee-validate'
// import { validateEmptyAndLength3, validateValidEmail } from '@/utils/validators.js'
import http from '@/services/http'

// const { value: emailValue, errorMessage: emailErrorMessage } = useField('email', validateValidEmail)
//
// const { value: passwordValue, errorMessage: passwordErrorMessage } = useField(
//   'password',
//   validateEmptyAndLength3
// )

const viewPass = ref(true)

const state = reactive({
  isLoading: false,
  email: '',
  password: '',
  remember_me: false
})

const toast = useToast()

const errors = ref({})

const enableButton = computed(() => {
  return state.email !== '' && state.password !== ''
})

async function logar() {
  state.isLoading = true

  await http
    .post('/auth/login', {
      email: state.email,
      password: state.password,
      remmember_me: state.remember_me
    })
    .then((response) => {
      localStorage.setItem('access_token', response.data.access_token)
      history.back()
    })
    .catch((error) => {
      console.log(error)
      if (error?.response?.status === 422) {
        errors.value = error.response.data.errors
      }
      toast.error('Ocorreu um erro ao tentar realizar o login!')
    })
    .finally(() => {
      state.isLoading = false
    })
}
</script>
