import React, { Component } from 'react';
import List from '@/views/myapp/module1/module2/module2';

import './index.less';
export default class MyContent extends Component {
  render() {
    return (
      <div className="content" data-component="content">
        <List />
        {/* content */}
      </div>
    );
  }
}
