'use client'

import { useState } from 'react'
import { SingleTestimonial } from '@/app/login/SingleTestimonial'
import { Testimonials } from '@/app/data/Testimonials'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsCount = Testimonials.length

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsCount)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialsCount) % testimonialsCount,
    )
  }

  return (
    <div className="space-y-16 xl:space-y-14">
      <div>
        <h2 className="text-3xl font-medium text-skillbridge-grey-15">
          Students Testimonials
        </h2>
        <p className="text-skillbridge-grey-35">
          Discover the success stories of our students! Explore our testimonials
          to read firsthand experiences and see how our online courses have
          transformed their learning journeys.
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <SingleTestimonial currentIndex={currentIndex} />
        </div>
        <div className="flex justify-end gap-3">
          <span
            className="inline-block rounded-md border border-skillbridge-white-95 bg-white p-3"
            onClick={handlePrev}
          >
            <ArrowLeft width={30} height={30} weight="bold" />
          </span>
          <span
            className="inline-block rounded-md border border-skillbridge-white-95 bg-white p-3"
            onClick={handleNext}
          >
            <ArrowRight width={30} height={30} weight="bold" />
          </span>
        </div>
      </div>
    </div>
  )
}
