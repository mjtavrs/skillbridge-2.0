import { ComponentProps } from 'react'

type CourseInfoCardHeaderWrapperProps = ComponentProps<'div'>

export function CourseInfoCardHeaderWrapper({
  ...props
}: CourseInfoCardHeaderWrapperProps) {
  return <div {...props} className="space-y-8 xl:space-y-6" />
}
