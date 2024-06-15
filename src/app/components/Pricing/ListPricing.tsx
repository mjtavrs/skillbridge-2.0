import { PricePlans } from '@/app/data/PricePlans'
import { PricingCard } from './PricingCard/PricingCard'

export function ListPricing() {
  return (
    <>
      {PricePlans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan.plan}
          price={plan.monthlyPrice}
          availableFeatures={plan.availableFeatures}
          unavailableFeatures={plan.unavailableFeatures}
        />
      ))}
    </>
  )
}
