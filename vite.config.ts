import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@/assets': path.resolve(__dirname, './app/assets'),
      '@/components': path.resolve(__dirname, './app/components')
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 3001,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // Update index.html to point to correct entry
  publicDir: 'public',
});

