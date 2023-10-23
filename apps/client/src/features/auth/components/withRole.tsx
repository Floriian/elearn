import { useUser } from "@/features";
import { Roles } from "@/types";
import { ComponentType } from "react"
import { Navigate } from "react-router-dom";

type Props = {
    Component: ComponentType;
    role: Roles;
}

export function withRole({ Component, role }: Props) {
    return function withRoleComponent(props: any) {
        const user = useUser();

        if (user.role === role) return <Component {...props} />
        return <Navigate to="/" />
    }
}