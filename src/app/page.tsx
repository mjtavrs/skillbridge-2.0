import { Metadata } from 'next'
import { Hero } from './Hero'
import { Video } from './Video'
import { SectionsList } from './components/Section/SectionsList'
import { PricingSection } from './components/Pricing/PricingSection'
import { FaqSection } from './components/FAQ/FaqSection'

export const metadata: Metadata = {
  title: 'Skillbridge',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Video coverImage="/assets/webp/homeVideoCover.webp" />
      <div className="space-y-24 py-36">
        <SectionsList />
        <PricingSection />
        <FaqSection />
      </div>
    </>
  )
}
