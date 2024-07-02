'use client'

import { TestimonialsCarousel } from '../components/Testimonials/TestimonialsCarousel/TestimonialsCarousel'
import { Header } from '../components/Form/FormComponents/Header'
import { LoadForm } from '../components/Form/LoadForm'

export default function SignUp() {
  return (
    <>
      <div className="mx-40 my-24 grid grid-cols-loginAndSignUpSection items-center gap-20">
        <TestimonialsCarousel />
        <div className="space-y-10 rounded-xl bg-white p-12">
          <Header
            formTitle="Sign Up"
            formDescription="Create an account to unlock exclusive features."
          />
          <LoadForm formType="sign-up" />
        </div>
      </div>
    </>
  )
}
