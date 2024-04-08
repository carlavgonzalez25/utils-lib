/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'utils-lib',
      fileName: 'utils-lib'
    }
  },
  test: {
    globals: true
  },
  plugins: [dts({ outDir: 'dist', exclude: ['**/__tests__/**'] })]
})
