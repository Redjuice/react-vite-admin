// 菜单
import Home from './home';
import Module from './module';
const appConfig = [
  {
    icon: null, // 菜单所显示的icon
    name: '应用', // 菜单以及权限验证所显示的中文名（*必填）
    path: 'app', // 权限验证所使用的 key 值，同时还可当作 name 在路由跳转中使用（*必填）
    show: false, // 是否显示
    exact: false, // 是否完全匹配
    children: [Home, Module]
  }
];
export default appConfig;
