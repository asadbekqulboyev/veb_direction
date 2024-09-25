import { defineConfig } from 'vite';

export default defineConfig({
  // Asosiy kirish fayli
  build: {
    rollupOptions: {
      external: ['jquery'], // jQuery tashqi modul sifatida
    },
  },
  // Agar siz boshqa parametrlar qo'shmoqchi bo'lsangiz, ularni bu yerda kiritishingiz mumkin
});
