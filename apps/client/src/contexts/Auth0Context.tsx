import React from "react";
import { auth0Config } from "@/config";
import { AppState, Auth0Provider, User as Auth0User, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/app";
import { setAccessToken, setUser } from "@/features";
type Props = {
  children: React.ReactNode;
}

export function Auth0Context({ children }: Props) {

  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      issuer={auth0Config.issuer}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: auth0Config.audience,
      }}
    >
      {children}
    </Auth0Provider>
  )
}