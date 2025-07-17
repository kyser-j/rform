import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const projectRootDir = resolve(__dirname);

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(projectRootDir, './src') }],
  },
});
