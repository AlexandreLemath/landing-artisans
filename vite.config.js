import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base: './' permet de publier facilement sur GitHub Pages,
// même si ton site est hébergé dans un sous-dossier du type /nom-du-repo/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
