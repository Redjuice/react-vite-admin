import React from 'react';
// 异步加载组件
export const asyncComponent = (loadComponent) => {
  return class AsyncComponent extends React.Component {
    constructor(...args) {
      super(...args);

      this.state = {
        Component: null
      };

      this.hasLoadedComponent = this.hasLoadedComponent.bind(this);
    }
    componentDidMount() {
      if (this.hasLoadedComponent()) return;

      loadComponent()
        .then((module) => {
          return module.default ? module.default : module;
        })
        .then((Component) => {
          this.setState({
            Component
          });
        })
        .catch((error) => {
          console.error('cannot load Component in <AsyncComponent>');
          throw error;
        });
    }
    hasLoadedComponent() {
      return this.state.Component !== null;
    }
    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };
};
