import React, { Component, Fragment } from 'react';
import LayoutPage from '@/Layout/index';
import RouterView from '@/components/private/routerView';
import { isMathPath } from '@/utils/private/router';

export default class Myapp extends Component {
  state = {
    isMathPath: isMathPath(this.props.location.pathname)
  };
  render() {
    console.log(222);
    return (
      <Fragment>
        {this.state.isMathPath && (
          <LayoutPage {...this.props}>
            <RouterView route={this.props.route}></RouterView>
          </LayoutPage>
        )}
        {!this.state.isMathPath && this.props.history.push('/404')}
      </Fragment>
    );
  }
}
