import { CurriculumItem } from './CurriculumItem'

interface ListCurriculumItemsProps {
  list: string[]
}

export function ListCurriculumItems({ list }: ListCurriculumItemsProps) {
  return (
    <>
      {list.map((item, index) => (
        <CurriculumItem key={index} itemNumber={index + 1} itemTitle={item} />
      ))}
    </>
  )
}
