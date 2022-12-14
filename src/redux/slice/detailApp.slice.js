import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import appApi from '../../services/appApi';
import userApi from '../../services/userApi';
import { ToastError } from '../../utils';

const initialState = {
  detailApp: {},
  detailAppWithLang: {},
  createdApps: [],
  error: {},
  categories: [],
  app_permission: [],
  information: [],
  languages: [],
  handleNextTabStore: null,
  handlePrevTabStore: null,
  selectedTabStore: 1,
  appComments: [],
  historyUpdate: [],
  statusGetHistory: 'idle',
  isLoading: true,
  isLoadingBuyVideoService: false,
  isLoadingSubmit: false,
  isLoadingDeleteScreenshot: false,
  isLoadingEditApp: false,
  isLoadingDeleteApp: false,
  isLoadingCreatedApps: false,
  isLoadingGetComment: false,
  isLoadingGetHistory: false,
  status: {
    getPermissionAndInformation: 'idle',
  },
};

export const getDetailApp = createAsyncThunk('getDetailApp', async (slug) => {
  try {
    const { res, status } = await appApi.getDetailApp(slug);
    return res;
  } catch (error) {
    console.log(error.response);
  }
});

export const editApp = createAsyncThunk('editApp', async ({ callBack, data }) => {
  try {
    const res = await appApi.editApp(data);
    console.log(res.status);
    if (res.status === 200) {
      toast.success('Edit app successfully, Please waiting for admin approve your update');
      callBack();
      return res;
    } else if (res.status >= 400) {
      ToastError(res);
    }
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 413) {
      toast.error('APK File to large, Server can not handle it.');
    }
    const errorKeys = Object.keys(error.response?.data?.errors);

    for (let key of errorKeys) {
      console.log(key);
      for (let er of error.response?.data?.errors[key]) {
        toast.error(er);
      }
    }
  }
});
export const deleteScreenshot = createAsyncThunk(
  'deleteScreenshot',
  async ({ name_image, appid, reload }, thunkAPI) => {
    try {
      const res = await appApi.deleteScreenshot({
        name_image,
        appid,
      });
      if (res.status === 200) {
        reload();
        toast.success('Delete screenshot successfully');
        return res;
      } else if (res.status >= 400) {
        ToastError(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteApp = createAsyncThunk('deleteApp', async ({ appId, callBack }, thunkAPI) => {
  try {
    const { res, status } = await appApi.deleteApp(appId);
    if (status === 200) {
      toast.success('Delete App successfully');
      callBack();
      return res;
    } else if (status >= 400) {
      ToastError(res);
    }
  } catch (error) {
    console.log(error);
  }
});

export const getDetailAppWithLange = createAsyncThunk('getDetailApp', async ({ slug, lang }) => {
  try {
    const { res, status } = await appApi.getDetailAppWithLange(slug, lang);
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const getAppHistoryUpdate = createAsyncThunk(
  'getAppHistoryUpdate',
  async ({ appId, keyword, locale }, thunkAPI) => {
    try {
      const res = await appApi.getHistoryUpdateOfApp(appId, keyword, locale);
      if (res.status >= 400) {
        ToastError(res);
        return thunkAPI.rejectWithValue('error');
      }
      return res.res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCategoriesAndLanguage = createAsyncThunk('getCategories', async () => {
  try {
    const res = await appApi.getCategories();
    localStorage.removeItem('languages');
    localStorage.setItem('languages', JSON.stringify(res.language));
    return res;
  } catch (err) {
    console.log(err);
  }
});
export const getAppPermissionAndInfoCollection = createAsyncThunk(
  'getAppPermissionAndInfoCollection',
  async (_, thunkAPI) => {
    try {
      const res = await appApi.getPermissionAndInfoCollection();
      if (res.status >= 400) {
        return thunkAPI.rejectWithValue('error');
      }
      console.log(res);
      return res.res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getCreatedApp = createAsyncThunk('getCreatedApp', async (payload, thunkApi) => {
  try {
    const res = await appApi.getCreatedApp(payload.limit, payload.page, payload.title);
    if (res.status === 200) {
      return res?.res?.data;
    } else {
      throw new Error(res?.status?.error);
    }
  } catch (err) {
    console.log(err);
  }
});

export const uploadContent = createAsyncThunk('uploadContent', async (data) => {
  try {
    const res = await userApi.uploadContent(data.formData);
    if (res.status === 200) {
      toast.success('Created successfully');
      data.callback();
    } else if (res.status === 400) {
      if (res.error) {
        toast.error(res.error);
      } else if (res.errors) {
        res.errors.forEach((el) => toast.error(el));
      }
    } else {
      toast.error(
        'Something went wrong !!! Please try again or contact us via email address pool.test@gmail.com'
      );
    }
    return res;
  } catch (err) {
    if (err?.response?.data?.error) {
      toast.error(err.response.data.error);
    } else if (err?.response?.status === 413) {
      toast.error('File too large. Please upload another file');
    }
    const keysErrors = Object.keys(err.response?.data?.errors);
    for (let key of keysErrors) {
      toast.error(err.response.data.errors[key][0]);
    }
    console.log(err.response.data.errors);
  }
});
export const getAllAppComments = createAsyncThunk('app/getComments', async (payload) => {
  try {
    const res = await appApi.getComments(payload);
    console.log(res);

    return res.res.data;
  } catch (err) {
    console.log(err);
  }
});
export const buyServiceVideo = createAsyncThunk('service/buyVideo', async (data, thunkAPI) => {
  try {
    const res = await userApi.buyServiceVideo(data);
    console.log(res);
    if (res.status === 400) {
      if (res.error) {
        toast.error(res.error);
      } else if (res.errors) {
        res.errors.forEach((el) => toast.error(el));
      }
      return thunkAPI.rejectWithValue();
    }
    toast.success('Action successfully, please waiting for admin approve');
    return res;
  } catch (err) {
    toast.error('Buying service video failed');
    console.log(err);
  }
});

const detailAppSlice = createSlice({
  name: 'detailAppSlice',
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
    [getCategoriesAndLanguage.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [getAppPermissionAndInfoCollection.pending]: (state, action) => {
      state.isLoading = true;
      state.status.getPermissionAndInformation = 'idle';
    },
    [getAppPermissionAndInfoCollection.fulfilled]: (state, action) => {
      state.app_permission = action.payload?.app_permission;
      state.information = action.payload?.information;
      state.status.getPermissionAndInformation = 'success';
      state.isLoading = false;
    },
    [getAppPermissionAndInfoCollection.rejected]: (state, action) => {
      state.isLoading = false;
      state.status.getPermissionAndInformation = 'fail';
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
    [getDetailAppWithLange.pending]: (state) => {
      state.isLoadingEditApp = true;
    },
    [getDetailAppWithLange.fulfilled]: (state, action) => {
      state.isLoadingEditApp = false;
      state.detailAppWithLang = action.payload;
    },
    [getDetailAppWithLange.rejected]: (state) => {
      state.isLoadingEditApp = false;
    },

    [deleteScreenshot.pending]: (state) => {
      state.isLoadingDeleteScreenshot = true;
    },
    [deleteScreenshot.fulfilled]: (state, action) => {
      state.isLoadingDeleteScreenshot = false;
    },
    [deleteScreenshot.rejected]: (state) => {
      state.isLoadingDeleteScreenshot = false;
    },

    [editApp.pending]: (state) => {
      state.isLoadingEditApp = true;
    },
    [editApp.fulfilled]: (state, action) => {
      state.isLoadingEditApp = false;
    },
    [editApp.rejected]: (state) => {
      state.isLoadingEditApp = false;
    },

    [deleteApp.pending]: (state) => {
      state.isLoadingDeleteApp = true;
    },
    [deleteApp.fulfilled]: (state, action) => {
      state.isLoadingDeleteApp = false;
    },
    [deleteApp.rejected]: (state) => {
      state.isLoadingDeleteApp = false;
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

    //Delete app
    [deleteApp.pending]: (state, action) => {
      state.isLoadingCreatedApps = true;
    },
    [deleteApp.fulfilled]: (state, { payload }) => {
      state.isLoadingCreatedApps = false;
    },
    [deleteApp.rejected]: (state, action) => {
      state.isLoadingCreatedApps = false;
    },

    // Get app comment
    [getAllAppComments.pending]: (state, action) => {
      state.isLoadingGetComment = true;
    },
    [getAllAppComments.fulfilled]: (state, { payload }) => {
      state.isLoadingGetComment = false;
      state.appComments = payload;
    },
    [getAllAppComments.rejected]: (state, action) => {
      state.isLoadingGetComment = false;
    },

    // get app's history update
    [getAppHistoryUpdate.pending]: (state, action) => {
      state.isLoadingGetHistory = true;
      state.statusGetHistory = 'idle';
      state.historyUpdate = [];
    },
    [getAppHistoryUpdate.fulfilled]: (state, { payload }) => {
      state.isLoadingGetHistory = false;
      state.historyUpdate = payload;
      state.statusGetHistory = 'success';
    },
    [getAppHistoryUpdate.rejected]: (state, action) => {
      state.isLoadingGetHistory = false;
      state.statusGetHistory = 'fail';
      state.historyUpdate = [];
    },
  },
});

export const { setHandlePrevTab, setHandleNextTab, setSelectedTabStore } = detailAppSlice.actions;
export default detailAppSlice.reducer;
