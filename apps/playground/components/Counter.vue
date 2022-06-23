<template>
  <div class="card-base max-w-sm mx-auto mt-4">
    <div class="card-body">
      <BaseInput
        v-model="count"
        class="text-center text-lg font-bold"
        readonly
      />
    </div>
    <div class="card-footer">
      <div
        class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
      >
        <BaseButton
          class="button-primary w-full sm:col-start-2 text-lg"
          icon="mdi:plus"
          @click="add"
        />
        <BaseButton
          class="mt-3 w-full sm:mt-0 sm:col-start-1 text-lg"
          icon="mdi:minus"
          @click="subtract"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { count, add, subtract } = useCounter()
</script>
