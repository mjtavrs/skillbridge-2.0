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
    <footer className="divide-white-95 divide-y bg-white px-40 pb-8 pt-24">
      <div className="flex justify-between pb-12">
        <div className="w-96 space-y-10">
          <Logo />
          <ul className="text-skillbridge-grey-15 space-y-5 text-lg leading-6">
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
        <div className="grid-cols-footerLinks grid">
          <div className="flex flex-col gap-3">
            <h4 className="text-skillbridge-grey-15 text-xl font-semibold">
              Home
            </h4>
            <ul className="text-skillbridge-grey-35 space-y-2 text-lg leading-6">
              <li>Benefits</li>
              <li>Our Courses</li>
              <li>Our Testimonials</li>
              <li>Our FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-skillbridge-grey-15 text-xl font-semibold">
              About Us
            </h4>
            <ul className="text-skillbridge-grey-35 space-y-2 text-lg leading-6">
              <li>Company</li>
              <li>Achievements</li>
              <li>Our Goals</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-skillbridge-grey-15 text-xl font-semibold">
              Social Profiles
            </h4>
            <ul className="flex gap-3">
              <li>
                <span className="bg-skillbridge-white-97 border-skilbridge-white-95 text-skillbridge-grey-20 block cursor-pointer rounded-lg border p-3">
                  <FacebookLogo size={24} weight="bold" />
                </span>
              </li>
              <li>
                <span className="bg-skillbridge-white-97 border-skilbridge-white-95 text-skillbridge-grey-20 block cursor-pointer rounded-lg border p-3">
                  <XLogo size={24} weight="bold" />
                </span>
              </li>
              <li>
                <span className="bg-skillbridge-white-97 border-skilbridge-white-95 text-skillbridge-grey-20 block cursor-pointer rounded-lg border p-3">
                  <LinkedinLogo size={24} weight="bold" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-skillbridge-grey-40 pt-12 text-center text-lg leading-6">
        &copy; 2024 Skillbridge. All Rights Reserved.
      </p>
    </footer>
  )
}
