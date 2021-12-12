import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import LayoutPage from '@/Layout/index';
import RouterView from '@/routes/components/RouterView';
import { isMathPath } from '@/routes/utils/router';
import store from '@/redux/store';

export default class App extends Component {
  state = {
    isMathPath: isMathPath(this.props.location.pathname),
    isLogin: store.getState().login.isLogin
  };

  renderView = () => {
    const { isLogin, isMathPath } = this.state;
    if (!isLogin) return <Redirect to="/" />;
    if (isMathPath) {
      return (
        <LayoutPage {...this.props}>
          <RouterView route={this.props.route}></RouterView>
        </LayoutPage>
      );
    }
    if (!isMathPath) return <Redirect to="/403" />;
  };

  render() {
    return <Fragment>{this.renderView()}</Fragment>;
  }
}
