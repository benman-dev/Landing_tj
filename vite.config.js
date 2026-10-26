import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages sirve el sitio en https://benman-dev.github.io/Landing_tj/
  base: '/Landing_tj/',
})
