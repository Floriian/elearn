import { CourseCard, useGetCoursesQuery } from "@/features";

export function CourseList() {
    const { data } = useGetCoursesQuery();
    return (
        <>
            {data?.map((course) => (
                <CourseCard course={course} key={course.id} />
            ))}
        </>
    )
}