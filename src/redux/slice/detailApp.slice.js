import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appApi from "../../services/appApi";
import userApi from "../../services/userApi";

const initialState = {
  detailApp: {},
  isLoading: true,
  isLoadingBuyVideoService: false,
  isLoadingSubmit: false,
  error: {},
  categories: [],
  languages: [],
  handleNextTabStore: null,
  handlePrevTabStore: null,
  selectedTabStore: 1,
};

export const getDetailApp = createAsyncThunk("getDetailApp", async (slug) => {
  try {
    const { res, status } = await appApi.getDetailApp(slug);
    return res;
  } catch (error) {
    console.log(error);
  }
});
export const getCategoriesAndLanguage = createAsyncThunk(
  "getCategories",
  async () => {
    try {
      const res = await appApi.getCategories();
      console.log("language", res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);
export const uploadContent = createAsyncThunk("uploadContent", async (data) => {
  try {
    const res = await userApi.uploadContent(data);
    if (res) {
      toast.success("Created successfully");
    }
    return res;
  } catch (err) {
    if (err?.response?.data?.error) {
      toast.error(err.response.data.error);
    }
    const keysErrors = Object.keys(err.response?.data?.errors);
    for (let key of keysErrors) {
      toast.error(err.response.data.errors[key][0]);
    }
    console.log(err.response.data.errors);
  }
});

export const buyServiceVideo = createAsyncThunk(
  "service/buyVideo",
  async (data) => {
    try {
      const res = await userApi.buyServiceVideo(data);
      console.log(res);
      if (res.status === 200) {
        toast.success("Action successfully, please waiting for admin approve");
      }
    } catch (err) {
      toast.error("Buying service video failed");
      console.log(err);
    }
  }
);

const detailAppSlice = createSlice({
  name: "detailAppSlice",
  initialState,
  reducers: {
    setHandleNextTab: (state, { payload }) => {
      state.handleNextTabStore = payload;
    },
    setHandlePrevTab: (state, { payload }) => {
      state.handlePrevTabStore = payload;
    },
    setSelectedTabStore: (state, { payload }) => {
      state.selectedTabStore = payload;
    },
  },
  extraReducers: {
    [getDetailApp.pending]: (state) => {
      state.isLoading = true;
    },
    [getDetailApp.fulfilled]: (state, action) => {
      state.detailApp = action.payload;
      state.isLoading = false;
    },
    [getDetailApp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //Category
    [getCategoriesAndLanguage.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategoriesAndLanguage.fulfilled]: (state, action) => {
      state.categories = action.payload?.category;
      state.languages = action.payload?.language;
      state.isLoading = false;
    },

    //Buy package video
    [buyServiceVideo.pending]: (state) => {
      state.isLoadingBuyVideoService = true;
    },
    [buyServiceVideo.fulfilled]: (state) => {
      state.isLoadingBuyVideoService = false;
    },
    [buyServiceVideo.rejected]: (state) => {
      state.isLoadingBuyVideoService = false;
    },
    [uploadContent.pending]: (state) => {
      state.isLoadingSubmit = true;
    },
    [uploadContent.fulfilled]: (state) => {
      state.isLoadingSubmit = false;
    },
    [uploadContent.rejected]: (state) => {
      state.isLoadingSubmit = false;
    },
  },
});

export const { setHandlePrevTab, setHandleNextTab, setSelectedTabStore } =
  detailAppSlice.actions;
export default detailAppSlice.reducer;
