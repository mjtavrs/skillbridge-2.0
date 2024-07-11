import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'section'>

export function Container({ ...props }: ContainerProps) {
  return (
    <section
      {...props}
      className="my-24 flex w-[60rem] flex-col items-center gap-5 sm:mb-[1.875rem] sm:mt-[3.125rem] sm:max-w-[100%] sm:gap-[3.125rem] xl:gap-4"
    />
  )
}
