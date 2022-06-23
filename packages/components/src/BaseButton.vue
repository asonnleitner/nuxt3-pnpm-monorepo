<template>
  <Component
    :is="to ? 'nuxt-link' : 'button'"
    class="button-base transition-all duration-100 ease-in-out disabled:(opacity-50 pointer-events-none)"
  >
    <slot name="icon">
      <BaseIcon v-if="icon" :icon="icon" class="button-icon" />
    </slot>
    <slot />
  </Component>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'

defineProps<{
  to?: string
  icon?: string
}>()
</script>
