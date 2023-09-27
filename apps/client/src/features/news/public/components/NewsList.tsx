import { Title } from "@/components";
import { NewsCard, useGetPublicNewsQuery } from "@/features"
import { Row } from "antd";
import { useEffect } from "react";
export function NewsList() {
    const { data: newsList } = useGetPublicNewsQuery();
    return (
        <Row gutter={[12, 12]}>
            <Title level={2}>News</Title>
            {newsList?.map((news) => (
                <NewsCard news={news} key={news.id} />
            ))}
        </Row>
    )
}