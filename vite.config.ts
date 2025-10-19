import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  base: '/mini-tools/', // Change this to your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
