import { newsPublicApi } from "@/features";
import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  [newsPublicApi.reducerPath]: newsPublicApi.reducer,
});
