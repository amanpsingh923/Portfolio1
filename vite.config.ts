import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio1/', // 👈 important for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
