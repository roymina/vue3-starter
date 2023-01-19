/**持久化store定义 */
export const usePersistStore = defineStore('persist', {
  state: () => ({
    baseUrl: 'http://localhost:8000/api',
    token: ''
  }),
  persist: true
})
