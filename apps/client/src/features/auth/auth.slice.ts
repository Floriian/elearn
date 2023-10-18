import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { Auth } from "./types";
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, { payload }: PayloadAction<Auth>) => {
      Object.assign(state, payload);
    },
    setTokens: (
      state,
      { payload }: PayloadAction<Omit<Auth, "isAuthenticated">>,
    ) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    signOut: (state) => {
      const newState: typeof state = {
        accessToken: "",
        isAuthenticated: false,
        refreshToken: "",
      };

      state = newState;
    },
  },
});

export const { setTokens, signIn, signOut } = authSlice.actions;
