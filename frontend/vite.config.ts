import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  test: {
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/tests/**'],
      reporter: ['text', 'html', 'lcov'],
    },
    environment: 'jsdom',
  },
})
