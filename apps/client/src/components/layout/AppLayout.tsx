import React, { useState } from "react";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    BookOutlined,
    HomeOutlined,
    DatabaseOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;
import { AppHeader } from "./AppHeader";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/features";
import { Logo } from "@/components";
import { adminSiderLinks, siderLinks } from "@/utils";

type Props = {
    children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const user = useUser();

    const navigate = useNavigate();

    const handleClick = ({ key }: { key: string }) => {
        if (key) {
            navigate(key);
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{
                    padding: '1rem'
                }}>
                    <Logo hasText={!collapsed} />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['/']} mode="inline" items={
                    user.role === "admin" ? adminSiderLinks : siderLinks
                } onClick={handleClick} />
            </Sider>
            <Layout>
                <AppHeader />
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
