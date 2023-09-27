import { api } from "@/app/store/api";
import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
