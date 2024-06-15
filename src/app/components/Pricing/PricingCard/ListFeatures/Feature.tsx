import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const icon = tv({
  base: ['rounded-md text-skillbridge-grey-15 p-2'],

  variants: {
    variant: {
      available: 'bg-skillbridge-orange-95',
      unavailable: 'border border-skillbridge-white-95 bg-white',
    },
  },
})

export type IconProps = ComponentProps<'span'> & VariantProps<typeof icon>

function Icon({ variant, ...props }: IconProps) {
  return <span {...props} className={icon({ variant })} />
}

interface FeatureProps {
  feature: string
  icon: ReactNode
  variant: 'available' | 'unavailable'
}

export function Feature({ feature, icon, variant }: FeatureProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-skillbridge-white-95 p-4">
      <Icon variant={variant}>{icon}</Icon>
      <span className="text-lg text-skillbridge-grey-30">{feature}</span>
    </div>
  )
}
