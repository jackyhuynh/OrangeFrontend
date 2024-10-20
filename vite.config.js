import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use defineConfig to get proper typing and better configuration handling
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 3000,       // Set the port to 3000 (optional)
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias for cleaner imports
    },
  },
});
