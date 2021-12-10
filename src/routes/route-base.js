import Login from '@/views/base/Login';
import NotAuth from '@/views/base/403';
import NotFound from '@/views/base/404';
import NotNet from '@/views/base/500';
const baseRoutes = [
  {
    title: '登录',
    path: '/',
    exact: true,
    component: Login
  },
  {
    title: '403',
    path: '/403',
    exact: true,
    component: NotAuth
  },
  {
    title: '404',
    path: '/404',
    exact: true,
    component: NotFound
  },
  {
    title: '500',
    path: '/500',
    exact: true,
    component: NotNet
  }
];

export default baseRoutes;
