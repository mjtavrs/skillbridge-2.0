'use client'

import { Button } from '@/app/Button'
import { FaqQuestionsContainer } from './FaqQuestionsContainer'

export function FaqSection() {
  return (
    <div className="mx-40 grid grid-cols-faqSection gap-32 rounded-xl bg-white p-24">
      <div className="space-y-12">
        <div className="space-y-3">
          <h2 className="text-5xl font-semibold text-skillbridge-grey-15">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-skillbridge-grey-20">
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
        </div>
        <Button href="#" variant="whiteWithBorder">
          See All FAQ&apos;s
        </Button>
      </div>
      <div className="space-y-8">
        <FaqQuestionsContainer />
      </div>
    </div>
  )
}
