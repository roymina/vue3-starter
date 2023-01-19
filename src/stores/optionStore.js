/**https://pinia.vuejs.org/core-concepts/#setup-stores */
//Option Store 简单定义示例，可删除本文件
import { defineStore } from 'pinia'

export const useOptionStore = defineStore('optionStore', {
  state: () => ({ count: 0, name: 'Roy' }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
