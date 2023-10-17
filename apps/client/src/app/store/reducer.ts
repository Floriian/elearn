import { api } from "./api";
import { authSlice } from "@/features/auth/auth.slice";
import { userSlice } from "@/features/user/user.slice";
import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});
