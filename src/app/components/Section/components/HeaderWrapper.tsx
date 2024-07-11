import { Button } from '@/app/Button'

interface HeaderWrapperProps {
  title: string
  description: string
  url: string
}

export function HeaderWrapper({ title, description, url }: HeaderWrapperProps) {
  return (
    <>
      <div className="w-[73rem] space-y-3 sm:w-[100%] sm:space-y-1 xl:w-[58.3125rem]">
        <h3 className="text-5xl font-semibold text-skillbridge-grey-15 sm:text-[1.75rem] xl:text-4xl">
          {title}
        </h3>
        <p className="text-lg leading-6 text-skillbridge-grey-35 sm:text-sm xl:text-base">
          {description}
        </p>
      </div>
      <Button href={url} variant="white">
        View All
      </Button>
    </>
  )
}
