/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TREE_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
