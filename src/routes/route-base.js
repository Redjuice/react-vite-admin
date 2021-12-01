import Login from '@/views/base/Login';
import NotFound from '@/views/base/404';
const baseRoutes = [
  {
    title: '登录',
    path: '/',
    exact: true,
    component: Login
  },
  {
    title: '404',
    path: '/404',
    exact: true,
    component: NotFound
  }
];

export default baseRoutes;
