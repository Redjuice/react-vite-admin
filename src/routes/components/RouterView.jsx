import React, { Component, Fragment } from 'react';
import { renderRoutes } from 'react-router-config';

// 嵌套的父级路由
export default class PartenView extends Component {
  state = {
    route: this.props.route.routes
  };
  render() {
    return <Fragment>{renderRoutes(this.state.route)}</Fragment>;
  }
}
