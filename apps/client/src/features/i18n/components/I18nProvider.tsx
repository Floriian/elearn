import React from "react"

type Props = {
    children: React.ReactNode;
}
export function I18NProvider({ children }: Props) {
    return <>{children}</>
}