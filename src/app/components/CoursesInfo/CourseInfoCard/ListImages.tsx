import Image from 'next/image'
import { ComponentProps } from 'react'

type ImageContainerProps = ComponentProps<'div'>

function ImageContainer({ ...props }: ImageContainerProps) {
  return <div {...props} className="relative h-96" />
}

interface ListImagesProps {
  imageList: string[]
}

export function ListImages({ imageList }: ListImagesProps) {
  const images = imageList

  return (
    <>
      {images.map((image) => (
        <ImageContainer key="">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt=""
            quality={75}
            className="rounded-lg"
          />
        </ImageContainer>
      ))}
    </>
  )
}
