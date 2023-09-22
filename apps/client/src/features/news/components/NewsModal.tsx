import { useGetNewsQuery } from "@/features";
import { Modal } from "antd";
import type { Dispatch, SetStateAction } from "react";

type Props = {
    id: number;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}
export function NewsModal({ id, open, setOpen }: Props) {
    const { data } = useGetNewsQuery(`${id}`);
    return <Modal centered open={open} title={data?.title} onCancel={() => setOpen(false)}>
        <p>{data?.text}</p>
    </Modal>
}