import { Button } from '@/app/Button'
import Image from 'next/image'

export function AboutUsCta() {
  return (
    <div className="relative flex items-center justify-between rounded-xl bg-white p-20 xl:p-[3.75rem]">
      <div className="z-10 w-[63rem] space-y-5 xl:w-[47rem] xl:space-y-3">
        <p className="text-5xl font-semibold leading-[120%] text-skillbridge-grey-15 xl:text-[2.375rem]">
          <span className="text-skillbridge-orange-50">Together</span>,
          let&apos;s shape the future of digital innovation
        </p>
        <p className="text-lg text-skillbridge-grey-30 xl:text-base">
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </div>
      <Image
        src="/assets/svg/s-shape.svg"
        alt=""
        width={360}
        height={360}
        className="absolute -top-4 right-60 xl:-top-9"
      />
      <Button href="/courses" variant="orange">
        Join Now
      </Button>
    </div>
  )
}
