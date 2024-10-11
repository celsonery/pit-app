<template>
  <carousel :autoplay="3000" :wrap-around="true" :items-to-show="1">
    <slide v-for="slide in items" :key="slide.id">
      <img :src="slide.src" alt="slide">
    </slide>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const items = [
  {id: 0, src: 'images/slider/slide-01.jpg' },
  {id: 1, src: 'images/slider/slide-02.jpg' },
  {id: 2, src: 'images/slider/slide-03.jpg' },
  {id: 3, src: 'images/slider/slide-04.jpg' },
]

</script>
