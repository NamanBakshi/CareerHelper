import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
  proxy: { 
    '/register':{ 
      target:"http://localhost:5000",
      changeOrigin: true
    },
    '/login':{ 
      target:"http://localhost:5000",
      changeOrigin: true
    },
    '/logout':{ 
      target:"http://localhost:5000",
      changeOrigin: true
    },
    '/profile':{ 
      target:"http://localhost:5000",
      changeOrigin: true
    },
  }
}
})
