import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "0.0.0.0",
    port: 5000,
    hmr: {
      clientPort: 443,
      protocol: "wss",
      host: "d4bd62c5-5381-40c0-b008-d58217690732-00-2hbxx8jies6lw.spock.replit.dev"
    },
    proxy: {
      "/api": {
        // Route dev API calls to production by default so local UI sees real data
        target: process.env.VITE_API_URL || "https://neeiz-01.web.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        // Disable hashing to simplify cache management for now
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/chunk.js`,
        assetFileNames: `assets/[name].[ext]`,
        manualChunks: undefined,
      },
    },
  },
}));