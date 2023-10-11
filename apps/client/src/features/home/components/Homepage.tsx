import { PrivateNews } from "@/features/news/private/components";
import { Space } from "antd";

export function Homepage() {
    return (
        <>
            <Space direction="vertical">
                <Space style={{ marginLeft: '5rem' }}>
                    <Space direction="horizontal">
                        <PrivateNews.List />
                    </Space>
                </Space>
            </Space>
        </>
    )
}