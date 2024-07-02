import React, { ReactNode } from 'react'

interface IconWrapperProps {
  icon: ReactNode
}

export function IconWrapper({ icon }: IconWrapperProps) {
  return (
    <span className="bg-white-97 block w-fit rounded-md border border-skillbridge-white-95 p-3">
      {React.cloneElement(icon as React.ReactElement, {
        height: 24,
        width: 24,
        weight: 'bold',
        className: 'text-skillbridge-grey-15',
      })}
    </span>
  )
}
