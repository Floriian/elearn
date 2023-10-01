import { User as Auth0User } from "@auth0/auth0-react";
export interface User extends Auth0User {
  accessToken: string;
}
