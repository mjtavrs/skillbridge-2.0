import { SectionColumns } from '../Section/SectionColumns'
import { ListPricing } from './ListPricing'
import { PricingHeader } from './PricingHeader'

export function PricingSection() {
  return (
    <section className="mx-40 space-y-20 xl:mx-14">
      <PricingHeader />
      <div className="rounded-xl bg-white p-20">
        <SectionColumns variant="twoColumns">
          <ListPricing />
        </SectionColumns>
      </div>
    </section>
  )
}
