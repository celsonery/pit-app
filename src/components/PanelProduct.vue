<template>
    <div class="mx-auto max-w-[270px] bg-white rounded-md overflow-hidden">
      <img v-if="props.product.gtins[0].images[0]" :src="`${api_url}/storage/images/products/${props.product.gtins[0].images[0].url}`" :alt="props.product.name" />
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9/12 mx-auto">
          <path fill-rule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clip-rule="evenodd" />
        </svg>

      <div class="grid justify-items-stretch p-2 md:p-4">
        <p class="font-semibold text-xs justify-self-center mb-1">{{ props.product.name }}</p>
        <p class="justify-self-end font-semibold text-sm">{{ props.product.gtins[0].price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }}</p>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  product: {
    required: true,
    type: Object
  }
})

const api_url = import.meta.env.VITE_API_URL
</script>
