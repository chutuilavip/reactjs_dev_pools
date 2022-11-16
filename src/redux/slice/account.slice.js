import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import accountApi from '../../services/accountApi';

const initialState = {
  // newInfo: [],
  infoAccount: {},
  isLoading: true,
  statusGetAccount: 'idle',
};

export const getAccount = createAsyncThunk('getAccount', async () => {
  try {
    const result = await accountApi.getAccountInfo();
    console.log(result);
    if (result.status === 200) {
      console.log(JSON.stringify(result.res.data.business_info));
      localStorage.removeItem('dev');
      localStorage.setItem('dev', JSON.stringify(result.res.data.business_info));
    }
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const getEditAvatar = createAsyncThunk('editavatar', async (formData, thunkAPI) => {
  try {
    const result = await accountApi.editAvatarAccount(formData);
    if (result.status === 200) {
      toast.success('Change avatar successfully');
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
});

export const editAccountInfo = createAsyncThunk(
  'editAccountInfo',
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
        toast.success('Update user info successfully');
      }
      await dispatch(getAccount());
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addMoney = createAsyncThunk('addMoney', async (formData, { dispatch }) => {
  try {
    const result = await accountApi.addMoney(formData);
    if (result.status === 200) {
      window.open(result.url, '_blank', 'noopener,noreferrer');
    }
    return result;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});

const getAccountSlice = createSlice({
  name: 'getAccountSlice',
  initialState,
  reducers: {},
  extraReducers: {
    //get account
    [getAccount.pending]: (state, action) => {
      state.isLoading = true;
      state.statusGetAccount = 'idle';
    },
    [getAccount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.infoAccount = action.payload;
      state.statusGetAccount = 'success';
    },
    [getAccount.rejected]: (state, action) => {
      state.isLoading = false;
      state.statusGetAccount = 'fail';
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
  },
});

export const {} = getAccountSlice.actions;
export default getAccountSlice.reducer;
