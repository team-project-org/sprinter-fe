import { atom } from "recoil";

export const REFRESH_KEY = "refresh"

const refreshTokenState = atom<string>({
  key: 'refreshTokenState',
  default: localStorage.getItem(REFRESH_KEY) || ""
});

export default refreshTokenState