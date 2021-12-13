import { matchRoutes } from 'react-router-config';
import store from '@/redux/store';
const allRouter = store.getState().menu;
// 获取属于菜单的路由
const getMenu = (arrMenu) => {
  return arrMenu.filter((item) => {
    if (item.routes && item.routes.length) {
      item.routes = getMenu(item.routes);
    }
    return item.menuShow === true;
  });
};
// 获取默认路由key
const getDefultKey = (menu) => {
  if (menu.routes && menu.routes.length) {
    return getDefultKey(menu.routes[0]);
  } else {
    return menu.key;
  }
};

// 根据路由获得key
const getKeyByUrl = (path) => {
  path = path.split('/');
  path.shift(); // 去除第一个空格

  // 获取路由对应的第一级菜单
  let menu = allMenu.filter((item) => item.key === `${path[0]}_${path[1]}`);
  let menuArray = [];
  menu.length && (menuArray = menu[0].routes);
  if (menuArray.length === 0) return null;
  // 第一级路由对应的话 寻找对应的key
  let pathArr = [...path].map((item, index) => {
    path.splice(path.length - index, 1);
    return path.join('_');
  });

  // 循环查找
  let key = null;
  for (let index = 0; index < pathArr.length; index++) {
    if (findKey(menuArray, pathArr[index])) {
      key = pathArr[index];
      break;
    }
  }
  return key;
};

// 寻找当前router是否key
const findKey = (arr, key1) => {
  let newArr = arr.filter((item) => {
    if (item.key === key1) return true;
    return findKey(item.routes, key1);
  });
  return newArr.length;
};

// 匹配当前路由是否存在
const isMathPath = (path) => {
  let arr = matchRoutes(allRouter, path);
  let isFind = false;
  arr.length && (isFind = arr.pop().route.path === path);
  return isFind;
};
// 所有的菜单
const allMenu = getMenu(allRouter[0].routes);
// 首次加载默认选中的菜单
const selectMenuKey = getDefultKey(allMenu[0]);

export { allMenu, selectMenuKey, getKeyByUrl, isMathPath };
