import { Testimonials } from '@/app/data/Testimonials'
import { TestimonialsCard } from './TestimonialsCard'

export function ListTestimonials() {
  return (
    <>
      {Testimonials.map((testimonial) => (
        <TestimonialsCard
          key={testimonial.id}
          testimonial={testimonial.testimonial}
          userProfilePictureUrl={testimonial.userProfilePictureUrl}
          userProfileName={testimonial.userProfileName}
          testimonialUrl={testimonial.testimonialUrl}
        />
      ))}
    </>
  )
}
