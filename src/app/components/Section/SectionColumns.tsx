import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const container = tv({
  base: ['grid'],

  variants: {
    variant: {
      oneColumn: 'grid-cols-oneColumnWrapper gap-5',
      twoColumns: 'grid-cols-twoColumnWrapper gap-8',
      threeColumns: 'grid-cols-threeColumnWrapper gap-5',
    },
  },
})

export type SectionColumnsProps = ComponentProps<'div'> &
  VariantProps<typeof container>

export function SectionColumns({ variant, ...props }: SectionColumnsProps) {
  return <div {...props} className={container({ variant })} />
}
