import { api } from "@/app/store/api";
import { userSlice } from "@/features/user/user.slice";
import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [userSlice.name]: userSlice.reducer
});
