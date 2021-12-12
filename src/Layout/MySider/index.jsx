import React, { Component } from 'react';
import { Menu } from 'antd';
import { allMenu, selectMenuKey, getKeyByUrl } from '@/routes/utils/router';
import { withRouter } from 'react-router-dom';
import { pagePower } from '@/routes/utils/power';
import configs from '@/configs';
import logo from '@/assets/base/logo.png';
import './index.less';
const { SubMenu } = Menu;

import * as Icons from '@ant-design/icons';
const renderIcon = (iconName) => {
  return React.createElement(Icons[iconName]);
};

// 渲染菜单
const menuItem = (routes) => {
  return routes.map((item) => {
    // 验证权限
    if (configs.pageEnable && !pagePower(item.path)) {
      return null;
    }
    if (item.routes && item.routes.length > 0) {
      return (
        <SubMenu
          key={item.key}
          icon={item.icon ? renderIcon(item.icon) : ''}
          title={item.menuName}
        >
          {menuItem(item.routes)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item icon={item.icon ? renderIcon(item.icon) : ''} key={item.key}>
          {item.menuName}
        </Menu.Item>
      );
    }
  });
};

class MySider extends Component {
  constructor(props) {
    super(props);
    let active = getKeyByUrl(this.props.location.pathname) || selectMenuKey;
    let open = active.split('_');
    open.length > 0 && open.pop();
    this.state = {
      theme: 'dark',
      current: active,
      openKey: open.join('_')
    };
  }
  handleClick = (e) => {
    this.setState({
      current: e.key
    });
    this.toUrl(e.key);
  };
  // 跳转路由
  toUrl = (key) => {
    let url = '/' + key.replace(/_/g, '/');
    this.props.history.push(url);
  };
  render() {
    const { collapsed } = this.props;
    return (
      <div className="sider" data-component="sider">
        <div className="sider-header">
          <img className="logo" src={logo} alt="logo" />
          <h1 className={`${!collapsed ? 'title' : 'no-title'}`}>
            {configs.title}
          </h1>
        </div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={[this.state.openKey]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          {menuItem(allMenu)}
        </Menu>
      </div>
    );
  }
}

export default withRouter(MySider);
