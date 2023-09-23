import { Title } from "@/components";
import { NewsCard, useGetAllNewsQuery } from "@/features"
export function NewsList() {
    const { data: newsList } = useGetAllNewsQuery();
    return (
        <>
            <Title level={2}>News</Title>
            {newsList?.map((news) => (
                <NewsCard news={news} key={news.id} />
            ))}
        </>
    )
}