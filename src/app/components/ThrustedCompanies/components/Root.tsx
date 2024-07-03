import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export function Root({ ...props }: RootProps) {
  return (
    <div
      {...props}
      className="mx-40 mb-24 rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 p-7"
    />
  )
}
