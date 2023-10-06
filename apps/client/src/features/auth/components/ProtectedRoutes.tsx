import { useAppSelector } from "@/app";
import { getUser } from "@/features";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {

    return <Outlet />
}