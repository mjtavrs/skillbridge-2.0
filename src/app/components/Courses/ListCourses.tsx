import { Courses } from '@/app/data/Courses'
import { CoursesCard } from './CoursesCard'

export function ListCourses() {
  return (
    <>
      {Courses.map((course) => (
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
