import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

export function withAuth(Component: React.ComponentType) {
    return () => {
        const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

        useEffect(() => console.log({ isAuthenticated }), [isAuthenticated])

        return <Component />
    }
}