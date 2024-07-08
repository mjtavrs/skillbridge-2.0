import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'section'>

export function Container({ ...props }: ContainerProps) {
  return (
    <section
      {...props}
      className="my-24 flex w-[60rem] flex-col items-center gap-5 xl:gap-4"
    />
  )
}
