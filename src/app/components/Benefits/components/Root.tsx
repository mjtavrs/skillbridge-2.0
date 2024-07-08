import { ComponentProps } from 'react'

type RootProps = ComponentProps<'article'>

export function Root({ ...props }: RootProps) {
  return (
    <article
      {...props}
      className="space-y-12 rounded-xl bg-white p-12 xl:space-y-10 xl:p-10"
    />
  )
}
