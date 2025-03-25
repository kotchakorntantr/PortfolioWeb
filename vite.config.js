import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    hmr: true,  // เปิดใช้งาน Hot Module Replacement
    watch: {
      usePolling: true, // ใช้ polling ถ้าพบปัญหา HMR ไม่ทำงาน
    },
  },
})

