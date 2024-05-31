import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import UnoCSS from 'unocss/vite'
const isProd = process.env.NODE_ENV === 'production' ? true : false
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['since 2013'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all'
      ]
    }),
    react(),
    UnoCSS()
  ],
  optimizeDeps: {
    exclude: ['react-paginate']
  },
  server: {
    headers: {
      // 'Cross-Origin-Opener-Policy': 'same-origin',
      // 'Cross-Origin-Embedder-Policy': 'require-corp',
    },
    proxy: {
      '/scanApi': {
        target: 'https://scanapi.erbie.io',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/scanApi/, '')
      },
      '/scanAssets': {
        target: 'https://scan.erbie.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scanAssets/, '')
      }
    }
  },
  esbuild: {
    drop: isProd ? ['console', 'debugger'] : []
  },
  build: {
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        // warnings: false,
        // drop_console: isProd ? true : false,
        // drop_debugger: isProd ? true : false,
        // pure_funcs: ['console.log','console.warn']
      },
      output: {
        // 去掉注释内容
        comments: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // TODO 打包配置优化
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  define: {}
})
