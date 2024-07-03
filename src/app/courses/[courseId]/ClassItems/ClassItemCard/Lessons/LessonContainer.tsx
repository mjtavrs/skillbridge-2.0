'use client'

import { Clock } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'

interface LessonContainerProps {
  lessonTitle: string
  lessonNumber: number
  lessonDuration: string
}

export function LessonContainer({
  lessonTitle,
  lessonNumber,
  lessonDuration,
}: LessonContainerProps) {
  const [iconSize, setIconSize] = useState(24)

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(window.innerWidth > 1440 ? 24 : 20)
    }

    updateIconSize()
    window.addEventListener('resize', updateIconSize)

    return () => window.removeEventListener('resize', updateIconSize)
  }, [])

  return (
    <div className="flex items-center rounded-lg border border-skillbridge-white-95 px-8 py-6 xl:px-6 xl:py-5">
      <div className="flex-1 space-y-2">
        <p className="text-xl font-medium text-skillbridge-grey-20 xl:text-base">
          {lessonTitle}
        </p>
        <p className="text-lg text-skillbridge-grey-35 xl:text-sm">
          Lesson 0{lessonNumber}
        </p>
      </div>
      <div className="flex w-fit items-center gap-1 rounded-md bg-skillbridge-white-90 p-3">
        <Clock
          className="text-skillbridge-grey-30"
          height={iconSize}
          width={iconSize}
        />
        <span className="text-lg text-skillbridge-grey-35 xl:text-sm">
          {lessonDuration}
        </span>
      </div>
    </div>
  )
}
