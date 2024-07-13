import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@src': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@redux': '/src/redux',
      '@helpers': '/src/helpers',
      '@assets': '/src/assets',
      '@services': '/src/services',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@routes': '/src/routes',
      '@schemas': '/src/schemas',
    },
  },
  base: '/Pet_Love/',
});
