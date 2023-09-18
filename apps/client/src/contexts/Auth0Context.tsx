import React from "react";
import { auth0Config } from "@/config";
import { Auth0Provider } from "@auth0/auth0-react";

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