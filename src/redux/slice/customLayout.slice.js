import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customLayout: false,
  popupSetting: false,
  routerPrevious: "",
};

const ChangeLayout = createSlice({
  name: "customLayout",
  initialState,
  reducers: {
    setLayout: (state, action) => {
      state.customLayout = action.payload;
    },
    setShowPopup: (state, action) => {
      state.popupSetting = action.payload;
    },
    setUrlPage: (state, action) => {
      state.routerPrevious = action.payload;
    },
  },
});

export const { setLayout, setShowPopup, setUrlPage } = ChangeLayout.actions;
export default ChangeLayout.reducer;
