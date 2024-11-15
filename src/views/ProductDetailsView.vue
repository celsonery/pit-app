<template>
  <div
    v-for="prod in store.productSelected"
    :key="prod.id"
    class="w-full md:w-10/12 md:mx-auto bg-white border border-gray-200 rounded-lg shadow"
  >
    <a href="#">
      <img class="p-8 w-full rounded-t-lg" :src="`http://127.0.0.1:8000/storage/images/products/${prod.gtins[0].images[0].url}`" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <div class="relative" @click.prevent.stop="addFavorite(prod.id)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 absolute right-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
<!--    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-7 text-orange-900 absolute right-2">-->
<!--      <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />-->
<!--    </svg>-->
      </div>

      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ prod.name }}</h5>
      </a>
<!--      <div class="flex items-center mt-2.5 mb-5">-->
<!--        <div class="flex items-center space-x-1 rtl:space-x-reverse">-->
<!--          <svg-->
<!--            class="w-4 h-4 text-yellow-300"-->
<!--            aria-hidden="true"-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            fill="currentColor"-->
<!--            viewBox="0 0 22 20"-->
<!--          >-->
<!--            <path-->
<!--              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"-->
<!--            />-->
<!--          </svg>-->
<!--          <svg-->
<!--            class="w-4 h-4 text-yellow-300"-->
<!--            aria-hidden="true"-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            fill="currentColor"-->
<!--            viewBox="0 0 22 20"-->
<!--          >-->
<!--            <path-->
<!--              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"-->
<!--            />-->
<!--          </svg>-->
<!--          <svg-->
<!--            class="w-4 h-4 text-yellow-300"-->
<!--            aria-hidden="true"-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            fill="currentColor"-->
<!--            viewBox="0 0 22 20"-->
<!--          >-->
<!--            <path-->
<!--              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"-->
<!--            />-->
<!--          </svg>-->
<!--          <svg-->
<!--            class="w-4 h-4 text-yellow-300"-->
<!--            aria-hidden="true"-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            fill="currentColor"-->
<!--            viewBox="0 0 22 20"-->
<!--          >-->
<!--            <path-->
<!--              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"-->
<!--            />-->
<!--          </svg>-->
<!--          <svg-->
<!--            class="w-4 h-4 text-gray-200 dark:text-gray-600"-->
<!--            aria-hidden="true"-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            fill="currentColor"-->
<!--            viewBox="0 0 22 20"-->
<!--          >-->
<!--            <path-->
<!--              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"-->
<!--            />-->
<!--          </svg>-->
<!--        </div>-->
<!--        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3"-->
<!--          >5.0</span-->
<!--        >-->
<!--      </div>-->
      <div class="my-4">
        <span>{{ prod.description }}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900">{{ prod.gtins[0].price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }}</span>
        <a
          @click.prevent.stop="addCart(prod.id)"
          href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Comprar</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { productsStore } from '../stores/products.js'
import { userStore } from '@/stores/users.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

// state
const store = productsStore()
const storeUser = userStore()

const route = useRoute()

const { addFavorite, addCart } = storeUser

// Hooks
onMounted(() => {
  console.log(route.params.id)
  store.getProduct(route.params.id)
})
</script>
