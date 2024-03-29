import axios from 'axios';
import { store } from '../redux/store';

const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const { message, statusCode } = error.response.data;
    if (statusCode === 401 && message === 'token expired' && !originalRequest._retry) {
      try {
        originalRequest._retry = true;
        const data = await (
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/refreshtoken`, {}, { withCredentials: true })
        ).data;
        // update the access token in the store or wherever you keep it
        // and retry the original request
        return axiosConfig(originalRequest);
      } catch (error) {
        // handle the error by dispatching an action to logout the user
        store.dispatch({ type: 'LOGOUT' });
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
