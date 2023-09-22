import { Card } from "@/components"
import { News } from "@/features"
import { NewsModal } from "@/features/news/components/NewsModal"
import { formatDate } from "@/utils"
import { Button } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

type Props = {
    news: News
}

export function NewsCard({ news }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate()
    return (
        <>
            <Card
                actions={[
                    <Button onClick={() => setOpen(true)}>
                        Show More
                    </Button>
                ]}
            >
                <Card.Meta
                    title={news.title}
                    description={`Created by !XY! at ${formatDate(news.createdAt)}`}
                />
                <p>{news.text.slice(0, 150)[0]}</p>
            </Card>
            {open ? <NewsModal id={news.id} open={open} setOpen={setOpen} /> : null}
        </>
    )
}