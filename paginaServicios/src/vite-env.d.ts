/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_KEY: string
    readonly VITE_PRIVATE_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }