import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export function Root({ ...props }: RootProps) {
  return <div {...props} className="flex justify-center" />
}
