import { atom } from "recoil";
import { account } from "@/api";
const { getToken } = account

export interface ITokenInterface {
  authorization: string,
  authorizationRefresh: string
}

const tokenState = atom<ITokenInterface | undefined>({
  key: 'tokenState',
  default: getToken(),
});

export default tokenState