import AsyncComponent from './components/AsyncComponent';
import config from '../views/app';
const files = import.meta.glob(`../views/**/*.jsx`);
import store from '@/redux/store';
import { SAVE_MENU } from '@/redux/constant';

// 配置路由
let configRouter = [];

// 获取路由path
const getPath = (parentUrl, router) => {
  let lastPath = getCname(router.ename);
  return optimizePath(`${parentUrl}/${lastPath}`);
};
// 获取路由子集
const getChildren = (router) => router.children || [];
// 获取组件
const getComponent = (parentUrl, router) => {
  const lastPath = getCname(router.ename);
  const path = `../views${parentUrl}/${lastPath}.jsx`;
  return AsyncComponent(files[path]);
};
// 获取组件key
const getKey = (parentUrl, router) => {
  let lastPath = getCname(router.ename);
  let key = optimizePath(`${parentUrl}/${lastPath}`);
  return key.replace(/\//g, '_').substring(1, key.length);
};
// 获取页面标题
const getTitle = (router) => {
  return router.cname;
};
// 兼容ename
const getCname = (ename) => {
  let path = `${ename}/${ename}`;
  ename?.indexOf('_') > 0 && (path = ename.replace('_', '/'));
  return path;
};
// 优化path 重复的去重
const optimizePath = (path) => {
  let arr = path.split('/');
  let newArr = Array.from(new Set(arr));
  return newArr.join('/');
};
// 获取路由的参数
const getRouterParams = (parentUrl, router) => {
  return {
    path: getPath(parentUrl, router),
    children: getChildren(router),
    key: getKey(parentUrl, router),
    component: getComponent(parentUrl, router),
    show: !router.hide,
    exact: router.exact || false,
    icon: router.icon,
    meta: {
      title: getTitle(router)
    }
  };
};
// 组装配置的路由
const addRouter = (arr, router, parentUrl) => {
  router.flat().forEach((item, index) => {
    const { path, children, key, meta, component, show, exact, icon } =
      getRouterParams(parentUrl, item);

    arr.push({
      path,
      key,
      meta,
      component,
      menuShow: show,
      menuName: item.cname,
      exact,
      icon,
      routes: []
    });

    // 递归加载子路由
    children.length && addRouter(arr[index].routes, children, path);
  });
};

addRouter(configRouter, [config], '');
store.dispatch({ type: SAVE_MENU, data: configRouter });
export default configRouter;
