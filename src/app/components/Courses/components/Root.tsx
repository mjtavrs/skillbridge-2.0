import { ComponentProps } from 'react'

type RootProps = ComponentProps<'article'>

export function Root({ ...props }: RootProps) {
  return (
    <article
      {...props}
      className="space-y-6 rounded-xl border border-skillbridge-white-95 bg-white p-12 xl:p-10"
    />
  )
}
