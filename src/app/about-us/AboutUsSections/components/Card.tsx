import { ReactNode } from 'react'
import { IconWrapper } from './IconWrapper'

interface CardProps {
  icon: ReactNode
  title: string
  description: string
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="space-y-8 rounded-xl bg-white p-12 xl:space-y-6 xl:p-10">
      <IconWrapper icon={icon} />
      <div className="space-y-4">
        <p className="text-2xl font-medium text-skillbridge-grey-15">{title}</p>
        <p className="text-lg text-skillbridge-grey-35">{description}</p>
      </div>
    </div>
  )
}
