import { Course, CourseCard, useGetCoursesQuery } from "@/features";
import { Col, Row } from "antd";

type Props = {
    courses: Course[];
};

export function CourseList({ courses }: Props) {
    return (
        <>
            <Row>
                {courses?.map((course) => (
                    <Col span={6} key={course.id}>
                        <CourseCard course={course} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
