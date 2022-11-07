import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../services/userApi";
import { getDetailApp } from "./detailApp.slice";
import { toast } from "react-toastify";

const initialState = {
  statusRegis: {},
  statusReview: {},
  infoUser: {},
  isLoading: false,
  statusCheckWallet: {},
  errors: {
    register: {},
    review: {},
    login: {},
  },
  lang: "en",
};

export const loginUser = createAsyncThunk(
  "users/login",
  async (data, thunkAPI) => {
    try {
      const result = await userApi.loginUser(data);
      console.log(result);
      if (result.user.type === "mod") {
        return thunkAPI.rejectWithValue(
          "You have no permission to access this website"
        );
      }
      if (result.access_token) {
        localStorage.setItem("tokens", JSON.stringify(result.access_token));
      }
      if (result.status === 200) {
        toast.success(result.message);
      }
      return result;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data.messages);
    }
  }
);

export const checkLogin = createAsyncThunk("user/checkLogin", async (token) => {
  try {
    const result = await userApi.checkLogin(token);
    return result;
  } catch (error) {
    console.log("error");
    localStorage.removeItem("tokens");
  }
});

export const registerUser = createAsyncThunk(
  "user/register",
  async (params, thunkAPI) => {
    try {
      const result = await userApi.registerUser(params.data);
      if (result.status === 200) {
        // params.goHome();
      }
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const registerPublisher = createAsyncThunk(
  "publisher/register",
  async (params, thunkAPI) => {
    try {
      const result = await userApi.registerPublisher(params.payload);
      if (result.status === 200) {
        params.goHome();
        toast.success("Please wait for your account to be approved by admin");
      }
      return result;
    } catch (error) {
      const fieldErrors = error.response.data.errors;
      const errorKeys = Object.keys(fieldErrors);
      for (let v of errorKeys) {
        toast.error(fieldErrors[v][0]);
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "user/forgot_password",
  async (data) => {
    try {
      const result = await userApi.forgotPassword(data);
      toast.success(result.message);
      console.log("res", result);
    } catch (err) {
      toast.error(err.response.data[0]);

      console.log(err);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "user/reset_password",
  async ({ payload, goToLogin }, thunkAPI) => {
    try {
      const result = await userApi.resetPassword(payload);
      toast.success(result.message);
      goToLogin();
    } catch (err) {
      toast.error(err.response?.data?.message);
      console.log("errors", err);
    }
  }
);
export const reviewApp = createAsyncThunk(
  "user/reviewApp",
  async (params, thunkAPI) => {
    const { slug, ...param } = params;
    try {
      const result = await userApi.reviewApp(param, slug);
      if (result.status === 200) {
        thunkAPI.dispatch(getDetailApp(slug));
      } else {
        toast.error(result.error);
      }
      return result;
    } catch (error) {
      console.log("error");
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const likeReview = createAsyncThunk(
  "user/likeReview",
  async (data, thunkAPI) => {
    const { slug, id } = data;
    try {
      const res = await userApi.likeReview(id);
      if (res.status === 200) {
        thunkAPI.dispatch(getDetailApp(slug));
        toast.success(res.success);
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const disLikeReview = createAsyncThunk(
  "user/disLikeReview",
  async (data, thunkAPI) => {
    const { slug, id } = data;
    try {
      const res = await userApi.disLikeReview(id);
      if (res.status === 200) {
        thunkAPI.dispatch(getDetailApp(slug));
        toast.success(res.success);
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const checkWalletAccount = createAsyncThunk(
  "user/checkWallet",
  async (address, thunkAPI) => {
    try {
      const res = await userApi.checkWallet(address);
      if (res.status === 200) {
        toast.info(res.success);
      }
      return res;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
    logOut: (state) => {
      localStorage.removeItem("tokens");
      state.infoUser = {};
    },
  },
  extraReducers: {
    // Login
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.errors.login = "";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.infoUser = action.payload;
      state.isLoading = false;
      state.errors.login = "";
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.errors.login = action.payload;
    },

    // Check login
    [checkLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [checkLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.infoUser = action.payload ? action.payload : {};
    },
    [checkLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },

    // Register
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.errors.register = "";
      state.statusRegis = 0;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.statusRegis = action.payload;
      state.errors.register = "";
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors.register = action.payload;
      state.statusRegis = 0;
    },
    //Register Publisher
    [registerPublisher.pending]: (state) => {
      state.isLoading = true;
      state.errors.register = "";
    },
    [registerPublisher.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.statusRegis = action.payload;
      state.errors.register = "";
    },
    [registerPublisher.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors.register = action.payload;
    },

    // Review app
    [reviewApp.pending]: (state) => {
      state.isLoading = true;
    },
    [reviewApp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.statusReview = action.payload;
    },
    [reviewApp.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },

    // Check wallet user
    [checkWalletAccount.pending]: (state) => {
      state.isLoading = true;
    },
    [checkWalletAccount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.statusCheckWallet = action.payload;
    },
    [checkWalletAccount.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    // Reset password
    [resetPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [resetPassword.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [resetPassword.rejected]: (state) => {
      state.isLoading = false;
    },
    // Forgot password
    [forgotPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [forgotPassword.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [forgotPassword.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAccount, setLanguage, logOut } = userSlice.actions;
export default userSlice.reducer;
