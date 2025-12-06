import { defineConfig } from 'vite'
<<<<<<< HEAD
=======
import tailwindcss from '@tailwindcss/vite'
>>>>>>> bfa1c077c0622a92f3682dbaf0c3efa4714b5db3
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react(), tailwindcss()],
>>>>>>> bfa1c077c0622a92f3682dbaf0c3efa4714b5db3
})
