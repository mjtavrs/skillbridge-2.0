interface TagProps {
  title: string | string[]
}

export function Tag({ title }: TagProps) {
  return (
    <span className="inline-block rounded-lg border border-skillbridge-white-95 bg-white px-4 py-2 text-lg text-skillbridge-grey-30">
      {title}
    </span>
  )
}
