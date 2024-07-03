interface CurriculumItemProps {
  itemNumber: number
  itemTitle: string
}

export function CurriculumItem({ itemNumber, itemTitle }: CurriculumItemProps) {
  return (
    <article className="space-y-5 text-left odd:px-12 even:border-x even:border-skillbridge-white-95 even:px-12 xl:space-y-4 xl:odd:px-10 xl:even:px-10">
      <p className="text-5xl font-extrabold text-skillbridge-grey-15 xl:text-4xl">
        0{itemNumber}
      </p>
      <p className="text-lg font-medium text-skillbridge-grey-20 xl:text-base">
        {itemTitle}
      </p>
    </article>
  )
}
