import { NewsCard } from "@/features"
import { useGetPrivateNewsQuery } from "@/features/news/private";
import { Col, Row } from "antd";
export function NewsList() {
    const { data } = useGetPrivateNewsQuery();
    return (
        <Row gutter={[12, 12]}>
            <Col span={24}>
                {data?.map((news) => (
                    <NewsCard news={news} key={news.id} />
                ))}
            </Col>
        </Row>
    )
}