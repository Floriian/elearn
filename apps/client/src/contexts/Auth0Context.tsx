import React from "react";
import { auth0Config } from "@/config";
import { AppState, Auth0Provider, User as Auth0User, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/app";
import { setAccessToken, setUser } from "@/features";
import { axiosInstance } from "@/utils";
type Props = {
  children: React.ReactNode;
}

export function Auth0Context({ children }: Props) {

  const { getAccessTokenSilently } = useAuth0();

  const onRedirectCallback = async (appState: AppState | undefined, user: Auth0User | undefined) => {
    //check if user exisiting in the backend database, if not it will create it.
    //any route is okay, because the user middleware applied to all routes in backend.
    await axiosInstance("/news/private", {
      headers: {
        Authorization: 'Bearer' + await getAccessTokenSilently(),
        identifier: user?.email
      }
    })
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