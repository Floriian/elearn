import { Title } from "@/components";
import { Space } from "antd";
import { CSSProperties } from "react";

export function Logo({ style, hasText }: { style?: CSSProperties, hasText?: boolean } = { hasText: false }) {
    return (
        <Space style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.svg" alt="NeptunOnSteroids" style={style} />
            {hasText ? <Title level={3}>ExamX</Title> : null}
        </Space>
    )
}