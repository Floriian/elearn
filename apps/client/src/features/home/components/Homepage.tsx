import { useUser } from "@/features/user/user.hooks";
import { Space } from "antd";

export function Homepage() {
    const user = useUser();
    return (
        <Space direction="vertical">
            <Space style={{ marginLeft: '5rem' }}>
                <Space direction="horizontal">
                    hello {user.name}
                </Space>
            </Space>
        </Space>
    )
}