interface HeaderProps {
  formTitle: string
  formDescription: string
}

export function Header({ formTitle, formDescription }: HeaderProps) {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-4xl font-semibold text-skillbridge-grey-15">
        {formTitle}
      </h1>
      <p className="text-skillbridge-grey-30">{formDescription}</p>
    </div>
  )
}
