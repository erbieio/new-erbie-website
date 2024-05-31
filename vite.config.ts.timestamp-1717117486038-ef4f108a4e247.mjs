// vite.config.ts
import { defineConfig } from "file:///D:/Job/Companys/new-erbie/new-erbie-website/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Job/Companys/new-erbie/new-erbie-website/node_modules/@vitejs/plugin-react/dist/index.mjs";
import legacy from "file:///D:/Job/Companys/new-erbie/new-erbie-website/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import UnoCSS from "file:///D:/Job/Companys/new-erbie/new-erbie-website/node_modules/unocss/dist/vite.mjs";
var isProd = process.env.NODE_ENV === "production" ? true : false;
var vite_config_default = defineConfig({
  plugins: [
    legacy({
      targets: ["since 2013"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      renderLegacyChunks: true,
      polyfills: [
        "es.symbol",
        "es.array.filter",
        "es.promise",
        "es.promise.finally",
        "es/map",
        "es/set",
        "es.array.for-each",
        "es.object.define-properties",
        "es.object.define-property",
        "es.object.get-own-property-descriptor",
        "es.object.get-own-property-descriptors",
        "es.object.keys",
        "es.object.to-string",
        "web.dom-collections.for-each",
        "esnext.global-this",
        "esnext.string.match-all"
      ]
    }),
    react(),
    UnoCSS()
  ],
  optimizeDeps: {
    exclude: ["react-paginate"]
  },
  server: {
    headers: {
      // 'Cross-Origin-Opener-Policy': 'same-origin',
      // 'Cross-Origin-Embedder-Policy': 'require-corp',
    },
    proxy: {
      "/scanApi": {
        target: "https://scanapi.erbie.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scanApi/, "")
      },
      "/scanAssets": {
        target: "https://scan.erbie.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/scanAssets/, "")
      }
    }
  },
  esbuild: {
    drop: isProd ? ["console", "debugger"] : []
  },
  build: {
    chunkSizeWarningLimit: 1e3,
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
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    }
  },
  define: {}
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxKb2JcXFxcQ29tcGFueXNcXFxcbmV3LWVyYmllXFxcXG5ldy1lcmJpZS13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxKb2JcXFxcQ29tcGFueXNcXFxcbmV3LWVyYmllXFxcXG5ldy1lcmJpZS13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Kb2IvQ29tcGFueXMvbmV3LWVyYmllL25ldy1lcmJpZS13ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyB0cnVlIDogZmFsc2Vcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgbGVnYWN5KHtcbiAgICAgIHRhcmdldHM6IFsnc2luY2UgMjAxMyddLFxuICAgICAgYWRkaXRpb25hbExlZ2FjeVBvbHlmaWxsczogWydyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnXSxcbiAgICAgIHJlbmRlckxlZ2FjeUNodW5rczogdHJ1ZSxcbiAgICAgIHBvbHlmaWxsczogW1xuICAgICAgICAnZXMuc3ltYm9sJyxcbiAgICAgICAgJ2VzLmFycmF5LmZpbHRlcicsXG4gICAgICAgICdlcy5wcm9taXNlJyxcbiAgICAgICAgJ2VzLnByb21pc2UuZmluYWxseScsXG4gICAgICAgICdlcy9tYXAnLFxuICAgICAgICAnZXMvc2V0JyxcbiAgICAgICAgJ2VzLmFycmF5LmZvci1lYWNoJyxcbiAgICAgICAgJ2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcycsXG4gICAgICAgICdlcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5JyxcbiAgICAgICAgJ2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InLFxuICAgICAgICAnZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnLFxuICAgICAgICAnZXMub2JqZWN0LmtleXMnLFxuICAgICAgICAnZXMub2JqZWN0LnRvLXN0cmluZycsXG4gICAgICAgICd3ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoJyxcbiAgICAgICAgJ2VzbmV4dC5nbG9iYWwtdGhpcycsXG4gICAgICAgICdlc25leHQuc3RyaW5nLm1hdGNoLWFsbCdcbiAgICAgIF1cbiAgICB9KSxcbiAgICByZWFjdCgpLFxuICAgIFVub0NTUygpXG4gIF0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsncmVhY3QtcGFnaW5hdGUnXVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAvLyAnQ3Jvc3MtT3JpZ2luLU9wZW5lci1Qb2xpY3knOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgLy8gJ0Nyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3knOiAncmVxdWlyZS1jb3JwJyxcbiAgICB9LFxuICAgIHByb3h5OiB7XG4gICAgICAnL3NjYW5BcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vc2NhbmFwaS5lcmJpZS5pbycsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL3NjYW5BcGkvLCAnJylcbiAgICAgIH0sXG4gICAgICAnL3NjYW5Bc3NldHMnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vc2Nhbi5lcmJpZS5pbycsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL3NjYW5Bc3NldHMvLCAnJylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVzYnVpbGQ6IHtcbiAgICBkcm9wOiBpc1Byb2QgPyBbJ2NvbnNvbGUnLCAnZGVidWdnZXInXSA6IFtdXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIC8vIHdhcm5pbmdzOiBmYWxzZSxcbiAgICAgICAgLy8gZHJvcF9jb25zb2xlOiBpc1Byb2QgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIC8vIGRyb3BfZGVidWdnZXI6IGlzUHJvZCA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgLy8gcHVyZV9mdW5jczogWydjb25zb2xlLmxvZycsJ2NvbnNvbGUud2FybiddXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFx1NTNCQlx1NjM4OVx1NkNFOFx1OTFDQVx1NTE4NVx1NUJCOVxuICAgICAgICBjb21tZW50czogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIC8vIFRPRE8gXHU2MjUzXHU1MzA1XHU5MTREXHU3RjZFXHU0RjE4XHU1MzE2XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkLnRvU3RyaW5nKCkuc3BsaXQoJ25vZGVfbW9kdWxlcy8nKVsxXS5zcGxpdCgnLycpWzBdLnRvU3RyaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRlZmluZToge31cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULFNBQVMsb0JBQW9CO0FBQzFWLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxZQUFZO0FBQ25CLElBQU0sU0FBUyxRQUFRLElBQUksYUFBYSxlQUFlLE9BQU87QUFFOUQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsU0FBUyxDQUFDLFlBQVk7QUFBQSxNQUN0QiwyQkFBMkIsQ0FBQyw2QkFBNkI7QUFBQSxNQUN6RCxvQkFBb0I7QUFBQSxNQUNwQixXQUFXO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsZ0JBQWdCO0FBQUEsRUFDNUI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBO0FBQUEsSUFHVDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLGNBQWMsRUFBRTtBQUFBLE1BQ2xEO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsaUJBQWlCLEVBQUU7QUFBQSxNQUNyRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNLFNBQVMsQ0FBQyxXQUFXLFVBQVUsSUFBSSxDQUFDO0FBQUEsRUFDNUM7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLHVCQUF1QjtBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS1Y7QUFBQSxNQUNBLFFBQVE7QUFBQTtBQUFBLFFBRU4sVUFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixhQUFhLElBQUk7QUFFZixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsbUJBQU8sR0FBRyxTQUFTLEVBQUUsTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxTQUFTO0FBQUEsVUFDeEU7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRLENBQUM7QUFDWCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
