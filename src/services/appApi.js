import axiosClient from './axiosClient';

const appApi = {
  searchApp: (text) => {
    console.log(text);
    const url = `/api/application/search${text}`;
    return axiosClient.get(url);
  },
  recommendApp: () => {
    const url = '/api/application/recommended';
    return axiosClient.get(url);
  },
  getPermissionAndInfoCollection: () => {
    const url = 'api/dev/information';
    return axiosClient(url);
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
  getCreatedApp: (limit, page, title) => {
    const url = `/api/dev/index?limit=${limit}&page=${page}&title=${title}`;
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
  getService: () => {
    const url = `api/application/list-all-service`;
    return axiosClient.get(url);
  },
  buyService: (params) => {
    const url = `api/application/buy-service`;
    return axiosClient.post(url, params);
  },
  getListAppService: (type) => {
    const url = `api/dev/app-service`;
    return axiosClient.post(url, { type });
  },
  editApp: (data) => {
    const url = 'api/dev/update';
    return axiosClient.post(url, data);
  },
  deleteScreenshot: (payload) => {
    const url = `api/dev/remove-screenshot`;
    return axiosClient.post(url, payload);
  },

  deleteApp: (appId) => {
    const url = `api/dev/destroy/${appId}`;
    return axiosClient.post(url);
  },
  getComments: ({ appId, limit, page, search = '' }) => {
    const url = `api/dev/list-comment-of-app?appid=${appId}&limit=${limit}&page=${page}&search=${search}`;
    return axiosClient(url);
  },
  getHistoryUpdateOfApp: (appId, keyword = '', locale) => {
    const url = `api/dev/list-history-version-of-app?id=${appId}&keyword=${keyword}&locale=${locale}`;
    return axiosClient(url);
  },
};
export default appApi;
