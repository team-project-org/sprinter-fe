import { useEffect } from 'react';
import accountState from "@/state/account";
import { useRecoilState } from "recoil";
import { account } from "@/api";
import { useQuery } from "@apollo/client";

const { GET_ACCOUNT_QUERY } = account

export const useAccount = () => {
  const [account, setAccount] = useRecoilState<any>(accountState);

  const { loading, error, data } = useQuery(GET_ACCOUNT_QUERY);

  useEffect(() => {
    if (loading === false && data !== undefined) {
      setAccount(data)
    }
    return () => {
      setAccount(undefined)
    }
  }, [data, loading, setAccount])
  

  return [account, error, loading] as const;
};