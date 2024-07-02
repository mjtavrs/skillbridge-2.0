import { PricingOptionButtons } from './PricingOptionButtons'

export function PricingHeader() {
  return (
    <div className="flex items-end justify-between">
      <div className="w-[73rem] space-y-3 xl:w-[58.3125rem]">
        <h3 className="text-5xl font-semibold text-skillbridge-grey-15 xl:text-4xl">
          Our Pricings
        </h3>
        <p className="text-lg leading-6 text-skillbridge-grey-35 xl:text-base">
          We offer two comprehensive options to cater to your needs: Free and
          Pro. We believe in providing flexible and affordable pricing options
          for our services. Whether you are an individual looking to enhance
          your skills or a business seeking professional development solutions,
          we have a plan that suits you. Explore our pricing options below and
          choose the one that best fits your requirements.
        </p>
      </div>
      <PricingOptionButtons />
    </div>
  )
}
