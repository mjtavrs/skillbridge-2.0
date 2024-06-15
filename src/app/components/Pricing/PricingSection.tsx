import { CardsWrapper } from '../Section/CardsWrapper'
import { ListPricing } from './ListPricing'
import { PricingHeader } from './PricingHeader'

export function PricingSection() {
  return (
    <section className="mx-40 space-y-20">
      <PricingHeader />
      <div className="rounded-xl bg-white p-20">
        <CardsWrapper variant="twoColumns">
          <ListPricing />
        </CardsWrapper>
      </div>
    </section>
  )
}
