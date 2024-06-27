import { Clock } from '@phosphor-icons/react/dist/ssr'

interface LessonContainerProps {
  lessonTitle: string
  lessonNumber: number
  lessonDuration: string
}

export function LessonContainer({
  lessonTitle,
  lessonNumber,
  lessonDuration,
}: LessonContainerProps) {
  return (
    <div className="flex items-center rounded-lg border border-skillbridge-white-95 px-8 py-6">
      <div className="flex-1 space-y-2">
        <p className="text-xl font-medium text-skillbridge-grey-20">
          {lessonTitle}
        </p>
        <p className="text-lg text-skillbridge-grey-35">
          Lesson 0{lessonNumber}
        </p>
      </div>
      <div className="flex w-fit items-center gap-1 rounded-md bg-skillbridge-white-90 p-3">
        <Clock className="text-skillbridge-grey-30" height={24} width={24} />
        <span className="text-lg text-skillbridge-grey-35">
          {lessonDuration}
        </span>
      </div>
    </div>
  )
}
