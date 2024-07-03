interface HeaderProps {
  formTitle: string
  formDescription: string
}

export function Header({ formTitle, formDescription }: HeaderProps) {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-5xl font-semibold text-skillbridge-grey-15 xl:text-4xl">
        {formTitle}
      </h1>
      <p className="text-lg text-skillbridge-grey-30 xl:text-base">
        {formDescription}
      </p>
    </div>
  )
}
