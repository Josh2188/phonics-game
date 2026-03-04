import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/phonics-game/', // 這是讓白畫面恢復正常的關鍵
})