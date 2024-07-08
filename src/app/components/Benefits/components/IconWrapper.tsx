import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'

export function IconWrapper() {
  const [iconSize, setIconSize] = useState(34)

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(window.innerWidth > 1440 ? 34 : 26)
    }

    updateIconSize()
    window.addEventListener('resize', updateIconSize)

    return () => window.removeEventListener('resize', updateIconSize)
  }, [])

  return (
    <div className="flex justify-end">
      <a
        href="/about-us"
        className="rounded-lg border border-skillbridge-white-95 bg-skillbridge-white-99 p-5 text-skillbridge-orange-50"
      >
        <ArrowUpRight size={iconSize} weight="bold" />
      </a>
    </div>
  )
}
