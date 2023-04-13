import { installPinia } from './install-pinia'

installPinia({ stubActions: false })

// @ts-expect-error
global.runningTests = true
