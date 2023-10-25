import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { siderLinks } from "@/utils";
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarActiveItem: (
      state,
      { payload }: PayloadAction<Pick<(typeof siderLinks)[0], "key">>,
    ) => {
      state.sidebar.selected = payload.key;
    },
  },
});

export const { setSidebarActiveItem } = uiSlice.actions;
