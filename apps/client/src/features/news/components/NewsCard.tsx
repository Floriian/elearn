import { Card, Title } from "@/components"
import { EllipsisOutlined } from "@ant-design/icons"
import { newsList } from "@/mock"
import { Space, Tooltip } from "antd"
import { theme } from "@/theme"

type Props = {
    news: typeof newsList[0]
}

export function NewsCard({ news }: Props) {
    return (
        <Card
            actions={[
                <p style={{ color: theme.token?.colorPrimary, fontWeight: 'bold' }}>
                    <span>
                        <EllipsisOutlined title="!Show more!" />
                    </span>
                    Show More
                </p>
            ]}
        >
            <Card.Meta
                title={news.title}
                description={`Created at !XY! at ${news.createdAt}`}
            />
            <p>{news.text.slice(0, 150)[0]}</p>
        </Card>
    )
}