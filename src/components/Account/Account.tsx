import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { Badge, Card, Spin, Avatar } from 'antd';
import FlexCenter from '@/components/FlexCenter';
import SignIn from '@/components/SignIn';
import { useRecoilState, useRecoilValue } from 'recoil';
import { token as tokenState, account as accountState } from '@/state';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';


import { useNavigate } from 'react-router-dom';
import isEmpty from '@/utils/isEmpty';
import { JWT_KEY } from '@/state/token';

interface IAccountProps {
}

const Account: FunctionComponent<IAccountProps> = () => {

  const [token, setToken] = useRecoilState(tokenState)
  const account = useRecoilValue(accountState)
  const navigate = useNavigate();

  const logout = useCallback(() => {
    localStorage.removeItem(JWT_KEY)
    setToken('')
    navigate("/");
  }, [navigate, setToken])
  
  const assignRenderer = useMemo(() => {
    console.log('account', account)
    if (isEmpty(token)) {
      return <SignIn />
    } else if (isEmpty(account)) {
      return <Spin size={'small'} />
    } else {
      const { username, profile_name } = account
      return (
				<Badge.Ribbon text={"안녕하세요"}>
					<Card
            title={<FlexCenter>
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: 5 }}>
                {username}
              </span>
            </FlexCenter>}
            headStyle={{ paddingRight: "100px" }}
            actions={[
              <LogoutOutlined key="logout" onClick={logout} />,
            ]}
						size="small"
					>
						{`이름 : ${profile_name}`}
					</Card>
				</Badge.Ribbon>
      );
    }
  }, [account, logout, token])
  
  return (
    <FlexCenter style={{ flexFlow: 'column' }}>
			{assignRenderer}
		</FlexCenter>
  );
};

export default Account;
