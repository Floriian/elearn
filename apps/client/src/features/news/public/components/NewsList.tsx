import { NewsCard, useGetAllNewsQuery } from "@/features"
export function NewsList() {
    const { data: newsList } = useGetAllNewsQuery();
    return (
        <>
            {newsList?.map((news) => (
                <NewsCard news={news} key={news.id} />
            ))}
        </>
    )
}