import axiosClient from "./axiosClient";

const appApi = {
  searchApp: (text) => {
    console.log(text);
    const url = `/api/application/search${text}`;
    return axiosClient.get(url);
  },

  recommendApp: () => {
    const url = "/api/application/recommended";
    return axiosClient.get(url);
  },

  getDetailApp: (slug) => {
    const url = `/api/application/detail/${slug}`;
    return axiosClient.get(url);
  },

  getListGameFollowType: (type) => {
    const url = `api/application/game-list?type=${type}`;
    return axiosClient.get(url);
  },

  downloadApp: (params) => {
    const url = `api/application/download?`;
    return axiosClient.get(url, { params });
  },
  getCategories: () => {
    const url = `api/application/category-language`;
    return axiosClient.get(url);
  },
  getService: (type) => {
    const url = `api/application/dev-service?type=${type}`;
    return axiosClient.get(url);
  },
};
export default appApi;
