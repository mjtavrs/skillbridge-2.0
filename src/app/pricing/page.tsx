import { Metadata } from 'next'
import { PageSection } from '../PageSection'
import { PricingOptionButtons } from '../components/Pricing/PricingOptionButtons'
import { CardsWrapper } from '../components/Section/CardsWrapper'
import { ListPricing } from '../components/Pricing/ListPricing'
import { FaqSection } from '../components/FAQ/FaqSection'

export const metadata: Metadata = {
  title: 'Skillbridge • Pricing',
}

export default function Pricing() {
  return (
    <>
      <PageSection
        title="Our Pricings"
        description={`Welcome to Skillbridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.`}
      />
      <div className="mb-36 space-y-36">
        <div className="mx-40 space-y-12">
          <div className="flex justify-center">
            <PricingOptionButtons />
          </div>
          <div className="rounded-xl bg-white p-20">
            <CardsWrapper variant="twoColumns">
              <ListPricing />
            </CardsWrapper>
          </div>
        </div>
        <div>
          <FaqSection />
        </div>
      </div>
    </>
  )
}
