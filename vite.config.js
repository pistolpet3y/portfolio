import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/', // 🔥 Fix för GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 🔥 Se till att @ pekar rätt
    },
  },
  server: {
    watch: {
      usePolling: true, // 🔥 Fix för WebSocket-problem
    },
  },
});
