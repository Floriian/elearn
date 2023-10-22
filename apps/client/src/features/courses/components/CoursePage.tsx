
import { CourseList } from "@/features"
import { Col, Row, Space } from "antd"

export function CoursePage() {
    return (
        <Col span={24}>
            <CourseList />
        </Col>
    )
}