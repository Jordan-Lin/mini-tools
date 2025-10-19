import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  base: '/', // Use absolute root path for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  },
  server: {
    port: 3000
  }
})
