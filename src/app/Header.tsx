import { Logo } from './Logo'
import { Button } from './Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

function DiscountBanner() {
  return (
    <div className="cursor-pointer rounded-lg bg-skillbridge-orange-50 py-4 text-white">
      <p className="flex items-center justify-center gap-4 leading-6">
        Free Courses 🌟 Sale Ends Soon, Get It Now
        <span>
          <ArrowRight size={24} weight="bold" />
        </span>
      </p>
    </div>
  )
}

function NavigationMenu() {
  return (
    <ul className="flex text-lg leading-6 text-skillbridge-grey-15">
      <li className="rounded-lg bg-skillbridge-white-95 px-6 py-4">
        <a href="#">Home</a>
      </li>
      <li className="rounded-lg px-6 py-4">
        <a href="/courses">Courses</a>
      </li>
      <li className="rounded-lg px-6 py-4">
        <a href="#">About Us</a>
      </li>
      <li className="rounded-lg px-6 py-4">
        <a href="/pricing">Pricing</a>
      </li>
      <li className="rounded-lg px-6 py-4">
        <a href="#">Contact</a>
      </li>
    </ul>
  )
}

export function Header() {
  return (
    <header className="mx-8 mt-5 border-b border-skillbridge-white-95">
      <DiscountBanner />
      <div className="flex items-center justify-between px-32 py-6">
        <nav className="flex items-center gap-12">
          <Logo />
          <NavigationMenu />
        </nav>
        <div>
          <Button href="#" variant="transparent">
            Sign Up
          </Button>
          <Button href="#" variant="orange">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
