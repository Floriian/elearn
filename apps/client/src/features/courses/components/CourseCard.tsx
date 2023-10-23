import { Card } from "@/components"
import { Course } from "@/features"
import { Button } from "antd"
import { useNavigate, useParams } from "react-router-dom"

type Props = {
    course: Course
}
export function CourseCard({ course }: Props) {
    const navigate = useNavigate();
    return (
        <Card
            hoverable
            style={{ width: 375, marginBottom: '2rem' }}
            cover={<img alt={course.title} width={300} height={200} src="https://picsum.photos/400/500" loading="lazy" />}
            actions={[
                <Button onClick={() => navigate(`/courses/${course.id}`)}>
                    Go To Course
                </Button>
            ]}>
            <Card.Meta
                title={course.title}
            />
            <p>{course.description.slice(0, 150)}</p>
        </Card>
    )
}