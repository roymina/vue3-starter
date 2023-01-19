<template>
  <div class="w-full h-full flex flex-col justify-center items-center space-y-4 bg-yellow-50">
    <svg-icon name="strawberry" size="256px" />
    <div class="text-3xl font-bold">vue3 starter template</div>
    <div>vue3 + pinia + windicss + svgicon</div>
    <div class="flex space-x-2 items-center">
      <div>{{ count }}</div>
      <button @click="increment" class="bg-yellow-100 border-1 px-2">add</button>
    </div>
  </div>
</template>

<script setup>
import { useOptionStore } from '@/stores/optionStore'
import { useSetupStore } from '@/stores/setupStore'
const optionStore = useOptionStore()
const { count, doubleCount } = storeToRefs(optionStore)
const { increment } = optionStore

const setupStore = useSetupStore()
</script>
