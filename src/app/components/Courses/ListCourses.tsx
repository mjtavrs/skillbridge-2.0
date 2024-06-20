import { CoursesList } from '@/app/data/CoursesList'
import { CoursesCard } from './CoursesCard'

export function ListCourses() {
  return (
    <>
      {CoursesList.map((course) => (
        <CoursesCard
          key={course.id}
          cover={course.cover}
          tags={course.tags}
          author={course.author}
          title={course.title}
          description={course.description}
          url={course.url}
        />
      ))}
    </>
  )
}
