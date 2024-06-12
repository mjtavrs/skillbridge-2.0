import { ReactNode } from 'react'

export interface Section {
  id: string
  title: string
  description: string
  url: string
  columnsVariant?: 'threeColumns' | 'twoColumns'
  children: ReactNode
}
