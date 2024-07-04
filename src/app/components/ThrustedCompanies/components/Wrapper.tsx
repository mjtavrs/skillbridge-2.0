import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface WrapperProps {
  image: StaticImport
}

export function Wrapper({ image }: WrapperProps) {
  return (
    <div className="flex justify-center py-7 even:border-x even:border-skillbridge-white-95">
      <Image src={image} alt="" />
    </div>
  )
}
