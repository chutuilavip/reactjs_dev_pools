import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appApi from "../../services/appApi";
import userApi from "../../services/userApi";

const initialState = {
  detailApp: {},
  isLoading: true,
  error: {},
  categories: [],
  languages: [],
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
    console.log(err);
  }
});
const detailAppSlice = createSlice({
  name: "detailAppSlice",
  initialState,
  reducers: {},
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

export const {} = detailAppSlice.actions;
export default detailAppSlice.reducer;
