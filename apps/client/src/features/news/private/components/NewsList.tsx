import { Title } from "@/components";
import { NewsCard } from "@/features"
import { useGetPrivateNewsQuery } from "@/features/news/private";
import { Row } from "antd";
import { useEffect } from "react";
export function NewsList() {
    const { data } = useGetPrivateNewsQuery();
    useEffect(() => console.log(data), [data])
    return (
        <Row gutter={[12, 12]}>

        </Row>
    )
}