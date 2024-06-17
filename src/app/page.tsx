import { Hero } from './Hero'
import { Video } from './Video'
import { SectionsList } from './components/Section/SectionsList'
import { PricingSection } from './components/Pricing/PricingSection'
import { FaqSection } from './components/FAQ/FaqSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <div className="space-y-24 py-36">
        <SectionsList />
        <PricingSection />
        <FaqSection />
      </div>
    </>
  )
}
