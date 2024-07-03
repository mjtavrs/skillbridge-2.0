import { ComponentProps } from 'react'

export type CoursesInfoWrapperProps = ComponentProps<'section'>

export function CoursesInfoWrapper({ ...props }: CoursesInfoWrapperProps) {
  return <section className="mx-40 xl:mx-14" {...props} />
}
