import React, { Component, Fragment } from 'react';
import LayoutList from '@/Layout/LayoutList';
import {
  Form,
  Input,
  Button,
  Tabs,
  Table,
  Space
  //  Pagination
} from 'antd';

const { Item } = Form;
const { TabPane } = Tabs;
const { Column } = Table;
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age'
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: () => (
//       <Space size="middle">
//         <a>Delete</a>
//       </Space>
//     )
//   }
// ];

const data = [
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   age: 32
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32
  // }
];

const pagination = {
  size: 'small',
  total: 50,
  showSizeChanger: true,
  showQuickJumper: true
};

export default class Modules2 extends Component {
  render() {
    return (
      <LayoutList title="列表" back>
        <Fragment key="header">
          <Button type="primary">添加</Button>
        </Fragment>
        <Fragment key="search">
          <Form layout="inline">
            <Item label="关键字">
              <Input placeholder="请输入" />
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
          <Table dataSource={data} pagination={pagination}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Age" dataIndex="age" key="age" />
            <Column
              title="Action"
              key="action"
              render={() => (
                <Space size="middle">
                  <a>Delete</a>
                </Space>
              )}
            />
          </Table>
          {/* <Table
            columns={columns}
            dataSource={data}
            pagination={{
              size: 'small',
              total: 50,
              showSizeChanger: true,
              showQuickJumper: true
            }}
          /> */}
        </Fragment>
        {/* <Fragment key="paging">
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </Fragment> */}
      </LayoutList>
    );
  }
}
