// vite.config.ts
import { defineConfig } from "file:///C:/Users/22913/Desktop/dist/node_modules/.pnpm/vite@5.4.21_@types+node@22.19.19/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/22913/Desktop/dist/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_918ddfebd764920c80b45960240b2aa0/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import Inspector from "file:///C:/Users/22913/Desktop/dist/node_modules/.pnpm/unplugin-vue-dev-locator@1._fe967b0264bf2725cbfdfa9ef7e05c0b/node_modules/unplugin-vue-dev-locator/dist/vite.mjs";
import traeBadgePlugin from "file:///C:/Users/22913/Desktop/dist/node_modules/.pnpm/vite-plugin-trae-solo-badge_4276a173f6c0e9432520625ee324aae8/node_modules/vite-plugin-trae-solo-badge/dist/vite-plugin.esm.js";
var __vite_injected_original_dirname = "C:\\Users\\22913\\Desktop\\dist";
var vite_config_default = defineConfig({
  build: {
    sourcemap: "hidden"
  },
  plugins: [
    vue(),
    Inspector(),
    traeBadgePlugin({
      variant: "dark",
      position: "bottom-right",
      prodOnly: true,
      clickable: true,
      clickUrl: "https://www.trae.ai/solo?showJoin=1",
      autoTheme: true,
      autoThemeTarget: "#app"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
      // ✅ 定义 @ = src
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwyMjkxM1xcXFxEZXNrdG9wXFxcXGRpc3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDIyOTEzXFxcXERlc2t0b3BcXFxcZGlzdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMjI5MTMvRGVza3RvcC9kaXN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAndW5wbHVnaW4tdnVlLWRldi1sb2NhdG9yL3ZpdGUnXG5pbXBvcnQgdHJhZUJhZGdlUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLXRyYWUtc29sby1iYWRnZSdcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogJ2hpZGRlbicsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBJbnNwZWN0b3IoKSxcbiAgICB0cmFlQmFkZ2VQbHVnaW4oe1xuICAgICAgdmFyaWFudDogJ2RhcmsnLFxuICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgICAgcHJvZE9ubHk6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBjbGlja1VybDogJ2h0dHBzOi8vd3d3LnRyYWUuYWkvc29sbz9zaG93Sm9pbj0xJyxcbiAgICAgIGF1dG9UaGVtZTogdHJ1ZSxcbiAgICAgIGF1dG9UaGVtZVRhcmdldDogJyNhcHAnLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksIC8vIFx1MjcwNSBcdTVCOUFcdTRFNDkgQCA9IHNyY1xuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2USxTQUFTLG9CQUFvQjtBQUMxUyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZUFBZTtBQUN0QixPQUFPLHFCQUFxQjtBQUo1QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxJQUNuQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
