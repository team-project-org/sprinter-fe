import { useEffect } from 'react';
import accountState from "@/state/account";
import { useRecoilState, useRecoilValue } from "recoil";
import { account } from "@/api";
import { useQuery } from "@apollo/client";
import tokenState from '@/state/token';

const { GET_ACCOUNT_QUERY } = account

export const useAccount = () => {
  const token = useRecoilValue<any>(tokenState);
  const [account, setAccount] = useRecoilState<any>(accountState);

  const { loading, error, data } = useQuery(GET_ACCOUNT_QUERY, { variables: token });

  useEffect(() => {
    console.log('token', token)
    console.log('loading', loading)
    console.log('data', data)
    if (loading === false && data !== undefined) {
      setAccount(data)
    }
    return () => {
      setAccount(undefined)
    }
  }, [data, loading, setAccount, token])
  

  return [account, error, loading] as const;
};