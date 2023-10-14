import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import { ProjectConfig } from 'vitest'

interface ViteConfig extends ProjectConfig {}

export default defineConfig({
  plugins: [react(), eslint()],
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
      {
        find: '@components',
        replacement: '/src/components',
      },
      {
        find: '@pages',
        replacement: '/src/pages',
      },
      {
        find: '@core',
        replacement: '/src/core',
      },
      {
        find: '@config',
        replacement: '/src/core/config',
      },
      {
        find: '@assets',
        replacement: '/src/assets',
      },
    ],
  },
  test: {
    globals: true,
    name: 'Projeto Base React - Best Pratices',
    root: './src',
    environment: 'jsdom',
    setupFiles: ['./tests/setupTests.tsx'],
    clearMocks: true,
    silent: true,
    coverage: {
      all: true,
      '100': true,
      provider: 'v8',
      exclude: ['node_modules', 'tests', 'coverage', 'dist', '**/*.d.ts'],
      include: ['**/*.{js,jsx,ts,tsx}'],
      reportsDirectory: '../coverage',
    },
  },
}) as ViteConfig
