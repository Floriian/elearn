import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, Navigate } from "react-router-dom";

export function AuthProvider() {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) return <Navigate to="/auth" />

    return (
        <>
            <Outlet />
        </>
    )
}