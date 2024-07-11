'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface VideoProps {
  coverImage: string
}

export function Video({ coverImage }: VideoProps) {
  const [playButtonSize, setPlayButtonSize] = useState(72)

  useEffect(() => {
    const updatePlayButtonSize = () => {
      setPlayButtonSize(window.innerWidth > 1440 ? 72 : 54)
    }

    updatePlayButtonSize()
    window.addEventListener('resize', updatePlayButtonSize)

    return () => window.removeEventListener('resize', updatePlayButtonSize)
  }, [])

  return (
    <div className="relative mx-40 h-[49.375rem] sm:mx-4 sm:h-[15.4375rem] xl:mx-14 xl:h-[40.5625rem]">
      <Image
        src={coverImage}
        fill={true}
        style={{ objectFit: 'cover' }}
        alt=""
        quality={100}
        className="rounded-lg brightness-80"
      />
      <span className="absolute left-[calc(50%-2.8125rem)] top-[calc(50%-2.8125rem)] cursor-pointer sm:left-[43%] sm:top-[37.5%]">
        <Image
          src="/assets/svg/playButton.svg"
          width={playButtonSize}
          height={playButtonSize}
          alt=""
        />
      </span>
    </div>
  )
}
