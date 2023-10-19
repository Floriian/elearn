import { Logo } from "@/components";
import { Layout, Menu } from "antd";
const { Header } = Layout;
export function AppHeader() {
    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Logo hasText={false} />
            <Menu theme="dark" mode="horizontal" items={new Array(3).fill(null).map((_, index) => ({
                key: String(index + 1),
                label: `nav ${index + 1}`
            }))} />
        </Header>
    )
}