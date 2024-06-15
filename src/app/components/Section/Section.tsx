import { ReactNode } from 'react'
import { SectionHeader } from './SectionHeader'
import { CardsWrapper } from './CardsWrapper'

interface SectionProps {
  title: string
  description: string
  url: string
  columnsVariant: 'twoColumns' | 'threeColumns' | undefined
  children: ReactNode
}

export function Section({
  title,
  description,
  url,
  columnsVariant,
  children,
}: SectionProps) {
  return (
    <section className="mx-40 space-y-20">
      <SectionHeader title={title} description={description} url={url} />
      <CardsWrapper variant={columnsVariant}>{children}</CardsWrapper>
    </section>
  )
}
