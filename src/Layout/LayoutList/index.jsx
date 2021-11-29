import React, { Component, Fragment } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import './index.less';

export default class LayoutList extends Component {
  goBack = () => {};

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
            {children.filter((item) => item.key === 'header')}
          </div>
        </div>
        <div className="container">
          <div className="search">
            {children.filter((item) => item.key === 'search')}
          </div>
          <div className="tabs">
            {children.filter((item) => item.key === 'tabs')}
          </div>
          <div className="content">
            {children.filter((item) => item.key === 'content')}
          </div>
          <div className="paging">
            {children.filter((item) => item.key === 'paging')}
          </div>
        </div>
      </div>
    );
  }
}
