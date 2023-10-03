import React from "react";
import { auth0Config } from "@/config";
import { AppState, Auth0Provider, User as Auth0User } from "@auth0/auth0-react";
import { useAppDispatch } from "@/app";
import { User, setUser } from "@/features";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
}

export function Auth0Context({ children }: Props) {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState | undefined, user: Auth0User | undefined) => {
    dispatch(setUser(user as any as User))
    navigate("/");
  }

  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      issuer={auth0Config.issuer}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: auth0Config.audience,
      }}
    >
      {children}
    </Auth0Provider>
  )
}