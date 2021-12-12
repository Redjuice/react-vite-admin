import React from 'react';
// 异步加载组件
const asyncComponent = (loadComponent) => {
  return class AsyncComponent extends React.Component {
    state = {
      Component: null
    };
    componentDidMount() {
      loadComponent()
        .then((module) => {
          this.setState({
            Component: module.default
          });
        })
        .catch((error) => {
          console.error('cannot load Component in <AsyncComponent>');
          throw error;
        });
    }
    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
