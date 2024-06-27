import { ClassItemCardContainer } from './ClassItemCardContainer'
import { ClassProps } from '@/app/interfaces/ClassProps'

interface ClassItemCardContainerProps {
  classes: ClassProps[]
}

export function ListClassItemCards({ classes }: ClassItemCardContainerProps) {
  return (
    <>
      {classes.map((classItem) => (
        <ClassItemCardContainer
          key={classItem.id}
          className={classItem.classTitle}
          classNumber={classItem.id}
          lessons={classItem.lessons}
        />
      ))}
    </>
  )
}
