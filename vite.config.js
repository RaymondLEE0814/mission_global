import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base 를 상대경로(./)로 두면 어디서 서빙하든(루트 도메인 Vercel, 서브경로
// GitHub Pages /mission_global/, 로컬 file:// 등) asset URL 이 자동으로 맞춰진다.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
