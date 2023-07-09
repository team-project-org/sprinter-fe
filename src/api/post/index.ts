import { gql } from "@apollo/client";

export const withBearer = (token: string) => `Bearer ${token}`

const CREATE_POST = gql`
	mutation createPost($input: CreatePostInput!) {
		createPost(input: $input)
	}
`;

export default {
  CREATE_POST
};
