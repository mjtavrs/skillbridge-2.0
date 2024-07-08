import * as Card from './index'

interface BenefitsCardProps {
  id: string
  title: string
  description: string
}

export function BenefitsCard({ id, title, description }: BenefitsCardProps) {
  return (
    <Card.Root>
      <Card.HeaderWrapper id={id} title={title} description={description} />
      <Card.IconWrapper />
    </Card.Root>
  )
}
