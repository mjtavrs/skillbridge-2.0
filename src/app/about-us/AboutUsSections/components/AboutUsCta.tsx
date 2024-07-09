import { Button } from '@/app/Button'
import Image from 'next/image'

export function AboutUsCta() {
  return (
    <div className="relative flex items-center gap-72 rounded-xl bg-white p-20">
      <div className="z-10 w-[63rem] space-y-5">
        <p className="text-5xl font-semibold leading-[120%] text-skillbridge-grey-15">
          <span className="text-skillbridge-orange-50">Together</span>,
          let&apos;s shape the future of digital innovation
        </p>
        <p className="text-lg text-skillbridge-grey-30">
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </div>
      <Image
        src="/assets/svg/s-shape.svg"
        alt=""
        width={360}
        height={360}
        className="absolute -top-5 right-60"
      />
      <Button href="/courses" variant="orange">
        Join Now
      </Button>
    </div>
  )
}
