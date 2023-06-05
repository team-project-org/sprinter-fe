import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { apiMeta } from "@/meta";

const { API_ENDPOINT } = apiMeta

const APIConfig = {
  baseURL: `${API_ENDPOINT}/api/v1`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
};

const getAccessToken = () => localStorage.getItem('jwt');

const axiosInstance = axios.create(APIConfig);
axiosInstance.interceptors.request.use((request: any) => {
  try {
    const token: string | null = getAccessToken();
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }
  } catch (e) {}
  return request;
});

const refreshAuthLogic = (failedRequest: any) => {
  localStorage.removeItem('jwt');
  return Promise.resolve();
};

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  statusCodes: [401, 500],
  retryInstance: axiosInstance,
});

export default axiosInstance;
