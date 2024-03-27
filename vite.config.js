import { defineConfig } from 'vite'
import { createRequire } from 'module';
import react from '@vitejs/plugin-react'

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
