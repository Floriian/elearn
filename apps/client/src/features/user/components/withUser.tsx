import { useAppDispatch, } from "@/app";
import { setUser, useUser } from "@/features";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";

type Props = {
    Component: React.ComponentType;
}

export function withUser({ Component, }: Props) {
    return () => {
        const { isAuthenticated, isLoading } = useAuth0();

        if (isLoading) return <p>Loading</p>
        return <Component />
    }
}