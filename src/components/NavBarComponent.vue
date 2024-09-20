<template>
<!--  <div class="fixed flex h-12 p-1 bg-white w-full text-orange-950">-->
  <div class="sticky top-0 flex h-12 p-1 mb-2 shadow-md bg-white w-full text-orange-950">
    <div @click.prevent="$router.push('/')" class="relative w-10 h-10 mx-2">
      <img src="@/assets/coffee-icon.png">
    </div>
    <div>
      <h1 class="text-3xl font-display">Coffee</h1>
    </div>
    <div @click.prevent="$router.push('/cart')" class="absolute right-2 m-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
      </svg>
    </div>
    <div v-if="totalFavorites > 0" class="absolute flex justify-center right-1 bg-gray-900 text-white rounded-full w-6 h-6">
      {{ totalFavorites }}
    </div>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/users.js'
import { storeToRefs } from 'pinia'

const store = userStore()
const { totalFavorites } = storeToRefs(store)

</script>
