'use client'

import { Lightning } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Wrapper() {
  const [iconSize, setIconSize] = useState(24)

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(window.innerWidth > 1440 ? 34 : 24)
    }

    updateIconSize()
    window.addEventListener('resize', updateIconSize)

    return () => window.removeEventListener('resize', updateIconSize)
  }, [])
  return (
    <div className="sm:mx-4">
      <div className="relative rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 px-5 py-4 sm:p-3">
        <Image
          src="/assets/svg/homeCtaLines.svg"
          alt=""
          height={43}
          width={39}
          className="absolute left-[-1.75rem] top-[-1.6rem] sm:left-[-0.7rem] sm:top-[-1.4rem]"
        />
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-skillbridge-orange-95 p-3 text-skillbridge-grey-20">
            <Lightning size={iconSize} weight="fill" />
          </span>
          <h1 className="text-5xl font-semibold text-skillbridge-grey-10 sm:text-base xl:text-4xl">
            <span className="text-skillbridge-orange-50">Unlock</span> Your
            Creative Potential
          </h1>
        </div>
      </div>
      <div className="mb-[3.125rem] mt-5 flex flex-col items-center gap-3 sm:mb-0 sm:mt-4 sm:px-[1.875rem]">
        <h2 className="text-center text-4xl font-medium text-skillbridge-grey-15 sm:text-2xl xl:text-[1.75rem]">
          with Online Design and Development Courses.
        </h2>
        <p className="text-center text-lg text-skillbridge-grey-15 sm:text-sm xl:text-base">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
    </div>
  )
}
