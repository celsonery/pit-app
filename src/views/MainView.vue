<template>
  <NavBar />
  <div class="mt-12">
    <RouterView />
  </div>
  <BottomBar />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import BottomBar from '@/components/BottomBar.vue'
</script>
