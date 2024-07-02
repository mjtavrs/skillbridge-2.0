'use client'

import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'

interface BenefitsCardProps {
  id: string
  title: string
  description: string
}

export function BenefitsCard({ id, title, description }: BenefitsCardProps) {
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
    <article className="space-y-12 rounded-xl bg-white p-12 xl:space-y-10 xl:p-10">
      <p className="text-right text-7xl font-bold text-skillbridge-grey-15 xl:text-6xl">
        {id}
      </p>
      <div className="space-y-3">
        <p className="text-2xl font-semibold text-skillbridge-grey-20 xl:text-xl">
          {title}
        </p>
        <p className="text-lg text-skillbridge-grey-30 xl:text-base">
          {description}
        </p>
      </div>
      <div className="flex justify-end">
        <span className="cursor-not-allowed rounded-lg border border-skillbridge-white-95 bg-skillbridge-white-99 p-5 text-skillbridge-orange-50">
          <ArrowUpRight size={iconSize} weight="bold" />
        </span>
      </div>
    </article>
  )
}
