import { ComponentProps } from 'react'

type FieldsetProps = ComponentProps<'fieldset'>

export function Fieldset({ ...props }: FieldsetProps) {
  return <fieldset {...props} className="flex flex-col space-y-3" />
}
