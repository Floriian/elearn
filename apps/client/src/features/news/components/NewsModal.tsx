import { News } from "@/features";
import { Modal } from "antd";
import { type Dispatch, type SetStateAction } from "react";

type Props = {
    data: News;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export function NewsModal({ data, open, setOpen }: Props) {

    const onClick = () => setOpen(false);

    return (
        <Modal
            centered
            open={open}
            title={data?.title}
            onCancel={onClick}
            onOk={onClick}
        >
            <p>{data?.text}</p>
        </Modal>
    );
}
