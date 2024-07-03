import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'>

export function Container({ ...props }: ContainerProps) {
  return <div {...props} className="flex justify-around" />
}
