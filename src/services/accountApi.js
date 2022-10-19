import axiosClient from "./axiosClient";

const accountApi = {
  getAccountInfo: () => {
    const url = `/api/user/account`;
    return axiosClient.get(url);
  },

  editAccount: (data) => {
    const url = `/api/user/account-edit`;
    return axiosClient.post(url, data);
  },

  editAvatarAccount: (formData) => {
    const url = "/api/user/account-edit-avatar";
    return axiosClient.post(url, formData);
  },
};
export default accountApi;
