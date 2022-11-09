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
  getDetailAppWithLange: (slug, lang) => {
    const url = `/api/dev/detail/${slug}?locale=${lang}`;
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
  buyService: (params) => {
    const url = `api/application/buy-service`;
    return axiosClient.post(url, params);
  },
  getListAppService: (type) => {
    const url = `api/dev/app-service?type=${type}`;
    return axiosClient.post(url);
  },
  editApp: (data) => {
    const url = "api/dev/update";
    return axiosClient.post(url, data);
  },
  deleteScreenshot: (payload) => {
    const url = `api/dev/remove-screenshot`;
    return axiosClient.post(url, payload);
  },
};
export default appApi;
