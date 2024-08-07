'use client'

import { Logo } from './Logo'
import { Button } from './Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'

function DiscountBanner() {
  const [iconSize, setIconSize] = useState(24)

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(window.innerWidth > 1440 ? 24 : 20)
    }

    updateIconSize()
    window.addEventListener('resize', updateIconSize)

    return () => window.removeEventListener('resize', updateIconSize)
  }, [])

  return (
    <div className="cursor-pointer rounded-lg bg-skillbridge-orange-50 py-4 text-white">
      <p className="flex items-center justify-center gap-4 leading-6 sm:text-sm">
        Free Courses 🌟 Sale Ends Soon, Get It Now
        <span>
          <ArrowRight size={iconSize} weight="bold" />
        </span>
      </p>
    </div>
  )
}

function NavigationMenu() {
  return (
    <ul className="flex text-lg leading-6 text-skillbridge-grey-15 sm:hidden">
      <li>
        <a href="/" className="rounded-lg bg-skillbridge-white-95 px-6 py-4">
          Home
        </a>
      </li>
      <li>
        <a href="/courses" className="rounded-lg px-6 py-4">
          Courses
        </a>
      </li>
      <li>
        <a href="/about-us" className="rounded-lg px-6 py-4">
          About Us
        </a>
      </li>
      <li>
        <a href="/pricing" className="rounded-lg px-6 py-4">
          Pricing
        </a>
      </li>
      <li>
        <a href="/contact" className="rounded-lg px-6 py-4">
          Contact
        </a>
      </li>
    </ul>
  )
}

export function Header() {
  return (
    <header className="mx-8 mt-5 border-b border-skillbridge-white-95 sm:mx-4 sm:mt-10 xl:mx-5">
      <DiscountBanner />
      <div className="flex items-center justify-between px-32 py-6 sm:px-0 xl:px-14 xl:py-4">
        <nav className="flex items-center gap-12">
          <Logo />
          <NavigationMenu />
        </nav>
        <div>
          <Button href="/sign-up" variant="transparent">
            Sign Up
          </Button>
          <Button href="/login" variant="orange">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
