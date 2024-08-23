import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('users', () => {
  // state
  const user = ref({})
  const listFavorites = ref([])
  const listWhiches = ref([])

  // getters
  const totalFavorites = computed(() => listFavorites.value.length)
  const totalWiches = computed(() => listWhiches.value.length)

  // actions
  function getProducts() {
    console.log('By products Store')
  }

  return { user, listFavorites, listWhiches, totalFavorites, totalWiches, getProducts }
})
