import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Không cần tailwindcss ở đây
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
