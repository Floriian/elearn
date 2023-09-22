import { Title } from "@/components/title";
import { Space } from "antd";

export function Logo() {
    return (
        <Space>
            <img src="/logo.svg" alt="NeptunOnSteroids" />
            <Title level={3}>Neptun on Steroids</Title>
        </Space>
    )
}