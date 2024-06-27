import { ExampleClassesList } from '@/app/data/ExampleClassesList'
import { ListLessons } from './Lessons/ListLessons'

// the articles must be listed using a map so the number os the ExampleClassesList can be changed dynamically

export function ClassItemCardContainer() {
  return (
    <article className="space-y-12 rounded-xl bg-white p-12">
      <p className="text-right text-7xl font-bold text-skillbridge-grey-15">
        01
      </p>
      <p className="text-2xl font-semibold text-skillbridge-grey-20">
        Introduction to UI/UX Design
      </p>
      <ListLessons lessons={ExampleClassesList[0].lessons} />
    </article>
  )
}
