import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
      '/build': 'http://localhost:3001'
    }
  }
})
