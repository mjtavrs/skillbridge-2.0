import { ComponentProps } from 'react'

type CourseInfoCardImagesContainerProps = ComponentProps<'div'>

export function CourseInfoCardImagesContainer({
  ...props
}: CourseInfoCardImagesContainerProps) {
  return (
    <div
      {...props}
      className="grid grid-cols-threeColumnWrapper gap-8 xl:gap-5"
    />
  )
}
