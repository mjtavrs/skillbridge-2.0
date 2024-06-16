import { Hero } from './Hero'
import { FaqSection } from './components/FAQ/FaqSection'
import { PricingSection } from './components/Pricing/PricingSection'
import { SectionsList } from './components/Section/SectionsList'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-24">
        <SectionsList />
        <PricingSection />
        <FaqSection />
      </div>
    </>
  )
}
