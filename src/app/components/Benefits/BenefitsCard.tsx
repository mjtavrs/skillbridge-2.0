import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

interface BenefitsCardProps {
  id: string
  title: string
  description: string
}

export function BenefitsCard({ id, title, description }: BenefitsCardProps) {
  return (
    <article className="space-y-12 rounded-xl bg-white p-12">
      <p className="text-right text-7xl font-bold text-skillbridge-grey-15">
        {id}
      </p>
      <div className="space-y-3">
        <p className="text-2xl font-semibold text-skillbridge-grey-20">
          {title}
        </p>
        <p className="text-lg text-skillbridge-grey-30">{description}</p>
      </div>
      <div className="flex justify-end">
        <span className="cursor-not-allowed rounded-lg border border-skillbridge-white-95 bg-skillbridge-white-99 p-5 text-skillbridge-orange-50">
          <ArrowUpRight size={34} weight="bold" />
        </span>
      </div>
    </article>
  )
}
