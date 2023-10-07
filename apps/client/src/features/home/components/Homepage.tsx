import { useUser } from "@/features";
import { PrivateNews } from "@/features/news/private/components";
import { withUser } from "@/features/user/components/withUser";
import { Space } from "antd";

function Page() {
    const user = useUser();
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

export const Homepage = withUser({ Component: Page });