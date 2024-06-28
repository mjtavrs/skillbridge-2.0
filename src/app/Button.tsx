import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
  base: [
    'rounded-lg px-6 py-4 text-lg font-medium leading-6 inline-block h-fit cursor-pointer',
  ],

  variants: {
    variant: {
      white: 'bg-white text-skillbridge-grey-15 transition-colors duration-350',
      whiteWithBorder:
        'bg-white text-skillbridge-grey-15 border border-skillbridge-white-95 rounded-lg',
      orange:
        'bg-skillbridge-orange-50 text-white transition-colors duration-350',
      orangeBlock:
        'bg-skillbridge-orange-50 text-white transition-colors duration-350 block text-center',
      grey: 'bg-skillbridge-white-97 border border-skillbridge-white-95 text-grey-15',
      greyBlock:
        'bg-skillbridge-white-97 border border-skillbridge-white-95 text-grey-15 block text-center',
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
