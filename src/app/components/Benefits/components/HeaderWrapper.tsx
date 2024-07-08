interface HeaderWrapperProps {
  id: string
  title: string
  description: string
}

export function HeaderWrapper({ id, title, description }: HeaderWrapperProps) {
  return (
    <>
      <p className="text-right text-7xl font-bold text-skillbridge-grey-15 xl:text-6xl">
        {id}
      </p>
      <div className="space-y-3">
        <p className="text-2xl font-semibold text-skillbridge-grey-20 xl:text-xl">
          {title}
        </p>
        <p className="text-lg text-skillbridge-grey-30 xl:text-base">
          {description}
        </p>
      </div>
    </>
  )
}
