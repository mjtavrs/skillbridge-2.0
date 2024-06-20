import { ComponentProps } from 'react'

export type CourseInfoCardContainerProps = ComponentProps<'article'>

export function CourseInfoCardContainer({
  ...props
}: CourseInfoCardContainerProps) {
  return <article className="rounded-xl bg-white p-12" {...props} />
}
