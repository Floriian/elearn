import { Logo, Side } from "@/components";
import { AuthCard, NewsList } from "@/features";
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
            <Side left={<NewsList />} right={<NewsList />} />
        </>
    )
}