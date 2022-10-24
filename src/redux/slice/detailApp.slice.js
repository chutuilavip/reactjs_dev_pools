import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appApi from "../../services/appApi";
import userApi from "../../services/userApi";

const initialState = {
  detailApp: {},
  isLoading: true,
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
    return res;
  } catch (err) {
    const keysErrors = Object.keys(err.response?.data?.errors);
    for (let key of keysErrors) {
      toast.error(err.response.data.errors[key][0]);
    }
    console.log(err.response.data.errors);
  }
});
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
  },
});

export const { setHandlePrevTab, setHandleNextTab, setSelectedTabStore } =
  detailAppSlice.actions;
export default detailAppSlice.reducer;
