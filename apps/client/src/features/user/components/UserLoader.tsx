import { useAppDispatch, } from "@/app";
import { setAccessToken, setUser } from "@/features";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

type Props = {
    children: React.ReactNode;
}

export function UserLoader({ children }: Props) {
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("user loader....");
        const getToken = async () => {
            const token = await getAccessTokenSilently();
            if (token) {
                dispatch(setUser({ ...user, accessToken: token }))
            }
        }
        getToken();
    }, [])

    return <>{children}</>
}