import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/Components"
    },
    server: {
      port: 5173,  // Frontend runs on port 3000
      proxy: {
        '/api': {
          target: 'http://localhost:3001/',  // Backend running on port 5000
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
})
