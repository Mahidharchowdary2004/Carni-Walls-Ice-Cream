import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Resolves '@' to the 'src' directory
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
