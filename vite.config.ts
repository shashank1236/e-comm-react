import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    strictPort: true,
    proxy: {
      '/graphql': {
        target: `http://localhost:8080/e-comm-mage/graphql`,
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src', 'component') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src', 'pages') },
      { find: '@context', replacement: path.resolve(__dirname, 'src', 'context') },
      { find: '@data', replacement: path.resolve(__dirname, 'src', 'data') },
      { find: '@layout', replacement: path.resolve(__dirname, 'src', 'layout') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src', 'assets') },
      { find: '@api', replacement: path.resolve(__dirname, 'src', 'api') }
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setup-test.ts']
  }
});
