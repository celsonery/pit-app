<template>
  <NavBar />
    <RouterView />
  <BottomBar />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import BottomBar from '@/components/BottomBar.vue'
</script>
