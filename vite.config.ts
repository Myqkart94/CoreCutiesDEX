import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['ethers'],
    exclude: ['lucide-react'],
  },
  build: {
    commonjsOptions: {
      include: [/ethers/, /node_modules/],
    },
  },
});