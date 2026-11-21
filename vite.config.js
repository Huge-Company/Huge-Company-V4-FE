import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    {
      name: 'modernize-tachyons-clearfix',
      enforce: 'pre',
      transform(code, id) {
        if (/[/\\]node_modules[/\\]tachyons[/\\]css[/\\]tachyons\.css(?:\?|$)/.test(id)) {
          return code.replace('.cf { *zoom: 1; }', '')
        }
        return null
      },
    },
    react(),
  ],
  server: {
    historyApiFallback: false
  }
})
