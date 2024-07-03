import { Logo } from './Logo'
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  FacebookLogo,
  XLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'

export function Footer() {
  return (
    <footer className="divide-white-95 divide-y bg-white px-40 pb-8 pt-24 xl:px-20 xl:pb-7 xl:pt-14">
      <div className="flex justify-between pb-12 xl:pb-7">
        <div className="w-96 space-y-10 xl:w-[19rem]">
          <Logo />
          <ul className="space-y-5 text-lg leading-6 text-skillbridge-grey-15 xl:text-base">
            <li>
              <span className="flex gap-2">
                <EnvelopeSimple size={24} weight="fill" />
                hello@skillbridge.com
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <Phone size={24} weight="fill" />
                +91 91813 23 2309
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                <MapPin size={24} weight="fill" />
                Somewhere in the World
              </span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-footerLinks xl:gap-6">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold text-skillbridge-grey-15 xl:text-lg">
              Home
            </h4>
            <ul className="space-y-2 text-lg leading-6 text-skillbridge-grey-35 xl:text-base">
              <li>Benefits</li>
              <li>Our Courses</li>
              <li>Our Testimonials</li>
              <li>Our FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold text-skillbridge-grey-15 xl:text-lg">
              About Us
            </h4>
            <ul className="space-y-2 text-lg leading-6 text-skillbridge-grey-35 xl:text-base">
              <li>Company</li>
              <li>Achievements</li>
              <li>Our Goals</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold text-skillbridge-grey-15 xl:text-lg">
              Social Profiles
            </h4>
            <ul className="flex gap-3">
              <li>
                <span className="border-skilbridge-white-95 block cursor-pointer rounded-lg border bg-skillbridge-white-97 p-3 text-skillbridge-grey-20">
                  <FacebookLogo size={24} weight="bold" />
                </span>
              </li>
              <li>
                <span className="border-skilbridge-white-95 block cursor-pointer rounded-lg border bg-skillbridge-white-97 p-3 text-skillbridge-grey-20">
                  <XLogo size={24} weight="bold" />
                </span>
              </li>
              <li>
                <span className="border-skilbridge-white-95 block cursor-pointer rounded-lg border bg-skillbridge-white-97 p-3 text-skillbridge-grey-20">
                  <LinkedinLogo size={24} weight="bold" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="pt-12 text-center text-lg leading-6 text-skillbridge-grey-40 xl:pt-7 xl:text-sm">
        &copy; 2024 Skillbridge. All Rights Reserved.
      </p>
    </footer>
  )
}
