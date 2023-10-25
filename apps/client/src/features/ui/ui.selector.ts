import { RootState } from "@/app";
import { createSelector } from "@reduxjs/toolkit";

function rootSelector(state: RootState) {
  return state.ui;
}

export const getUISidebar = createSelector(
  rootSelector,
  (state) => state.sidebar,
);
