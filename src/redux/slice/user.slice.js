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
      params.goHome();
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
      const result = await userApi.registerPublisher(params.data);
      params.goHome();
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
    console.log("ADD", address);
    try {
      const res = await userApi.checkWallet(address);
      if (res.status === 200) {
        toast.info(res.success);
      }
      return res;
    } catch (err) {
      console.log(err);
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
      console.log("payload", action.payload);
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
  },
});

export const { setAccount, setLanguage, logOut } = userSlice.actions;
export default userSlice.reducer;
