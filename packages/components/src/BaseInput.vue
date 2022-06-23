<template>
  <input
    v-model="input"
    class="input-base block w-full rounded-md border-gray-300 shadow-sm transition-all duration-50 ease-in-out focus:(border-blue-500 ring-blue-500)"
    type="text"
  />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    disabled?: boolean
    type?: string
    placeholder?: string
  }>(),
  {
    modelValue: '',
    disabled: false,
    type: 'text',
  }
)

const emit = defineEmits<{ (...args: any): void }>()

const input = useVModel(props, 'modelValue', emit, { passive: true })
</script>
