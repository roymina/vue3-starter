/**https://pinia.vuejs.org/core-concepts/#setup-stores */
import { defineStore } from 'pinia';

export const useOptionStore = defineStore('optionStore', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
