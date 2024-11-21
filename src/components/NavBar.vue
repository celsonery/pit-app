<template>
  <div class="top-0 flex h-12 p-1 mb-2 shadow-md bg-white w-full text-orange-950">
    <div @click.prevent="$router.push({ name: 'index' })" class="flex-none w-10 h-10 mx-2">
      <img src="@/assets/coffee-icon.png" />
    </div>
    <div class="flex-none w-12">
      <h1 class="text-3xl font-display">Café</h1>
    </div>

    <div class="relative flex-1">
      <input
        name="search"
        placeholder="Pesquisar"
        class="mx-2 px-2 py-2 rounded-lg bg-amber-100 border border-amber-700 w-full"
        required
        minlength="3"
        maxlength="20"
        type="search"
      />
    </div>

    <div @click.prevent="$router.push('/cart')" class="flex-none w-10 ml-4 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-8"
      >
        <path
          d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        />
      </svg>
    </div>
    <div
      v-if="totalCart > 0"
      class="absolute flex justify-center right-1 bg-gray-900 text-white rounded-full w-6 h-6"
    >
      {{ totalCart }}
    </div>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user.js'
import { storeToRefs } from 'pinia'

const store = userStore()
const { totalCart } = storeToRefs(store)
</script>
