<template>
  <div v-if="isLoading" class="mt-10 h-screen w-full text-white mx-auto justify-center text-center">
    carregando...
  </div>

  <div v-else class="mb-24">
    <div
      v-for="prod in store.productSelected"
      :key="prod.id"
      class="w-full h-full mb-auto md:w-10/12 md:mx-auto bg-white border border-gray-200 rounded-lg shadow sm:flex"
    >
      <img
        class="p-8 w-full sm:w-1/2 rounded-t-lg"
        :src="`http://127.0.0.1:8000/storage/images/products/${prod.gtins[0].images[0].url}`"
        :alt="prod.name"
      />
      <div class="flex flex-col px-5 sm:px-2 pb-5 sm:mt-5">
        <div class="relative" @click.prevent.stop="addFavorite(prod.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-7 text-orange-900 absolute right-2"
          >
            <path
              d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"
            />
          </svg>
        </div>

        <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ prod.name }}</h5>

        <div class="my-4">
          <span>{{ prod.description }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900">{{
            prod.gtins[0].price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })
          }}</span>
          <button
            @click.prevent.stop="addCart(prod.id)"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Comprar</button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productsStore } from '@/stores/products.js'
import { userStore } from '@/stores/user.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

// state
const store = productsStore()
const storeUser = userStore()

const route = useRoute()
const { isLoading } = storeToRefs(store)
const { addFavorite, addCart } = storeUser

// Hooks
onMounted(() => {
  store.getProduct(route.params.id)
})
</script>
