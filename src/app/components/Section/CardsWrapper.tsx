import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const container = tv({
  base: ['grid'],

  variants: {
    variant: {
      twoColumns: 'grid-cols-twoColumnWrapper gap-8',
      threeColumns: 'grid-cols-threeColumnWrapper gap-5',
    },
  },
})

export type LinkProps = ComponentProps<'div'> & VariantProps<typeof container>

export function CardsWrapper({ variant, ...props }: LinkProps) {
  return <div {...props} className={container({ variant })} />
}
