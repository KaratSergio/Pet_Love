interface ImportMetaEnv {
  readonly VITE_URL_DATABASE: string;
  readonly VITE_CLOUDINARY_URL: string;
  readonly VITE_CLOUDINARY_PRESET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
