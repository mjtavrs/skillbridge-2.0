interface HeaderProps {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-5xl font-medium text-skillbridge-grey-20 xl:text-3xl">
        {title}
      </h2>
      <p className="text-lg text-skillbridge-grey-35 xl:text-base">
        {description}
      </p>
    </div>
  )
}
