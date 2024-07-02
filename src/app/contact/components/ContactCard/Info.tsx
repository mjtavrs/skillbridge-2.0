import { ReactNode } from 'react'
import { IconWrapper } from './IconWrapper'

interface InfoProps {
  icon: ReactNode
  infoDetail: string
}

export function Info({ icon, infoDetail }: InfoProps) {
  return (
    <>
      <IconWrapper icon={icon} />
      <p className="text-lg text-skillbridge-grey-30">{infoDetail}</p>
    </>
  )
}
