import { Benefits } from '@/app/data/Benefits'
import { BenefitsCard } from './BenefitsCard'

export function BenefitsList() {
  return (
    <>
      {Benefits.map((benefit) => (
        <BenefitsCard
          key={benefit.id}
          id={benefit.id}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </>
  )
}
