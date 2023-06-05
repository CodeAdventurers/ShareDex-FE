import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import viteEslint from 'vite-plugin-eslint';

// 全局 scss 文件的路径 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/styles/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), viteEslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // css 相关的配置
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
});
