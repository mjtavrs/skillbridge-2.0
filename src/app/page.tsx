import { Hero } from './Hero'
import { PricingSection } from './components/Pricing/PricingSection'
import { SectionsList } from './components/Section/SectionsList'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-24">
        <SectionsList />
        <PricingSection />
      </div>
    </>
  )
}
