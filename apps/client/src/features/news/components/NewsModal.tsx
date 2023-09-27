import { News } from "@/features";
import { Modal } from "antd";
import { type Dispatch, type SetStateAction, useState } from "react";

type Props = {
    data: News;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export function NewsModal({ data, open, setOpen }: Props) {

    return (
        <Modal
            centered
            open={open}
            title={data?.title}
            onCancel={() => setOpen(false)}
        >
            <p>{data?.text}</p>
        </Modal>
    );
}
