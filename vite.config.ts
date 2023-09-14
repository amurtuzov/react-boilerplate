import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import legacy from '@vitejs/plugin-legacy'
import svgr from 'vite-plugin-svgr'
import eslintPlugin from 'vite-plugin-eslint'
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  preview: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/styles/main";` },
    },
  },
  server: {
    port: 8080,
    hmr: {
      host: 'localhost',
    },
  },
  test: {
    // silent: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: '/tests/setup-vitest.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', '/tests/setup-vitest.ts'],
    },
  },
})
