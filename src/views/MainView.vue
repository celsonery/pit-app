<template>
  <NavBarComponent />
  <div>&nbsp;</div>
  <div class="mt-10">
    <RouterView />
  </div>
  <BottomBarComponent />
</template>

<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue'
import BottomBarComponent from '@/components/BottomBarComponent.vue'
</script>
