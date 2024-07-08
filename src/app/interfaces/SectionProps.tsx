import { ReactNode } from 'react'

export interface SectionProps {
  id: string
  title: string
  description: string
  url: string
  columnsVariant?: 'threeColumns' | 'twoColumns'
  children: ReactNode
}
