import Image from 'next/image'

interface ImageContainerProps {
  cover: string
}

export function ImageContainer({ cover }: ImageContainerProps) {
  return (
    <div className="relative h-96 xl:h-64">
      <Image
        src={cover}
        fill={true}
        style={{ objectFit: 'cover' }}
        alt=""
        quality={100}
        className="rounded-lg"
      />
    </div>
  )
}
