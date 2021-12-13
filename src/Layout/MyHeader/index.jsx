import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal } from 'antd';
import MyBreadcrumb from './components/MyBreadcrumb';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { deleteUserAndToken } from '@/redux/actions/login';
import './index.less';

class MyHearder extends Component {
  logout = () => {
    Modal.confirm({
      title: '确认退出?',
      icon: <ExclamationCircleOutlined />,
      content: '若退出需要重新登录',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        this.props.deleteUserAndToken();
        this.props.history.replace('/');
      }
    });
  };

  toggleCollapsed = () => {
    this.props.onChangeState({
      collapsed: !this.props.collapsed
    });
  };

  render() {
    const { collapsed, location } = this.props;
    return (
      <div className="header" data-component="header">
        <div className="left header-left">
          <div className="icon m-r-15" onClick={this.toggleCollapsed}>
            {!collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          </div>
          <MyBreadcrumb location={location} />
        </div>
        <div className="right">
          <span className="text">欢迎，{this.props.user.username}</span>
          <Button type="link" onClick={this.logout}>
            退出登录
          </Button>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ user: state.login.user }), {
  deleteUserAndToken
})(withRouter(MyHearder));
