import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import routes from '@/routes/route-collect';
import './index.less';
const allRoutes = [];

const flattenRoutes = (routes) => {
  routes.forEach((item) => {
    allRoutes.push(item);
    if (item.routes.length) {
      flattenRoutes(item.routes);
    }
  });
  return allRoutes;
};

const _differenceBy = (array) => {
  const obj = {};
  array = array.reduce(function (item, next) {
    obj[next.key] ? '' : (obj[next.key] = true && item.push(next));
    return item;
  }, []);
  return array;
};

// 面包屑组件
export default class MyBreadcrumb extends Component {
  getMenuNames = (routes) => {
    const { location } = this.props;
    let matchMenus = [];
    flattenRoutes(routes);
    matchMenus = allRoutes.filter(
      (item) => location.pathname.indexOf(item.path) > -1
    );
    matchMenus = _differenceBy(matchMenus);
    return matchMenus;
  };

  render() {
    const menus = this.getMenuNames(routes);
    return (
      <Breadcrumb separator="/">
        {menus.map((item, index) => {
          return <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
    );
  }
}
