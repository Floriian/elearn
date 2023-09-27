import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
export function AuthProvider() {
    const { isAuthenticated, user } = useAuth0();

    return (
        <>
            {isAuthenticated ? <Outlet /> : <Navigate to="/auth" />}
        </>
    )
}