'use client'

import { Check, X } from '@phosphor-icons/react/dist/ssr'
import { Feature } from './Feature'
import { useEffect, useState } from 'react'

interface ListFeaturesProps {
  availableFeatures: string[]
  unavailableFeatures?: string[]
}

export function ListFeatures({
  availableFeatures,
  unavailableFeatures = [],
}: ListFeaturesProps) {
  const [iconSize, setIconSize] = useState(20)

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(window.innerWidth > 1440 ? 20 : 16)
    }

    updateIconSize()
    window.addEventListener('resize', updateIconSize)

    return () => window.removeEventListener('resize', updateIconSize)
  }, [])

  return (
    <>
      <>
        {availableFeatures.map((feature) => (
          <Feature
            key=""
            icon={<Check width={iconSize} weight="bold" />}
            feature={feature}
            variant="available"
          />
        ))}
      </>
      <>
        {unavailableFeatures.map((feature) => (
          <Feature
            key=""
            icon={<X width={iconSize} weight="bold" />}
            feature={feature}
            variant="unavailable"
          />
        ))}
      </>
    </>
  )
}
