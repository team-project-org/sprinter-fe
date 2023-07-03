import { selector } from "recoil";
import tokenState, { JWT_KEY } from "@/state/token";
import refreshTokenState, { REFRESH_KEY } from "@/state/refreshToken";
import isEmpty from "@/utils/isEmpty";
import { AxiosInstance, account } from "@/api";
import { useQuery } from "@apollo/client";

const { GET_ACCOUNT_QUERY } = account

const accountState = selector<any>({
  key: 'accountState',
  get: async ({ get }) => {
    const token = get(tokenState)
    const refreshToken = get(refreshTokenState)
    const { loading, error, data } = useQuery(GET_ACCOUNT_QUERY);
    console.log('token', token)
    console.log('refreshToken', refreshToken)
    if (!isEmpty(token)) {
      AxiosInstance.defaults.headers['Authorization'] = `${token}`
      AxiosInstance.defaults.headers['Authorization-refresh'] = `${refreshToken}`
      try {
        // const { id, name, roleType } = await getAccount()
        // return {
        //   email: id,
        //   name,
        //   roleType
        // }
      } catch (e) {
        console.error('getAccount error', e)
        localStorage.removeItem(JWT_KEY)
        localStorage.removeItem(REFRESH_KEY)
        window.location.href = "/"
      }
    }
    return {}
  }
});

export default accountState