import axiosInstance from "@/api/AxiosInstance";
import { Account } from "meta/accountMeta";
import { gql } from "@apollo/client";
import { isEmpty } from "@/utils";
import { ITokenInterface } from "@/state/token";

export const JWT_KEY = "jwt"
export const REFRESH_KEY = "refresh"
export const AUTHORIZATION_KEY = "authorization"
export const AUTHORIZATION_REFRESH_KEY = "authorization-refresh"

const getToken = (): ITokenInterface | undefined => {
	const authorization = localStorage.getItem(JWT_KEY);
  const authorizationRefresh = localStorage.getItem(REFRESH_KEY);
  if (authorization != null && authorizationRefresh != null) {
    return { authorization, authorizationRefresh }
  }
  return undefined
};

const setToken = (
	authorizationToken: string | undefined = undefined,
	refreshToken: string | undefined = undefined
) => {
	if (authorizationToken != undefined) {
		localStorage.setItem(JWT_KEY, authorizationToken);
	} else {
		localStorage.removeItem(JWT_KEY);
	}
	if (refreshToken != undefined) {
		localStorage.setItem(REFRESH_KEY, refreshToken);
	} else {
		localStorage.removeItem(REFRESH_KEY);
	}
};

export const withBearer = (token: string) => `Bearer ${token}`

const login = (username: string, password: string) =>
	axiosInstance
		.post("/login", {
			username,
			password,
		})
		.then((res: any) => {
			const { data, headers } = res;
			const { authorization, "authorization-refresh": authorizationRefresh } =
				headers;
			console.log("login data", data);
			console.log("login res", res);
			console.log(AUTHORIZATION_KEY, authorization);
			console.log(AUTHORIZATION_REFRESH_KEY, authorizationRefresh);
			if (!isEmpty(authorization)) {
				axiosInstance.defaults.headers[AUTHORIZATION_KEY] = withBearer(authorization);
				axiosInstance.defaults.headers[AUTHORIZATION_REFRESH_KEY] = withBearer(authorizationRefresh);
			}
			return { ...data, authorization, authorizationRefresh };
		});

const GET_ME_QUERY = gql`
	query getMe {
		getMe {
			id
			username
			profile_name
			role_type_list
		}
	}
`;

const register = (account: Account) => {
	console.log("register", account);
	return axiosInstance.post("/sign-up", account).then((res: any) => {
		const { data } = res;
		console.log("register data", data);
		return data;
	});
};

export default {
  getToken,
	setToken,
	login,
	register,
	GET_ME_QUERY,
};
