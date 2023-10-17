export interface Auth {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  isAuthenticated: boolean;
}
