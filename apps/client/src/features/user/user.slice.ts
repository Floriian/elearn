import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { User } from "@/features";
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<Omit<User, "accessToken">>) => {
      console.log({ payload });
      state = { ...state, payload };
    },
    setAccessToken: (state, { payload }: PayloadAction<{ token: string }>) => {
      console.log("rák a szivedet TEEEEEEEE");
      state.accessToken = payload.token;
    },
  },
});

export const { setUser, setAccessToken } = userSlice.actions;
