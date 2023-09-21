import { Logo } from "@/components";
import { AuthCard } from "@/features";
import { Divider, Space } from "antd";
export function AuthPage() {
    return (
        <>
            <Space direction="vertical">
                <Logo />
                <Space style={{ marginLeft: '5rem' }}>
                    <Space direction="horizontal">
                        <AuthCard />
                    </Space>
                </Space>
            </Space>
            <Divider />

        </>
    )
}