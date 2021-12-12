import React from 'react';
import configs from '@/configs';
import { elementPower } from '../utils/power';
// 页面元素权限控制 auth为配置的key
export const wrapAuth = (ComposedComponent) =>
  class WrapComponent extends React.Component {
    render() {
      if (!configs.elementEnable || elementPower(this.props.auth)) {
        return <ComposedComponent {...this.props} />;
      } else {
        return null;
      }
    }
  };
