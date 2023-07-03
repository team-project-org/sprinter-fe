import axiosInstance from '@/api/AxiosInstance';
import { Account } from 'meta/accountMeta';
import { gql, useQuery } from '@apollo/react-hooks';

const login = (username: string, password: string) =>
  axiosInstance
    .post('/login', {
      username,
      password,
    })
    .then((res: any) => {
      const { data, headers } = res;
      const { authorization, 'authorization-refresh': authorizationRefresh } = headers;
      console.log('login data', data);
      console.log('login res', res);
      console.log('authorization', authorization);
      console.log('authorization-refresh', authorizationRefresh);
      return { ...data, authorization, authorizationRefresh };
    });

const GET_ACCOUNT_QUERY = gql`
  query {
    getMember {
      id
      username
      profile_name
      role_type_list
    }
  }
`;

const register = (account: Account) => {
  console.log('register', account);
  return axiosInstance.post('/sign-up', account).then((res: any) => {
    const { data } = res;
    console.log('register data', data);
    return data;
  });
};

export default {
  login,
  register,
  GET_ACCOUNT_QUERY,
};
