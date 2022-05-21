import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    updateLoadingStatus: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { reducer } = appSlice;
export const { updateLoadingStatus } = appSlice.actions;
