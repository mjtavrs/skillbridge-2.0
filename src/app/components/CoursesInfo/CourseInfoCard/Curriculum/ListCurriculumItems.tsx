import { Curriculumitem } from './CurriculumItem'

interface ListCurriculumItemsProps {
  list: string[]
}

export function ListCurriculumItems({ list }: ListCurriculumItemsProps) {
  return (
    <>
      {list.map((item, index) => (
        <Curriculumitem key={index} itemNumber={index + 1} itemTitle={item} />
      ))}
    </>
  )
}
