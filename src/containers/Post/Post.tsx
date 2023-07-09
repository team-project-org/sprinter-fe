import React, { FunctionComponent, useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import DefaultLayout from "@/components/DefaultLayout";
import { post } from "@/api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CreatePostInput } from "@/meta/postMeta";
import { useRecoilValue } from "recoil";
import accountState from "@/state/account";
import dateToTimestamp from '../../utils/dateToTimestamp';

const { CREATE_POST } = post;

interface IPostProps {}

const Post: FunctionComponent<IPostProps> = (props) => {
	const [form] = Form.useForm();
	const account = useRecoilValue(accountState);
	const [createPost, { data, loading, error }] = useMutation(CREATE_POST);

	const onFinish = useCallback(
		(values: any) => {
			console.log("Success:", values);
			const { title } = values;
			const now = new Date();
			const afterWeek = new Date();
			afterWeek.setDate(new Date().getDate() + 7);
			const createPostInput: CreatePostInput = {
				title,
				owner_username: account.username,
				start_date: dateToTimestamp(now),
				end_date: dateToTimestamp(afterWeek),
			};
			console.log("createPostInput", createPostInput);
			createPost({
				variables: {
					input: createPostInput,
				},
			});
		},
		[createPost, account]
	);

  useEffect(() => {
    console.log('data', data)
    console.log('loading', loading)
    console.log('error', error)
  }, [data, loading, error])
  

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<DefaultLayout>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 20 }}
				form={form}
				onFinish={onFinish}
				id={"form"}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Title"
					name="title"
					rules={[{ required: true, message: "Please input your title!" }]}
				>
					<Input />
				</Form.Item>
			</Form>
			<Form.Item wrapperCol={{ span: 14, offset: 4 }}>
				<Button type="primary" onClick={() => form.submit()}>
					create post
				</Button>
			</Form.Item>
		</DefaultLayout>
	);
};

export default Post;
