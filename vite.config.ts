import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({

  base: './',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'legacy-js-api', 'mixed-decls'],
      },
    },
  },
});
