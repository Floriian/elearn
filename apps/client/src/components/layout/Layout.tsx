import { useAppDispatch } from "@/app";
import { setUser } from "@/features";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

type Props = {
    children: React.ReactNode;
}

export function Layout({ children }: Props) {
    return (
        <>{children}</>
    )
}