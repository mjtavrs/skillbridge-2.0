import { Metadata } from 'next'
import * as Hero from './components/Hero/index'
import { companies } from './data/ThrustedCompanies'
import * as ThrustedCompanies from './components/ThrustedCompanies/index'
import { ListCompanies } from './components/ThrustedCompanies/ListCompanies'
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
      <Hero.Root>
        <Hero.Container>
          <Hero.Wrapper />
          <Hero.Buttons />
        </Hero.Container>
      </Hero.Root>
      <ThrustedCompanies.Root>
        <ThrustedCompanies.Container>
          <ListCompanies companies={companies} />
        </ThrustedCompanies.Container>
      </ThrustedCompanies.Root>
      <Video coverImage="/assets/webp/homeVideoCover.webp" />
      <div className="space-y-24 py-36 xl:py-24">
        <SectionsList />
        <PricingSection />
        {/* Needs to change the size of the padding inside each question container */}
        <FaqSection />
      </div>
    </>
  )
}
