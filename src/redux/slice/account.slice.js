import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountApi from "../../services/accountApi";

const initialState = {
  // newInfo: [],
  infoAccount: {},
  isLoading: true,
};

export const getAccount = createAsyncThunk("getAccount", async () => {
  try {
    const result = await accountApi.getAccountInfo();
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const getEditAvatar = createAsyncThunk(
  "editavatar",
  async (formData, thunkAPI) => {
    try {
      const result = await accountApi.editAvatarAccount(formData);
      if (result.status === 200) {
        thunkAPI.dispatch(getAccount());
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getEditInfo = createAsyncThunk(
  "getEditInfo",
  async (formData, { dispatch }) => {
    try {
      const result = await accountApi.editAccount(formData);
      await dispatch(getAccount());
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const getAccountSlice = createSlice({
  name: "getAccountSlice",
  initialState,
  reducers: {},
  extraReducers: {
    //get account
    [getAccount.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAccount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.infoAccount = action.payload;
    },
    [getAccount.rejected]: (state, action) => {
      state.isLoading = false;
    },

    //edit avatar
    [getEditAvatar.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getEditAvatar.fulfilled]: (state, action) => {
      // state.newInfo = action.payload;
      // window.location.reload();
      state.isLoading = false;
    },
    [getEditAvatar.rejected]: (state, action) => {
      state.isLoading = false;
    },

    //edit info
    [getEditInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getEditInfo.fulfilled]: (state, action) => {
      // state.newInfo = action.payload;
      // window.location.reload();
      state.isLoading = false;
    },
    [getEditInfo.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = getAccountSlice.actions;
export default getAccountSlice.reducer;
