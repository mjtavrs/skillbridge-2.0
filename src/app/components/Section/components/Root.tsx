import { ComponentProps } from 'react'

type RootProps = ComponentProps<'section'>

export function Root({ id, ...props }: RootProps) {
  return (
    <section
      id={id}
      {...props}
      className="mx-40 space-y-20 xl:mx-14 xl:space-y-14"
    />
  )
}
