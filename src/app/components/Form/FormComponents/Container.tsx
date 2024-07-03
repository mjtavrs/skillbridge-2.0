import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'form'>

export function Container({ ...props }: ContainerProps) {
  return <form {...props} className="space-y-6 xl:space-y-5" />
}
