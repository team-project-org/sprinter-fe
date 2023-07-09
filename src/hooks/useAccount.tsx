import { useEffect } from 'react';
import accountState from "@/state/account";
import { useRecoilState, useRecoilValue } from "recoil";
import { account } from "@/api";
import { useQuery } from "@apollo/client";
import tokenState from '@/state/token';

const { GET_ME_QUERY, setToken } = account

export const useAccount = () => {
  const token = useRecoilValue(tokenState);
  const [account, setAccount] = useRecoilState<any>(accountState);

  const { loading, error, data } = useQuery(GET_ME_QUERY, { variables: token });

  useEffect(() => {
    console.log('token', token)
  
    console.log('loading', loading)
    console.log('data', data)
    console.log('error', error)
    if (token && loading === false) {
      if (data !== undefined) {
        const { authorization, authorizationRefresh } = token
        setToken(authorization, authorizationRefresh)
        setAccount(data.getMe)
      } else if (error !== undefined) {
        setAccount(undefined)
        setToken(undefined, undefined)
      }
    }
    return () => {
      setAccount(undefined)
    }
  }, [data, error, loading, setAccount, token])
  

  return [account, error, loading] as const;
};