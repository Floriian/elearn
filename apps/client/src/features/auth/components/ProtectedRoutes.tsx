import { useAppDispatch } from "@/app";
import { setUser } from "@/features";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function ProtectedRoutes() {
    const { isAuthenticated, isLoading, user, getAccessTokenSilently } = useAuth0();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isLoading) return;
        if (!isAuthenticated) return navigate("/auth");

        if (isAuthenticated && !isLoading) {
            const userFromAuth0 = async () => {
                const token = await getAccessTokenSilently();
                dispatch(setUser({ ...user, accessToken: token }))
            }
            userFromAuth0();
        }


    }, [isAuthenticated, isLoading])

    return <Outlet />
}