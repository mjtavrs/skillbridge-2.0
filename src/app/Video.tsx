import Image from 'next/image'

interface VideoProps {
  coverImage: string
}

export function Video({ coverImage }: VideoProps) {
  return (
    <div className="relative mx-40 h-[49.375rem] xl:mx-14 xl:h-[40.5625rem]">
      <Image
        src={coverImage}
        fill={true}
        style={{ objectFit: 'cover' }}
        alt=""
        quality={100}
        className="rounded-lg brightness-80"
      />
      <span className="absolute left-[calc(50%-2.8125rem)] top-[calc(50%-2.8125rem)] cursor-pointer">
        <Image src="/assets/svg/playButton.svg" width={72} height={72} alt="" />
      </span>
    </div>
  )
}
