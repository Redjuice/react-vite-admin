import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
// import  {withRouter} from 'react-router-dom';

// 嵌套的父级路由
export default class PartenView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: props.route.routes
    };
  }
  render() {
    console.log(444);
    return <div>{renderRoutes(this.state.route)}</div>;
  }
}
// export default withRouter(PartenView);
