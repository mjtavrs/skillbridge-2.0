interface InputProps {
  type: string
  id: string
  placeholder: string
}

export function Input({ type, id, placeholder }: InputProps) {
  return (
    <input
      className="rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 p-6 text-skillbridge-grey-40 placeholder:text-skillbridge-grey-40 xl:p-5"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  )
}
