import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS()
  ],
  optimizeDeps: {
    exclude: ['react-paginate']
  },
  server: {
    headers: {
      // 'Cross-Origin-Opener-Policy': 'same-origin',
      // 'Cross-Origin-Embedder-Policy': 'require-corp'
    },
    proxy: {
      '/scanApi': {
        target: 'https://scanapi.erbie.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scanApi/, '')
      },
      '/scanAssets': {
        target: 'https://scan.erbie.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scanAssets/, '')
      }
    }
  },
})
