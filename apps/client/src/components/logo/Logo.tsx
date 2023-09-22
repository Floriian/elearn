import { Title } from "@/components";
import { Space } from "antd";

export function Logo() {
    return (
        <Space>
            <img src="/logo.svg" alt="NeptunOnSteroids" />
            <Title level={3}>Neptun on Steroids</Title>
        </Space>
    )
}