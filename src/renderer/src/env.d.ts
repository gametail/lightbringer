/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RENDERER_VITE_LEAGUE_DEV_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
