import { ListTags } from '../../Tags/ListTags'

interface MetaInfoProps {
  tags: string[]
  author: string
}

export function MetaInfo({ tags, author }: MetaInfoProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-x-3">
        <ListTags tags={tags} />
      </div>
      <span className="text-xl font-medium text-skillbridge-grey-15 xl:text-base">
        By {author}
      </span>
    </div>
  )
}
