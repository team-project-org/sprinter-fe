import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { Badge, Card, Spin, Avatar } from 'antd';
import FlexCenter from '@/components/FlexCenter';
import SignIn from '@/components/SignIn';
import account from '@/api/account';
import { useRecoilState, useRecoilValue } from 'recoil';
import { token as tokenState, account as accountState } from '@/state';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import isEmpty from '@/utils/isEmpty';

const { setToken } = account

interface IAccountProps {
}

const Account: FunctionComponent<IAccountProps> = () => {

  const [token, setRecoilToken] = useRecoilState(tokenState)
  const account = useRecoilValue(accountState)
  const navigate = useNavigate();

  const logout = useCallback(() => {
    setToken(undefined, undefined)
    setRecoilToken(undefined)
    navigate("/");
  }, [navigate, setRecoilToken])
  
  const assignRenderer = useMemo(() => {
    if (isEmpty(token)) {
      return <SignIn />
    } else if (isEmpty(account)) {
      return <Spin size={'small'} />
    } else {
      const { username, profile_name, role_type_list } = account
      return (
				<Badge.Ribbon text={role_type_list.join(" ")}>
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
