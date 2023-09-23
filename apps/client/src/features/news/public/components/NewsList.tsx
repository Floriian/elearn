import { Title } from "@/components";
import { NewsCard, useGetAllNewsQuery } from "@/features"
import { Row } from "antd";
export function NewsList() {
    const { data: newsList } = useGetAllNewsQuery();
    return (
        <Row gutter={[12, 12]}>
            <Title level={2}>News</Title>
            {newsList?.map((news) => (
                <NewsCard news={news} key={news.id} />
            ))}
        </Row>
    )
}