import React from 'react';
import configs from '@/configs';
import { elementPower } from '@/utils/private/power';
// 页面元素权限控制 auth为配置的key
export let wrapAuth = (ComposedComponent) =>
  class WrapComponent extends React.Component {
    render() {
      if (!configs.elementEnable || elementPower(this.props.auth)) {
        return <ComposedComponent {...this.props} />;
      } else {
        return null;
      }
    }
  };
