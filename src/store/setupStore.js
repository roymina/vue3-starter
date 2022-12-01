/**https://pinia.vuejs.org/core-concepts/#setup-stores */
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useSetupStore = defineStore('setupStore', () => {
  const count = ref(0);
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
