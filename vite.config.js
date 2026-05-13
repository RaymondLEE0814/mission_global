import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 의 프로젝트 URL 은 https://<user>.github.io/<repo>/ 구조라
// 프로덕션 빌드 때만 base 를 '/mission_global/' 로 설정한다.
// 개발 서버(npm run dev)에서는 '/' 로 둬서 로컬 검증이 깨지지 않게 함.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/mission_global/' : '/',
  server: {
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
}))
