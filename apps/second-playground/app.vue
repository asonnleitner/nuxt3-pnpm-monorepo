<template>
  <NuxtPage />
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'h-full bg-gray-50',
  },
  bodyAttrs: {
    class:
      'flex min-h-full flex-col overflow-hidden bg-gray-100 font-sans text-gray-600 antialiased',
  },
})
</script>
