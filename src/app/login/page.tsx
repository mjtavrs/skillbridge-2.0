'use client'

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
} from '@phosphor-icons/react/dist/ssr'
import { SingleTestimonial } from './SingleTestimonial'
import { useState } from 'react'
import { Testimonials } from '../data/Testimonials'
import * as Label from '@radix-ui/react-label'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Button } from '../Button'
import { FcGoogle } from 'react-icons/fc'

export default function Login() {
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
    <>
      <div className="mx-40 grid grid-cols-loginAndSignUpSection items-center gap-20">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-medium text-skillbridge-grey-15">
              Students Testimonials
            </h2>
            <p className="text-skillbridge-grey-35">
              Discover the success stories of our students! Explore our
              testimonials to read firsthand experiences and see how our online
              courses have transformed their learning journeys.
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
        <div className="space-y-10 rounded-xl bg-white p-12">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-semibold text-skillbridge-grey-15">
              Login
            </h1>
            <p className="text-skillbridge-grey-30">
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <form className="space-y-6">
            <div className="flex flex-col space-y-3">
              <Label.Root htmlFor="email">Email</Label.Root>
              <input
                className="rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 p-6 text-skillbridge-grey-40 placeholder:text-skillbridge-grey-40"
                type="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Label.Root htmlFor="password">Password</Label.Root>
              <input
                className="rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 p-6 text-skillbridge-grey-40 placeholder:text-skillbridge-grey-40"
                type="password"
                id="password"
                placeholder="Enter your Password"
              />
              <p className="cursor-pointer text-right text-skillbridge-grey-30">
                Forgot Password?
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox.Root
                className="flex h-6 w-6 items-center justify-center border border-skillbridge-white-95 bg-skillbridge-white-97"
                id="check"
              >
                <Checkbox.Indicator className="text-skillbridge-grey-20">
                  <Check />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="text-skillbridge-grey-40" htmlFor="check">
                Remember Me
              </label>
            </div>
            <Button href="#" variant="orangeBlock">
              Login
            </Button>
            <div className="flex items-center">
              <div className="h-[1px] flex-1 bg-skillbridge-white-90" />
              <p className="bg-white px-4 text-skillbridge-grey-60">OR</p>
              <div className="h-[1px] flex-1 bg-skillbridge-white-90" />
            </div>
            <Button href="#" variant="greyBlock">
              <div className="flex items-center justify-center gap-2">
                <FcGoogle className="h-7 w-7" />
                Login with Google
              </div>
            </Button>
            <div className="flex items-center justify-center">
              <p className="text-lg text-skillbridge-grey-15">
                Don&apos;t have an account?&nbsp;
                <a href="/sign-up" className="font-medium underline">
                  Sign Up
                </a>
                &nbsp;
              </p>
              <ArrowUpRight width={24} height={24} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
