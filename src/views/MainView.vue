<template>
  <NavBarComponent />
    <RouterView />
  <BottomBarComponent />
</template>

<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue'
import BottomBarComponent from '@/components/BottomBarComponent.vue'
</script>
