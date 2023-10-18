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
    BookOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;
import { AppHeader } from "./AppHeader";
import { useNavigate } from 'react-router-dom';

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

const siderLinks = [
    {
        label: "Homepage",
        icon: React.createElement(HomeOutlined),
        key: "/"
    },
    {
        label: 'Courses',
        icon: React.createElement(BookOutlined),
        key: "/courses",
    }
]

type Props = {
    children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleClick = ({ key }) => {
        if (key) {
            navigate(key);
        }
    }

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
                    <Menu theme="dark" defaultSelectedKeys={['']} mode='inline' items={siderLinks} onClick={handleClick} />
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
