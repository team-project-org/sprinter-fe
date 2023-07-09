import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { apiMeta } from "@/meta";

const { API_ENDPOINT } = apiMeta

const APIConfig = {
  baseURL: `${API_ENDPOINT}/api/v1`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
};

const axiosInstance = axios.create(APIConfig);
axiosInstance.interceptors.request.use((request: any) => {
  return request;
});

const refreshAuthLogic = (failedRequest: any) => {
  return Promise.resolve();
};

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  statusCodes: [401, 500],
  retryInstance: axiosInstance,
});

export default axiosInstance;
