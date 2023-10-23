import { withRole } from "@/features";
import { Roles } from "@/types";

function Component() {
    return (
        <>
            hi this is the admin page.
        </>
    )
}
export const AdminPage = withRole({
    Component: Component,
    role: Roles.ADMIN,
});