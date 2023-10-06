import { useUser } from "@/features";
import { Space } from "antd";

export function Homepage() {
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