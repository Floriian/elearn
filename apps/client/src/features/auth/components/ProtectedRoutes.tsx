import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export function ProtectedRoutes() {
    const { user, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    useEffect(() => {
        if (user === undefined) {
            navigate("/auth");
        }

        console.log({ user })
    }, [user]);


    return <Outlet />
}