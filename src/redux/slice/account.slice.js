import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import accountApi from "../../services/accountApi";

const initialState = {
  // newInfo: [],
  infoAccount: {},
  isLoading: true,
  createdApps: [],
  isLoadingCreatedApps: false,
};

export const getAccount = createAsyncThunk("getAccount", async () => {
  try {
    const result = await accountApi.getAccountInfo();
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const getCreatedApp = createAsyncThunk(
  "getCreatedApp",
  async (payload, thunkApi) => {
    try {
      const res = await accountApi.getCreatedApp(
        payload.limit,
        payload.page,
        payload.title
      );
      if (res.status === 200) {
        return res?.res?.data;
      } else {
        throw new Error(res?.status?.error);
      }
    } catch (err) {
      console.log(err);
    }
  }
);
export const getEditAvatar = createAsyncThunk(
  "editavatar",
  async (formData, thunkAPI) => {
    try {
      const result = await accountApi.editAvatarAccount(formData);
      if (result.status === 200) {
        thunkAPI.dispatch(getAccount());
      }
      if (result.status >= 400) {
        result.errors.forEach((el) => {
          toast.error(el);
        });
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editAccountInfo = createAsyncThunk(
  "editAccountInfo",
  async (formData, { dispatch }) => {
    try {
      const result = await accountApi.editAccount(formData);
      if (result.status >= 400) {
        if (result.error) {
          toast.error(result.error);
        } else if (result.errors) {
          result.errors?.forEach((el) => toast.error(el));
        }
      }
      if (result.status === 200) {
        toast.success("Update user info successfully");
      }
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
    [editAccountInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editAccountInfo.fulfilled]: (state, action) => {
      // state.newInfo = action.payload;
      // window.location.reload();
      state.isLoading = false;
    },
    [editAccountInfo.rejected]: (state, action) => {
      state.isLoading = false;
    },

    // Get created app
    [getCreatedApp.pending]: (state, action) => {
      state.isLoadingCreatedApps = true;
    },
    [getCreatedApp.fulfilled]: (state, { payload }) => {
      state.createdApps = payload;
      state.isLoadingCreatedApps = false;
    },
    [getCreatedApp.rejected]: (state, action) => {
      state.isLoadingCreatedApps = false;
    },
  },
});

export const {} = getAccountSlice.actions;
export default getAccountSlice.reducer;
