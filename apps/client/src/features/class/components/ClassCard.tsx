import { Card } from "@/components"
import { Class } from "@/features"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
type Props = {
    classData: Class
}
export function ClassCard({ classData }: Props) {
    const navigate = useNavigate();
    return (
        <Card
            hoverable
            style={{ width: 375, height: 300, marginBottom: '2rem' }}
            className="classCard"
            title={classData.title}
            actions={[<Button onClick={() => navigate(`/class/${classData.id}`)}

            >
                See my class.
            </Button>]}
        >
        </Card>
    )
}