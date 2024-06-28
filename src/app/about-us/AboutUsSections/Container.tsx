import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'section'>

export function Container({ ...props }: ContainerProps) {
  return <section {...props} className="mx-40 space-y-20" />
}
