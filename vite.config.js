import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // jQuery tashqi modul sifatida ko'rsatilmoqda
      external: ['jquery'],
      output: {
        globals: {
          jquery: '$'
        }
      }
    }
  }
});
