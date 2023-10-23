
import { CourseList, useGetCoursesQuery } from "@/features"
import { Pagination, Space } from "antd"
import { useState } from "react";

export function CoursePage() {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { data } = useGetCoursesQuery({
        page: currentPage,
    }, {
        refetchOnMountOrArgChange: true
    })

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
                {data?.data ?
                    <CourseList courses={data.data} />
                    :
                    <p>Loading...</p>
                }
            </Space >
            <Space direction="horizontal" style={{ marginLeft: '5rem', display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    defaultPageSize={8}
                    total={data?.count}
                    onChange={handleOnChange}
                    defaultCurrent={1}
                />
            </Space>
        </div>
    )
}