import * as Label from '@radix-ui/react-label'

interface LabelProps {
  htmlFor: string
  label: string
}

export function InputLabel({ htmlFor, label }: LabelProps) {
  return (
    <Label.Root htmlFor={htmlFor} className="text-skillbridge-grey-15">
      {label}
    </Label.Root>
  )
}
