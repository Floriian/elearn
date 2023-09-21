import { Logo } from "@/components/logo";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { Divider, Space } from "antd";
export function Homepage() {
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