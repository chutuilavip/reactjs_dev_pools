import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appApi from "../../services/appApi";
import { toast } from "react-toastify";

const initialState = {
  listGameType: [],
  recommendGames: [],
  statusDownload: [],
  listService: [],
  statusBuyService: [],
  isLoading: true,
  error: {},
  dataListAppNotService: [],
};

export const getListGameRecommend = createAsyncThunk(
  "game/recommendApp",
  async () => {
    try {
      console.log("GAME");
      const result = await appApi.recommendApp();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getListGameFollowType = createAsyncThunk(
  "game/listType",
  async (type) => {
    try {
      const result = await appApi.getListGameFollowType(type);
      console.log(result);
      return result.res.data.hot;
    } catch (error) {
      console.log(error);
    }
  }
);

export const dowloadGame = createAsyncThunk("game/dowload", async (params) => {
  try {
    const result = await appApi.downloadApp(params);
    if (result.status === 400) {
      toast.error(result.error);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const getServiceType = createAsyncThunk(
  "service/getType",
  async (type) => {
    try {
      const result = await appApi.getService(type);
      if (result.status === 400) {
        toast.error(result.message);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const buyService = createAsyncThunk(
  "service/buyServive",
  async (type) => {
    try {
      const result = await appApi.buyService(type);
      if (result.status === 400) {
        toast.error(result.error[0]);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const listAppNotService = createAsyncThunk(
  "service/listNotService",
  async (type) => {
    try {
      const result = await appApi.getListAppService(type);
      if (result.status === 400) {
        toast.error(result.message);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const gameRecommendSlice = createSlice({
  name: "gameRecommend",
  initialState,
  reducers: {},
  extraReducers: {
    // Get recommend game
    [getListGameRecommend.pending]: (state) => {
      state.isLoading = true;
    },
    [getListGameRecommend.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.recommendGames = action.payload;
      state.isLoading = false;
    },
    [getListGameRecommend.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get list game follow type
    [getListGameFollowType.pending]: (state) => {
      state.isLoading = true;
    },
    [getListGameFollowType.fulfilled]: (state, action) => {
      state.listGameType = action.payload;
      state.isLoading = false;
    },
    [getListGameFollowType.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Dowload game
    [dowloadGame.pending]: (state) => {
      state.isLoading = true;
    },
    [dowloadGame.fulfilled]: (state, action) => {
      state.statusDownload = action.payload;
      state.isLoading = false;
    },
    [dowloadGame.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get service
    [getServiceType.pending]: (state) => {
      state.isLoading = true;
    },
    [getServiceType.fulfilled]: (state, action) => {
      state.listService = action.payload;
      state.isLoading = false;
    },
    [getServiceType.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get service
    [buyService.pending]: (state) => {
      state.isLoading = true;
    },
    [buyService.fulfilled]: (state, action) => {
      state.statusBuyService = action.payload;
      state.isLoading = false;
    },
    [buyService.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get list app service
    [listAppNotService.pending]: (state) => {
      state.isLoading = true;
    },
    [listAppNotService.fulfilled]: (state, action) => {
      state.dataListAppNotService = action.payload;
      state.isLoading = false;
    },
    [listAppNotService.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = gameRecommendSlice.actions;
export default gameRecommendSlice.reducer;
