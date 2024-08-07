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
      <div className="rounded-t-xl border border-skillbridge-white-95 bg-white object-contain p-12 xl:p-10">
        <p className="text-lg text-skillbridge-grey-30 xl:text-base">
          {testimonial}
        </p>
      </div>
      <div className="flex items-center justify-between rounded-b-xl border border-t-0 border-skillbridge-white-95 bg-skillbridge-white-99 px-12 py-7 xl:px-10 xl:py-6">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14">
            <Image
              src={userProfilePictureUrl}
              fill={true}
              style={{ objectFit: 'cover' }}
              alt=""
              quality={75}
              className="rounded-lg"
            />
          </div>
          <p className="text-lg font-semibold text-skillbridge-grey-20 xl:text-base">
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
