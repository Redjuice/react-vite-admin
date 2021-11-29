import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './index.less';

class LayoutForm extends Component {
  // 返回
  goBack = () => {
    const { history } = this.props;
    history.goBack();
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
            {Array.isArray(children) &&
              children.filter((item) => item.key === 'content')}
          </div>
          <div className="footer">
            {Array.isArray(children) &&
              children.filter((item) => item.key === 'footer')}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LayoutForm);
