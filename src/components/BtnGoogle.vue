<template>
  <buttom class="my-2 px-4 py-2 text-red-700 border border-red-800 hover:bg-red-200 rounded-lg text-center text-lg font-semibold">
    <img src="@/assets/images/google-icon.png" class="absolute w-7 h-7">
    Google
  </buttom>
</template>

<script setup>
import http from '@/services/http'

function login() {
  try {
    http.get('/oauth/google')
  } catch (error){
    console.log(error)
  }
}
</script>
