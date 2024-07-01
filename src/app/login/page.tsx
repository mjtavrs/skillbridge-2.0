'use client'

import { TestimonialsCarousel } from '../components/Testimonials/TestimonialsCarousel/TestimonialsCarousel'
import { UsedForm } from '../components/Form/UsedForm'

export default function Login() {
  return (
    <>
      <div className="mx-40 grid grid-cols-loginAndSignUpSection items-center gap-20">
        <TestimonialsCarousel />
        <div className="space-y-10 rounded-xl bg-white p-12">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-semibold text-skillbridge-grey-15">
              Login
            </h1>
            <p className="text-skillbridge-grey-30">
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <UsedForm formType="login" />
        </div>
      </div>
    </>
  )
}
