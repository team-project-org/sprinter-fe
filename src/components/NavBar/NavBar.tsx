import React, { FunctionComponent, useMemo } from "react";
import { Layout, Menu } from "antd";
import { routerMeta } from "@/meta";

import { Link, useLocation } from "react-router-dom";
import { assignRouteArrayProps, isEmpty } from "@/utils";
import PopOver from "@/components/PopOver";
import Account from "@/components/Account";
import { UserOutlined } from "@ant-design/icons";
import { useAccount } from "@/hooks/useAccount";

const { Header } = Layout;

interface INavBarProps {}

const menuStyle = {
	width: "100%",
	display: "flex",
	borderBottom: "unset",
};

const nextRouter = (prev: any[], next: any, componentKey: string) => {
	const { length, ...rest } = next;
	if (length === 1) {
		return [...prev, { componentKey, ...rest }];
	} else {
		return prev;
	}
};

const defaultMenus: any[] = Object.keys(routerMeta).reduce(
	(prev: any[], componentKey: string) => {
		const propsArr: any = assignRouteArrayProps(routerMeta[componentKey]);
		const { hide, path, ...rest } = propsArr;

		const getPath = (path: string) => (path.match(/\//gi) || []).length;

		const pathWIthSlashLengthArr: any | any[] = Array.isArray(propsArr)
			? propsArr.map(({ path }) => ({ path, ...rest, length: getPath(path) }))
			: { path, ...rest, length: getPath(path) };

		if (hide) {
			return prev;
		} else if (Array.isArray(pathWIthSlashLengthArr)) {
			const assignPathData = pathWIthSlashLengthArr.reduce(
				(prevArr, next) => nextRouter(prevArr, next, componentKey),
				[]
			);
			return [...prev, ...assignPathData];
		} else {
			return nextRouter(prev, pathWIthSlashLengthArr, componentKey);
		}
	},
	[]
);

const NavBar: FunctionComponent<INavBarProps> = (props) => {
	const { formatMessage: fm } = useIntl();

  const [account] = useAccount();

  const location = useLocation();

  const savedAccount: any = useMemo(() => {
    if (isEmpty(account)) {
      return undefined;
    }
    return account;
  }, [account]);

  const assignMenus = useMemo(
    () =>
      defaultMenus.filter(({ account, path }) => {
        if (account) {
          return !!savedAccount;
        } else if (account === undefined) {
          return true;
        } else {
          return !savedAccount;
        }
      }),
    [savedAccount],
  );

	return (
		<Header className="header" style={{ display: "flex" }}>
			<div
				className="logo"
				style={{
					color: "white",
					width: 250,
					cursor: "pointer",
				}}
			>
				{fm({ id: "title" })}
			</div>
			<Menu
				theme="dark"
				mode="horizontal"
				style={menuStyle}
				activeKey={location.pathname}
				selectable={false}
			>
				{defaultMenus.map(({ componentKey, path }) => (
					<Menu.Item key={path}>
						<Link to={path}>
							{componentKey} ({path})
						</Link>
					</Menu.Item>
				))}
        <div style={{ opacity: 1, marginLeft: 'auto', order: assignMenus.length + 2 }}>
          <PopOver
            buttonProps={
              {
                placement: 'bottomLeft',
                content: <Account />,
              } as any
            }
          >
            <UserOutlined />
          </PopOver>
        </div>
			</Menu>
		</Header>
	);
};

export default NavBar;
