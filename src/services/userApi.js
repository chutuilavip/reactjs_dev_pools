import axiosClient from "./axiosClient";

const userApi = {
  loginUser: (params) => {
    const url = `/api/auth/login`;
    return axiosClient.post(url, params);
  },

  checkLogin: (token) => {
    const url = "/api/auth/check-login";
    return axiosClient.post(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  registerUser: (params) => {
    const url = "/api/auth/register";
    return axiosClient.post(url, params);
  },

  registerPublisher: (data) => {
    const url = "/api/auth/register-business";
    return axiosClient.post(url, data);
  },
  forgotPassword: (data) => {
    const url = "/api/auth/forget-password";
    return axiosClient.post(url, data);
  },
  resetPassword: (data) => {
    const url = "/api/auth/reset-password";
    return axiosClient.post(url, data);
  },
  reviewApp: (params, slug) => {
    console.log("Minhquy");
    const url = `/api/application/comment/${slug}`;
    return axiosClient.post(url, params);
  },

  likeReview: (id) => {
    const url = `/api/application/like?cmt_id=${id}`;
    return axiosClient.post(url);
  },

  disLikeReview: (id) => {
    const url = `/api/application/dislike?cmt_id=${id}`;
    return axiosClient.post(url);
  },

  checkWallet: (params) => {
    const url = `/api/user/check-is-wallet`;
    return axiosClient.post(url, params);
  },
  uploadContent: (data) => {
    const url = `api/application/uploadcontent`;
    return axiosClient.post(url, data);
  },
};
export default userApi;
