import { BenefitsCard } from './BenefitsCard'
import { Button } from './Button'
import { Benefits } from './data/Benefits'

export function Section() {
  return (
    <section className="mx-40 space-y-20">
      <div className="flex items-end justify-between">
        <div className="w-[73rem] space-y-3">
          <h3 className="text-5xl font-semibold text-skillbridge-grey-15">
            Benefits
          </h3>
          <p className="text-lg leading-6 text-skillbridge-grey-35">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Button href="#" variant="white">
          View All
        </Button>
      </div>
      <div className="grid-cols-threeColumnWrapper grid gap-5">
        {Benefits.map((benefit) => (
          <BenefitsCard
            key={benefit.id}
            id={benefit.id}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  )
}
