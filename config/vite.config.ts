import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: 'build',
  },
  server: {
    // Enable hot module replacement (HMR)
    hmr: true,
    watch: {
      usePolling: true,
    }
  },
});