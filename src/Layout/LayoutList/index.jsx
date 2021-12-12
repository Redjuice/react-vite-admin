import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import LayoutEmpty from '@/Layout/LayoutEmpty';
import { typeIs } from '@/utils/tools';
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

  /**
   * @description 渲染子节点
   * @author WangHeng
   * @param {string} category 节点名称
   * @return {node} 返回的子节点
   */
  renderChildren = (children, category) => {
    if (typeIs(children) === 'object' && children.key === category)
      return children;
    if (typeIs(children) === 'array')
      return children.filter((item) => item.key === category);
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
            {this.renderChildren(children, 'header')}
          </div>
        </div>
        <div className="container">
          <div className="search">
            {this.renderChildren(children, 'search')}
          </div>
          <div className="tabs">{this.renderChildren(children, 'tabs')}</div>
          <div className="content">
            <ConfigProvider renderEmpty={LayoutEmpty}>
              {this.renderChildren(children, 'content')}
            </ConfigProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LayoutList);
