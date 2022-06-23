<template>
  <div class="base-icon" :class="icon" />
</template>

<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>
