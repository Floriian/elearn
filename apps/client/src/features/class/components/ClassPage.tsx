import { Class, ClassJoinModal, ClassList, useGetClassesQuery } from "@/features";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Pagination, Space, Tooltip } from "antd";
import { useEffect, useState } from "react"

export function ClassPage() {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [classes, setClasses] = useState<Class[]>();
    const [searchText, setSearchText] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

    const { data } = useGetClassesQuery({ page: currentPage })


    const handleOnChange = (page: number) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        const filteredClasses = data ? data.data.filter((value) => value.title.includes(searchText)) : []
        setClasses(filteredClasses)
    }, [searchText, data])

    return (
        <>
            <div style={{
                display: 'flex',
                height: 'calc(100vh - 7rem)',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Space direction="horizontal">
                    <Input
                        addonBefore={<SearchOutlined />}
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Tooltip placement="bottom" title="Join class">
                        <PlusOutlined onClick={() => setOpen(true)} />
                    </Tooltip>

                </Space>


                <Space style={{ marginLeft: '5rem' }}>
                    {classes && (<ClassList data={classes} />)}
                </Space>

                <Space direction="horizontal" style={{ marginLeft: '5rem', display: 'flex', justifyContent: 'center' }}>
                    <Pagination
                        defaultPageSize={8}
                        total={data?.count}
                        onChange={handleOnChange}
                        defaultCurrent={1}
                    />
                </Space>
            </div>

            <ClassJoinModal open={open} setOpen={setOpen} />

        </>
    )
}