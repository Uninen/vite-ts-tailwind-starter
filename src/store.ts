import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    debug: import.meta.env.MODE === 'development',
    appMeta: {
      version:
        import.meta.env.MODE === 'development'
          ? import.meta.env.VITE_APP_VERSION + '-dev'
          : import.meta.env.VITE_APP_VERSION,
      builtAt: import.meta.env.VITE_APP_BUILD_EPOCH
        ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
        : undefined,
    },
    isInitialized: false,
    count: 0,
  }),

  actions: {
    initApp() {
      this.isInitialized = true
      console.log('app initialized!')
    },

    increment(value = 1) {
      this.count += value
    },

    goToDemo(event: Event) {
      event.preventDefault()
      this.router.push('/demo/')
    },
  },

  getters: {
    isReady: state => {
      return state.isInitialized
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
