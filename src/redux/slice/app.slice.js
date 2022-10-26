import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../services/userApi";

const initialState = {
  translations: [],
  isLoading: false,
};
export const getLanguagesTranslations = createAsyncThunk(
  "language/language-translations",
  async (data, thunkAPI) => {
    try {
      const res = await userApi.getLanguagesTranslations();
      return res.res.data.translations;
    } catch (err) {
      console.log(err);
    }
  }
);
const AppSlice = createSlice({
  name: "customLayout",
  initialState,
  reducers: {},
  extraReducers: {
    // Translations
    [getLanguagesTranslations.fulfilled]: (state, { payload }) => {
      state.translations = payload;
    },
  },
});

export const {} = AppSlice.actions;
export default AppSlice.reducer;
