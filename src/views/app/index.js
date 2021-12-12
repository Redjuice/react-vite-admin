// 菜单
import Home from './home';
import Module from './module';
const config = [
  {
    icon: null,
    cname: '应用', // 菜单显示名称
    ename: 'app', // 路由的path
    exact: false, // 是否完全匹配
    hiden: true,
    children: [Home, Module]
  }
];
export default config;
