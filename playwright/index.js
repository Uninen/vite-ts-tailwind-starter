import { createTestingPinia } from '@pinia/testing'

createTestingPinia({
  createSpy: (args) => {
    console.log('spy', args)
    return () => {
      console.log('spyreturns')
    }
  },
})
