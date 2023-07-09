import React, { FunctionComponent, useCallback } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useSetRecoilState } from 'recoil';
import { token as tokenState } from '@/state';
import FlexCenter from '@/components/FlexCenter';
import { useNavigate } from 'react-router-dom';
import { account } from '@/api';

const { login } = account;

interface ISignInProps {}

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};


const SignIn: FunctionComponent<ISignInProps> = (props) => {
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState)
  const onFinish = useCallback(
    (values: any) => {
      console.log("Success:", values);
      const { username, password } = values;
      login(username, password).then(({ id, message, success, authorization, authorizationRefresh }: any) => {
				if (success) {
					console.log(`id: ${id}, message: ${message}`);
					console.log('authorization', authorization);
					console.log('authorizationRefresh', authorizationRefresh);
					setToken({
						authorization,
						authorizationRefresh
					});
					// localStorage.setItem(JWT_KEY, authorization);
					// localStorage.setItem(REFRESH_KEY, authorizationRefresh);
					navigate("/");
				}
      });
    },
    [setToken, navigate]
  );

  return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="ID"
				name="username"
				rules={[{ required: true, message: "Please input your ID!" }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: "Please input your password!" }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ span: 24 }}>
				<FlexCenter>
					<Button type="primary" htmlType="submit">
						Login
					</Button>
					<Button
						type="default"
						style={{ marginLeft: "5px" }}
            onClick={() => {
              navigate("/register");
            }}
					>
						Register
					</Button>
				</FlexCenter>
			</Form.Item>
		</Form>
  );
};

export default SignIn;
