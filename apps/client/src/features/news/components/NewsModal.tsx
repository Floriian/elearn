import { Modal } from "antd";
import { useEffect, type Dispatch, type SetStateAction } from "react";

type Props = {
    id: number;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}
export function NewsModal({ id, open, setOpen }: Props) {
    return <h1>modal</h1>

    // return <Modal centered open={open} title={data?.title} onCancel={() => setOpen(false)}>
    //     <p>{data?.text}</p>
    // </Modal>
}