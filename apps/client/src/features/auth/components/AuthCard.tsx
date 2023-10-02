import { Button, Card, Space } from "antd";
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const flexCenter = {
    width: '100%',
    justifyContent: 'center',
}

export function AuthCard() {
    const { loginWithRedirect } = useAuth0();

    return (
        <Space direction="horizontal">
            <Card title="Authentication">
                <Space direction="horizontal" style={flexCenter}>
                    <Button type="primary" onClick={() => loginWithRedirect()}>Log In</Button>
                </Space>
            </Card>
        </Space>
    )
}