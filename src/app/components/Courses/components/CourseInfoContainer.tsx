interface CourseInfoContainerProps {
  title: string
  description: string
}

export function CourseInfoContainer({
  title,
  description,
}: CourseInfoContainerProps) {
  return (
    <div className="space-y-4">
      <p className="text-2xl font-semibold text-skillbridge-grey-15 xl:text-xl">
        {title}
      </p>
      <p className="text-lg text-skillbridge-grey-30 xl:text-base">
        {description}
      </p>
    </div>
  )
}
