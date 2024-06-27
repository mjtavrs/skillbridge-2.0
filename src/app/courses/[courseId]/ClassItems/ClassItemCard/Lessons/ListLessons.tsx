import { ListLessonsProps } from '@/app/interfaces/ListLessonProps'
import { LessonContainer } from './LessonContainer'

export function ListLessons({ lessons }: ListLessonsProps) {
  return (
    <div className="space-y-5">
      {lessons.map((lesson, index) => (
        <LessonContainer
          key={index}
          lessonTitle={lesson.title}
          lessonNumber={index + 1}
          lessonDuration={lesson.duration}
        />
      ))}
    </div>
  )
}
