import React, { Component, createRef } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import config from '@/configs';
import { loginApi } from '@/apis';
import { saveUserAndToken } from '@/redux/actions/login';
// import { selectMenuKey } from '@/routes/utils/router';
import './index.less';

class Login extends Component {
  formRef = createRef();

  componentDidMount() {
    this.formRef.current?.setFieldsValue({
      username: 'admin',
      password: 123456
    });
  }

  // getDefaultPath = () => selectMenuKey.split('_').join('/');

  login = async (values) => {
    const res = await loginApi(values);
    const { user, token } = res;
    this.props.saveUserAndToken({ user, token }); // 保存数据到redux
    message.info('登录成功');
    this.props.history.replace('/app/home');
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
    // const { isLogin } = this.props;
    // if (isLogin) return <Redirect to={this.getDefaultPath()} />;
    return (
      <div className="login" data-component="login">
        <section className="login-content">
          <div className="title">{config.title}</div>
          <Form className="login-form" ref={this.formRef} onFinish={this.login}>
            <Form.Item
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
              <Input
                prefix={<UserOutlined className="login-form-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ validator: this.validator }]}>
              <Input
                prefix={<LockOutlined className="login-form-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default connect((state) => ({ isLogin: state.login.isLogin }), {
  saveUserAndToken
})(Login);
