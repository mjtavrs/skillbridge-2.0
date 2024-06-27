import { ListLessons } from './Lessons/ListLessons'
import { Lesson } from '@/app/interfaces/LessonProps'

// the articles must be listed using a map so the number os the ExampleClassesList can be changed dynamically

interface ClassItemCardContainerProps {
  classNumber: string
  className: string
  lessons: Lesson[]
}

export function ClassItemCardContainer({
  classNumber,
  className,
  lessons,
}: ClassItemCardContainerProps) {
  return (
    <article className="space-y-12 rounded-xl bg-white p-12">
      <p className="text-right text-7xl font-bold text-skillbridge-grey-15">
        0{classNumber}
      </p>
      <p className="text-2xl font-semibold text-skillbridge-grey-20">
        {className}
      </p>
      <ListLessons lessons={lessons} />
    </article>
  )
}
