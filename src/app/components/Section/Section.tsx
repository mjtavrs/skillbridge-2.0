import { SectionHeader } from './SectionHeader'
import { SectionColumns } from './SectionColumns'
import { SectionProps } from '@/app/interfaces/SectionProps'

export function Section({
  id,
  title,
  description,
  url,
  columnsVariant,
  children,
}: SectionProps) {
  return (
    <section id={id} className="mx-40 space-y-20 xl:mx-14 xl:space-y-14">
      <SectionHeader title={title} description={description} url={url} />
      <SectionColumns variant={columnsVariant}>{children}</SectionColumns>
    </section>
  )
}
