import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React y dependencias core
          vendor: ['react', 'react-dom'],
          
          // Separar router
          router: ['react-router-dom'],
          
          // Separar animaciones
          animations: ['framer-motion'],
          
          // Separar iconos
          icons: ['react-icons'],
          
          // Separar utilidades
          utils: ['dotted-map'],
        },
      },
    },
    
    // Configuraciones de optimización
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Elimina console.log en producción
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        safari10: true,
      },
    },
    
    // Ajusta el límite de advertencia
    chunkSizeWarningLimit: 800,
    // Configuración de CSS
    cssCodeSplit: true,
  },
  
  // Optimización de dependencias para desarrollo
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      'react-icons'
    ],
    force: true,
  },
  
  // Configuración del servidor de desarrollo
  server: {
    hmr: {
      overlay: false,
    },
  },
})
