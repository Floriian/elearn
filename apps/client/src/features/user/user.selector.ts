import { RootState } from "@/app";
import { createSelector } from "@reduxjs/toolkit";

function rootSelector(state: RootState) {
  return state.user;
}

export const getUserAccessToken = createSelector(
  rootSelector,
  (state) => state.accessToken,
);

export const getUserName = createSelector(rootSelector, (state) => state.name);
export const getUserSub = createSelector(rootSelector, (state) => state.sub);
