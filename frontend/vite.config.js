import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  inlineDynamicImports: true,
  build:{
    rollupOptions:{
      output: {
				manualChunks: false,
				inlineDynamicImports: true,
				//entryFileNames: '[name].js',   // currently does not work for the legacy bundle
				//assetFileNames: '[name].[ext]',        
				sourcemap: true,
        format: 'iife',
        name: 'app',
        dir: '../backend/spa/templates/',
      },
    }
  },
})
