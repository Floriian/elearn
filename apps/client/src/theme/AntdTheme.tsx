import { theme } from "@/theme";
import { ConfigProvider } from "antd";
import React from "react"

type Props = {
    children: React.ReactNode;
}
export function AntdTheme({ children }: Props) {
    return (
        <ConfigProvider theme={theme}>
            {children}
        </ConfigProvider>
    )
}