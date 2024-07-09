import { AboutUsList } from '@/app/interfaces/AboutUsList'
import { Card } from './components/Card'

interface ListProps {
  list: AboutUsList[]
}

export function ListCards({ list }: ListProps) {
  return (
    <>
      {list.map((card) => (
        <Card
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </>
  )
}
