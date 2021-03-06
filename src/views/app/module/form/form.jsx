import React, { Component, Fragment } from 'react';
import LayoutForm from '@/Layout/LayoutForm';
import { Form, Input, Button, message } from 'antd';

const { Item } = Form;

export default class Modules2 extends Component {
  onSubmit = async (values) => {
    console.log(values);
    message.info('登录成功');
  };

  validator = (_, value) => {
    const length = value && value.length;
    const pwdReg = /^[a-zA-Z0-9_]+$/;
    if (!value) {
      return Promise.reject(new Error('必须输入密码'));
    } else if (length < 4) {
      return Promise.reject(new Error('密码必须大于 4 位'));
    } else if (length > 12) {
      return Promise.reject(new Error('密码必须小于 12 位'));
    } else if (!pwdReg.test(value)) {
      return Promise.reject(new Error('密码必须是英文、数组或下划线组成'));
    } else {
      return Promise.resolve();
    }
  };
  render() {
    return (
      <LayoutForm title="表单" back>
        <Fragment key="content">
          <Form
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 6 }}
            onFinish={this.onSubmit}
            className="login-form"
          >
            <Item
              label="账号"
              name="username"
              rules={[
                { required: true, whitespace: true, message: '必须输入用户名' },
                { min: 4, message: '用户名必须大于 4 位' },
                { max: 12, message: '用户名必须小于 12 位' },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: '用户名必须是英文、数组或下划线组成'
                }
              ]}
            >
              <Input placeholder="用户名" />
            </Item>
            <Item
              label="密码"
              name="password"
              required
              rules={[{ validator: this.validator }]}
            >
              <Input type="password" placeholder="密码" />
            </Item>
          </Form>
        </Fragment>
        <Fragment key="footer">
          <Item wrapperCol={{ offset: 2 }}>
            <Button>取消</Button>
            <Button type="primary">提交</Button>
          </Item>
        </Fragment>
      </LayoutForm>
    );
  }
}
