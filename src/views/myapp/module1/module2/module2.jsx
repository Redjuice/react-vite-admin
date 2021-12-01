import React, { Component } from 'react';
import RouterView from '@/components/private/routerView';
export default class module1 extends Component {
  render() {
    return <RouterView route={this.props.route}></RouterView>;
  }
}
