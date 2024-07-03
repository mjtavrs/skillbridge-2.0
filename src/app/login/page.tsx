'use client'

import { TestimonialsCarousel } from '../components/Testimonials/TestimonialsCarousel/TestimonialsCarousel'
import { Header } from '../components/Form/FormComponents/Header'
import { LoadForm } from '../components/Form/LoadForm'

export default function Login() {
  return (
    <>
      <div className="mx-40 my-24 grid grid-cols-loginAndSignUpSection items-center gap-20 xl:mx-14">
        <TestimonialsCarousel />
        <div className="space-y-10 rounded-xl bg-white p-12">
          <Header
            formTitle="Login"
            formDescription="Welcome back! Please log in to access your account."
          />
          <LoadForm formType="login" />
        </div>
      </div>
    </>
  )
}
