import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // 配置 vite-plugin-style-import, 解决 AntDesign 按需加载
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    // 指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 支持内联JavaScript
        // modifyVars: themeVariables // 重写less变量，定制Antd样式
      }
    }
  }
});
