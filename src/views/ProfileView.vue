<template>
  <h1 class="p-2 text-white font-semibold">Meu perfil</h1>

  <Panel>
    <div class="flex">
      <div class="w-16 flex-none">
        <div class="mr-5 p-3 rounded-full w-16 h-16 bg-gray-300 text-center text-3xl" :alt="user.name">{{ user.avatar }}</div>
      </div>
      <div class="flex-1">
        <form method="post" class="flex flex-col">
          <input
            name="name"
            type="text"
            autocomplete="name"
            :class="isEditing ? 'bg-amber-100 border border-amber-700' : 'bg-transparent'"
            class="px-2 py-1 rounded-lg"
            :disabled="!isEditing"
            v-model="user.name"
          />

          <input
            name="email"
            type="email"
            autocomplete="username"
            :class="isEditing ? 'bg-amber-100 border border-amber-700' : 'bg-transparent'"
            class="px-2 py-1 rounded-lg"
            :disabled="!isEditing"
            v-model="user.email"
          />
        </form>
      </div>
      <div>
        <button class="p-2 rounded-full cursor-pointer" @click.prevent.stop="updateUser()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
            />
          </svg>
        </button>
      </div>
    </div>

    <hr class="my-4" />

    <div>
      <h3 class="font-semibold">Atualizar senha:</h3>

      <form method="post" class="flex flex-col">
        <div class="flex flex-col relative">
          <label for="password">Nova senha</label>
          <input
            name="password"
            :type="blockViewPass ? 'password' : 'text'"
            autocomplete="new-password"
            class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
            required
            minlength="3"
            maxlength="100"
            v-model="frmPass.password"
          />
          <button
            @click.prevent.stop="blockViewPass = !blockViewPass"
            class="absolute right-0 top-9 w-10"
          >
            <svg
              v-if="blockViewPass"
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

        <div class="flex flex-col relative">
          <label for="name">Confirmar senha</label>
          <input
            name="password_confirmation"
            :type="blockViewPassConfirm ? 'password' : 'text'"
            autocomplete="new-password"
            class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700"
            required
            minlength="3"
            maxlength="100"
            v-model="frmPass.password_confirmation"
          />
          <button
            @click.prevent.stop="blockViewPassConfirm = !blockViewPassConfirm"
            class="absolute right-0 top-9 w-10"
          >
            <svg
              v-if="blockViewPassConfirm"
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

        <input
          @click.prevent.stop="updatePass()"
          type="button"
          class="my-2 px-4 py-2 w-1/3 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
          value="Salvar"
          :disabled="!enableButton"
        />
      </form>
    </div>
  </Panel>

  <Panel>
    <div>
      <ListOrders />
    </div>
  </Panel>

  <Panel>
    <h3 class="font-semibold">Minha conta:</h3>
    <hr class="my-2" />
    <div>
      <input
        @click.prevent.stop="handlerLogout()"
        type="button"
        class="w-full my-2 px-4 py-2 bg-yellow-950 text-white hover:bg-amber-900 rounded-lg text-center text-lg font-semibold disabled:bg-amber-700 disabled:cursor-not-allowed"
        value="Desconectar"
      />
    </div>
  </Panel>
  <div class="h-14">
    &nbsp;
  </div>
</template>

<script setup>
import Panel from '@/components/Panel.vue'
import { computed, reactive, ref, onBeforeMount, onMounted } from 'vue'
import { userStore } from '@/stores/user'
import ListOrders from '@/views/profile/ListOrders.vue'
import { storeToRefs } from 'pinia'

const store = userStore()
const { handlerLogout, handlerUpdate, getUser } = store
const { user } = storeToRefs(store)

const isEditing = ref(false)
const errors = ref({})
const blockViewPass = ref(true)
const blockViewPassConfirm = ref(true)

const frmPass = reactive({
  password: '',
  password_confirmation: ''
})

const enableButton = computed(() => {
  return (
    frmPass.password !== '' &&
    frmPass.password.length > 3 &&
    frmPass.password_confirmation !== '' &&
    frmPass.password_confirmation.length > 3 &&
    frmPass.password === frmPass.password_confirmation
  )
})

const updatePass = async () => {
  await handlerUpdate(frmPass)
}

const updateUser = async () => {
  isEditing.value = !isEditing.value

  if (!isEditing.value) {
    await handlerUpdate(user.value)
  }
}

onBeforeMount(async () => {
  await getUser()
})

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
