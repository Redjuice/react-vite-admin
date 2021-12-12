import React, { Component } from 'react';
import { Layout } from 'antd';
import configs from '@/configs';
import MyHeader from './MyHeader';
import MySider from './MySider';
import MyContent from './MyContent';
import './index.less';
const { Header, Sider, Content } = Layout;
const { isLogin, pageEnable } = configs;
import { pagePower } from '@/routes/utils/power';

export default class Index extends Component {
  constructor(props) {
    super(props);
    if (!isLogin()) {
      // 未登录重定向到登录
      props.history.replace('/login');
    }
    // 验证页面权限
    let isAuth = true;
    pageEnable && (isAuth = pagePower(props.location.pathname));
    this.state = {
      isAuth,
      collapsed: false // 侧边栏的折叠和展开
    };
  }
  _setState = (obj) => {
    this.setState(obj);
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <MySider collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header>
            <MyHeader collapsed={collapsed} onChangeState={this._setState} />
          </Header>
          <Content>
            <MyContent {...this.props}>
              {!this.state.isAuth && <p>暂无权限</p>}
              {this.state.isAuth && this.props.children}
            </MyContent>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
