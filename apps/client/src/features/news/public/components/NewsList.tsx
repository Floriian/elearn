import { Title } from "@/components";
import { NewsCard, useGetPublicNewsQuery } from "@/features"
import { Col, Row } from "antd";
export function NewsList() {
    const { data: newsList } = useGetPublicNewsQuery();
    return (
        <Row gutter={[12, 12]}>
            <Title level={2}>News</Title>
            <Col span={24}>
                {newsList?.map((news) => (
                    <NewsCard news={news} key={news.id} />
                ))}
            </Col>
        </Row>
    )
}