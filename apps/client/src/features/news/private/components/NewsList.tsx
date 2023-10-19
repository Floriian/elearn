import { NewsCard } from "@/features"
import { useGetPrivateNewsQuery } from "@/features/news/private";
import { Row } from "antd";
import { useEffect } from "react";
export function NewsList() {
    const { data } = useGetPrivateNewsQuery();
    return (
        <Row gutter={[12, 12]}>
            {data?.map((news) => (
                <NewsCard news={news} key={news.id} />
            ))}
        </Row>
    )
}