import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { fileURLToPath } from 'url';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000
  },

  resolve :{
    alias :{
      '@styleSheets': path.resolve(fileURLToPath(new URL('./src/assets/stylesheets', import.meta.url))),
      '@components':path.resolve(fileURLToPath(new URL('./src/components', import.meta.url))),
      '@customHooks':path.resolve(fileURLToPath(new URL('./src/hooks', import.meta.url))),
      '@images':path.resolve(fileURLToPath(new URL('./src/assets/images', import.meta.url))),
      '@scripts':path.resolve(fileURLToPath(new URL('./src/assets/js', import.meta.url))),
      '@context':path.resolve(fileURLToPath(new URL('./src/context', import.meta.url))),
      '@util':path.resolve(fileURLToPath(new URL('./src/util', import.meta.url))),
      '@services':path.resolve(fileURLToPath(new URL('./src/services', import.meta.url)))
    }
  }

})
