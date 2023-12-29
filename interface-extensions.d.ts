import type { Router } from 'vue-router'
import 'vue-router'
import 'pinia'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    /**
     * Vue Router instance
     */
    router: Router
  }
}
