import { useGetClassByIdQuery } from "@/features";
import { Skeleton } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export function ClassDetails() {
    const { id } = useParams();

    const { data, isLoading } = useGetClassByIdQuery({ id })

    useEffect(() => console.log({ data }), [data])

    if (isLoading) return <Skeleton active />

    return <p>Class details</p>
}