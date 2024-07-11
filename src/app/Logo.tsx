'use client'

import { useEffect, useState } from 'react'

export function Logo() {
  const [logoSize, setLogoSize] = useState(54)

  useEffect(() => {
    const updateLogoSize = () => {
      const windowSize = window.innerWidth
      setLogoSize(windowSize > 1767 ? 54 : windowSize < 1440 ? 40 : 44)
    }

    updateLogoSize()
    window.addEventListener('resize', updateLogoSize)

    return () => window.removeEventListener('resize', updateLogoSize)
  }, [])

  return (
    <svg
      width={logoSize}
      height={logoSize}
      viewBox="0 0 55 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={0.333313} width={54} height={54} rx={8} fill="#FF9500" />
      <path
        d="M11.5 43.667l10.834-10.834h10.833V22L44 32.833 33.167 43.667H11.5zM11.5 22l10.834 10.833V22h10.833L44 11.167H22.334L11.5 22z"
        fill="#fff"
      />
    </svg>
  )
}
