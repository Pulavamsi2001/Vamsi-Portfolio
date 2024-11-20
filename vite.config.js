import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Ensure CSS is bundled into a single file and avoid splitting
    rollupOptions: {
      output: {
        // Disable automatic chunking for CSS
        manualChunks: undefined, // Prevent splitting into multiple CSS files
      },
    },
  },
});
