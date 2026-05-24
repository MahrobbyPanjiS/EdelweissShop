import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Konfigurasi Vite
 * Mendefinisikan plugin resmi React agar sistem dapat membaca dan mengkompilasi 
 * berkas berekstensi .jsx dan .tsx secara optimal.
 */
export default defineConfig({
  plugins: [react()],
});