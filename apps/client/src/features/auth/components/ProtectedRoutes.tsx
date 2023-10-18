import { useAppSelector } from "@/app";
import { AppLayout } from "@/components";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function ProtectedRoutes() {

    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) return navigate("/auth");

        if (isAuthenticated) {
            console.log("authenticated.");
        }


    }, [isAuthenticated, navigate])

    return <AppLayout>
        <Outlet />
    </AppLayout>
}