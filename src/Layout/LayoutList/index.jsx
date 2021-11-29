import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import LayoutEmpty from '@/Layout/LayoutEmpty';
import './index.less';

class LayoutList extends Component {
  // 返回
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  // 判断分页插槽
  isPaging = () => {
    const { children } = this.props;
    return (
      Array.isArray(children) && children.find((item) => item.key === 'paging')
    );
  };

  render() {
    const { back, title, children } = this.props;
    return (
      <div className="layout-list" data-component="layout-list">
        <div className="title">
          {back && (
            <Fragment>
              <LeftOutlined />
              <span className="back" onClick={this.goBack}>
                返回
              </span>
            </Fragment>
          )}
          {!!title && <span>{title}</span>}
          <div className="header-btns fr">
            {Array.isArray(children) &&
              children.filter((item) => item.key === 'header')}
          </div>
        </div>
        <div className="container">
          <div className="search">
            {Array.isArray(children) &&
              children.filter((item) => item.key === 'search')}
          </div>
          <div className="tabs">
            {Array.isArray(children) &&
              children.filter((item) => item.key === 'tabs')}
          </div>
          <div className="content">
            <ConfigProvider renderEmpty={LayoutEmpty}>
              {Array.isArray(children) &&
                children.filter((item) => item.key === 'content')}
            </ConfigProvider>
          </div>
          <div className={this.isPaging() ? 'paging' : ''}>
            {Array.isArray(children) &&
              children.filter((item) => item.key === 'paging')}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LayoutList);
