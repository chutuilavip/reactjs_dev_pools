import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appApi from "../../services/appApi";

const initialState = {
  resultSearch: [],
  isLoading: true,
};

export const getResultSearch = createAsyncThunk("app/search", async (text) => {
  try {
    const result = await appApi.searchApp(text);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const resultSearchSlice = createSlice({
  name: "resultSearch",
  initialState,
  reducers: {},
  extraReducers: {
    [getResultSearch.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getResultSearch.fulfilled]: (state, action) => {
      state.resultSearch = action.payload;
      state.isLoading = false;
    },
    [getResultSearch.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = resultSearchSlice.actions;
export default resultSearchSlice.reducer;
