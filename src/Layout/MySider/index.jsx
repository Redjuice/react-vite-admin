import React, { Component } from 'react';
import './index.less';
import { Menu } from 'antd';
import { allMenu, selectMenuKey, getKeyByUrl } from '@/utils/private/router';
import { withRouter } from 'react-router-dom';
import { pagePower } from '@/utils/private/power';
import configs from '@/configs';
const { SubMenu } = Menu;

// 渲染菜单
const menuItem = (routes) => {
  return routes.map((item) => {
    // 验证权限
    if (configs.pageEnable && !pagePower(item.path)) {
      return null;
    }
    if (item.routes && item.routes.length > 0) {
      return (
        <SubMenu key={item.key} title={item.menuName}>
          {menuItem(item.routes)}
        </SubMenu>
      );
    } else {
      return <Menu.Item key={item.key}>{item.menuName}</Menu.Item>;
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
    return (
      <div className="sider" data-component="sider">
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 200 }}
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
