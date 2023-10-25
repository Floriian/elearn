import { Card } from "@/components"
import { Class } from "@/features"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"

import "./classCard.scss"

type Props = {
    classData: Class
}
export function ClassCard({ classData }: Props) {
    const navigate = useNavigate();
    return (
        <Card
            hoverable
            style={{ width: 375, height: 300, marginBottom: '2rem' }}
            title={classData.title}
            actions={[<Button onClick={() => navigate(`/class/${classData.id}`)}

            >
                <span>See <span className="bold">{classData.title}</span> class.</span>
            </Button>]}
        >
        </Card>
    )
}