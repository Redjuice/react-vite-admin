import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { typeIs } from '@/utils/tools';
import './index.less';

class LayoutForm extends Component {
  // 返回
  goBack = () => {
    const { history } = this.props;
    history.goBack();
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
      <div className="layout-form" data-component="layout-form">
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
        </div>
        <div className="container">
          <div className="content">
            {this.renderChildren(children, 'content')}
          </div>
          <div className="footer">
            {this.renderChildren(children, 'footer')}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LayoutForm);
