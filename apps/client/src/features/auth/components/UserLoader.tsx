import { useAppDispatch } from "@/app";
import { setUser } from "@/features";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

type Props = {
    children: React.ReactNode;
}

export function UserLoader({ children }: Props) {
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
        <>{children}</>
    )
}