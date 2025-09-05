import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/springbootemployeeapi/',   // affects production build paths
  server: {
    port: 5173,
    open: '/springbootemployeeapi/', // automatically opens this URL
  }
})
