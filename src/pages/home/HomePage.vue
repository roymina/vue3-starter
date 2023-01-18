<template>
  <div class="w-full h-full flex">
    <div class="w-52 h-full bg-gray-500 text-light-50">sidebar</div>
    <div class="flex flex-col h-full flex-1">
      <div class="h-14 bg-gray-200">header</div>
      <div class="flex-1 p-4">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup> 
</script>
