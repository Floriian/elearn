import React, { useState } from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    LaptopOutlined,
    NotificationOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
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

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

export function AppLayout({ children }: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const marginLeft = collapsed ? 0 : 200;

    return (
        <Layout>
            <AppHeader />
            <Layout>
                <Sider collapsible collapsed={collapsed} onCollapse={(val) => setCollapsed(val)}
                    style={{
                        height: '100vh',
                        position: 'sticky',
                    }}>
                    <Menu theme="dark" defaultSelectedKeys={['']} mode='inline' items={items} />
                </Sider>
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
