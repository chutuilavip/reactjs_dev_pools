import axiosClient from "./axiosClient";

const accountApi = {
  getAccountInfo: () => {
    const url = `/api/dev/account`;
    return axiosClient.get(url);
  },

  editAccount: (data) => {
    const url = `api/dev/account-edit`;
    return axiosClient.post(url, data);
  },

  editAvatarAccount: (formData) => {
    const url = "/api/dev/account-edit-avatar";
    return axiosClient.post(url, formData);
  },
};
export default accountApi;
