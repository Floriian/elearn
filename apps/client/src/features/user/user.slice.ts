import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { User } from "@/features";
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      Object.assign(state, payload);
    },
  },
});

export const { setUser } = userSlice.actions;
