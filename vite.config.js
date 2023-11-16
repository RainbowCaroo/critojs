import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      // '@buttons': path.resolve(__dirname, 'src/scss/buttons'),
      // '@core': path.resolve(__dirname, 'src/scss/core'),
      // '@sections': path.resolve(__dirname, 'src/scss/sections')
    }
  }
})
