import { selector } from "recoil";
import tokenState, { JWT_KEY } from "@/state/token";
import isEmpty from "@/utils/isEmpty";
import { AxiosInstance } from "@/api";

const accountState = selector<any>({
  key: 'accountState',
  get: async ({ get }) => {
    const token = get(tokenState)
    console.log('accountState', token)
    if (!isEmpty(token)) {
      AxiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
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
        window.location.href = "/"
      }
    }
    return {}
  }
});

export default accountState