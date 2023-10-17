import { useAppSelector } from "@/app";
import { Container, Logo, Side } from "@/components";
import { AuthCard, PublicNews } from "@/features";
import { Divider, Space } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function AuthPage() {
    const navigate = useNavigate();

    const { isAuthenticated } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) navigate("/");
    }, [isAuthenticated])

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