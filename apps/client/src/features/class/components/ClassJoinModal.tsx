import { useJoinClassMutation } from "@/features";
import { FieldBinaryOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export function ClassJoinModal({ open, setOpen }: Props) {
    const [inviteCode, setInviteCode] = useState<string>("");

    const [joinClass, result] = useJoinClassMutation();

    useEffect(() => console.log({ result }), [result])

    const handleOk = async () => {

        joinClass({ inviteCode })

        setOpen(false);
    };
    return (
        <>
            <Modal title="Join class" open={open} onOk={handleOk}>
                <p>Please enter your invite code</p>
                <Input
                    addonBefore={<FieldBinaryOutlined />}
                    type="text"
                    placeholder=""
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                />
            </Modal>
        </>
    );
}
