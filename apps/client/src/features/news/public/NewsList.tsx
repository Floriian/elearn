import { NewsCard } from "@/features"
import { newsList } from "@/mock"
export function NewsList() {
    return (
        <>
            {newsList.map((news) => (
                <NewsCard news={news} key={news.id} />
            ))}
        </>
    )
}