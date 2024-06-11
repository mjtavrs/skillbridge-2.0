import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
  base: [
    'rounded-lg px-6 py-4 text-lg font-medium leading-6 inline-block h-fit',
  ],

  variants: {
    variant: {
      white: 'bg-white text-skillbridge-grey-15',
      orange: 'bg-skillbridge-orange-50 text-white',
      transparent: 'bg-transparent text-skillbridge-grey-15',
    },
  },

  defaultVariants: {
    variant: 'white',
  },
})

export type LinkProps = ComponentProps<'a'> & VariantProps<typeof link>

export function Button({ variant, ...props }: LinkProps) {
  return <a {...props} className={link({ variant })} />
}
