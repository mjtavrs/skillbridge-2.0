import { Button } from '@/app/Button'

interface SectionHeaderProps {
  title: string
  description: string
  url: string
}

export function SectionHeader({ title, description, url }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between">
      <div className="w-[73rem] space-y-3 xl:w-[58.3125rem]">
        <h3 className="text-5xl font-semibold text-skillbridge-grey-15 xl:text-4xl">
          {title}
        </h3>
        <p className="text-lg leading-6 text-skillbridge-grey-35 xl:text-base">
          {description}
        </p>
      </div>
      <Button href={url} variant="white">
        View All
      </Button>
    </div>
  )
}
