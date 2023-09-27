import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function AuthProvider() {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) navigate("/auth");
    }, [isAuthenticated])
    return <Outlet />
}