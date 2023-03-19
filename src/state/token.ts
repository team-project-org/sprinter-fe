import { atom } from "recoil";

export const JWT_KEY = "jwt"

const tokenState = atom<string>({
  key: 'tokenState',
  default: localStorage.getItem("jwt") || ""
});

export default tokenState