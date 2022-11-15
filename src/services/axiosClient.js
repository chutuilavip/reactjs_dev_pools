import axios from 'axios';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import AuthUtil from '../utils/AuthUtils';
const keyLang = localStorage.getItem('i18nextLng');

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'content-type': 'application/json',
    'X-localization': keyLang,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem('tokens'));
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    console.log(error);
    if (error.config.url === '/api/auth/login') {
      throw error;
    } else {
      if (error.response.status === 401) {
        setTimeout(() => {
          // AuthUtil.logout();
        }, 1000);
      }
    }

    throw error;
  }
);

export default axiosClient;
