import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import svgr from 'vite-plugin-svgr'
import eslintPlugin from 'vite-plugin-eslint'
import { loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
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
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    preview: {
      port: 3000,
    },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
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
}
