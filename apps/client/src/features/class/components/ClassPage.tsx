import { ClassList, useGetClassesQuery } from "@/features";
import { Pagination, Space } from "antd";
import { useState } from "react"

export function ClassPage() {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data } = useGetClassesQuery({ page: currentPage })


    const handleOnChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <div style={{
            display: 'flex',
            height: 'calc(100vh - 7rem)',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Space style={{ marginLeft: '5rem' }}>
                {data && (<ClassList data={data?.data} />)}
            </Space>

            <Space direction="horizontal" style={{ marginLeft: '5rem', display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    defaultPageSize={8}
                    total={data && data.count}
                    onChange={handleOnChange}
                    defaultCurrent={1}
                />
            </Space>
        </div>
    )
}