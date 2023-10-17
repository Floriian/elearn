import { Auth } from "./types";
export const initialState: Auth = {
  accessToken: undefined,
  refreshToken: undefined,
  isAuthenticated: false,
};
