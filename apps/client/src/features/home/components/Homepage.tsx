import { withAuth } from "@/features/auth/components/withAuth";
import { useUser } from "@/features/user/user.hooks";
import { Space } from "antd";

export function Page() {
    const user = useUser();
    return (
        <Space direction="vertical">
            <Space style={{ marginLeft: '5rem' }}>
                <Space direction="horizontal">
                    he {user.name}
                </Space>
            </Space>
        </Space>
    )
}

export const Homepage = withAuth(Page);