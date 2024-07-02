import { ListFeatures } from './ListFeatures/ListFeatures'

interface PricingCardProps {
  plan: string
  price: string
  availableFeatures: string[]
  unavailableFeatures?: string[]
}

export function PricingCard({
  plan,
  price,
  availableFeatures,
  unavailableFeatures,
}: PricingCardProps) {
  return (
    <div className="space-y-12 rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 p-8 pt-12">
      <p className="rounded-md border border-skillbridge-orange-90 bg-skillbridge-orange-97 py-3 text-center text-xl font-medium text-skillbridge-grey-15 xl:text-lg">
        {plan} Plan
      </p>
      <div className="flex items-end justify-center text-skillbridge-grey-15">
        <span className="text-7xl font-semibold leading-[73%] xl:text-6xl">
          ${price}
        </span>
        <span className="text-xl font-medium leading-[73%] text-skillbridge-grey-30 xl:text-base">
          /month
        </span>
      </div>
      <div>
        <div className="space-y-8 rounded-t-xl border border-b-0 border-skillbridge-white-95 bg-white p-10">
          <p className="text-center text-xl font-medium text-skillbridge-grey-15 xl:text-lg">
            Available Features
          </p>
          <div className="space-y-5">
            <ListFeatures
              availableFeatures={availableFeatures}
              unavailableFeatures={unavailableFeatures}
            />
          </div>
        </div>
        <a
          href="/pricing"
          className="block rounded-b-xl bg-skillbridge-orange-50 py-5 text-center text-lg font-semibold text-white xl:text-sm"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}
