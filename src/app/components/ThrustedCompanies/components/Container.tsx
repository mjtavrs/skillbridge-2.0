import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'>

export function Container({ ...props }: ContainerProps) {
  return <div {...props} className="grid-cols-thrustedCompanies grid" />
}
