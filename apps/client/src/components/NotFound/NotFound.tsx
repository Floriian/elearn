import { Title } from "@/components";
import { useLocation } from "react-router-dom";

export function NotFound() {
    const { pathname } = useLocation();
    return (
        <Title>
            <span
                style={{
                    textTransform: "capitalize",
                }}
            >
                {pathname.split("/")[1]}
            </span>{" "}
            page is not found.
        </Title>
    );
}
