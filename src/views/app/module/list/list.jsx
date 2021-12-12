import React, { Component, Fragment } from 'react';
import LayoutList from '@/Layout/LayoutList';
import { Form, Input, Button, Tabs, Table } from 'antd';

const { Item } = Form;
const { TabPane } = Tabs;
const { Column } = Table;
const pagination = {
  size: 'small',
  total: null,
  showSizeChanger: true,
  showQuickJumper: true
};

export default class List extends Component {
  state = {
    query: {
      keyword: ''
    },
    data: [{ id: 1, name: '张三', age: 18 }]
  };

  onSearch = (data) => {
    console.log(data);
  };

  onChange = (data) => {
    console.log(data);
    this.fetchList();
  };

  fetchList = () => {
    console.log('获取列表数据');
  };

  render() {
    const { query, data } = this.state;
    return (
      <LayoutList title="列表">
        <Fragment key="header">
          <Button type="primary">添加</Button>
        </Fragment>
        <Fragment key="search">
          <Form layout="inline" onFinish={this.onSearch}>
            <Item label="关键字">
              <Input value={query.keyword} placeholder="请输入" />
            </Item>
            <Item>
              <Button type="primary">查询</Button>
            </Item>
            <Item>
              <Button>重置</Button>
            </Item>
          </Form>
        </Fragment>
        <Fragment key="tabs">
          <Tabs defaultActiveKey="1">
            <TabPane tab="全部" key="1"></TabPane>
            <TabPane tab="待收货" key="2"></TabPane>
          </Tabs>
        </Fragment>
        <Fragment key="content">
          <Table
            dataSource={data}
            pagination={pagination}
            rowKey="id"
            onChange={this.onChange}
          >
            <Column title="Name" dataIndex="name" />
            <Column title="Age" dataIndex="age" />
            <Column title="Action" render={() => <a>详情</a>} />
          </Table>
        </Fragment>
      </LayoutList>
    );
  }
}
