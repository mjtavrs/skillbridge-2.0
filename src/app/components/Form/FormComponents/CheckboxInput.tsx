import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from '@phosphor-icons/react/dist/ssr'

interface CheckboxInputProps {
  label: string
}

export function CheckboxInput({ label }: CheckboxInputProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox.Root
        className="flex h-6 w-6 items-center justify-center border border-skillbridge-white-95 bg-skillbridge-white-97"
        id="check"
      >
        <Checkbox.Indicator className="text-skillbridge-grey-20">
          <Check />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="text-skillbridge-grey-40" htmlFor="check">
        {label}
      </label>
    </div>
  )
}
