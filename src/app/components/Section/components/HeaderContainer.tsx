import { ComponentProps } from 'react'

type HeaderContainerProps = ComponentProps<'div'>

export function HeaderContainer({ ...props }: HeaderContainerProps) {
  return (
    <div
      {...props}
      className="flex items-end justify-between sm:flex-col sm:items-start sm:gap-5"
    />
  )
}
