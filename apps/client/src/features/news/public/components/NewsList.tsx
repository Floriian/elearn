import { Title } from "@/components";
import { NewsCard } from "@/features"
import { newsList } from "@/mock";
import { Row } from "antd";
export function NewsList() {
    return (
        <Row gutter={[12, 12]}>
            <Title level={2}>News</Title>
            {newsList?.map((news) => (
                <NewsCard news={news} key={news.id} />
            ))}
        </Row>
    )
}