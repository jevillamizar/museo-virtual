import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':  ['react', 'react-dom', 'react-router-dom'],
          'three-vendor':  ['three', '@react-three/fiber', '@react-three/drei', 'maath'],
          'splat-vendor':  ['@mkkellogg/gaussian-splats-3d'],
          'ui-vendor':     ['@mui/material', '@emotion/react', '@emotion/styled'],
          'motion-vendor': ['framer-motion'],
          'map-vendor':    ['leaflet', 'react-leaflet'],
          'misc-vendor':   ['react-slick', 'slick-carousel', 'react-icons', 'prop-types'],
        },
      },
    },
  },
});
