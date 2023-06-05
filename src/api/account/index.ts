import axiosInstance from '@/api/AxiosInstance';
import { Account } from 'meta/accountMeta';

const login = (username: string, password: string) =>
  axiosInstance
    .post('/login', {
      username,
      password,
    })
    .then((res: any) => {
      const { data } = res;
      console.log('login data', data);
      return data;
    });

const getAccount = () =>
  axiosInstance.get('/user').then((res: any) => {
    const { data } = res;
    console.log('account data', data);
    return data;
  });

const register = (account: Account) => {
  console.log('register', account);
  return axiosInstance.post('/signUp', account).then((res: any) => {
    const { data } = res;
    console.log('register data', data);
    return data;
  });
};

export default {
  login,
  register,
  getAccount,
};
