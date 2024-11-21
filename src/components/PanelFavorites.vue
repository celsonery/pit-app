<template>
  <div class="ml-2 bg-white rounded-md overflow-hidden flex my-1">
    <div class="max-w-[120px] min-w-[120px">
      <img
        v-if="props.product.gtins[0].images[0]"
        :src="`http://127.0.0.1:8000/storage/images/products/${props.product.gtins[0].images[0].url}`"
        :alt="props.product.name"
      />
      <svg
        v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="flex flex-col p-2 md:p-4">
      <p class="font-semibold text-md mb-1">{{ props.product.name }}</p>
      <p class="text-md mb-1">{{ props.product.description }}</p>
      <p class="font-semibold text-sm">
        {{
          props.product.gtins[0].price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })
        }}
      </p>
    </div>
    <div class="p-4" @click.prevent.stop="removeFavorite(props.product.id)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user'

const props = defineProps({
  product: {
    required: true
  }
})

const store = userStore()
const { delFavorite } = store

function removeFavorite(id) {
  console.log(`Testando a exclusao do item dos favoritos! > ${id}`)

  delFavorite(id)
}
</script>
