import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Country-Founder-React/',
  // server: {
  //   origin: 'http://localhost:3000',
  //   host: '0.0.0.0',
  //   fs: {
  //     strict: true,
  //   }
  // }
});