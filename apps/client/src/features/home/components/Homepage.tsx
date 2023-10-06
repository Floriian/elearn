import { withAuth } from "@/features/auth/components/withAuth";
import { Space } from "antd";

export function Page() {
    return (
        <Space direction="vertical">
            <Space style={{ marginLeft: '5rem' }}>
                <Space direction="horizontal">
                    he
                </Space>
            </Space>
        </Space>
    )
}

export const Homepage = withAuth(Page);