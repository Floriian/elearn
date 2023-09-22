import { theme } from "@/theme";
import { Typography } from "antd";
import styled from "styled-components";

export const Title = styled(Typography.Title)`
    &.ant-typography {
        color: ${theme.token?.colorPrimary}
    }
`