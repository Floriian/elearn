import { Card } from "@/components"
import { newsList } from "@/mock"
import { theme } from "@/theme"

type Props = {
    news: typeof newsList[0]
}

export function NewsCard({ news }: Props) {
    return (
        <Card
            actions={[
                <p style={{ color: theme.token?.colorPrimary, fontWeight: 'bold' }}>
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