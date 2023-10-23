import { useGetCourseQuery } from "@/features";
import { useParams } from "react-router-dom";

export function CourseDetails() {
    const { id } = useParams();

    const { data } = useGetCourseQuery({ courseId: +id! })

    return (
        <>
            <p>{data?.title}</p>
        </>
    )
}