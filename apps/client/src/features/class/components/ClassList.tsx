import { Class } from "@/features"
import { ClassCard } from "@/features/class/components";
import { Col, Row } from "antd";

type Props = {
    data: Class[]
}

export function ClassList({ data }: Props) {
    return (
        <Row>
            {data.map((value) => (
                <Col span={6} key={value.id}>
                    <ClassCard classData={value} />
                </Col>
            ))}
        </Row>
    )
}