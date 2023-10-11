import { Container, Logo, Side } from "@/components";
import { AuthCard, PublicNews } from "@/features";
import { useAuth0 } from "@auth0/auth0-react";
import { Divider, Space } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function AuthPage() {
    const { isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated && !isLoading) navigate("/");
    }, [isAuthenticated, isLoading])
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