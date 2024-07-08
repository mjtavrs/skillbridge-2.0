import { Sections } from '@/app/data/Sections'
import { Section } from './Section'

export function SectionsList() {
  return (
    <div className="space-y-24">
      {Sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          url={section.url}
          columnsVariant={section.columnsVariant}
        >
          {section.children}
        </Section>
      ))}
    </div>
  )
}
