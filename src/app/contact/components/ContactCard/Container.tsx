import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'>

export function Container({ ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className="bg-skillbridge-white-9 flex flex-col items-center gap-4 rounded-md border border-skillbridge-white-95 p-8"
    />
  )
}
