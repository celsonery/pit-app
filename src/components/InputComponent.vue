<template>
  <slot name="label">{{ label }}</slot>
  <input
    :name="name"
    :type="type"
    :required="required"
    :placeholder="placeholder"
    class="mb-4 px-4 py-2 rounded-lg bg-amber-100 border border-amber-700">
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  required: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
})
</script>
