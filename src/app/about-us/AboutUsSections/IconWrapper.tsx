import React, { ReactNode } from 'react'

interface IconWrapperProps {
  icon: ReactNode
}

export function IconWrapper({ icon }: IconWrapperProps) {
  return (
    <span className="inline-block rounded-lg border border-skillbridge-orange-90 bg-skillbridge-orange-97 p-4">
      {React.cloneElement(icon as React.ReactElement, {
        height: 34,
        width: 34,
        weight: 'fill',
        className: 'text-skillbridge-orange-50',
      })}
    </span>
  )
}
