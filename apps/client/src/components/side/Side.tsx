import { Col, Row } from "antd";

type Props = {
    left: React.ReactNode;
    right: React.ReactNode;
}

export function Side({ left, right }: Props) {
    return (
        <Row gutter={[12, 12]}>
            <Col span={24} md={12}>{left}</Col>
            <Col span={24} md={12}>{right}</Col>
        </Row>
    )
}