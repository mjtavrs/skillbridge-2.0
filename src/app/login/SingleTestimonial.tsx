import { Testimonials } from '../data/Testimonials'
import { TestimonialsCard } from '../components/Testimonials/TestimonialsCard'

interface SingleTestimonialProps {
  currentIndex: number
}

export function SingleTestimonial({ currentIndex }: SingleTestimonialProps) {
  const testimonial = Testimonials[currentIndex]

  return (
    <TestimonialsCard
      key={testimonial.id}
      testimonial={testimonial.testimonial}
      userProfilePictureUrl={testimonial.userProfilePictureUrl}
      userProfileName={testimonial.userProfileName}
      testimonialUrl={testimonial.testimonialUrl}
    />
  )
}
