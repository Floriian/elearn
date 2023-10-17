import { useAppDispatch, useAppSelector } from "@/app";
import { AppLayout } from "@/components";
import { setUser } from "@/features";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function ProtectedRoutes() {

    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!isAuthenticated) return navigate("/auth");

        if (isAuthenticated) {
            console.log("authenticated.");
        }


    }, [isAuthenticated])

    return <AppLayout>
        <Outlet />
    </AppLayout>
}