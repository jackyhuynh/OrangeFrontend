import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// vite.config.js
export default {
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 3000,       // Explicitly set the port (optional)
    hmr: {
      overlay: false,
    },
  },
};
