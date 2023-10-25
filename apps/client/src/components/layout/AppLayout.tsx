import React, { useState } from "react";
import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;
import { AppHeader } from "./AppHeader";
import { useNavigate } from "react-router-dom";
import { setSidebarActiveItem, useUiSidebar, useUser } from "@/features";
import { Logo } from "@/components";
import { adminSiderLinks, siderLinks } from "@/utils";
import { useAppDispatch } from "@/app";

type Props = {
    children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const user = useUser();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const sidebar = useUiSidebar();


    const handleClick = ({ key }: { key: string }) => {
        if (key) {
            navigate(key);
            dispatch(setSidebarActiveItem({ key }))
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
                <Menu theme="dark" defaultSelectedKeys={[sidebar.selected]} mode="inline" items={
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
