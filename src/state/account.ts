import { atom } from "recoil";

const accountState = atom<any>({
  key: 'accountState',
  default: undefined
});

export default accountState