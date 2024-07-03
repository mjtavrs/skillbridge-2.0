'use client'

import React, { ReactNode, useEffect, useState } from 'react'

interface IconWrapperProps {
  icon: ReactNode
}

export function IconWrapper({ icon }: IconWrapperProps) {
  const [iconSize, setIconSize] = useState(34)

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(window.innerWidth > 1440 ? 34 : 28)
    }

    updateIconSize()
    window.addEventListener('resize', updateIconSize)

    return () => window.removeEventListener('resize', updateIconSize)
  }, [])
  return (
    <span className="inline-block rounded-lg border border-skillbridge-orange-90 bg-skillbridge-orange-97 p-4">
      {React.cloneElement(icon as React.ReactElement, {
        height: iconSize,
        width: iconSize,
        className: 'text-skillbridge-orange-50',
      })}
    </span>
  )
}
