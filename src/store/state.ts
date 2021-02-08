export interface State {
  debug: boolean
  version: string
  isInitialized: boolean
  count: number
}

export const state: State = {
  debug: import.meta.env.MODE === 'development',
  version: _APP_VERSION,
  isInitialized: false,
  count: 0,
}
