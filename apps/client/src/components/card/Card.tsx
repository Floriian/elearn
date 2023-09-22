import { theme } from "@/theme";
import { Card as AntdCard } from "antd";
import styled from "styled-components";
export const Card = styled(AntdCard)`
    &.ant-card-head-title, .ant-card-meta-title {
        color: ${theme.token?.colorPrimary};
    }
`