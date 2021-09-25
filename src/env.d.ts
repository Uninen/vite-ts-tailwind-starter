/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_BUILD_EPOCH: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
