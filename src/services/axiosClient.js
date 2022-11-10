import axios from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";
const keyLang = localStorage.getItem("i18nextLng");

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "content-type": "application/json",
    "X-localization": keyLang,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem("tokens"));
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => {
    console.log(response);

    if (response && response.data) {
      const { status } = response;

      console.log(status);
      if (status === 401) {
        toast.error("Please login");
      }
      return response.data;
    }

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      toast.error("Please login again");
    }
    throw error;
  }
);

export default axiosClient;
