import Image from 'next/image'

export function Video() {
  return (
    <div className="relative mx-40 h-[49.375rem]">
      <Image
        src="/assets/webp/homeVideoCover.webp"
        layout="fill"
        objectFit="cover"
        alt=""
        quality={80}
        className="brightness-80 rounded-lg"
      />
      <span className="absolute left-[calc(50%-2.8125rem)] top-[calc(50%-2.8125rem)] cursor-pointer">
        <Image src="/assets/svg/playButton.svg" width={72} height={72} alt="" />
      </span>
    </div>
  )
}
