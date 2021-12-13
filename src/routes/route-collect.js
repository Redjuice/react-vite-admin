import AsyncComponent from './components/AsyncComponent';
import appConfig from '../views/app';
const files = import.meta.glob(`../views/**/*.jsx`);
import store from '@/redux/store';
import { SAVE_MENU } from '@/redux/constant';

/**
 * @description 格式化path'
 * @author WangHeng
 * @param {string} path 页面path
 * @return {string} 格式化后的页面path
 */
const formatPath = (path) => {
  return path?.includes('_') ? path.replace('_', '/') : path;
};

/**
 * @description 优化path(去重处理)
 * @author WangHeng
 * @param {string} path 页面path
 * @return {string} 去重后的页面path
 */
const optimizePath = (path) => {
  let arr = path.split('/');
  let newArr = Array.from(new Set(arr));
  return newArr.join('/');
};

/**
 * @description 获取路由path
 * @author WangHeng
 * @param {string} parentPath 父路由path
 * @param {object} route 当前路由信息
 * @return {string} 完整的路由path
 */
const getPath = (parentPath, route) => {
  let path = formatPath(route.path);
  return optimizePath(`${parentPath}/${path}`);
};

/**
 * @description 获取子路由
 * @author WangHeng
 * @param {object} route 当前路由信息
 * @return {array} 子路由信息
 */
const getChildren = (route) => route.children || [];

/**
 * @description 获取异步组件
 * @author WangHeng
 * @param {string} parentPath 父路由path
 * @param {object} route 当前路由信息
 * @return {object} 返回的异步组件
 */
const getComponent = (parentPath, route) => {
  const crrentPath = formatPath(route.path);
  const path = `../views${parentPath}/${crrentPath}/${crrentPath}.jsx`;
  return AsyncComponent(files[path]);
};

/**
 * @description 获取页面唯一标识key
 * @author WangHeng
 * @param {string} parentPath 父路由path
 * @param {object} route 当前路由信息
 * @return {string} 唯一标识
 */
const getKey = (parentPath, route) => {
  let path = formatPath(route.path);
  let key = optimizePath(`${parentPath}/${path}`);
  return key.replace(/\//g, '_').substring(1, key.length);
};

/**
 * @description 获取路由参数
 * @author WangHeng
 * @param {string} parentPath 父路由path
 * @param {object} route 当前路由信息
 * @return {object} 路由信息
 */
const getRouterParams = (parentPath, route) => {
  return {
    path: getPath(parentPath, route),
    children: getChildren(route),
    key: getKey(parentPath, route),
    component: getComponent(parentPath, route),
    show: route.show,
    exact: route.exact || false,
    icon: route.icon,
    name: route.name,
    meta: {
      title: route.name
    }
  };
};

// 配置路由的信息
let configRoutes = [];

/**
 * @description 收集配置路由的信息
 * @author WangHeng
 * @param {object} configRoutes 路由的配置信息
 * @param {object} routes 当前的路由配置信息
 * @param {string} parentPath 父路由path
 */
const collectRoutes = (configRoutes, routes, parentPath) => {
  routes.flat().forEach((item, index) => {
    const { path, children, key, meta, component, show, exact, icon, name } =
      getRouterParams(parentPath, item);

    configRoutes.push({
      path,
      key,
      meta,
      component,
      show,
      name,
      exact,
      icon,
      routes: []
    });

    // 递归加载子路由
    children.length &&
      collectRoutes(configRoutes[index].routes, children, path);
  });
};

collectRoutes(configRoutes, appConfig, ''); // 收集路由
store.dispatch({ type: SAVE_MENU, data: configRoutes }); // 保存到redux

export default configRoutes;
