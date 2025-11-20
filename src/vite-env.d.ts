/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_API_HOST: string;
    readonly VITE_POSTER_SIZE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}