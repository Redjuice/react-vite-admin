/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path';
import configs from './src/configs';

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 获取环境变量
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const { VITE_APP_API_ROOT } = process.env;
  return defineConfig({
    plugins: [
      react(),
      // 配置 vite-plugin-style-import, 解决 AntDesign 按需加载
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
          javascriptEnabled: true, // 支持内联JavaScript
          modifyVars: configs.theme, // 重写less变量，定制Antd样式
          additionalData: `@import "@/styles/index.less";` // 引入全局样式
        }
      }
    },
    resolve: {
      // 别名
      alias: {
        '@': resolve(__dirname, 'src') // src路径
      }
    },
    // 开发服务器选项
    server: {
      port: configs.devPort, // 指定开发服务器端口
      open: configs.devOpen, // 自动打开浏览器
      // 为开发服务器配置自定义代理规则
      proxy: {
        '/api': {
          target: VITE_APP_API_ROOT, //配置你要请求的服务器地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  });
};
