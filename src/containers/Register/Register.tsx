import React, { FunctionComponent, useCallback, useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import DefaultLayout from '@/components/DefaultLayout';
import { Account } from '@/meta/accountMeta';
import { account } from '@/api';
import { useNavigate } from 'react-router-dom';

interface IRegisterProps {}

const { register } = account;

const Register: FunctionComponent<IRegisterProps> = (props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = useCallback(
    (values: any) => {
      console.log('Success:', values);
      const { username, profile_name, password } = values;
      const account: Account = {
        username,
        profile_name,
        password
      };
      register(account).then((data: any) => {
        navigate('/');
      });
    },
    [navigate],
  );

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <DefaultLayout>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        form={form}
        onFinish={onFinish}
        id={'form'}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="ID" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Profile Name" name="profile_name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>
      </Form>
      <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
        <Button type="primary" onClick={() => form.submit()}>
          Register
        </Button>
      </Form.Item>
    </DefaultLayout>
  );
};

export default Register;
