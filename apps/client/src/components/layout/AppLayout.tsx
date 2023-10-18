import React, { useState } from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;
import { AppHeader } from "./AppHeader";

const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

type Props = {
    children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <AppHeader />
            <Layout>
                <Sider collapsible collapsed={collapsed} onCollapse={(val) => setCollapsed(val)}
                    style={{
                        width: '25%',
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}>
                    <Menu theme="dark" defaultSelectedKeys={['']} mode='inline' items={items} />
                </Sider>
                <Content
                    style={{
                        overflow: 'auto',
                        marginLeft: collapsed ? '0.5rem' : '8rem'
                    }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
