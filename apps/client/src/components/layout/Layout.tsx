import { useAppDispatch } from "@/app";
import { setUser } from "@/features";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
    const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently().then((token) => {
                dispatch(setUser({ ...user, accessToken: token }))
            })
        }
    }, [isAuthenticated])

    return (
        <Outlet />
    )
}