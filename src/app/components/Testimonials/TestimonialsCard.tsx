import { Button } from '@/app/Button'
import Image from 'next/image'

interface TestimonialsCardProps {
  testimonial: string
  userProfilePictureUrl: string
  userProfileName: string
  testimonialUrl: string
}

export function TestimonialsCard({
  testimonial,
  userProfilePictureUrl,
  userProfileName,
  testimonialUrl,
}: TestimonialsCardProps) {
  return (
    <article>
      <div className="rounded-t-xl border border-skillbridge-white-95 bg-white object-contain p-12">
        <p className="text-lg text-skillbridge-grey-30">{testimonial}</p>
      </div>
      <div className="flex items-center justify-between rounded-b-xl border border-t-0 border-skillbridge-white-95 bg-skillbridge-white-99 px-12 py-7">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14">
            <Image
              src={userProfilePictureUrl}
              layout="fill"
              objectFit="cover"
              alt=""
              quality={75}
              className="rounded-lg"
            />
          </div>
          <p className="text-lg font-semibold text-skillbridge-grey-20">
            {userProfileName}
          </p>
        </div>
        <span className="cursor-not-allowed">
          <Button href={testimonialUrl} variant="grey">
            Read Full Story
          </Button>
        </span>
      </div>
    </article>
  )
}
