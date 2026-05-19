import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// GitHub Pages project sites are usually served from a subfolder.
// A relative base keeps the built assets portable across:
// - https://USER.github.io/REPO/
// - https://USER.github.io/
// - custom domains
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
