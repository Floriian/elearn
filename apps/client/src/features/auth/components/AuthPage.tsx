import { Container, Logo, Side } from "@/components";
import { AuthCard, PublicNews } from "@/features";
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
            <Container>
                <Side left={<PublicNews.List />} right={<PublicNews.List />} />
            </Container>
        </>
    )
}