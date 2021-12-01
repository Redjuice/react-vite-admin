// 菜单
import Home from './home';
import module1 from './module1';

const config = [
  {
    cname: '应用', // 菜单显示名称
    ename: 'myapp', // 路由的path
    exact: false, // 是否完全匹配
    hiden: true,
    children: [Home, module1]
  }
];
export default config;
