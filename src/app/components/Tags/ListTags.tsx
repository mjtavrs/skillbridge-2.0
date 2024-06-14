import { Tag } from './Tag'

interface ListTagsProps {
  tags: string[]
}

export function ListTags({ tags }: ListTagsProps) {
  return (
    <>
      {tags.map((tag) => (
        <Tag key="" title={tag} />
      ))}
    </>
  )
}
