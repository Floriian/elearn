import { Card } from "@/components"
import { Course } from "@/features"
import { Button } from "antd"
import { useNavigate, useParams } from "react-router-dom"

type Props = {
    course: Course
}
export function CourseCard({ course }: Props) {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt={course.title} width={300} height={200} src="https://picsum.photos/400/500" loading="lazy" />}
            actions={[
                <Button onClick={() => navigate(`/course/${id}`)}>
                    Go To Course
                </Button>
            ]}>
            <Card.Meta
                title={course.title}

            />
        </Card>
    )
}