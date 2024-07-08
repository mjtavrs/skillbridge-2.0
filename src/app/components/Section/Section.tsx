import { SectionColumns } from './SectionColumns'
import { SectionProps } from '@/app/interfaces/SectionProps'
import * as Component from './index'

export function Section({
  id,
  title,
  description,
  url,
  columnsVariant,
  children,
}: SectionProps) {
  return (
    <Component.Root id={id} className="mx-40 space-y-20 xl:mx-14 xl:space-y-14">
      <Component.HeaderContainer>
        <Component.HeaderWrapper
          title={title}
          description={description}
          url={url}
        />
      </Component.HeaderContainer>
      <SectionColumns variant={columnsVariant}>{children}</SectionColumns>
    </Component.Root>
  )
}
